import { Box, Container, Typography } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useLocale, type Locale } from "../context/locale-context";

type ServiceSlug =
  | "tiefbau-erschliessung"
  | "hochbau-innenausbau"
  | "sanierung-modernisierung"
  | "garten-landschaftsbau"
  | "winterdienst"
  | "pflaster-aussenarbeiten";

type ServiceDetail = {
  title: string;
  heroImage: string;
  intro: string;
  bullets: string[];
  body: string;
  whatIsTitle: string;
  whatIsText: string;
  howToTitle: string;
  howToSteps: string[];
};

const serviceOrder: ServiceSlug[] = [
  "tiefbau-erschliessung",
  "hochbau-innenausbau",
  "sanierung-modernisierung",
  "garten-landschaftsbau",
  "winterdienst",
  "pflaster-aussenarbeiten",
];

const detailsByLocale: Record<Locale, Record<ServiceSlug, ServiceDetail>> = {
  de: {
    "tiefbau-erschliessung": {
      title: "Tiefbau & Erschließung",
      heroImage: "/images/services/altyapi-ve-parsel.png",
      intro: "Ein solides Fundament ist die Basis jedes Bauvorhabens. Wir übernehmen die vollständige Vorbereitung Ihres Grundstücks für eine sichere und wirtschaftliche Umsetzung.",
      bullets: ["Aushub- und Erdarbeiten", "Kanal- und Entwässerungsbau", "Fundament- und Bodenplattenarbeiten", "Leitungsbau und Grundstückserschließung"],
      body: "Unsere Teams arbeiten mit klaren Abläufen, präziser Abstimmung und moderner Technik. So werden Schnittstellen zwischen Tiefbau, Entwässerung und weiterer Ausführung zuverlässig koordiniert.",
      whatIsTitle: "Was ist das?",
      whatIsText:
        "Tiefbau und Erschließung umfassen alle Maßnahmen unterhalb der Geländeoberkante, damit ein Grundstück technisch nutzbar und bebaubar wird. Dazu gehören Leitungsführung, Entwässerung, Baugrubenvorbereitung und die sichere Herstellung tragfähiger Untergründe.",
      howToTitle: "Wie wird es gemacht?",
      howToSteps: [
        "Bestandsaufnahme, Abstimmung mit Versorgern und technische Planung der Erschließungswege.",
        "Aushub in definierten Tiefen sowie lagenweiser Aufbau und Verdichtung der Tragschichten.",
        "Verlegung von Entwässerungs- und Versorgungsleitungen mit dokumentierter Lage.",
        "Herstellung von Fundamentbereichen, Oberflächenanschlüssen und abschließender Prüfung.",
      ],
    },
    "hochbau-innenausbau": {
      title: "Hochbau & Innenausbau",
      heroImage: "/images/services/ustyapi-ve-insaat.png",
      intro: "Von Wohngebäuden bis Gewerbeobjekten setzen wir Hochbauprojekte strukturiert um und begleiten den Innenausbau bis zur nutzungsfertigen Übergabe.",
      bullets: ["Neubau und Rohbau", "Maurer- und Betonarbeiten", "Trockenbau-Lösungen", "Boden-, Putz- und Malerarbeiten"],
      body: "Wir verbinden technische Qualität mit termingerechter Ausführung. Durch enge Koordination aller Gewerke entstehen funktionale, langlebige und optisch überzeugende Räume.",
      whatIsTitle: "Was ist das?",
      whatIsText:
        "Hochbau bildet die tragende Gebäudehülle, der Innenausbau macht das Objekt funktional nutzbar. Dazu zählen Rohbau, technische Vorinstallationen und alle Ausbaugewerke bis zur finalen Oberfläche.",
      howToTitle: "Wie wird es gemacht?",
      howToSteps: [
        "Ausführungsplanung mit klarer Reihenfolge der Gewerke und Schnittstellen.",
        "Rohbauphase inklusive tragender Wände, Decken, Öffnungen und statischer Kontrolle.",
        "Innenausbau mit Trockenbau, Installationen, Oberflächen und Bodenaufbauten.",
        "Funktionsprüfung, Qualitätssicherung und geordnete Übergabe an den Auftraggeber.",
      ],
    },
    "sanierung-modernisierung": {
      title: "Sanierung & Modernisierung",
      heroImage: "/images/services/yenileme-ve-modernizasyon.png",
      intro: "Wir bringen Bestandsgebäude auf einen modernen Stand - baulich, energetisch und gestalterisch. Dabei achten wir auf Werterhalt und nachhaltige Ergebnisse.",
      bullets: ["Altbausanierung", "Energetische Sanierung", "Fenster- und Türenaustausch", "Feuchtigkeitsschutz und Schimmelbeseitigung"],
      body: "Von Teilmaßnahmen bis Komplettsanierung entwickeln wir ein passendes Umsetzungskonzept. Jede Maßnahme wird auf den Zustand des Gebäudes und die Nutzungsziele abgestimmt.",
      whatIsTitle: "Was ist das?",
      whatIsText:
        "Sanierung und Modernisierung verbessern Bestandssubstanz, Energieeffizienz und Nutzungsqualität eines Gebäudes. Ziel ist ein technisch sicherer Zustand mit geringeren Betriebskosten und höherem langfristigem Wert.",
      howToTitle: "Wie wird es gemacht?",
      howToSteps: [
        "Bestandsanalyse mit Fokus auf Hülle, Technik, Feuchtebild und energetische Schwachstellen.",
        "Festlegung eines priorisierten Maßnahmenplans inklusive Budget- und Zeitrahmen.",
        "Umsetzung von Dämmung, Austauschbauteilen, Abdichtungen und technischen Verbesserungen.",
        "Abschlussprüfung mit Dokumentation der erreichten Qualitäts- und Energieziele.",
      ],
    },
    "garten-landschaftsbau": {
      title: "Garten- & Landschaftsbau",
      heroImage: "/images/services/bahce-ve-peyzaj.png",
      intro: "Außenanlagen prägen den Gesamteindruck einer Immobilie. Wir planen und realisieren funktionale sowie ästhetische Lösungen für private und gewerbliche Flächen.",
      bullets: ["Pflaster- und Wegebau", "Terrassenbau", "Garten- und Landschaftsgestaltung", "Regenwasser- und Entwässerungssysteme"],
      body: "Unsere Konzepte verbinden Nutzung, Gestaltung und Langlebigkeit. Damit entstehen Außenbereiche, die den Alltag erleichtern und gleichzeitig den Wert der Immobilie steigern.",
      whatIsTitle: "Was ist das?",
      whatIsText:
        "Garten- und Landschaftsbau verbindet Gestaltung, Entwässerung und belastbare Flächenkonstruktion im Außenbereich. Ziel ist eine dauerhaft nutzbare Anlage mit klarer Funktion und hochwertigem Erscheinungsbild.",
      howToTitle: "Wie wird es gemacht?",
      howToSteps: [
        "Flächenanalyse, Materialauswahl und Festlegung von Gefälle- sowie Entwässerungswegen.",
        "Aushub und Aufbau von Frostschutz- und Tragschichten entsprechend der Nutzungslast.",
        "Verlegung von Pflaster- und Terrassenflächen mit passender Fugen- und Randausbildung.",
        "Endabgleich von Höhen, Wasserlauf und Oberflächenbild inklusive Verdichtung.",
      ],
    },
    winterdienst: {
      title: "Winterdienst",
      heroImage: "/images/services/kis-hizmetleri.png",
      intro: "Wir sorgen im Winter für sichere Wege, Zufahrten und Flächen. Unsere Einsätze sind wetterabhängig geplant und dokumentiert, um rechtliche Sicherheit zu gewährleisten.",
      bullets: ["Räumen und Streuen", "Schnelle Einsatzbereitschaft", "Einhaltung der Verkehrssicherungspflichten", "Lückenlose Einsatzdokumentation"],
      body: "Durch kontinuierliche Wetterbeobachtung und vorbereitete Einsatzpläne reagieren wir frühzeitig. So bleiben Ihre Flächen zuverlässig nutzbar - auch bei kritischen Wetterlagen.",
      whatIsTitle: "Was ist das?",
      whatIsText:
        "Winterdienst umfasst organisatorische und operative Maßnahmen zur Sicherung begeh- und befahrbarer Flächen bei Schnee und Glätte. Kernpunkt ist die Erfüllung der Verkehrssicherungspflicht mit nachvollziehbarer Dokumentation.",
      howToTitle: "Wie wird es gemacht?",
      howToSteps: [
        "Wettermonitoring und Einsatzplanung nach Prioritäten und Gefahrenstellen.",
        "Zeitgerechtes Räumen und Streuen von Gehwegen, Zufahrten und relevanten Flächen.",
        "Mehrfache Kontrollfahrten bei anhaltendem Niederschlag oder Temperaturwechseln.",
        "Dokumentation jedes Einsatzes mit Zeit, Ort, Maßnahme und Kontrollnachweis.",
      ],
    },
    "pflaster-aussenarbeiten": {
      title: "Pflaster- & Außenarbeiten",
      heroImage: "/images/services/tas-doseme-ve-dis-mekan.png",
      intro: "Von Einfahrten bis zu kompletten Außenbereichen realisieren wir belastbare und optisch abgestimmte Lösungen mit hochwertigen Materialien.",
      bullets: ["Pflasterarbeiten für Wege und Zufahrten", "Natursteinmauern und Gabionen", "Carports, Zäune und Sichtschutz", "Lichtkonzepte im Außenbereich"],
      body: "Wir achten auf ein stimmiges Zusammenspiel von Funktion und Gestaltung. Das Ergebnis sind Außenanlagen, die dauerhaft überzeugen und auf die Anforderungen des Standorts abgestimmt sind.",
      whatIsTitle: "Was ist das?",
      whatIsText:
        "Pflaster- und Außenarbeiten schaffen tragfähige, entwässerte und optisch konsistente Freiflächen. Sie sind entscheidend für sichere Erschließung, Nutzbarkeit und den ersten Eindruck einer Immobilie.",
      howToTitle: "Wie wird es gemacht?",
      howToSteps: [
        "Aushub bis zur erforderlichen Tiefe und Herstellung eines tragfähigen Unterbaus.",
        "Einbau und Verdichtung von Tragschicht und Bettung mit korrekt eingestelltem Gefälle.",
        "Präzise Verlegung im gewünschten Verband inklusive Randfixierung.",
        "Verfugung, Abrütteln und Endkontrolle von Ebenheit, Entwässerung und Belastbarkeit.",
      ],
    },
  },
  tr: {
    "tiefbau-erschliessung": {
      title: "Altyapı & Hazırlık İşleri",
      heroImage: "/images/services/altyapi-ve-parsel.png",
      intro: "Sağlam bir başlangıç için altyapı hazırlığı kritik öneme sahiptir. Projenizi güvenli ve verimli şekilde başlatacak tüm zeminsel süreçleri yönetiyoruz.",
      bullets: ["Hafriyat ve kazı işleri", "Kanal ve drenaj altyapısı", "Temel ve zemin beton uygulamaları", "Hat altyapısı ve parsel hazırlığı"],
      body: "Saha ekiplerimiz süreçleri planlı, ölçülü ve kontrollü yürütür. Böylece sonraki yapı aşamalarına temiz, güvenilir ve teknik olarak hazır bir zemin sağlanır.",
      whatIsTitle: "Nedir?",
      whatIsText:
        "Altyapı ve hazırlık işleri, bir parselin inşaata uygun hale getirilmesi için yapılan zemin altı teknik uygulamaların tamamıdır. Kanal, drenaj, hat geçişleri ve temel altı hazırlık bu kapsamda değerlendirilir.",
      howToTitle: "Nasıl yapılır?",
      howToSteps: [
        "Saha analizi ve altyapı planı hazırlanır, kurum ve teknik hat koordinasyonu yapılır.",
        "Kazı, dolgu ve sıkıştırma işlemleri tabaka tabaka ve kontrollü şekilde uygulanır.",
        "Drenaj ve altyapı hatları projeye uygun eğimlerle yerleştirilir.",
        "Temel altı zemin son kontrollerle hazır hale getirilip üstyapıya teslim edilir.",
      ],
    },
    "hochbau-innenausbau": {
      title: "Üstyapı & İç Mekan Uygulamaları",
      heroImage: "/images/services/ustyapi-ve-insaat.png",
      intro: "Konut ve ticari projelerde üstyapıdan iç mekan bitişlerine kadar tüm adımları koordineli şekilde yönetiyoruz.",
      bullets: ["Yeni yapı ve kaba inşaat", "Duvar ve beton işleri", "Alçıpan çözümleri", "Zemin, sıva ve boya uygulamaları"],
      body: "Her projede kalite, süre ve iş güvenliği dengesini koruyoruz. Disiplinli uygulama sayesinde fonksiyonel ve uzun ömürlü mekanlar oluşturuyoruz.",
      whatIsTitle: "Nedir?",
      whatIsText:
        "Üstyapı ve iç mekan uygulamaları, taşıyıcı yapıdan başlayarak mekanın kullanılabilir hale gelmesine kadar uzanan tüm inşa ve bitirme süreçlerini kapsar.",
      howToTitle: "Nasıl yapılır?",
      howToSteps: [
        "Proje, mahal listesi ve uygulama sırası netleştirilir.",
        "Kaba inşaat ve taşıyıcı eleman imalatları tamamlanır.",
        "Tesisat ön hazırlıkları sonrası duvar, tavan ve kaplama uygulamaları yapılır.",
        "Son katmanlar, kalite kontrolleri ve fonksiyon testleri ile teslim süreci tamamlanır.",
      ],
    },
    "sanierung-modernisierung": {
      title: "Yenileme & Modernizasyon",
      heroImage: "/images/services/yenileme-ve-modernizasyon.png",
      intro: "Mevcut yapıları güncel standartlara taşımak için teknik, estetik ve enerji verimliliği odaklı çözümler sunuyoruz.",
      bullets: ["Eski yapı yenileme", "Enerji verimliliği iyileştirmeleri", "Kapı-pencere değişimleri", "Nem ve küf önleme çözümleri"],
      body: "Yapının mevcut durumunu analiz ederek doğru müdahale planını oluşturuyoruz. Böylece maliyet, kalite ve performans hedefleri dengeli biçimde karşılanıyor.",
      whatIsTitle: "Nedir?",
      whatIsText:
        "Yenileme ve modernizasyon; mevcut bir yapının güvenlik, konfor ve enerji performansını artırmak amacıyla yapılan teknik iyileştirme çalışmalarının bütünüdür.",
      howToTitle: "Nasıl yapılır?",
      howToSteps: [
        "Mevcut durum, hasar, ısı kaybı ve kullanım ihtiyaçları analiz edilir.",
        "Önceliklendirilmiş bir uygulama planı ve bütçe kurgusu hazırlanır.",
        "Yalıtım, doğrama, nem kontrolü ve gerekli yapı yenilemeleri uygulanır.",
        "Yapı performansı ve iş kalitesi son kontrollerle doğrulanır.",
      ],
    },
    "garten-landschaftsbau": {
      title: "Bahçe & Peyzaj",
      heroImage: "/images/services/bahce-ve-peyzaj.png",
      intro: "Dış mekanlar hem kullanım hem görünüm açısından yapıya değer katar. İhtiyaca uygun peyzaj ve çevre düzenleme çözümleri geliştiriyoruz.",
      bullets: ["Yol ve kilit taş uygulamaları", "Teras çözümleri", "Bahçe planlama ve düzenleme", "Yağmur suyu ve drenaj sistemleri"],
      body: "Doğru malzeme ve doğru detaylarla uzun ömürlü, estetik ve kullanıcı dostu dış mekanlar oluşturuyoruz.",
      whatIsTitle: "Nedir?",
      whatIsText:
        "Bahçe ve peyzaj uygulamaları, açık alanların fonksiyonel, güvenli ve estetik biçimde tasarlanıp uygulanmasını sağlayan çevre düzenleme çalışmalarını ifade eder.",
      howToTitle: "Nasıl yapılır?",
      howToSteps: [
        "Alan ölçümü, zemin analizi ve kullanım senaryosu belirlenir.",
        "Eğim, drenaj ve malzeme kararlarıyla uygulama planı oluşturulur.",
        "Altyapı, sert zemin ve yeşil alan imalatları koordineli şekilde yürütülür.",
        "Son düzenlemeler yapılarak bakım ve kullanım önerileriyle teslim edilir.",
      ],
    },
    winterdienst: {
      title: "Kış Hizmetleri",
      heroImage: "/images/services/kis-hizmetleri.png",
      intro: "Kış aylarında güvenli ulaşım ve kullanım için profesyonel kar temizliği ve buzlanma önleme hizmeti sunuyoruz.",
      bullets: ["Küreme ve tuzlama", "Hızlı müdahale", "Yasal yükümlülüklere uyum", "Operasyon kayıtlarının tutulması"],
      body: "Hava koşullarını düzenli takip ederek operasyonları önceden planlıyoruz. Böylece kritik anlarda hızlı ve güvenilir müdahale sağlıyoruz.",
      whatIsTitle: "Nedir?",
      whatIsText:
        "Kış hizmetleri; kar ve buzlanma kaynaklı riskleri azaltmak için yürütülen küreme, tuzlama, kontrol ve kayıt süreçlerinin tamamıdır. Amaç güvenli erişim ve yasal uyumluluktur.",
      howToTitle: "Nasıl yapılır?",
      howToSteps: [
        "Meteorolojik veriler düzenli takip edilerek müdahale planı hazırlanır.",
        "Öncelikli alanlarda zamanında küreme ve tuzlama uygulanır.",
        "Gün içinde tekrar eden kontrollerle yeni riskler anında giderilir.",
        "Her operasyon tarih-saat ve uygulama detayıyla kayıt altına alınır.",
      ],
    },
    "pflaster-aussenarbeiten": {
      title: "Dış Mekan & Taş Uygulamaları",
      heroImage: "/images/services/tas-doseme-ve-dis-mekan.png",
      intro: "Giriş yolları, açık alanlar ve çevre düzenlemelerinde fonksiyonel ve estetik dış mekan uygulamaları gerçekleştiriyoruz.",
      bullets: ["Yol ve otopark taş döşeme", "Doğal taş duvar ve gabion", "Çit ve mahremiyet çözümleri", "Dış mekan aydınlatma konseptleri"],
      body: "Projeyi kullanım ihtiyaçlarına göre tasarlıyor, detaylarda dayanıklılığı ve bütünsel görünümü ön planda tutuyoruz.",
      whatIsTitle: "Nedir?",
      whatIsText:
        "Dış mekan ve taş uygulamaları; giriş, yol, otopark ve çevre elemanlarının dayanıklı alt yapı ve doğru kaplama teknikleriyle inşa edilmesini kapsar.",
      howToTitle: "Nasıl yapılır?",
      howToSteps: [
        "Kazı ve alt temel derinliği kullanım yüküne göre belirlenir.",
        "Frost korumalı tabakalarla sağlam bir taşıyıcı altyapı oluşturulur.",
        "Taş veya kaplama elemanları proje desenine göre hassas yerleştirilir.",
        "Derz, sıkıştırma ve yüzey kontrolü ile nihai kullanım güvenliği sağlanır.",
      ],
    },
  },
  en: {
    "tiefbau-erschliessung": {
      title: "Civil Works & Infrastructure",
      heroImage: "/images/services/altyapi-ve-parsel.png",
      intro: "A reliable foundation starts with proper site preparation. We handle all key groundwork operations for safe and efficient project delivery.",
      bullets: ["Excavation and earthworks", "Sewerage and drainage", "Foundation and slab works", "Utility lines and site development"],
      body: "Our teams coordinate each phase with clear planning and technical precision, ensuring the next construction stages begin on a stable base.",
      whatIsTitle: "What is it?",
      whatIsText:
        "Civil works and infrastructure preparation include all below-ground operations required to make a site build-ready, including excavation, drainage, utility routing and structural ground preparation.",
      howToTitle: "How is it done?",
      howToSteps: [
        "Site assessment and utility coordination are completed before execution.",
        "Excavation and compaction are performed in controlled layers.",
        "Drainage and infrastructure lines are installed with proper slope and routing.",
        "Foundation zones are finalized and verified before handover to superstructure works.",
      ],
    },
    "hochbau-innenausbau": {
      title: "Structural Works & Interior Fit-Out",
      heroImage: "/images/services/ustyapi-ve-insaat.png",
      intro: "From shell construction to interior completion, we deliver residential and commercial projects through structured execution.",
      bullets: ["New build and shell works", "Masonry and concrete", "Drywall systems", "Flooring, plastering and painting"],
      body: "We combine practical site management with quality workmanship to create spaces that are durable, functional and ready for use.",
      whatIsTitle: "What is it?",
      whatIsText:
        "Structural and interior works cover the full journey from the building frame to finished, usable spaces, including technical rough-ins and final surface execution.",
      howToTitle: "How is it done?",
      howToSteps: [
        "Execution sequence and interfaces between trades are clearly defined.",
        "Shell structure and core load-bearing components are completed.",
        "Interior systems and finishing layers are installed in planned order.",
        "Quality checks and functional tests are performed before delivery.",
      ],
    },
    "sanierung-modernisierung": {
      title: "Renovation & Modernization",
      heroImage: "/images/services/yenileme-ve-modernizasyon.png",
      intro: "We upgrade existing buildings to modern standards with a focus on performance, energy efficiency and long-term value.",
      bullets: ["Old-building renovation", "Energy upgrades", "Window and door replacement", "Moisture and mold solutions"],
      body: "Each project is tailored to the building condition and user goals, balancing technical quality, timeline and investment priorities.",
      whatIsTitle: "What is it?",
      whatIsText:
        "Renovation and modernization improve technical safety, energy performance and usability of existing buildings, while preserving structural value over time.",
      howToTitle: "How is it done?",
      howToSteps: [
        "Building diagnostics identify structural and energy weaknesses.",
        "A phased intervention plan is defined with priorities and budget limits.",
        "Envelope, component and moisture-control upgrades are implemented.",
        "Final validation confirms quality, performance and compliance targets.",
      ],
    },
    "garten-landschaftsbau": {
      title: "Garden & Landscaping",
      heroImage: "/images/services/bahce-ve-peyzaj.png",
      intro: "Well-designed outdoor areas improve both usability and property value. We create custom landscaping solutions for different site needs.",
      bullets: ["Paving and pathways", "Terrace construction", "Garden planning and execution", "Rainwater and drainage systems"],
      body: "Our outdoor concepts integrate material quality, visual coherence and practical day-to-day use for long-lasting results.",
      whatIsTitle: "What is it?",
      whatIsText:
        "Garden and landscaping works combine design, drainage and surface engineering to deliver outdoor spaces that are both functional and visually consistent.",
      howToTitle: "How is it done?",
      howToSteps: [
        "Site geometry, usage pattern and drainage strategy are defined.",
        "Ground preparation and base layers are built according to expected load.",
        "Hardscape and green elements are installed in coordinated phases.",
        "Surface levels and water runoff are adjusted and verified at final stage.",
      ],
    },
    winterdienst: {
      title: "Winter Service",
      heroImage: "/images/services/kis-hizmetleri.png",
      intro: "We provide professional snow and ice control to keep access routes and open areas safe during winter conditions.",
      bullets: ["Clearing and gritting", "Fast response readiness", "Legal compliance", "Operational documentation"],
      body: "With weather-based planning and organized deployment, we ensure dependable service and risk reduction in critical conditions.",
      whatIsTitle: "What is it?",
      whatIsText:
        "Winter service includes planning, clearing, gritting and monitoring actions designed to reduce slip risks and maintain legal safety obligations during snow and ice periods.",
      howToTitle: "How is it done?",
      howToSteps: [
        "Weather monitoring drives preventive and reactive deployment planning.",
        "Priority zones are cleared and treated within required time windows.",
        "Repeated inspections are performed during ongoing weather events.",
        "Each intervention is documented with time, scope and action details.",
      ],
    },
    "pflaster-aussenarbeiten": {
      title: "Paving & Outdoor Works",
      heroImage: "/images/services/tas-doseme-ve-dis-mekan.png",
      intro: "From driveways to full outdoor transformations, we deliver durable and visually consistent external works.",
      bullets: ["Paving for walkways and parking", "Natural stone and gabion works", "Fences and privacy elements", "Outdoor lighting concepts"],
      body: "Our approach combines structural durability and design consistency, resulting in high-quality outdoor spaces tailored to the site.",
      whatIsTitle: "What is it?",
      whatIsText:
        "Paving and outdoor works cover all construction steps needed for durable, load-capable and well-drained external surfaces and boundary elements.",
      howToTitle: "How is it done?",
      howToSteps: [
        "Required excavation depth is set based on expected load profile.",
        "Base and sub-base layers are installed and compacted for stability.",
        "Paving units are laid in defined patterns with accurate edge restraint.",
        "Joint filling, vibration compaction and final level checks complete the system.",
      ],
    },
  },
};

