import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import type { Locale } from "../context/locale";
import { useLocale } from "../context/use-locale";

type SeoCopy = {
  title: string;
  description: string;
  robots?: string;
};

const siteName = "Berlgrün GmbH";
const OG_IMAGE_PATH = "/images/hero/hero-0.png";

const CORPORATE_SECTIONS = new Set(["about", "history", "management", "careers", "quality-policy"]);
const SERVICE_SLUGS = new Set([
  "tiefbau-erschliessung",
  "hochbau-innenausbau",
  "sanierung-modernisierung",
  "garten-landschaftsbau",
  "winterdienst",
  "pflaster-aussenarbeiten",
]);

const defaultSeoByLocale: Record<Locale, SeoCopy> = {
  de: {
    title: "Berlgrün GmbH - Bau, Sanierung und Außenanlagen in Berlin",
    description: "Berlgrün GmbH bietet Bau, Sanierung, Garten- und Außenarbeiten in Berlin. Zuverlässig, termingerecht und qualitätsorientiert.",
  },
  tr: {
    title: "Berlgrün GmbH - Berlin'de inşaat, renovasyon ve dış mekan çözümleri",
    description: "Berlgrün GmbH Berlin'de inşaat, renovasyon, peyzaj ve dış mekan uygulamaları sunar. Güvenilir ve kaliteli hizmet.",
  },
  en: {
    title: "Berlgrün GmbH - Construction, Renovation and Outdoor Works in Berlin",
    description: "Berlgrün GmbH delivers construction, renovation, landscaping and outdoor works in Berlin with reliable quality.",
  },
};

const routeSeoByLocale: Record<Locale, Record<string, SeoCopy>> = {
  de: {
    "/": {
      title: "Berlgrün GmbH - Bau- und Sanierungsleistungen in Berlin",
      description: "Bau, Sanierung, Winterdienst sowie Garten- und Außenanlagen aus einer Hand in Berlin und Umgebung.",
    },
    "/leistung": {
      title: "Leistung - Berlgrün GmbH",
      description: "Unser Leistungsspektrum umfasst Tiefbau, Hochbau, Sanierung, Winterdienst und Außenarbeiten.",
    },
    "/kontakt": {
      title: "Kontakt - Berlgrün GmbH",
      description: "Kontaktieren Sie Berlgrün GmbH für Ihr Bau-, Sanierungs- oder Außenanlagenprojekt in Berlin.",
    },
    "/impressum": {
      title: "Impressum - Berlgrün GmbH",
      description: "Impressum und Anbieterkennzeichnung der Berlgrün GmbH.",
    },
    "/datenschutz": {
      title: "Datenschutz - Berlgrün GmbH",
      description: "Datenschutzhinweise der Berlgrün GmbH.",
    },
    "/kurumsal/about": {
      title: "Über uns - Berlgrün GmbH",
      description: "Lernen Sie Berlgrün GmbH kennen: Werte, Arbeitsweise und Qualitätsanspruch.",
    },
    "/kurumsal/history": {
      title: "Geschichte - Berlgrün GmbH",
      description: "Unsere Entwicklung, Meilensteine und gewachsene Projekterfahrung im Überblick.",
    },
    "/kurumsal/management": {
      title: "Management - Berlgrün GmbH",
      description: "Managementprinzipien, Prozesssteuerung und verantwortungsvolle Projektführung.",
    },
    "/kurumsal/careers": {
      title: "Karriere - Berlgrün GmbH",
      description: "Karrierechancen und Arbeitskultur bei Berlgrün GmbH.",
    },
    "/kurumsal/quality-policy": {
      title: "Qualitätspolitik - Berlgrün GmbH",
      description: "Unsere Qualitätsgrundsätze und der strukturierte Qualitätssicherungsprozess.",
    },
  },
  tr: {
    "/": {
      title: "Berlgrün GmbH - Berlin'de inşaat ve renovasyon hizmetleri",
      description: "İnşaat, renovasyon, kış hizmetleri ve dış mekan uygulamalarında Berlin'de tek noktadan profesyonel çözüm.",
    },
    "/leistung": {
      title: "Hizmetler - Berlgrün GmbH",
      description: "Altyapı, üstyapı, yenileme, kış hizmetleri ve dış mekan uygulamaları.",
    },
    "/kontakt": {
      title: "İletişim - Berlgrün GmbH",
      description: "Berlin'deki inşaat ve dış mekan projeleriniz için Berlgrün GmbH ile iletişime geçin.",
    },
    "/impressum": {
      title: "Künye - Berlgrün GmbH",
      description: "Berlgrün GmbH künye ve yasal bilgiler.",
    },
    "/datenschutz": {
      title: "Gizlilik Politikası - Berlgrün GmbH",
      description: "Berlgrün GmbH gizlilik politikası.",
    },
    "/kurumsal/about": {
      title: "Hakkımızda - Berlgrün GmbH",
      description: "Berlgrün GmbH'nin çalışma yaklaşımı, değerleri ve kalite odağı hakkında bilgi alın.",
    },
    "/kurumsal/history": {
      title: "Tarihçemiz - Berlgrün GmbH",
      description: "Kurumsal gelişimimiz, dönüm noktalarımız ve proje deneyimimiz.",
    },
    "/kurumsal/management": {
      title: "Yönetim - Berlgrün GmbH",
      description: "Yönetim yaklaşımımız, karar süreçlerimiz ve proje kontrol standartlarımız.",
    },
    "/kurumsal/careers": {
      title: "Kariyer - Berlgrün GmbH",
      description: "Berlgrün GmbH'de kariyer fırsatları ve ekip kültürü.",
    },
    "/kurumsal/quality-policy": {
      title: "Kalite Politikası - Berlgrün GmbH",
      description: "Kalite prensiplerimiz ve uygulama boyunca izlediğimiz kalite güvence adımları.",
    },
  },
  en: {
    "/": {
      title: "Berlgrün GmbH - Construction and Renovation Services in Berlin",
      description: "Integrated construction, renovation, winter service and outdoor works in Berlin.",
    },
    "/leistung": {
      title: "Services - Berlgrün GmbH",
      description: "Civil works, structural works, renovation, winter service and outdoor solutions.",
    },
    "/kontakt": {
      title: "Contact - Berlgrün GmbH",
      description: "Get in touch with Berlgrün GmbH for your construction and outdoor projects in Berlin.",
    },
    "/impressum": {
      title: "Imprint - Berlgrün GmbH",
      description: "Legal imprint and provider information for Berlgrün GmbH.",
    },
    "/datenschutz": {
      title: "Privacy Policy - Berlgrün GmbH",
      description: "Privacy policy of Berlgrün GmbH.",
    },
    "/kurumsal/about": {
      title: "About Us - Berlgrün GmbH",
      description: "Discover Berlgrün GmbH's values, expertise and project delivery approach.",
    },
    "/kurumsal/history": {
      title: "Our History - Berlgrün GmbH",
      description: "Our development path, milestones and long-term project experience.",
    },
    "/kurumsal/management": {
      title: "Management - Berlgrün GmbH",
      description: "Our management principles, governance model and project control process.",
    },
    "/kurumsal/careers": {
      title: "Careers - Berlgrün GmbH",
      description: "Join Berlgrün GmbH and explore career opportunities in our project teams.",
    },
    "/kurumsal/quality-policy": {
      title: "Quality Policy - Berlgrün GmbH",
      description: "Read our quality fundamentals and structured quality assurance process.",
    },
  },
};

