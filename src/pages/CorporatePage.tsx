import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useLocale, type Locale } from "../context/locale-context";

type CorporateKey = "about" | "history" | "management" | "careers" | "quality-policy";

type CorporateContent = {
  title: string;
  intro: string;
  cards: { title: string; text: string }[];
};

type SectionExtras = {
  principlesTitle: string;
  principles: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  detailTitle: string;
  details: string[];
};

type ContentGroup = "cards" | "principles" | "process";

const imageLibrary: Record<CorporateKey, Record<ContentGroup, string[]>> = {
  about: {
    cards: ["/images/corporate/about/overview.png"],
    principles: ["/images/corporate/about/principles.png"],
    process: ["/images/corporate/about/process.png"],
  },
  history: {
    cards: ["/images/history/overview.png"],
    principles: ["/images/history/development-path.png"],
    process: ["/images/history/milestones.png"],
  },
  management: {
    cards: ["/images/corporate/management/overview.png"],
    principles: ["/images/corporate/management/principles.png"],
    process: ["/images/corporate/management/process.png"],
  },
  careers: {
    cards: ["/images/corporate/careers/overview.png"],
    principles: ["/images/corporate/careers/principles.png"],
    process: ["/images/corporate/careers/process.png"],
  },
  "quality-policy": {
    cards: ["/images/corporate/quality-policy/overview.png"],
    principles: ["/images/corporate/quality-policy/principles.png"],
    process: ["/images/corporate/quality-policy/process.png"],
  },
};

function getItemImage(section: CorporateKey, group: ContentGroup, index: number) {
  const images = imageLibrary[section][group];
  return images[index] ?? images[0];
}

