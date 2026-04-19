import { Box, Container, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useLocale } from "../context/locale-context";

export function LeistungPage() {
  const serviceSlugs = [
    "tiefbau-erschliessung",
    "hochbau-innenausbau",
    "sanierung-modernisierung",
    "garten-landschaftsbau",
    "winterdienst",
    "pflaster-aussenarbeiten",
  ] as const;
  const { locale } = useLocale();
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

  const copy = {
    de: {
      title: "Leistung",
      intro:
        "Die Berlgrün GmbH bietet ein breites Leistungsspektrum im Bereich Bau- und Sanierungsarbeiten. Von Neubau über Modernisierung bis hin zur Sanierung setzen wir Projekte fachgerecht, präzise und zuverlässig um. Dabei stehen eine effiziente Projektabwicklung, hohe Qualitätsstandards und die termingerechte Realisierung im Mittelpunkt.",
      sections: [
        {
          title: "1. Tiefbau & Erschließung 🏗",
          image: "/images/services/altyapi-ve-parsel.png",
          text: "Ein stabiles Fundament ist die Basis jedes Bauprojekts. Wir übernehmen alle Arbeiten im Bereich Tiefbau und Erschließung, um Ihr Bauvorhaben optimal vorzubereiten.",
          bullets:
            "✔ Aushub- und Erdarbeiten\n✔ Kanal- und Entwässerungsbau\n✔ Fundament- und Bodenplattenarbeiten\n✔ Leitungsbau und Grundstückserschließung",
        },
        {
          title: "2. Hochbau & Innenausbau 🏠",
          image: "/images/services/ustyapi-ve-insaat.png",
          text: "Ob Wohnhaus, Gewerbegebäude oder Anbau - wir setzen Ihre Baupläne im Hochbau zuverlässig um und kümmern uns um den gesamten Innenausbau.",
          bullets:
            "✔ Neubau und Rohbau von Wohn- und Gewerbeimmobilien\n✔ Maurer- und Betonarbeiten\n✔ Trockenbau für flexible Raumgestaltung\n✔ Innenausbau mit Bodenbelägen, Putz- und Malerarbeiten",
        },
        {
          title: "3. Sanierung & Modernisierung 🏛",
          image: "/images/services/yenileme-ve-modernizasyon.png",
          text: "Wir bringen alte Gebäude auf den neuesten Stand - sowohl optisch als auch energetisch. Von der Fassadensanierung bis zur Komplettmodernisierung stehen wir Ihnen zur Seite.",
          bullets:
            "✔ Altbausanierung und Denkmalpflege\n✔ Wärmedämmung & energetische Sanierung\n✔ Austausch von Fenstern & Türen\n✔ Feuchtigkeitsschutz und Schimmelbeseitigung",
        },
        {
          title: "4. Garten- & Landschaftsbau 🌿",
          image: "/images/services/bahce-ve-peyzaj.png",
          text: "Eine ansprechende Außenanlage wertet jedes Gebäude auf. Wir gestalten Gärten, Einfahrten und Wege nach Ihren individuellen Wünschen.",
          bullets:
            "✔ Pflaster- und Wegebau\n✔ Terrassenbau mit Holz, Naturstein oder Beton\n✔ Garten- und Landschaftsgestaltung\n✔ Regenwasser- und Entwässerungssysteme",
        },
        {
          title: "5. Winterdienst ❄️",
          image: "/images/services/kis-hizmetleri.png",
          text: "Schnee- und Glättebeseitigung von Privat und Geschäftskunden.",
          bullets:
            "✔ Fachgerechtes Räumen und Streuen von Gehwegen, Zufahrten und Parkflächen\n✔ Termingerechte, witterungsabhängige Einsatzplanung für schnelle Reaktionszeiten\n✔ Einhaltung aller Verkehrssicherungspflichten für maximale Rechtssicherheit",
        },
        {
          title: "6. Pflaster- & Außenarbeiten 🏡",
          image: "/images/services/tas-doseme-ve-dis-mekan.png",
          text: "Von Einfahrten bis hin zu kompletten Außenanlagen - wir bieten maßgeschneiderte Lösungen für funktionale und optisch ansprechende Außenbereiche.",
          bullets:
            "✔ Pflasterarbeiten für Gehwege, Einfahrten & Parkplätze\n✔ Natursteinmauern und Gabionen\n✔ Carports, Zäune & Sichtschutz\n✔ Lichtkonzepte für Außenbereiche",
        },
      ],
    },
    tr: {
      title: "Hizmetler",
      intro:
        "Berlgrün GmbH, inşaat ve renovasyon alanında geniş bir hizmet yelpazesi sunar. Yeni yapıdan modernizasyona ve yenilemeye kadar projeleri hassas, güvenilir ve zamanında tamamlarız.",
      sections: [
        {
          title: "1. Altyapı & Hazırlık İşleri 🏗",
          image: "/images/services/altyapi-ve-parsel.png",
          text: "Sağlam bir temel her projenin başlangıcıdır. Altyapı ve hazırlık çalışmalarını projenize uygun şekilde planlar ve uygularız.",
          bullets:
            "✔ Hafriyat ve kazı işleri\n✔ Kanal ve drenaj uygulamaları\n✔ Temel ve zemin beton işleri\n✔ Hat altyapısı ve parsel hazırlığı",
        },
        {
          title: "2. Üstyapı & İç Mekan Uygulamaları 🏠",
          image: "/images/services/ustyapi-ve-insaat.png",
          text: "Konut, ticari yapı veya ek bina fark etmeksizin projelerinizi güvenilir şekilde uygular; iç mekan işlerini uçtan uca yönetiriz.",
          bullets:
            "✔ Konut ve ticari yapılar için kaba inşaat\n✔ Duvar ve beton işleri\n✔ Esnek mekanlar için alçıpan çözümleri\n✔ Zemin, sıva ve boya dahil iç mekan uygulamaları",
        },
        {
          title: "3. Yenileme & Modernizasyon 🏛",
          image: "/images/services/yenileme-ve-modernizasyon.png",
          text: "Mevcut yapıları hem görsel hem enerji verimliliği açısından güncel standartlara taşıyoruz.",
          bullets:
            "✔ Eski yapı yenileme ve koruma işleri\n✔ Isı yalıtımı ve enerji iyileştirmeleri\n✔ Kapı-pencere değişimleri\n✔ Nem ve küf önleme çözümleri",
        },
        {
          title: "4. Bahçe & Peyzaj 🌿",
          image: "/images/services/bahce-ve-peyzaj.png",
          text: "Dış mekan tasarımıyla yapıya değer katıyoruz. Bahçe, giriş ve yürüyüş yollarını ihtiyacınıza göre planlıyoruz.",
          bullets:
            "✔ Kilit taş ve yürüyüş yolu uygulamaları\n✔ Ahşap, doğal taş veya beton teras çözümleri\n✔ Bahçe ve peyzaj düzenleme\n✔ Yağmur suyu ve drenaj sistemleri",
        },
        {
          title: "5. Kış Hizmetleri ❄️",
          image: "/images/services/kis-hizmetleri.png",
          text: "Bireysel ve ticari müşteriler için kar temizliği ve buzlanma önleme hizmeti sunuyoruz.",
          bullets:
            "✔ Yaya yolları, girişler ve park alanlarında profesyonel küreme/tuzlama\n✔ Hava koşullarına göre planlanan hızlı müdahale\n✔ Yasal yükümlülüklere uygun güvenli operasyon",
        },
        {
          title: "6. Dış Mekan & Taş Uygulamaları 🏡",
          image: "/images/services/tas-doseme-ve-dis-mekan.png",
          text: "Giriş yollarından kapsamlı dış mekan projelerine kadar estetik ve fonksiyonel çözümler üretiyoruz.",
          bullets:
            "✔ Yaya yolu, giriş ve otopark taş döşeme\n✔ Doğal taş duvar ve gabion çözümleri\n✔ Otopark üstü, çit ve mahremiyet uygulamaları\n✔ Dış mekan aydınlatma konseptleri",
        },
      ],
    },
    en: {
      title: "Services",
      intro:
        "Berlgrün GmbH provides a broad range of construction and renovation services. From new builds to modernization and refurbishment, we deliver projects with precision, reliability and on-time execution.",
      sections: [
        {
          title: "1. Civil Works & Infrastructure 🏗",
          image: "/images/services/altyapi-ve-parsel.png",
          text: "A stable foundation is the basis of every project. We handle all required groundwork and infrastructure preparation.",
          bullets:
            "✔ Excavation and earthworks\n✔ Sewerage and drainage works\n✔ Foundation and slab construction\n✔ Utility lines and site development",
        },
        {
          title: "2. Structural Works & Interior Fit-Out 🏠",
          image: "/images/services/ustyapi-ve-insaat.png",
          text: "Whether residential or commercial, we implement your plans reliably and manage full interior fit-out.",
          bullets:
            "✔ New build and shell construction\n✔ Masonry and concrete works\n✔ Drywall systems for flexible layouts\n✔ Interior works incl. flooring, plastering and painting",
        },
        {
          title: "3. Renovation & Modernization 🏛",
          image: "/images/services/yenileme-ve-modernizasyon.png",
          text: "We upgrade existing buildings to modern standards, both visually and energetically.",
          bullets:
            "✔ Old-building renovation and conservation\n✔ Thermal insulation and energy upgrades\n✔ Window and door replacement\n✔ Moisture protection and mold remediation",
        },
        {
          title: "4. Garden & Landscaping 🌿",
          image: "/images/services/bahce-ve-peyzaj.png",
          text: "An attractive outdoor area increases property value. We design gardens, driveways and pathways to fit your needs.",
          bullets:
            "✔ Paving and pathway construction\n✔ Terrace construction in wood, natural stone or concrete\n✔ Garden and landscape design\n✔ Rainwater and drainage systems",
        },
        {
          title: "5. Winter Service ❄️",
          image: "/images/services/kis-hizmetleri.png",
          text: "Snow and ice control services for private and commercial clients.",
          bullets:
            "✔ Professional clearing and gritting for walkways, driveways and parking areas\n✔ Weather-based deployment planning for fast response\n✔ Full compliance with traffic safety obligations",
        },
        {
          title: "6. Paving & Outdoor Works 🏡",
          image: "/images/services/tas-doseme-ve-dis-mekan.png",
          text: "From driveways to complete outdoor spaces, we provide tailored solutions that are both functional and visually appealing.",
          bullets:
            "✔ Paving works for walkways, driveways and parking lots\n✔ Natural stone walls and gabions\n✔ Carports, fences and privacy solutions\n✔ Outdoor lighting concepts",
        },
      ],
    },
  }[locale];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
      <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 0, border: "none", boxShadow: "none", background: "transparent" }}>
        <Box sx={{ mb: 3.8 }}>
          <Typography variant="h3" sx={sectionTitleSx}>
            {copy.title}
          </Typography>
          <Typography sx={{ mt: 2.2, lineHeight: 1.75, color: "text.secondary", maxWidth: 980 }}>
            {copy.intro}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.4 }}>
          {copy.sections.map((section, index) => (
            <Paper
              key={section.title}
              component={RouterLink}
              to={`/leistung/${serviceSlugs[index]}`}
              sx={{
                p: { xs: 2.25, md: 2.8 },
                borderRadius: 0,
                border: "1px solid rgba(15,23,42,0.14)",
                boxShadow: "none",
                backgroundColor: "rgba(255,255,255,0.78)",
                backdropFilter: "blur(2px)",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 180ms ease, background-color 180ms ease",
                "&:hover": {
                  borderColor: "rgba(30,64,175,0.45)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "1.1fr 1fr" },
                  gap: { xs: 2, md: 2.5 },
                  alignItems: "stretch",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ mb: 1.1, fontWeight: 700 }}>
                    {section.title}
                  </Typography>
                  <Typography sx={{ mb: 1.15, lineHeight: 1.75, color: "text.secondary" }}>
                    {section.text}
                  </Typography>
                  <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.72, color: "text.primary" }}>
                    {section.bullets}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    minHeight: { xs: 230, md: 290, lg: 320 },
                    borderRadius: 1.5,
                    background: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </Box>
            </Paper>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