const serviceSeoByLocale: Record<Locale, Record<string, SeoCopy>> = {
  de: {
    "tiefbau-erschliessung": {
      title: "Tiefbau & Erschließung - Berlgrün GmbH",
      description: "Tiefbau, Erdarbeiten und Grundstückserschließung in Berlin.",
    },
    "hochbau-innenausbau": {
      title: "Hochbau & Innenausbau - Berlgrün GmbH",
      description: "Hochbau und Innenausbau für Wohn- und Gewerbeprojekte.",
    },
    "sanierung-modernisierung": {
      title: "Sanierung & Modernisierung - Berlgrün GmbH",
      description: "Sanierung und energetische Modernisierung von Gebäuden.",
    },
    "garten-landschaftsbau": {
      title: "Garten- & Landschaftsbau - Berlgrün GmbH",
      description: "Garten- und Landschaftsbau für private und gewerbliche Außenanlagen.",
    },
    winterdienst: {
      title: "Winterdienst - Berlgrün GmbH",
      description: "Zuverlässiger Winterdienst für Wege, Zufahrten und Parkflächen.",
    },
    "pflaster-aussenarbeiten": {
      title: "Pflaster- & Außenarbeiten - Berlgrün GmbH",
      description: "Pflasterarbeiten und Außenanlagen mit langlebiger Ausführung.",
    },
  },
  tr: {
    "tiefbau-erschliessung": {
      title: "Altyapı & Hazırlık - Berlgrün GmbH",
      description: "Altyapı, kazı ve parsel hazırlık hizmetleri Berlin'de.",
    },
    "hochbau-innenausbau": {
      title: "Üstyapı & İç Mekan - Berlgrün GmbH",
      description: "Üstyapı ve iç mekan uygulamaları.",
    },
    "sanierung-modernisierung": {
      title: "Yenileme & Modernizasyon - Berlgrün GmbH",
      description: "Bina yenileme ve modernizasyon çözümleri.",
    },
    "garten-landschaftsbau": {
      title: "Bahçe & Peyzaj - Berlgrün GmbH",
      description: "Bahçe ve peyzaj uygulamaları.",
    },
    winterdienst: {
      title: "Kış Hizmetleri - Berlgrün GmbH",
      description: "Kar küreme ve buzlanma önleme hizmetleri.",
    },
    "pflaster-aussenarbeiten": {
      title: "Dış Mekan & Taş - Berlgrün GmbH",
      description: "Taş döşeme ve dış mekan uygulamaları.",
    },
  },
  en: {
    "tiefbau-erschliessung": {
      title: "Civil Works & Infrastructure - Berlgrün GmbH",
      description: "Groundworks and site development in Berlin.",
    },
    "hochbau-innenausbau": {
      title: "Structural Works & Fit-Out - Berlgrün GmbH",
      description: "Structural construction and interior fit-out services.",
    },
    "sanierung-modernisierung": {
      title: "Renovation & Modernization - Berlgrün GmbH",
      description: "Building renovation and energy upgrades.",
    },
    "garten-landschaftsbau": {
      title: "Garden & Landscaping - Berlgrün GmbH",
      description: "Garden design and landscaping projects.",
    },
    winterdienst: {
      title: "Winter Service - Berlgrün GmbH",
      description: "Snow clearing and gritting services.",
    },
    "pflaster-aussenarbeiten": {
      title: "Paving & Outdoor Works - Berlgrün GmbH",
      description: "Paving and durable outdoor surface solutions.",
    },
  },
};