const contentByLocale: Record<Locale, Record<CorporateKey, CorporateContent>> = {
  de: {
    about: {
      title: "Über uns",
      intro: "Berlgrün GmbH steht für zuverlässige Bau-, Sanierungs- und Pflegeleistungen in Berlin und Umgebung.",
      cards: [
        { title: "Unser Anspruch", text: "Wir arbeiten termingerecht, transparent und mit hoher handwerklicher Qualität." },
        { title: "Unser Team", text: "Qualifizierte Fachkräfte mit Praxiserfahrung begleiten Projekte von der Planung bis zur Übergabe." },
      ],
    },
    history: {
      title: "Geschichte",
      intro: "Seit vielen Jahren entwickeln wir uns als verlässlicher Partner für private und gewerbliche Auftraggeber.",
      cards: [
        { title: "Entwicklung", text: "Von kleineren Bauarbeiten bis zu umfassenden Sanierungsprojekten haben wir unser Portfolio stetig erweitert." },
        { title: "Erfahrung", text: "Langjährige Projekterfahrung ermöglicht uns effiziente Abläufe und belastbare Lösungen." },
      ],
    },
    management: {
      title: "Management",
      intro: "Unser Management legt den Fokus auf klare Prozesse, Kundennähe und nachhaltige Projektsteuerung.",
      cards: [
        { title: "Projektsteuerung", text: "Jedes Projekt wird strukturiert geplant, eng begleitet und transparent dokumentiert." },
        { title: "Verantwortung", text: "Wir treffen Entscheidungen mit Blick auf Qualität, Sicherheit und Wirtschaftlichkeit." },
      ],
    },
    careers: {
      title: "Karriere",
      intro: "Wir suchen motivierte Fachkräfte, die gemeinsam mit uns hochwertige Bauprojekte umsetzen wollen.",
      cards: [
        { title: "Arbeitsumfeld", text: "Ein professionelles Team, klare Abläufe und moderne Arbeitsmittel bilden unsere Basis." },
        { title: "Perspektive", text: "Wir fördern Eigenverantwortung, fachliche Entwicklung und langfristige Zusammenarbeit." },
      ],
    },
    "quality-policy": {
      title: "Qualitätspolitik",
      intro: "Qualität ist bei Berlgrün GmbH ein verbindlicher Standard in Planung, Ausführung und Betreuung.",
      cards: [
        { title: "Material & Ausführung", text: "Wir setzen auf hochwertige Materialien und arbeiten nach anerkannten technischen Standards." },
        { title: "Kontrolle & Verbesserung", text: "Regelmäßige Qualitätskontrollen und kontinuierliche Optimierung sichern dauerhafte Ergebnisse." },
      ],
    },
  },
  tr: {
    about: {
      title: "Hakkımızda",
      intro: "Berlgrün GmbH, Berlin ve çevresinde güvenilir inşaat, renovasyon ve bakım hizmetleri sunar.",
      cards: [
        { title: "Yaklaşımımız", text: "İşlerimizi zamanında, şeffaf iletişimle ve yüksek işçilik kalitesiyle tamamlarız." },
        { title: "Ekibimiz", text: "Nitelikli uzman kadromuz, planlamadan teslimata kadar tüm süreci yönetir." },
      ],
    },
    history: {
      title: "Tarihçemiz",
      intro: "Yıllar içinde bireysel ve kurumsal müşteriler için güvenilir bir çözüm ortağı olarak büyüdük.",
      cards: [
        { title: "Gelişim", text: "Küçük ölçekli işlerden kapsamlı renovasyon projelerine uzanan güçlü bir hizmet yapısı kurduk." },
        { title: "Tecrübe", text: "Saha tecrübemiz sayesinde süreçleri hızlı, planlı ve kontrollü şekilde yönetiyoruz." },
      ],
    },
    management: {
      title: "Yönetim Kurulu",
      intro: "Yönetim anlayışımız; net süreçler, müşteri odaklı iletişim ve sürdürülebilir kalite üzerine kuruludur.",
      cards: [
        { title: "Proje Yönetimi", text: "Her proje hedef, bütçe ve zaman planına göre titizlikle takip edilir." },
        { title: "Sorumluluk", text: "Kararlarımızda güvenlik, kalite ve uzun vadeli verimlilik önceliklidir." },
      ],
    },
    careers: {
      title: "İnsan Kaynakları",
      intro: "Nitelikli ve gelişime açık ekip arkadaşlarıyla uzun vadeli bir çalışma kültürü oluşturuyoruz.",
      cards: [
        { title: "Çalışma Ortamı", text: "Düzenli iş akışı, profesyonel ekip yapısı ve modern ekipmanlarla çalışıyoruz." },
        { title: "Gelişim", text: "Yetkinlik gelişimini destekleyen, sorumluluk alanına değer veren bir yapı sunuyoruz." },
      ],
    },
    "quality-policy": {
      title: "Kalite Politikası",
      intro: "Berlgrün GmbH için kalite; planlama, uygulama ve teslimatın her aşamasında temel ilkedir.",
      cards: [
        { title: "Malzeme & Uygulama", text: "Yüksek kaliteli malzemeler ve teknik standartlara uygun uygulamalarla çalışırız." },
        { title: "Kontrol & İyileştirme", text: "Sürekli denetim ve iyileştirme yaklaşımıyla kalıcı sonuçlar üretiriz." },
      ],
    },
  },
  en: {
    about: {
      title: "About Us",
      intro: "Berlgrün GmbH delivers reliable construction, renovation and maintenance services across Berlin.",
      cards: [
        { title: "Our Approach", text: "We work on schedule, communicate transparently and maintain high workmanship standards." },
        { title: "Our Team", text: "Experienced professionals manage projects from planning to final handover." },
      ],
    },
    history: {
      title: "Our History",
      intro: "Over the years, we have grown into a trusted partner for private and commercial clients.",
      cards: [
        { title: "Growth", text: "From smaller works to full-scale renovation projects, we continuously expanded our capabilities." },
        { title: "Experience", text: "Long-term field expertise helps us execute projects efficiently and reliably." },
      ],
    },
    management: {
      title: "Management",
      intro: "Our management focuses on clear processes, close client communication and sustainable project control.",
      cards: [
        { title: "Project Governance", text: "Each project is planned, monitored and documented in a structured way." },
        { title: "Responsibility", text: "We prioritize quality, safety and economic efficiency in every decision." },
      ],
    },
    careers: {
      title: "Careers",
      intro: "We are looking for motivated professionals who want to build high-quality projects with us.",
      cards: [
        { title: "Work Environment", text: "A professional team, clear workflows and modern tools support daily operations." },
        { title: "Career Path", text: "We encourage ownership, continuous learning and long-term collaboration." },
      ],
    },
    "quality-policy": {
      title: "Quality Policy",
      intro: "For Berlgrün GmbH, quality is a binding standard in planning, execution and delivery.",
      cards: [
        { title: "Materials & Execution", text: "We use high-quality materials and apply recognized technical standards." },
        { title: "Control & Improvement", text: "Regular quality checks and continuous optimization ensure durable results." },
      ],
    },
  },
};

