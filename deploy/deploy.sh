#!/usr/bin/env bash
# muratproje redeploy (frontend-only)
# Akış: temizlik -> env -> build -> nginx -> ssl

set -e

SCRIPT_PATH="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")"
sed -i 's/\r$//' "$SCRIPT_PATH" 2>/dev/null || true

NAME="muratproje"
DOMAIN="${DOMAIN:-belgrun.omurgenc.dev}"
APP_DIR="${APP_DIR:-$(cd "$(dirname "$0")/.." && pwd)}"
DEPLOY_ENV="$APP_DIR/deploy/.env.production"
ROOT_ENV="$APP_DIR/.env.production"
EXAMPLE_ENV="$APP_DIR/deploy/.env.production.example"
FRONTEND_DIR="$APP_DIR"

echo "=== $NAME redeploy ==="
echo "Domain: $DOMAIN"
echo "App dir: $APP_DIR"
echo ""

# --- 1) Kalinti temizligi (her deploy sifirdan kurulum) ---
echo "Eski build ve kalintilar temizleniyor..."
rm -rf "$FRONTEND_DIR/dist"
rm -rf "$FRONTEND_DIR/node_modules"
rm -rf "$FRONTEND_DIR/node_modules/.cache" 2>/dev/null || true
npm cache clean --force >/dev/null 2>&1 || true
echo "  dist, node_modules ve npm cache temizlendi."
echo ""

# --- 2) Production env (deploy/.env.production -> .env.production) ---
echo "Production env guncelleniyor..."
if [ ! -f "$DEPLOY_ENV" ]; then
  echo "  deploy/.env.production yok - ornekten olusturuluyor."
  cp "$EXAMPLE_ENV" "$DEPLOY_ENV"
  sed -i "s|belgrun.omurgenc.dev|${DOMAIN}|g" "$DEPLOY_ENV"
fi

if [ -f "$DEPLOY_ENV" ] && [ -s "$DEPLOY_ENV" ]; then
  cp "$DEPLOY_ENV" "$ROOT_ENV"
  sed -i 's/\r$//' "$DEPLOY_ENV" "$ROOT_ENV" 2>/dev/null || true
  echo "  .env.production <- deploy/.env.production"
else
  echo "HATA: deploy/.env.production bulunamadi veya bos."
  exit 1
fi
echo ""

# --- 3) Build ---
echo "Bagimliliklar ve build..."
cd "$FRONTEND_DIR"
npm ci --include=dev
npm run build
if [ ! -f "$FRONTEND_DIR/dist/index.html" ]; then
  echo "HATA: Build index.html uretmedi."
  exit 1
fi
echo "  Frontend build tamam (dist/index.html mevcut)."
echo ""

# --- 4) Nginx ---
echo "Nginx config guncelleniyor..."
if [ -d /etc/nginx/sites-available ] && [ -f "$APP_DIR/deploy/nginx.conf" ]; then
  # Her deployda once eski site tanimini kaldirip yeniden yazar.
  sudo rm -f /etc/nginx/sites-enabled/muratproje 2>/dev/null || true
  sudo rm -f /etc/nginx/sites-available/muratproje 2>/dev/null || true
  NGINX_TMP=$(mktemp)
  sed -e "s|belgrun.omurgenc.dev|${DOMAIN}|g" \
      -e "s|/var/www/muratproje|${APP_DIR}|g" \
      "$APP_DIR/deploy/nginx.conf" > "$NGINX_TMP"
  sudo cp "$NGINX_TMP" /etc/nginx/sites-available/muratproje
  rm -f "$NGINX_TMP"
  [ -d /etc/nginx/sites-enabled ] && sudo ln -sf /etc/nginx/sites-available/muratproje /etc/nginx/sites-enabled/
  if sudo nginx -t 2>/dev/null; then
    sudo systemctl reload nginx
    echo "  Nginx guncellendi ve reload edildi."
  else
    echo "  HATA: nginx -t basarisiz."
    exit 1
  fi
else
  echo "  /etc/nginx/sites-available veya deploy/nginx.conf yok, Nginx atlandi."
fi
echo ""

# --- 5) SSL (certbot) ---
if command -v certbot &>/dev/null; then
  echo "SSL sertifikasi kontrol ediliyor..."
  if sudo certbot certificates 2>/dev/null | grep -qF "$DOMAIN"; then
    sudo certbot install --cert-name "$DOMAIN" --nginx --non-interactive 2>/dev/null || true
  else
    sudo certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos --register-unsafely-without-email 2>/dev/null || true
  fi
  sudo nginx -t && sudo systemctl reload nginx 2>/dev/null || true
  echo "  SSL guncellendi."
  echo ""
fi

echo "=== Deploy tamamlandi ==="
echo "  Frontend: $FRONTEND_DIR/dist"
echo "  Site:     https://$DOMAIN"
echo ""
echo "=== Hizli test ==="
echo "  curl -I https://$DOMAIN"
echo ""
