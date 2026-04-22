import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLocale, type Locale } from "../context/locale-context";

type SeoCopy = {
  title: string;
  description: string;
};

const siteName = "Berlgrün GmbH";

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

function localizedUrl(origin: string, pathname: string, locale: Locale) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return locale === "de" ? `${origin}${normalizedPath}` : `${origin}${normalizedPath}?lang=${locale}`;
}

export function SeoHead() {
  const { pathname } = useLocation();
  const { locale } = useLocale();
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const routeSeo = routeSeoByLocale[locale][pathname] ?? defaultSeoByLocale[locale];
  const canonical = localizedUrl(origin, pathname, locale);

  return (
    <Helmet>
      <title>{routeSeo.title}</title>
      <meta name="description" content={routeSeo.description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={routeSeo.title} />
      <meta property="og:description" content={routeSeo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale === "de" ? "de_DE" : locale === "tr" ? "tr_TR" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={routeSeo.title} />
      <meta name="twitter:description" content={routeSeo.description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="de" href={localizedUrl(origin, pathname, "de")} />
      <link rel="alternate" hrefLang="tr" href={localizedUrl(origin, pathname, "tr")} />
      <link rel="alternate" hrefLang="en" href={localizedUrl(origin, pathname, "en")} />
      <link rel="alternate" hrefLang="x-default" href={localizedUrl(origin, pathname, "de")} />
    </Helmet>
  );
}