const extrasByLocale: Record<Locale, Record<CorporateKey, SectionExtras>> = {
  de: {
    about: {
      principlesTitle: "Wofür wir stehen",
      principles: [
        { title: "Verantwortung", text: "Wir handeln verbindlich und übernehmen klare Verantwortung für Termin, Qualität und Ergebnis." },
        { title: "Partnerschaft", text: "Unsere Zusammenarbeit basiert auf Verlässlichkeit, direktem Austausch und lösungsorientiertem Handeln." },
        { title: "Substanz", text: "Wir schaffen Ergebnisse, die nicht nur optisch überzeugen, sondern langfristig funktionieren." },
      ],
      processTitle: "Wie wir zusammenarbeiten",
      process: [
        { title: "1. Bedarf verstehen", text: "Wir klären Erwartungen, Rahmenbedingungen und Prioritäten in einem strukturierten Erstgespräch." },
        { title: "2. Konzept abstimmen", text: "Wir übersetzen Anforderungen in ein umsetzbares Konzept mit klaren Arbeitspaketen." },
        { title: "3. Verlässlich umsetzen", text: "Während der Ausführung halten wir Sie proaktiv informiert und sichern die Qualität." },
      ],
      detailTitle: "Vertiefende Einordnung",
      details: [
        "Unsere Leistungen verbinden technisches Know-how mit einem klaren Verständnis für wirtschaftliche und organisatorische Anforderungen. Dadurch entstehen Lösungen, die nicht nur im Moment funktionieren, sondern langfristig tragfähig bleiben.",
        "Besonderen Wert legen wir auf nachvollziehbare Entscheidungen und eine realistische Planung. So erhalten Auftraggeber eine verlässliche Grundlage für Budget, Zeit und Qualität - vom ersten Gespräch bis zur finalen Übergabe.",
      ],
    },
    history: {
      principlesTitle: "Unsere Entwicklung",
      principles: [
        { title: "Kontinuität", text: "Wir entwickeln unsere Leistungen Schritt für Schritt auf Basis realer Projekterfahrung." },
        { title: "Lernkultur", text: "Aus jedem Projekt leiten wir Verbesserungen für Planung, Kommunikation und Ausführung ab." },
        { title: "Stabilität", text: "Unsere Prozesse sind gewachsen und auf zuverlässige, reproduzierbare Ergebnisse ausgelegt." },
      ],
      processTitle: "Meilensteine",
      process: [
        { title: "1. Aufbauphase", text: "Start mit regionalen Bau- und Pflegeaufträgen, Fokus auf saubere Ausführung und Kundennähe." },
        { title: "2. Spezialisierung", text: "Erweiterung in Sanierung, Winterdienst und Außenanlagen mit klarer Qualitätslinie." },
        { title: "3. Skalierung", text: "Heute steuern wir Projekte strukturiert über eingespielte Teams und feste Abläufe." },
      ],
      detailTitle: "Vertiefende Einordnung",
      details: [
        "Unsere Entwicklung war nie zufällig, sondern das Ergebnis konsequenter Weiterentwicklung in Prozessen, Teamstruktur und Leistungsbreite. Jede Phase hat dazu beigetragen, unsere Arbeitsweise belastbarer und effizienter zu machen.",
        "Gerade in anspruchsvollen Projekten profitieren Kunden heute von dieser gewachsenen Erfahrung: Risiken werden früher erkannt, Abläufe besser koordiniert und Entscheidungen fundierter getroffen.",
      ],
    },
    management: {
      principlesTitle: "Führungsgrundsätze",
      principles: [
        { title: "Klarheit", text: "Ziele, Zuständigkeiten und Entscheidungswege sind eindeutig definiert." },
        { title: "Steuerung", text: "Fortschritt, Qualität und Kosten werden laufend kontrolliert und aktiv gesteuert." },
        { title: "Verbindlichkeit", text: "Zusagen gegenüber Kunden und Teams sind für uns verlässliche Arbeitsgrundlage." },
      ],
      processTitle: "Managementprozess",
      process: [
        { title: "1. Zielsetzung", text: "Projektziele werden messbar festgelegt und mit allen Beteiligten abgestimmt." },
        { title: "2. Ressourcensteuerung", text: "Personal, Material und Zeitfenster werden bedarfsgerecht geplant." },
        { title: "3. Qualitätssicherung", text: "Regelmäßige Reviews stellen sicher, dass Soll- und Ist-Zustand übereinstimmen." },
      ],
      detailTitle: "Vertiefende Einordnung",
      details: [
        "Ein wirksames Management schafft Orientierung auf der Baustelle und Verlässlichkeit für Auftraggeber. Deshalb verbinden wir operative Nähe mit systematischer Steuerung und dokumentierten Entscheidungen.",
        "Unser Führungsansatz ist praxisnah: kurze Entscheidungswege, klare Verantwortlichkeiten und ein permanenter Blick auf Sicherheit, Qualität und Termine.",
      ],
    },
    careers: {
      principlesTitle: "Was wir als Arbeitgeber bieten",
      principles: [
        { title: "Teamkultur", text: "Wir arbeiten kollegial, direkt und mit gegenseitiger Unterstützung auf der Baustelle." },
        { title: "Entwicklung", text: "Fachliche Weiterentwicklung und Verantwortungsübernahme werden aktiv gefördert." },
        { title: "Sicherheit", text: "Klare Abläufe und Arbeitsschutz haben im Tagesgeschäft höchste Priorität." },
      ],
      processTitle: "Bewerbungsablauf",
      process: [
        { title: "1. Kontaktaufnahme", text: "Sie senden uns Ihre Unterlagen oder nehmen direkt Kontakt auf." },
        { title: "2. Kennenlernen", text: "In einem persönlichen Gespräch prüfen wir fachliche und menschliche Passung." },
        { title: "3. Einstieg", text: "Nach Zusage begleiten wir den Start strukturiert mit klarer Einarbeitung." },
      ],
      detailTitle: "Vertiefende Einordnung",
      details: [
        "Wir verstehen Personalentwicklung als langfristige Investition in Qualität. Fachliche Kompetenz, Verlässlichkeit und Teamfähigkeit sind dabei zentrale Bausteine unserer Zusammenarbeit.",
        "Neue Kolleginnen und Kollegen werden nicht nur eingearbeitet, sondern aktiv in unsere Abläufe integriert. So entsteht ein stabiles Team, das Projekte sicher und effizient realisieren kann.",
      ],
    },
    "quality-policy": {
      principlesTitle: "Qualitätsgrundsätze",
      principles: [
        { title: "Standards", text: "Wir arbeiten nach anerkannten technischen Regeln und dokumentierten Prüfabläufen." },
        { title: "Präzision", text: "Jeder Arbeitsschritt wird mit Blick auf Funktion, Optik und Dauerhaftigkeit ausgeführt." },
        { title: "Verbesserung", text: "Qualität wird kontinuierlich gemessen und systematisch weiterentwickelt." },
      ],
      processTitle: "Qualitätssicherungsprozess",
      process: [
        { title: "1. Vorgaben definieren", text: "Vor Start werden Anforderungen, Toleranzen und Prüfpunkte verbindlich festgelegt." },
        { title: "2. Ausführung prüfen", text: "Während der Umsetzung erfolgen laufende Kontrollen durch verantwortliche Fachkräfte." },
        { title: "3. Ergebnis freigeben", text: "Abschlusskontrolle und dokumentierte Freigabe sichern ein belastbares Endergebnis." },
      ],
      detailTitle: "Vertiefende Einordnung",
      details: [
        "Qualitätssicherung bedeutet für uns mehr als Endkontrolle. Bereits in der Planungsphase definieren wir klare Kriterien, um Abweichungen frühzeitig zu vermeiden.",
        "Durch konsequente Prüfschritte während der Ausführung erreichen wir ein konstantes Qualitätsniveau, das sowohl technische Anforderungen als auch Kundenerwartungen erfüllt.",
      ],
    },
  },
  tr: {
    about: {
      principlesTitle: "Bizi Tanımlayan Değerler",
      principles: [
        { title: "Sorumluluk", text: "Süre, kalite ve sonuç konularında net sorumluluk alırız." },
        { title: "Güven", text: "Müşteriyle açık iletişim ve tutarlı çalışma disipliniyle güven inşa ederiz." },
        { title: "Kalıcılık", text: "Sadece hızlı değil, uzun ömürlü ve doğru çözümler üretmeyi hedefleriz." },
      ],
      processTitle: "Çalışma Şeklimiz",
      process: [
        { title: "1. İhtiyaç Analizi", text: "Beklentileri ve teknik gereksinimleri birlikte netleştiririz." },
        { title: "2. Plan & Kapsam", text: "Uygulanabilir bir iş planı ve net kapsam oluştururuz." },
        { title: "3. Kontrollü Uygulama", text: "Sahada düzenli takip ve kalite kontrol ile işi tamamlarız." },
      ],
      detailTitle: "Detaylı Değerlendirme",
      details: [
        "Hizmet yaklaşımımız, teknik doğruluk ile operasyonel gerçekçiliği bir araya getirir. Bu sayede sadece kısa vadeli değil, uzun vadede de sürdürülebilir sonuçlar üretiriz.",
        "Planlama aşamasından itibaren şeffaf iletişim kurarak beklentileri netleştirir, uygulama sırasında düzenli bilgilendirme ile süreci kontrol altında tutarız.",
      ],
    },
    history: {
      principlesTitle: "Gelişim Yolculuğumuz",
      principles: [
        { title: "Süreklilik", text: "Yıllar içinde her projeyle süreçlerimizi istikrarlı biçimde geliştirdik." },
        { title: "Öğrenme", text: "Sahadan gelen geri bildirimleri sistemli iyileştirmeye dönüştürüyoruz." },
        { title: "Kurumsallaşma", text: "Büyürken kalite standardımızı koruyan bir operasyon yapısı kurduk." },
      ],
      processTitle: "Dönüm Noktaları",
      process: [
        { title: "1. Başlangıç", text: "Bölgesel projelerde güçlü saha performansı ile temelimizi oluşturduk." },
        { title: "2. Uzmanlaşma", text: "Renovasyon, dış mekan ve kış hizmetlerinde uzman ekipler kurduk." },
        { title: "3. Olgunlaşma", text: "Bugün daha büyük işleri planlı ve ölçülebilir süreçlerle yönetiyoruz." },
      ],
      detailTitle: "Detaylı Değerlendirme",
      details: [
        "Kurumsal gelişimimiz, her projeden elde edilen deneyimi süreçlere entegre etme anlayışı üzerine kuruludur. Bu yaklaşım operasyon kalitesini her yıl daha ileri taşımamızı sağlamıştır.",
        "Bugün ulaştığımız yapı; güçlü saha koordinasyonu, standartlaşmış kalite adımları ve disiplinli planlama sayesinde daha karmaşık işlerde dahi yüksek performans sunar.",
      ],
    },
    management: {
      principlesTitle: "Yönetim Yaklaşımı",
      principles: [
        { title: "Netlik", text: "Hedefler, roller ve karar mekanizması açık şekilde tanımlanır." },
        { title: "Takip", text: "Süreç, maliyet ve kalite göstergeleri düzenli olarak izlenir." },
        { title: "Tutarlılık", text: "Alınan kararlar sahada uygulanabilir ve sürdürülebilir olur." },
      ],
      processTitle: "Yönetim Süreci",
      process: [
        { title: "1. Hedefleme", text: "Proje hedefleri ölçülebilir kriterlerle belirlenir." },
        { title: "2. Kaynak Planlama", text: "Ekip, malzeme ve takvim verimli olacak şekilde planlanır." },
        { title: "3. Sonuç Kontrolü", text: "Teslim öncesi tüm çıktılar kalite açısından doğrulanır." },
      ],
      detailTitle: "Detaylı Değerlendirme",
      details: [
        "Yönetim modelimiz sahadaki hız ile kurumsal denetimi dengeler. Böylece kararlar hızlı alınırken kalite, maliyet ve süre hedeflerinden taviz verilmez.",
        "Her proje özelinde sorumluluk alanları net tanımlanır; düzenli kontrol toplantılarıyla olası riskler erken tespit edilip önleyici adımlar devreye alınır.",
      ],
    },
    careers: {
      principlesTitle: "İşveren Olarak Yaklaşımımız",
      principles: [
        { title: "Ekip Ruhu", text: "Sahada iş birliği ve karşılıklı destek kültürünü ön planda tutarız." },
        { title: "Gelişim", text: "Çalışanlarımızın mesleki gelişimini ve sorumluluk almasını destekleriz." },
        { title: "İş Güvenliği", text: "Tüm operasyonlarda güvenlik prosedürleri tavizsiz uygulanır." },
      ],
      processTitle: "Başvuru Süreci",
      process: [
        { title: "1. Başvuru", text: "Adaydan temel bilgi ve deneyim detaylarını alırız." },
        { title: "2. Görüşme", text: "Teknik uyum ve ekip uyumu birlikte değerlendirilir." },
        { title: "3. Uyum Süreci", text: "İşe başlangıç sonrası planlı bir oryantasyon uygulanır." },
      ],
      detailTitle: "Detaylı Değerlendirme",
      details: [
        "İnsan kaynağını kalite standardımızın temel bileşeni olarak görüyoruz. Bu nedenle işe alım sürecinde yalnızca teknik yeterlilik değil, sorumluluk bilinci ve ekip uyumu da değerlendirilir.",
        "Çalışan gelişimi için yapılandırılmış bir yaklaşım benimsiyoruz: görev netliği, saha desteği ve düzenli geri bildirim ile performansın sürdürülebilir şekilde artmasını hedefliyoruz.",
      ],
    },
    "quality-policy": {
      principlesTitle: "Kalite Esaslarımız",
      principles: [
        { title: "Standart Uyum", text: "Tüm iş kalemleri teknik standartlar ve kontrol listeleriyle yürütülür." },
        { title: "İşçilik Disiplini", text: "Detaylara dikkat eden, tekrarlanabilir işçilik kalitesi hedeflenir." },
        { title: "Sürekli İyileştirme", text: "Her projeden öğrenilenler süreçlere düzenli olarak entegre edilir." },
      ],
      processTitle: "Kalite Güvence Adımları",
      process: [
        { title: "1. Kriter Belirleme", text: "İşe başlamadan önce kalite kriterleri açıkça tanımlanır." },
        { title: "2. Aşamalı Denetim", text: "Uygulama boyunca kritik noktalarda ara kontroller yapılır." },
        { title: "3. Nihai Onay", text: "Teslim öncesi son kalite kontrol tamamlanarak onaylanır." },
      ],
      detailTitle: "Detaylı Değerlendirme",
      details: [
        "Kalite politikamız, her projede ölçülebilir standartlar belirleyip uygulamanın her adımında bu standartları doğrulama prensibine dayanır.",
        "Bu sistematik yaklaşım sayesinde hem teknik gereklilikleri hem de müşteri beklentilerini aynı anda karşılayan, güvenilir ve tekrar edilebilir sonuçlar elde ederiz.",
      ],
    },
  },
  en: {
    about: {
      principlesTitle: "What Defines Us",
      principles: [
        { title: "Ownership", text: "We take full responsibility for timelines, quality and final outcomes." },
        { title: "Trust", text: "Reliable communication and consistent execution build long-term client trust." },
        { title: "Long-Term Value", text: "We deliver solutions designed for durability, not short-term fixes." },
      ],
      processTitle: "How We Work",
      process: [
        { title: "1. Clarify Requirements", text: "We align on project goals, constraints and expectations from the beginning." },
        { title: "2. Define Execution Plan", text: "Scope and sequence are translated into a practical delivery roadmap." },
        { title: "3. Execute with Control", text: "Implementation is monitored closely with regular quality checkpoints." },
      ],
      detailTitle: "In-Depth Perspective",
      details: [
        "Our service philosophy combines technical accuracy with operational practicality. This allows us to deliver outcomes that remain effective and durable over time.",
        "From early planning onward, we prioritize transparent communication and clear expectations, ensuring controlled execution and reliable decision-making throughout the project.",
      ],
    },
    history: {
      principlesTitle: "Our Development Path",
      principles: [
        { title: "Consistency", text: "We improved our delivery model steadily through real project experience." },
        { title: "Learning Mindset", text: "Every completed project feeds into better planning and execution standards." },
        { title: "Operational Stability", text: "Growth has been supported by repeatable workflows and reliable teams." },
      ],
      processTitle: "Milestones",
      process: [
        { title: "1. Foundation", text: "Started with regional projects and a strong focus on execution quality." },
        { title: "2. Specialization", text: "Expanded capabilities across renovation, outdoor works and winter services." },
        { title: "3. Maturity", text: "Now delivering broader projects through structured and measurable operations." },
      ],
      detailTitle: "In-Depth Perspective",
      details: [
        "Our growth has been shaped by continuous refinement of processes, team capabilities and delivery standards. Each stage contributed to a more resilient operating model.",
        "Today, clients benefit from this accumulated experience through better risk anticipation, tighter coordination and more consistent project outcomes.",
      ],
    },
    management: {
      principlesTitle: "Management Principles",
      principles: [
        { title: "Clarity", text: "Objectives, ownership and decision paths are clearly defined." },
        { title: "Control", text: "Progress, quality and costs are continuously monitored and managed." },
        { title: "Reliability", text: "Commitments to clients and teams are treated as operational standards." },
      ],
      processTitle: "Management Workflow",
      process: [
        { title: "1. Target Setting", text: "Project targets are defined with measurable indicators." },
        { title: "2. Resource Allocation", text: "People, time and materials are planned for efficient execution." },
        { title: "3. Performance Review", text: "Output is validated through structured quality and completion checks." },
      ],
      detailTitle: "In-Depth Perspective",
      details: [
        "Our management model balances fast on-site decisions with structured governance. As a result, projects stay agile without compromising quality or control.",
        "Defined responsibilities, regular review cycles and proactive issue handling create predictable progress and stable delivery performance.",
      ],
    },
    careers: {
      principlesTitle: "Our Employer Approach",
      principles: [
        { title: "Team Culture", text: "We build a collaborative environment with clear communication on site." },
        { title: "Growth", text: "We support professional development and encourage ownership." },
        { title: "Safety", text: "Work safety standards are integrated into everyday operations." },
      ],
      processTitle: "Application Journey",
      process: [
        { title: "1. Apply", text: "Candidates share relevant experience and role expectations." },
        { title: "2. Interview", text: "Technical fit and team compatibility are assessed together." },
        { title: "3. Onboarding", text: "A structured onboarding process ensures smooth integration." },
      ],
      detailTitle: "In-Depth Perspective",
      details: [
        "We treat workforce development as a long-term quality driver. Recruitment focuses on both technical capability and professional mindset.",
        "Through structured onboarding and continuous support, new team members quickly integrate into our standards and contribute effectively to project delivery.",
      ],
    },
    "quality-policy": {
      principlesTitle: "Quality Fundamentals",
      principles: [
        { title: "Standards Compliance", text: "Work is executed against defined technical standards and checkpoints." },
        { title: "Execution Discipline", text: "Attention to detail and repeatable quality are mandatory in every phase." },
        { title: "Continuous Improvement", text: "Lessons learned are systematically integrated into future delivery." },
      ],
      processTitle: "Quality Assurance Steps",
      process: [
        { title: "1. Define Criteria", text: "Quality targets and acceptance criteria are set before execution starts." },
        { title: "2. Stage Inspections", text: "Critical steps are verified through ongoing intermediate inspections." },
        { title: "3. Final Validation", text: "Final checks confirm compliance before project handover." },
      ],
      detailTitle: "In-Depth Perspective",
      details: [
        "Our quality policy goes beyond final inspection by embedding measurable requirements from the planning phase onward.",
        "This disciplined verification model enables consistent quality, higher reliability and outcomes that satisfy both technical standards and client expectations.",
      ],
    },
  },
};

