# Sunucu kurulumu (Linux VPS + Nginx)

Bu proje frontend-only oldugu icin deploy akisi `ticarimodel` ile ayni siradadir:

1. temizlik
2. `deploy/.env.production` -> `.env.production`
3. `npm ci` + `npm run build`
4. Nginx guncelleme
5. SSL (certbot)

## 1) Sunucu paketleri

```bash
sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx git
```

Node.js 20 LTS kurulu olmalidir.

## 2) Kod ve deploy

```bash
sudo mkdir -p /var/www && sudo chown "$USER":"$USER" /var/www
cd /var/www
git clone <REPO_URL> muratproje
cd muratproje
chmod +x deploy/deploy.sh
```

## 3) Domain ile deploy

`deploy/.env.production` yoksa script otomatik olarak `deploy/.env.production.example` dosyasindan olusturur.

```bash
DOMAIN=site.com ./deploy/deploy.sh
```

Varsayilan domain: `belgrun.omurgenc.dev`

## 4) Guncelleme

```bash
cd /var/www/muratproje
git pull
./deploy/deploy.sh
```

## 5) Kontrol

```bash
curl -I https://site.com
```
