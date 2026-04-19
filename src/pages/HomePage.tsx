import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { useLocale, type Locale } from "../context/locale-context";

const serviceCards = [
  { image: "/images/services/altyapi-ve-parsel.png", slug: "tiefbau-erschliessung" },
  { image: "/images/services/ustyapi-ve-insaat.png", slug: "hochbau-innenausbau" },
  { image: "/images/services/yenileme-ve-modernizasyon.png", slug: "sanierung-modernisierung" },
  { image: "/images/services/bahce-ve-peyzaj.png", slug: "garten-landschaftsbau" },
  { image: "/images/services/kis-hizmetleri.png", slug: "winterdienst" },
  { image: "/images/services/tas-doseme-ve-dis-mekan.png", slug: "pflaster-aussenarbeiten" },
];
const serviceSlugs = [
  "tiefbau-erschliessung",
  "hochbau-innenausbau",
  "sanierung-modernisierung",
  "garten-landschaftsbau",
  "winterdienst",
  "pflaster-aussenarbeiten",
] as const;

const serviceDetails = [
  {
    title: "1. Tiefbau & Erschließung",
    text: "Ein stabiles Fundament ist die Basis jedes Bauprojekts. Wir übernehmen alle Arbeiten im Bereich Tiefbau und Erschließung, um Ihr Bauvorhaben optimal vorzubereiten.",
    bullets: ["✔ Aushub- und Erdarbeiten", "✔ Kanal- und Entwässerungsbau", "✔ Fundament- und Bodenplattenarbeiten", "✔ Leitungsbau und Grundstückserschließung"],
  },
  {
    title: "2. Hochbau & Innenausbau",
    text: "Ob Wohnhaus, Gewerbegebäude oder Anbau - wir setzen Ihre Baupläne im Hochbau zuverlässig um und kümmern uns um den gesamten Innenausbau.",
    bullets: ["✔ Neubau und Rohbau von Wohn- und Gewerbeimmobilien", "✔ Maurer- und Betonarbeiten", "✔ Trockenbau für flexible Raumgestaltung", "✔ Innenausbau mit Bodenbelägen, Putz- und Malerarbeiten"],
  },
  {
    title: "3. Sanierung & Modernisierung",
    text: "Wir bringen alte Gebäude auf den neuesten Stand - sowohl optisch als auch energetisch. Von der Fassadensanierung bis zur Komplettmodernisierung stehen wir Ihnen zur Seite.",
    bullets: ["✔ Altbausanierung und Denkmalpflege", "✔ Wärmedämmung & energetische Sanierung", "✔ Austausch von Fenstern & Türen", "✔ Feuchtigkeitsschutz und Schimmelbeseitigung"],
  },
  {
    title: "4. Garten- & Landschaftsbau",
    text: "Eine ansprechende Außenanlage wertet jedes Gebäude auf. Wir gestalten Gärten, Einfahrten und Wege nach Ihren individuellen Wünschen.",
    bullets: ["✔ Pflaster- und Wegebau", "✔ Terrassenbau mit Holz, Naturstein oder Beton", "✔ Garten- und Landschaftsgestaltung", "✔ Regenwasser- und Entwässerungssysteme"],
  },
  {
    title: "5. Winterdienst",
    text: "Schnee- und Glättebeseitigung von Privat und Geschäftskunden.",
    bullets: ["✔ Fachgerechtes Räumen und Streuen von Gehwegen, Zufahrten und Parkflächen", "✔ Termingerechte, witterungsabhängige Einsatzplanung für schnelle Reaktionszeiten", "✔ Einhaltung aller Verkehrssicherungspflichten für maximale Rechtssicherheit"],
  },
  {
    title: "6. Pflaster- & Außenarbeiten",
    text: "Von Einfahrten bis hin zu kompletten Außenanlagen - wir bieten maßgeschneiderte Lösungen für funktionale und optisch ansprechende Außenbereiche.",
    bullets: ["✔ Pflasterarbeiten für Gehwege, Einfahrten & Parkplätze", "✔ Natursteinmauern und Gabionen", "✔ Carports, Zäune & Sichtschutz", "✔ Lichtkonzepte für Außenbereiche"],
  },
];

const copyByLocale: Record<
  Locale,
  {
    heroSlides: { title: string; subtitle: string; lines: string[]; buttonText: string; background: string }[];
    winterCards: { title: string; text: string }[];
    aboutTitle: string;
    aboutTagline: string;
    aboutText: string;
    performanceTitle: string;
    performanceText: string;
    whyTitle: string;
    whyLead: string;
    whyText: string;
    ctaTitle: string;
    ctaText: string;
    phone: string;
    email: string;
    serviceDetails: { title: string; text: string; bullets: string[] }[];
  }