function isCorporateKey(value: string | undefined): value is CorporateKey {
  return value === "about" || value === "history" || value === "management" || value === "careers" || value === "quality-policy";
}

export function CorporatePage() {
  const { locale } = useLocale();
  const { section } = useParams<{ section: string }>();

  if (!isCorporateKey(section)) return <Navigate to="/" replace />;

  const copy = contentByLocale[locale][section];
  const shared = extrasByLocale[locale][section];
  const isLargeCorporateSection =
    section === "about" || section === "management" || section === "careers" || section === "quality-policy";
  const isUnifiedCorporateSection =
    section === "about" || section === "history" || section === "management" || section === "careers" || section === "quality-policy";
  const removeLeadingNumber = (value: string) => value.replace(/^\d+\.\s*/, "");
  const unifiedSplitLayoutSx = isLargeCorporateSection
    ? ({ xs: "1fr", md: "minmax(0, 1.1fr) minmax(0, 1fr)" } as const)
    : ({ xs: "1fr", md: "minmax(0, 0.55fr) minmax(0, 1.45fr)" } as const);
  const unifiedImageTextGapSx = isLargeCorporateSection ? ({ xs: 2, md: 2.6 } as const) : ({ xs: 2, md: 3.2 } as const);
  const unifiedImageMinHeightSx = isLargeCorporateSection
    ? ({ xs: 230, md: 290, lg: 320 } as const)
    : ({ xs: 120, md: 150, lg: 165 } as const);

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 8 } }}>
      <Box sx={{ px: { xs: 0.5, md: 1.5 } }}>
        <Typography
          variant="h3"
          sx={{
            mb: 2.4,
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
          }}
        >
          {copy.title}
        </Typography>
        <Typography sx={{ mb: 2.2, maxWidth: 980, lineHeight: 1.75, color: "text.secondary", fontSize: { xs: "1rem", md: "1.04rem" } }}>
          {copy.intro}
        </Typography>

        <Paper
          sx={{
            p: isUnifiedCorporateSection ? { xs: 2, md: 2.5 } : 0,
            borderRadius: 0,
            boxShadow: "none",
            border: isUnifiedCorporateSection ? "1px solid rgba(15,23,42,0.12)" : "none",
            backgroundColor: isUnifiedCorporateSection ? "rgba(255,255,255,0.72)" : "transparent",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isUnifiedCorporateSection ? "1fr" : { xs: "1fr", md: "1fr 1fr" },
              gap: isUnifiedCorporateSection ? 0 : { xs: 1.2, md: 2.2 },
            }}
          >
            {isUnifiedCorporateSection ? (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: unifiedSplitLayoutSx,
                  gap: unifiedImageTextGapSx,
                  alignItems: "start",
                }}
              >
                <Box
                  sx={{
                    minHeight: unifiedImageMinHeightSx,
                    borderRadius: 1.5,
                    backgroundImage: `url(${getItemImage(section, "cards", 0)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box component="ol" sx={{ m: 0, pl: 2.6, display: "grid", gap: 1.1, listStyleType: "none" }}>
                  {copy.cards.map((card, index) => (
                    <Box key={card.title} component="li">
                      <Typography
                        sx={{
                          mb: 0.55,
                          fontWeight: 700,
                          fontSize: isLargeCorporateSection ? { xs: "1.2rem", md: "1.4rem" } : { xs: "1rem", md: "1.06rem" },
                        }}
                      >
                        {removeLeadingNumber(card.title)}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: isLargeCorporateSection ? 1.75 : 1.68,
                          fontSize: isLargeCorporateSection ? "1rem" : "0.96rem",
                          color: "text.secondary",
                        }}
                      >
                        {card.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : (
              copy.cards.map((card, index) => (
                <Box
                  key={card.title}
                  sx={{
                    py: 0,
                    pl: { xs: 1.3, md: 1.5 },
                    borderLeft: "3px solid rgba(30,64,175,0.55)",
                    display: "grid",
                    gridTemplateColumns: "76px 1fr",
                    gap: 1.1,
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      height: 60,
                      borderRadius: 1,
                      backgroundImage: `url(${getItemImage(section, "cards", index)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid rgba(15,23,42,0.16)",
                    }}
                  />
                  <Box>
                    <Typography sx={{ mb: 0.45, fontWeight: 700, fontSize: { xs: "1rem", md: "1.06rem" } }}>{card.title}</Typography>
                    <Typography sx={{ lineHeight: 1.68, fontSize: "0.96rem", color: "text.secondary" }}>{card.text}</Typography>
                  </Box>
                </Box>
              ))
            )}
          </Box>
          <Divider sx={{ my: { xs: 2.4, md: 3.2 }, borderColor: "rgba(15,23,42,0.12)" }} />

          <Typography variant="h5" sx={{ mb: 1.4, fontWeight: 800, letterSpacing: "-0.01em" }}>
            {shared.principlesTitle}
          </Typography>
          <Box
            sx={{
              display: isUnifiedCorporateSection ? "grid" : "block",
              gridTemplateColumns: isUnifiedCorporateSection ? unifiedSplitLayoutSx : undefined,
              gap: isUnifiedCorporateSection ? unifiedImageTextGapSx : undefined,
              alignItems: isUnifiedCorporateSection ? "start" : undefined,
            }}
          >
            {isUnifiedCorporateSection && (
              <Box
                sx={{
                  minHeight: unifiedImageMinHeightSx,
                  borderRadius: 1.5,
                  backgroundImage: `url(${getItemImage(section, "principles", 0)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            <Box component="ol" sx={{ m: 0, pl: 2.6, display: "grid", gap: 1.1, listStyleType: isUnifiedCorporateSection ? "none" : "decimal" }}>
            {shared.principles.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  pr: { xs: 0.4, md: 0.8 },
                  display: isUnifiedCorporateSection ? "block" : "grid",
                  gridTemplateColumns: isUnifiedCorporateSection ? "1fr" : "64px 1fr",
                  gap: isUnifiedCorporateSection ? 0 : 1,
                  alignItems: "start",
                }}
                component="li"
              >
                {!isUnifiedCorporateSection && (
                  <Box
                    sx={{
                      height: 52,
                      borderRadius: 1,
                      backgroundImage: `url(${getItemImage(section, "principles", index)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid rgba(15,23,42,0.16)",
                    }}
                  />
                )}
                <Box>
                  <Typography
                    sx={{
                      mb: 0.5,
                      fontWeight: 700,
                      fontSize: isLargeCorporateSection ? { xs: "1.12rem", md: "1.28rem" } : "0.98rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: isLargeCorporateSection ? 1.75 : 1.62,
                      fontSize: isLargeCorporateSection ? "1rem" : "0.94rem",
                      color: "text.secondary",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
            </Box>
          </Box>

          {isUnifiedCorporateSection && <Divider sx={{ my: { xs: 2.4, md: 3.2 }, borderColor: "rgba(15,23,42,0.12)" }} />}

          <Typography variant="h5" sx={{ mt: 3.4, mb: 1.4, fontWeight: 800, letterSpacing: "-0.01em" }}>
            {shared.processTitle}
          </Typography>
          <Box
            sx={{
              display: isUnifiedCorporateSection ? "grid" : "block",
              gridTemplateColumns: isUnifiedCorporateSection ? unifiedSplitLayoutSx : undefined,
              gap: isUnifiedCorporateSection ? unifiedImageTextGapSx : undefined,
              alignItems: isUnifiedCorporateSection ? "start" : undefined,
            }}
          >
            {isUnifiedCorporateSection && (
              <Box
                sx={{
                  minHeight: unifiedImageMinHeightSx,
                  borderRadius: 1.5,
                  backgroundImage: `url(${getItemImage(section, "process", 0)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            <Box
              component={isUnifiedCorporateSection ? "ol" : "div"}
              sx={{
                m: isUnifiedCorporateSection ? 0 : undefined,
                pl: isUnifiedCorporateSection ? 2.6 : undefined,
                listStyleType: isUnifiedCorporateSection ? "none" : undefined,
                display: "grid",
                gridTemplateColumns: isUnifiedCorporateSection ? "1fr" : { xs: "1fr", md: "1fr 1fr 1fr" },
                gap: isUnifiedCorporateSection ? 1.1 : { xs: 1.2, md: 2 },
              }}
            >
            {shared.process.map((step, index) => (
              <Box
                key={step.title}
                component={isUnifiedCorporateSection ? "li" : "div"}
                sx={{
                  pt: isUnifiedCorporateSection ? 0 : 1.1,
                  pr: isUnifiedCorporateSection ? 0 : 0.5,
                  borderTop: isUnifiedCorporateSection ? "none" : "1px solid rgba(30,64,175,0.3)",
                  display: isUnifiedCorporateSection ? "block" : "grid",
                  gridTemplateColumns: isUnifiedCorporateSection ? "1fr" : "64px 1fr",
                  gap: isUnifiedCorporateSection ? 0 : 1,
                  alignItems: "start",
                }}
              >
                {!isUnifiedCorporateSection && (
                  <Box
                    sx={{
                      height: 52,
                      borderRadius: 1,
                      backgroundImage: `url(${getItemImage(section, "process", index)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      border: "1px solid rgba(15,23,42,0.16)",
                    }}
                  />
                )}
                <Box>
                  <Typography sx={{ mb: 0.5, fontWeight: 700, fontSize: "0.98rem" }}>
                    {isUnifiedCorporateSection ? removeLeadingNumber(step.title) : step.title}
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: isLargeCorporateSection ? 1.75 : 1.65,
                      fontSize: isLargeCorporateSection ? "1rem" : "0.94rem",
                      color: "text.secondary",
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </Box>
            ))}
            </Box>
          </Box>

          {isUnifiedCorporateSection && <Divider sx={{ my: { xs: 2.4, md: 3.2 }, borderColor: "rgba(15,23,42,0.12)" }} />}

          <Typography variant="h5" sx={{ mt: 3.4, mb: 1.4, fontWeight: 800, letterSpacing: "-0.01em" }}>
            {shared.detailTitle}
          </Typography>
          <Box sx={{ display: "grid", gap: 1.1, maxWidth: 1080 }}>
            {shared.details.map((paragraph, index) => (
              <Typography key={`${shared.detailTitle}-${index}`} sx={{ lineHeight: 1.74, fontSize: "0.97rem", color: "text.secondary" }}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