const notFoundSeoByLocale: Record<Locale, SeoCopy> = {
  de: {
    title: "Seite nicht gefunden - Berlgrün GmbH",
    description: "Die angeforderte Seite wurde nicht gefunden.",
    robots: "noindex,nofollow",
  },
  tr: {
    title: "Sayfa bulunamadı - Berlgrün GmbH",
    description: "Aradığınız sayfa bulunamadı.",
    robots: "noindex,nofollow",
  },
  en: {
    title: "Page not found - Berlgrün GmbH",
    description: "The requested page could not be found.",
    robots: "noindex,nofollow",
  },
};

function localizedUrl(origin: string, pathname: string, locale: Locale) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return locale === "de" ? `${origin}${normalizedPath}` : `${origin}${normalizedPath}?lang=${locale}`;
}

function isKnownRoute(pathname: string) {
  if (["/", "/leistung", "/kontakt", "/impressum", "/datenschutz", "/ueber-uns"].includes(pathname)) {
    return true;
  }
  const corporate = pathname.match(/^\/kurumsal\/([^/]+)$/);
  if (corporate && CORPORATE_SECTIONS.has(corporate[1])) return true;
  const service = pathname.match(/^\/leistung\/([^/]+)$/);
  if (service && SERVICE_SLUGS.has(service[1])) return true;
  return false;
}

function resolveRouteSeo(pathname: string, locale: Locale): SeoCopy {
  const exact = routeSeoByLocale[locale][pathname];
  if (exact) return exact;

  const serviceMatch = pathname.match(/^\/leistung\/([^/]+)$/);
  if (serviceMatch) {
    return serviceSeoByLocale[locale][serviceMatch[1]] ?? defaultSeoByLocale[locale];
  }

  if (!isKnownRoute(pathname)) {
    return notFoundSeoByLocale[locale];
  }

  return defaultSeoByLocale[locale];
}

export function SeoHead() {
  const { pathname } = useLocation();
  const { locale } = useLocale();
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const routeSeo = resolveRouteSeo(pathname, locale);
  const canonical = localizedUrl(origin, pathname, locale);
  const ogImage = origin ? `${origin}${OG_IMAGE_PATH}` : OG_IMAGE_PATH;
  const robots = routeSeo.robots ?? "index,follow,max-image-preview:large";

  return (
    <Helmet>
      <title>{routeSeo.title}</title>
      <meta name="description" content={routeSeo.description} />
      <meta name="robots" content={robots} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={routeSeo.title} />
      <meta property="og:description" content={routeSeo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale === "de" ? "de_DE" : locale === "tr" ? "tr_TR" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={routeSeo.title} />
      <meta name="twitter:description" content={routeSeo.description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="de" href={localizedUrl(origin, pathname, "de")} />
      <link rel="alternate" hrefLang="tr" href={localizedUrl(origin, pathname, "tr")} />
      <link rel="alternate" hrefLang="en" href={localizedUrl(origin, pathname, "en")} />
      <link rel="alternate" hrefLang="x-default" href={localizedUrl(origin, pathname, "de")} />
    </Helmet>
  );
}