function isServiceSlug(value: string | undefined): value is ServiceSlug {
  return Boolean(value && serviceOrder.includes(value as ServiceSlug));
}

export function ServiceDetailPage() {
  const { locale } = useLocale();
  const { slug } = useParams<{ slug: string }>();

  if (!isServiceSlug(slug)) return <Navigate to="/leistung" replace />;

  const detail = detailsByLocale[locale][slug];

  return (
    <Box sx={{ minHeight: "100%", flex: 1, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          minHeight: { xs: 680, md: 760 },
          flex: 1,
          backgroundImage: `linear-gradient(90deg, rgba(6,7,11,0.66) 0%, rgba(6,7,11,0.34) 45%, rgba(6,7,11,0.2) 100%), url(${detail.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center 34%", md: "center 26%" },
          color: "#fff",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 4.2, md: 15 }, pb: { xs: 2.2, md: 3.2 }, display: "flex", alignItems: "start" }}>
          <Box
            sx={{
              width: "100%",
              p: { xs: 1.8, md: 2.4 },
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(5,8,14,0.44)",
              backdropFilter: "blur(3px)",
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: "-0.02em", textShadow: "0 5px 18px rgba(0,0,0,0.45)", mb: 1.4 }}>
              {detail.title}
            </Typography>
            <Typography sx={{ lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.05rem" }, mb: 1.6 }}>
              {detail.intro}
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.6, lineHeight: 1.72, mb: 1.6 }}>
              {detail.bullets.map((bullet) => (
                <Box component="li" key={`${detail.title}-${bullet}`} sx={{ mb: 0.15 }}>
                  {bullet}
                </Box>
              ))}
            </Box>
            <Typography sx={{ lineHeight: 1.75, maxWidth: 1100, mb: 1.35 }}>{detail.body}</Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 1.35, md: 2.3 } }}>
              <Box sx={{ pb: 1.1, borderBottom: "1px solid rgba(255,255,255,0.24)" }}>
                <Typography sx={{ lineHeight: 1.7 }}>{detail.whatIsText}</Typography>
              </Box>
              <Box sx={{ pb: 1.1, borderBottom: "1px solid rgba(255,255,255,0.24)" }}>
                <Box component="ol" sx={{ m: 0, pl: 2.2, lineHeight: 1.68 }}>
                  {detail.howToSteps.map((step) => (
                    <Box component="li" key={`${detail.title}-${step}`} sx={{ mb: 0.35 }}>
                      {step}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