> = {
  de: {
    heroSlides: [
      {
        title: "Starker Auftakt auf der Baustelle",
        subtitle: "Klare Abläufe mit dem richtigen Equipment.",
        lines: ["Mit passendem Geräteeinsatz, präziser Koordination", "und robusten Prozessen schaffen wir einen sicheren Start.", "So beginnt jedes Projekt strukturiert und verlässlich."],
        buttonText: "Leistung ansehen",
        background: "/images/hero/hero-1.png",
      },
      {
        title: "Aktive Umsetzung im Feld",
        subtitle: "Koordiniertes Arbeiten im laufenden Prozess.",
        lines: ["Wir setzen Bauabschnitte strukturiert und termingerecht um,", "mit eingespielten Teams und sauberer Abstimmung", "zwischen Technik, Personal und Zeitplan."],
        buttonText: "Kontakt aufnehmen",
        background: "/images/hero/hero-2.png",
      },
      {
        title: "Das sichtbare Ergebnis",
        subtitle: "Saubere Flächen. Präzise Linien. Dauerhafte Qualität.",
        lines: ["Nach der Ausführung zählt das Finish: funktional,", "ästhetisch und langfristig belastbar.", "Genau dort setzen wir unseren Qualitätsanspruch durch."],
        buttonText: "Projekte ansehen",
        background: "/images/hero/hero-3.png",
      },
      {
        title: "Premium in der Umsetzung",
        subtitle: "Berlgrün Qualität, klar und hochwertig.",
        lines: ["Unser Anspruch ist eine moderne, hochwertige", "und professionelle Ausführung in jedem Projekt.", "So steht Berlgrün sichtbar für Premium-Qualität."],
        buttonText: "Leistung ansehen",
        background: "/images/hero/hero-4.png",
      },
    ],
    winterCards: [
      { title: "✔ Zuverlässiger Räum- und Streudienst", text: "Wir sorgen für sichere Wege, Zufahrten und Flächen durch fachgerechtes Schneeräumen und Streuen gemäß den gesetzlichen Vorgaben." },
      { title: "✔ Schnelle Einsatzbereitschaft", text: "Dank klarer Einsatzpläne und kontinuierlicher Wetterüberwachung reagieren wir frühzeitig und zuverlässig - auch bei starkem Schneefall oder Glätte." },
      { title: "✔ Rechtssicherheit & Dokumentation", text: "Unser Winterdienst erfüllt alle Verkehrssicherungspflichten und beinhaltet eine lückenlose Einsatzdokumentation zur rechtlichen Absicherung unserer Kunden." },
    ],
    aboutTitle: "Über uns",
    aboutTagline: "Berlgrün GmbH - Stark im Bau, sorgfältig in der Pflege.",
    aboutText: "Als renommierter Dienstleister sind wir seit vielen Jahren in Berlin und Umgebung tätig. Unser erfahrenes Team aus qualifizierten Fachkräften verfügt über fundiertes handwerkliches Know-how sowie umfassende Praxiserfahrung. Wir stehen für qualitativ hochwertige Bau-, Renovierungs- und Pflegearbeiten, die wir zuverlässig, termingerecht und nach anerkannten technischen Standards ausführen. Dabei legen wir besonderen Wert auf sorgfältige Planung, transparente Kommunikation und nachhaltige Ergebnisse.",
    performanceTitle: "Leistung",
    performanceText: "Die Berlgrün GmbH bietet ein breites Leistungsspektrum im Bereich Bau- und Sanierungsarbeiten. Von Neubau über Modernisierung bis hin zur Sanierung setzen wir Projekte fachgerecht, präzise und zuverlässig um.",
    whyTitle: "Warum die Berlgrün GmbH?",
    whyLead:
      "Als Berliner Bau- und Gartenunternehmen setzen wir auf nachhaltige Qualität, klare Abläufe und transparente Zusammenarbeit.",
    whyText: "✔ Erfahrung & Fachkompetenz\nDank langjähriger Erfahrung in den Bereichen Bau, Sanierung und Gartenbau stehen wir für nachhaltige Qualität, fundiertes Fachwissen und solides Handwerk.\n\n✔ Zuverlässigkeit & Präzision\nWir arbeiten mit hochwertigen Materialien und größter Sorgfalt, um präzise, langlebige und überzeugende Ergebnisse zu erzielen.\n\n✔ Individuelle Beratung & Planung\nJedes Bauvorhaben stellt individuelle Anforderungen. Daher entwickeln wir maßgeschneiderte Konzepte, die optimal auf Ihre Wünsche und Rahmenbedingungen abgestimmt sind.\n\n✔ Termintreue & Effizienz\nVon der Planung bis zur Umsetzung gewährleisten wir eine strukturierte, pünktliche und wirtschaftliche Projektabwicklung.",
    ctaTitle: "📞 Sie planen ein Bauprojekt?",
    ctaText: "Lassen Sie sich von unseren Fachkräften kompetent beraten. Gerne erstellen wir Ihnen ein unverbindliches Angebot, individuell auf Ihr Vorhaben zugeschnitten.",
    phone: "📍 Telefon: +49 30 992 656 90",
    email: "📧 E-Mail: info@berlgruen.de",
    serviceDetails,
  },
  tr: {
    heroSlides: [
      {
        title: "Sahada Güçlü Başlangıç",
        subtitle: "İşe güven veren güçlü başlangıç.",
        lines: ["Doğru ekipman kullanımı, planlı saha yönetimi", "ve kontrollü uygulama ile projelere sağlam bir başlangıç yapıyoruz.", "İlk adımda güven, sonraki adımlarda kalite."],
        buttonText: "Hizmetleri Gör",
        background: "/images/hero/hero-1.png",
      },
      {
        title: "Aktif Çalışma Süreci",
        subtitle: "Sahada koordineli ve canlı uygulama.",
        lines: ["Kazıdan yerleştirmeye kadar tüm operasyonları", "ekip uyumu ve doğru zamanlama ile yönetiyoruz.", "Süreç boyunca hız ve kontrol birlikte ilerler."],
        buttonText: "İletişime Geç",
        background: "/images/hero/hero-2.png",
      },
      {
        title: "Bitmiş İş Kalitesi",
        subtitle: "Düzenli, temiz ve güven veren sonuç.",
        lines: ["Uygulama tamamlandığında ortaya çıkan görüntü", "hem estetik hem teknik olarak güçlü olmalı.", "Bizim için kalite, sonuçta net görünür."],
        buttonText: "Projeleri İncele",
        background: "/images/hero/hero-3.png",
      },
      {
        title: "Sistemli Proje Yönetimi",
        subtitle: "Berlgrün kalitesiyle net ve güçlü duruş.",
        lines: ["Her projede modern, düzenli ve yüksek standartlı", "uygulama anlayışını merkeze alıyoruz.", "Berlgrün adı kaliteyle anılsın diye çalışıyoruz."],
        buttonText: "Hizmetleri Gör",
        background: "/images/hero/hero-4.png",
      },
    ],
    winterCards: [
      { title: "✔ Güvenilir kar küreme ve tuzlama", text: "Yasal gerekliliklere uygun kar temizliği ve tuzlama ile yolları ve girişleri güvenli hale getiriyoruz." },
      { title: "✔ Hızlı müdahale", text: "Net operasyon planları ve sürekli hava takibi sayesinde yoğun kar ve buzlanmada hızlı aksiyon alıyoruz." },
      { title: "✔ Yasal güvence ve dokümantasyon", text: "Hizmetimiz tüm trafik güvenliği yükümlülüklerini yerine getirir ve eksiksiz operasyon kayıtları sunar." },
    ],
    aboutTitle: "Hakkımızda",
    aboutTagline: "Berlgrün GmbH - İnşaatta güçlü, bakımda özenli.",
    aboutText: "Uzun yıllardır Berlin ve çevresinde hizmet veren köklü bir firmayız. Nitelikli uzmanlardan oluşan ekibimiz, güçlü saha deneyimi ve teknik bilgiyle yüksek kaliteli inşaat, renovasyon ve bakım hizmetleri sunar. İşlerimizi zamanında, güvenilir ve standartlara uygun şekilde tamamlarız; planlama, şeffaf iletişim ve sürdürülebilir sonuçlara öncelik veririz.",
    performanceTitle: "Hizmetler",
    performanceText: "Berlgrün GmbH, inşaat ve yenileme alanında geniş bir hizmet yelpazesi sunar. Yeni yapıdan modernizasyona kadar projeleri hassas, güvenilir ve zamanında tamamlarız.",
    whyTitle: "Neden Berlgrün GmbH?",
    whyLead:
      "Berlin ve çevresinde inşaat, yenileme ve peyzajda güvenilir çözüm ortağıyız; kalite, zaman ve iletişimi önceliklendiriyoruz.",
    whyText: "✔ Deneyim ve uzmanlık\nİnşaat, renovasyon ve peyzaj alanındaki uzun yıllara dayanan deneyimimizle sürdürülebilir kalite sunarız.\n\n✔ Güvenilirlik ve hassasiyet\nYüksek kaliteli malzeme ve titiz işçilikle kalıcı sonuçlar elde ederiz.\n\n✔ Kişiye özel planlama\nHer proje farklıdır; ihtiyaçlarınıza uygun özel çözümler geliştiririz.\n\n✔ Zamanında ve verimli teslim\nPlanlamadan uygulamaya kadar süreçleri düzenli, ekonomik ve zamanında yürütürüz.",
    ctaTitle: "📞 Bir proje mi planlıyorsunuz?",
    ctaText: "Uzman ekibimizden danışmanlık alın. Projenize özel, ücretsiz ve bağlayıcı olmayan bir teklif hazırlayalım.",
    phone: "📍 Telefon: +49 30 992 656 90",
    email: "📧 E-Posta: info@berlgruen.de",
    serviceDetails: [
      {
        title: "1. Hafriyat & Altyapı",
        text: "Sağlam bir temel her inşaat projesinin başlangıcıdır. Projenizi en iyi şekilde hazırlamak için hafriyat ve parsel altyapısındaki tüm işleri üstleniyoruz.",
        bullets: [
          "✔ Kazı ve hafriyat işleri",
          "✔ Kanalizasyon ve drenaj yapımı",
          "✔ Temel ve beton döşeme işleri",
          "✔ Hat yapımı ve parsel altyapısı",
        ],
      },
      {
        title: "2. Üstyapı & İç Mekan Uygulamaları",
        text: "Konut, ticari yapı veya ilave bir bölüm olsun, üstyapı planlarınızı güvenilir şekilde hayata geçiriyor ve tüm iç mekan uygulamalarını üstleniyoruz.",
        bullets: [
          "✔ Konut ve ticari yapılarda yeni yapı ve kabuk imalatı",
          "✔ Duvar ve betonarme işleri",
          "✔ Esnek mekân planı için alçıpan uygulamaları",
          "✔ Zemin kaplaması, sıva ve boya ile iç mekan tadilatı",
        ],
      },
      {
        title: "3. Yenileme & Modernizasyon",
        text: "Eski binaları hem görünüm hem enerji verimliliği açısından güncelliyoruz. Cephe yenilemeden kapsamlı modernizasyona kadar yanınızdayız.",
        bullets: [
          "✔ İkinci el yapı yenilemesi ve koruma-onarım",
          "✔ Isı yalıtımı ve enerji verimli yenileme",
          "✔ Pencere ve kapı değişimi",
          "✔ Rutubet önleme ve küf giderme",
        ],
      },
      {
        title: "4. Bahçe & Peyzaj",
        text: "Çekici bir dış mekân her yapıyı değerlendirir. Bahçeler, giriş yolları ve yürüyüş yollarını isteğinize göre tasarlıyoruz.",
        bullets: [
          "✔ Parke ve yol yapımı",
          "✔ Ahşap, doğal taş veya beton teras yapımı",
          "✔ Bahçe ve peyzaj düzenlemesi",
          "✔ Yağmursuyu ve drenaj sistemleri",
        ],
      },
      {
        title: "5. Kış Hizmetleri",
        text: "Özel ve kurumsal müşteriler için kar ve buz temizliği.",
        bullets: [
          "✔ Yaya yolları, giriş ve otopark alanlarında profesyonel küreme ve tuzlama",
          "✔ Hızlı müdahale için hava koşullarına bağlı operasyon planlaması",
          "✔ Yasal trafik güvenliği yükümlülüklerinin tam yerine getirilmesi",
        ],
      },
      {
        title: "6. Dış Mekân & Kilit Taş Uygulamaları",
        text: "Giriş yolundan komple dış mekân düzenlemesine kadar işlevsel ve estetik dış alanlar için özel çözümler sunuyoruz.",
        bullets: [
          "✔ Yaya yolları, giriş ve park alanları için parke taşı işleri",
          "✔ Doğal taş duvarlar ve gabion uygulamaları",
          "✔ Carport, çit ve görüş bariyeri",
          "✔ Dış mekân aydınlatma konseptleri",
        ],
      },
    ],
  },
  en: {
    heroSlides: [
      {
        title: "Strong Start on Site",
        subtitle: "A strong first impression on site.",
        lines: ["Using the right equipment with controlled execution", "and robust workflows creates a reliable project start.", "Strong beginnings set the tone for quality delivery."],
        buttonText: "View Services",
        background: "/images/hero/hero-1.png",
      },
      {
        title: "Process in Action",
        subtitle: "Real work, coordinated delivery.",
        lines: ["From excavation to placement, our teams execute", "with clear coordination and active site control.", "Progress stays fast, visible and measurable."],
        buttonText: "Get in Touch",
        background: "/images/hero/hero-2.png",
      },
      {
        title: "Finished Result Quality",
        subtitle: "Clean lines, durable outcomes, trusted delivery.",
        lines: ["The final look reflects the full execution quality.", "We deliver results that are visually clean,", "technically solid and built to last."],
        buttonText: "See Projects",
        background: "/images/hero/hero-3.png",
      },
      {
        title: "Project Delivery with Structure",
        subtitle: "Berlgrün quality with a clear premium standard.",
        lines: ["Our focus is modern, high-standard execution", "that reflects a premium construction identity.", "Berlgrün stands for quality in every detail."],
        buttonText: "View Services",
        background: "/images/hero/hero-4.png",
      },
    ],
    winterCards: [
      { title: "✔ Reliable snow clearing & gritting", text: "We secure roads, driveways and open spaces through professional snow removal and gritting in line with legal obligations." },
      { title: "✔ Fast response readiness", text: "With clear deployment plans and continuous weather monitoring, we respond early and reliably even during heavy snowfall." },
      { title: "✔ Legal compliance & documentation", text: "Our winter service meets all traffic safety obligations and includes complete operational documentation." },
    ],
    aboutTitle: "About Us",
    aboutTagline: "Berlgrün GmbH - Strong in construction, meticulous in maintenance.",
    aboutText: "As an established service provider, we have been active in Berlin for many years. Our experienced team combines strong technical know-how with practical field expertise. We deliver high-quality construction, renovation and maintenance works reliably, on time and according to recognized standards.",
    performanceTitle: "Services",
    performanceText: "Berlgrün GmbH offers a broad service portfolio in construction and renovation. From new builds to modernization and refurbishment, we execute projects with precision and reliability.",
    whyTitle: "Why Berlgrün GmbH?",
    whyLead:
      "Across Berlin we deliver construction and landscaping with clear processes, durable quality and transparent communication.",
    whyText: "✔ Experience & Expertise\nWith many years of experience in construction, renovation and landscaping, we stand for durable quality and solid craftsmanship.\n\n✔ Reliability & Precision\nWe use high-quality materials and work with great care to deliver lasting results.\n\n✔ Individual Consulting & Planning\nEvery project has unique requirements; we develop tailor-made concepts.\n\n✔ On-Time & Efficient Delivery\nFrom planning to execution, we ensure structured and punctual implementation.",
    ctaTitle: "📞 Planning a construction project?",
    ctaText: "Get professional advice from our specialists. We are happy to provide a non-binding offer tailored to your project.",
    phone: "📍 Phone: +49 30 992 656 90",
    email: "📧 E-Mail: info@berlgruen.de",
    serviceDetails: [
      {
        title: "1. Civil Works & Infrastructure",
        text: "A stable foundation is the basis of every construction project. We carry out all civil engineering and site development work to prepare your project optimally.",
        bullets: [
          "✔ Excavation and earthworks",
          "✔ Drainage and sewer construction",
          "✔ Foundation and floor slab work",
          "✔ Utility lines and plot development",
        ],
      },
      {
        title: "2. Structural Works & Interior Fit-Out",
        text: "Whether residential, commercial or an extension, we execute your structural plans reliably and take care of the complete interior fit-out.",
        bullets: [
          "✔ New build and shell construction for residential and commercial properties",
          "✔ Masonry and concrete work",
          "✔ Drywall for flexible room layouts",
          "✔ Interior finishing with flooring, plastering and painting",
        ],
      },
      {
        title: "3. Renovation & Modernization",
        text: "We bring older buildings up to date both visually and energetically. From facade refurbishment to full modernization we support you throughout.",
        bullets: [
          "✔ Refurbishment of existing buildings and heritage conservation",
          "✔ Thermal insulation and energy-efficient retrofitting",
          "✔ Replacement of windows and doors",
          "✔ Moisture protection and mould remediation",
        ],
      },
      {
        title: "4. Garden & Landscaping",
        text: "An attractive outdoor area enhances every property. We design gardens, driveways and paths according to your individual wishes.",
        bullets: [
          "✔ Paving and path construction",
          "✔ Terraces in wood, natural stone or concrete",
          "✔ Garden and landscape design",
          "✔ Rainwater and drainage systems",
        ],
      },
      {
        title: "5. Winter Service",
        text: "Snow and ice clearance for private and commercial clients.",
        bullets: [
          "✔ Professional clearing and gritting of footpaths, driveways and parking areas",
          "✔ Weather-dependent deployment planning for fast response times",
          "✔ Compliance with all traffic safety obligations for maximum legal certainty",
        ],
      },
      {
        title: "6. Paving & Outdoor Works",
        text: "From driveways to complete outdoor facilities, we offer tailored solutions for functional and visually appealing exterior spaces.",
        bullets: [
          "✔ Paving for footpaths, driveways and parking areas",
          "✔ Natural stone walls and gabions",
          "✔ Carports, fences and privacy screens",
          "✔ Outdoor lighting concepts",
        ],
      },
    ],
  },
};

function parseWhyBlocks(raw: string): { title: string; body: string }[] {
  return raw
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const lines = block.split("\n");
      const title = (lines[0] ?? "").trim();
      const body = lines.slice(1).join("\n").trim();
      return { title, body };
    });
}

export function HomePage() {
  const { locale } = useLocale();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const transitionMs = isMobile ? 420 : 560;
  const copy = copyByLocale[locale];
  const [activeSlide, setActiveSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);
  const transitionLockRef = useRef(false);
  const queuedStepRef = useRef(0);
  const activeSlideRef = useRef(0);
  const currentHero = copy.heroSlides[activeSlide];
  const nextHero = nextSlide !== null ? copy.heroSlides[nextSlide] : null;
  const whyBlocks = parseWhyBlocks(copy.whyText);

  useEffect(() => {
    activeSlideRef.current = activeSlide;
  }, [activeSlide]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      transitionLockRef.current = false;
      queuedStepRef.current = 0;
    };
  }, []);
  const sectionTitleSx = {
    mb: 1.2,
    fontWeight: 800,
    letterSpacing: "-0.02em",
    display: "inline-block",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -8,
      width: "100%",
      height: 3,
      borderRadius: 999,
      background: "linear-gradient(90deg, #1e40af 0%, #60a5fa 100%)",
      boxShadow: "0 6px 14px rgba(30,64,175,0.22)",
    },
  } as const;

  const runFadeTransition = (step: -1 | 1) => {
    if (transitionLockRef.current) {
      queuedStepRef.current += step;
      return;
    }

    const slideCount = copy.heroSlides.length;
    const calculatedNext = (activeSlideRef.current + step + slideCount) % slideCount;
    if (calculatedNext === activeSlideRef.current) return;

    transitionLockRef.current = true;
    setNextSlide(calculatedNext);
    // next frame'de opacity transition tetiklenir.
    requestAnimationFrame(() => setIsCrossfading(true));

    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    fadeTimeoutRef.current = window.setTimeout(() => {
      setIsCrossfading(false);
      setActiveSlide(calculatedNext);
      activeSlideRef.current = calculatedNext;
      setNextSlide(null);
      transitionLockRef.current = false;

      if (queuedStepRef.current !== 0) {
        const nextStep: -1 | 1 = queuedStepRef.current > 0 ? 1 : -1;
        queuedStepRef.current += nextStep === 1 ? -1 : 1;
        runFadeTransition(nextStep);
      }
    }, transitionMs);
  };

  const goPrevSlide = () => {
    runFadeTransition(-1);
  };
  const goNextSlide = () => {
    runFadeTransition(1);
  };

  return (
    <Box id="top">
      <Box
        sx={{
          minHeight: { xs: "calc(100vh - 62px)", md: "calc(100vh - 68px)" },
          backgroundImage: `linear-gradient(90deg, rgba(6,7,11,0.72) 0%, rgba(6,7,11,0.48) 42%, rgba(6,7,11,0.3) 100%), url(${currentHero.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          transition: `background-image ${transitionMs}ms ease`,
          transitionProperty: "background-image",
          transitionDuration: `${transitionMs}ms`,
          transitionTimingFunction: "ease",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: nextHero
              ? `linear-gradient(90deg, rgba(6,7,11,0.72) 0%, rgba(6,7,11,0.48) 42%, rgba(6,7,11,0.3) 100%), url(${nextHero.background})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: isCrossfading && nextHero ? 1 : 0,
            transition: `opacity ${transitionMs}ms ease`,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.22,
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 2.2px)",
            backgroundSize: "14px 14px",
          },
        }}
      >
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 4.5, md: 8 }, width: "100%" }}>
          <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 520, minHeight: { xs: 360, md: 410 } }}>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                opacity: isCrossfading ? 0 : 1,
                transition: isCrossfading ? `opacity ${transitionMs}ms ease` : "none",
              }}
            >
              <Typography sx={{ fontSize: { xs: "2rem", md: "3.1rem" }, lineHeight: 1.02, fontWeight: 700, mb: 0.15, letterSpacing: "-0.02em" }}>
                {currentHero.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.8rem" }, fontWeight: 400, lineHeight: 1.3, maxWidth: 640, mb: 1.8 }}>
                {currentHero.subtitle}
              </Typography>
              <Typography component="p" sx={{ maxWidth: 640, opacity: 0.95, lineHeight: 1.5, fontSize: { xs: "1rem", md: "1.06rem" }, mb: 3, whiteSpace: "pre-line" }}>
                {currentHero.lines.join("\n")}
              </Typography>
              <Button variant="contained" component={RouterLink} to="/kontakt" sx={{ px: 5, py: 1.25, minWidth: 195, fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.02em" }}>
                {currentHero.buttonText}
              </Button>
            </Box>

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                opacity: isCrossfading && nextHero ? 1 : 0,
                transition: isCrossfading ? `opacity ${transitionMs}ms ease` : "none",
                pointerEvents: "none",
              }}
            >
              {nextHero ? (
                <>
                  <Typography sx={{ fontSize: { xs: "2rem", md: "3.1rem" }, lineHeight: 1.02, fontWeight: 700, mb: 0.15, letterSpacing: "-0.02em" }}>
                    {nextHero.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.8rem" }, fontWeight: 400, lineHeight: 1.3, maxWidth: 640, mb: 1.8 }}>
                    {nextHero.subtitle}
                  </Typography>
                  <Typography component="p" sx={{ maxWidth: 640, opacity: 0.95, lineHeight: 1.5, fontSize: { xs: "1rem", md: "1.06rem" }, mb: 3, whiteSpace: "pre-line" }}>
                    {nextHero.lines.join("\n")}
                  </Typography>
                  <Button variant="contained" component={RouterLink} to="/kontakt" sx={{ px: 5, py: 1.25, minWidth: 195, fontSize: "0.95rem", fontWeight: 800, letterSpacing: "0.02em" }}>
                    {nextHero.buttonText}
                  </Button>
                </>
              ) : null}
            </Box>
          </Box>
        </Container>
        <Stack
          direction="row"
          spacing={1.2}
          sx={{ position: "absolute", right: { xs: 68, md: 86 }, bottom: { xs: 58, md: 72 }, zIndex: 2 }}
        >
          <Button onClick={goPrevSlide} aria-label="Previous slide" sx={{ minWidth: 0, width: 42, height: 42, color: "#fff", backgroundColor: "primary.main", "&:hover": { backgroundColor: "#0a3a86", transform: "translateY(-2px)" }, transition: "all .25s ease" }}>
            <ChevronLeftIcon />
          </Button>
          <Button onClick={goNextSlide} aria-label="Next slide" sx={{ minWidth: 0, width: 42, height: 42, color: "#fff", backgroundColor: "primary.main", "&:hover": { backgroundColor: "#0a3a86", transform: "translateY(-2px)" }, transition: "all .25s ease" }}>
            <ChevronRightIcon />
          </Button>
        </Stack>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
        <RevealOnScroll>
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "stretch" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h4" sx={sectionTitleSx}>
                {copy.aboutTitle}
              </Typography>
              <Typography component="p" sx={{ mb: 2.4, mt: 1.6, lineHeight: 1.7 }}>
                {copy.aboutText}
              </Typography>
              <Typography variant="h4" sx={{ ...sectionTitleSx, mt: 2.5 }}>
                {copy.performanceTitle}
              </Typography>
              <Typography component="p" sx={{ mb: 1.5, mt: 1.6, lineHeight: 1.7 }}>
                {copy.performanceText}
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, lineHeight: 1.75 }}>
                {copy.serviceDetails.slice(0, 6).map((item) => (
                  <Box component="li" key={item.title} sx={{ mb: 0.2 }}>
                    {item.title}
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={0.9}>
                {serviceCards.map((card, index) => (
                  <Grid key={`${card.image}-${index}`} size={{ xs: 12, sm: 6, md: 4 }}>
                    <RevealOnScroll delayMs={index * 75}>
                      <Paper
                        component={RouterLink}
                        to={`/leistung/${card.slug}`}
                        sx={{
                          height: { xs: 180, md: 290 },
                          p: 2,
                          borderRadius: 1.5,
                          display: "flex",
                          alignItems: "end",
                          color: "#fff",
                          background: `url(${card.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 8px 20px rgba(2,6,23,0.14)",
                          textDecoration: "none",
                          transition: "filter 220ms ease, transform 220ms ease",
                          "&:hover": {
                            filter: "brightness(1.12)",
                          },
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                          {copy.serviceDetails[index]?.title ?? ""}
                        </Typography>
                      </Paper>
                    </RevealOnScroll>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </RevealOnScroll>
      </Container>

      <Container maxWidth="xl" sx={{ pb: { xs: 4, md: 8 } }}>
        <RevealOnScroll>
          <Box
            sx={{
              mb: 3,
              p: { xs: 2.1, md: 2.8 },
              borderLeft: "5px solid #1e40af",
              backgroundColor: "transparent",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: { xs: 18, md: 22 },
                right: 0,
                bottom: 0,
                height: "1px",
                backgroundColor: "rgba(15,23,42,0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
                gap: { xs: 1.6, md: 2.2 },
                alignItems: "stretch",
              }}
            >
              <Box>
                <Typography variant="h2" sx={{ ...sectionTitleSx, mb: 1.4 }}>
                  {copy.whyTitle}
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 980,
                    mb: 2.25,
                    lineHeight: 1.72,
                    fontSize: { xs: "1.05rem", md: "1.12rem" },
                    fontWeight: 500,
                    color: "text.primary",
                  }}
                >
                  {copy.whyLead}
                </Typography>
                <Stack spacing={{ xs: 2.25, md: 2.5 }} sx={{ maxWidth: 1060 }}>
                  {whyBlocks.map((item, index) => (
                    <Box key={`${item.title}-${index}`}>
                      <Typography
                        component="h3"
                        sx={{
                          mb: 0.85,
                          lineHeight: 1.35,
                          fontSize: { xs: "1.02rem", md: "1.06rem" },
                          fontWeight: 700,
                          color: "text.primary",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: 1.72,
                          fontSize: { xs: "0.98rem", md: "1.03rem" },
                          fontWeight: 400,
                          color: "text.primary",
                        }}
                      >
                        {item.body}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
              <Box
                sx={{
                  minHeight: { xs: 190, md: 290 },
                  borderRadius: 1.2,
                  border: "1px solid rgba(15,23,42,0.18)",
                  backgroundImage: "url('/images/why/dozer-why.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center 72%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              columnGap: { xs: 0, md: 5 },
              rowGap: 2.2,
            }}
          >
            {copy.serviceDetails.map((item, index) => (
              <RevealOnScroll key={item.title} delayMs={index * 60}>
                <Box
                  component={RouterLink}
                  to={`/leistung/${serviceSlugs[index]}`}
                  sx={{
                    display: "block",
                    pb: 1.4,
                    borderBottom: "1px solid rgba(15,23,42,0.1)",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 160ms ease",
                    "&:hover": {
                      borderBottomColor: "rgba(30,64,175,0.48)",
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 0.65, fontWeight: 700, fontSize: { xs: "1.02rem", md: "1.08rem" } }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ lineHeight: 1.62, mb: 0.7, fontSize: "0.96rem" }}>{item.text}</Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.2, lineHeight: 1.62, fontSize: "0.93rem" }}>
                    {item.bullets.map((bullet) => (
                      <Box component="li" key={`${item.title}-${bullet}`} sx={{ mb: 0.15 }}>
                        {bullet}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </RevealOnScroll>
            ))}
          </Box>
          <Box sx={{ mt: 3, pb: 1.2, borderBottom: "1px solid rgba(15,23,42,0.1)" }}>
            <Typography variant="h5" sx={{ mb: 1.1, fontWeight: 700 }}>
              {copy.ctaTitle}
            </Typography>
            <Typography sx={{ mb: 1.25, lineHeight: 1.7, fontSize: "0.97rem" }}>{copy.ctaText}</Typography>
            <Typography sx={{ lineHeight: 1.7 }}>{copy.phone}</Typography>
            <Typography sx={{ lineHeight: 1.7 }}>{copy.email}</Typography>
          </Box>
        </RevealOnScroll>
      </Container>
    </Box>
  );
}
