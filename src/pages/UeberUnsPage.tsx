import { Container, Paper, Typography } from "@mui/material";
import { useLocale } from "../context/locale-context";

export function UeberUnsPage() {
  const { locale } = useLocale();
  const copy = {
    de: {
      title: "Über Uns",
      subtitle: "Ihr Bau- & Sanierungsprofi in Berlin",
      p1: "Die Berlgrün GmbH ist ein etabliertes Bauunternehmen mit Sitz in Berlin. Seit vielen Jahren sind wir ein verlässlicher Partner für Bau-, Sanierungs- und Landschaftsgestaltungsprojekte in der Region. Unser Ziel ist es, hochwertige Bauleistungen mit Präzision, Effizienz und Nachhaltigkeit zu verbinden.",
      p2: "Was uns auszeichnet? Erfahrung, Qualität und ein starkes Team. Unsere Fachkräfte bringen umfangreiches Know-how in den Bereichen Tiefbau, Hochbau, Sanierung und Gartenbau mit. Wir verstehen uns als Problemlöser und Gestalter, die Ihre Bauvorhaben mit höchster Sorgfalt und Expertise umsetzen.",
      claim: "Berlgrün GmbH - Stark im Bau, sorgfältig in der Pflege.",
      qTitle: "Unser Anspruch: Qualität & Zuverlässigkeit",
      qList:
        "✔ Hochwertige Materialien & moderne Bautechniken\n✔ Zuverlässige, termingerechte Umsetzung\n✔ Individuelle Planung & maßgeschneiderte Lösungen\n✔ Nachhaltige & effiziente Bauweisen",
      p3: "Wir setzen auf strukturiertes Arbeiten, klare Kommunikation und ein eingespieltes Team, das jede Herausforderung professionell meistert.",
      teamTitle: "Unser Team - Experten mit Leidenschaft",
      p4: "Hinter jedem erfolgreichen Bauprojekt steht ein starkes Team. Unsere Bauleiter, Handwerker und Gartenbau-Spezialisten arbeiten Hand in Hand, um Ihr Projekt von der Planung bis zur Fertigstellung effizient umzusetzen.",
      strengths:
        "🔹 Langjährige Erfahrung im Baugewerbe\n🔹 Zahlreiche erfolgreich umgesetzte Projekte\n🔹 Persönlicher Ansprechpartner für jedes Bauvorhaben",
      p5: "Wir legen großen Wert auf ein partnerschaftliches Miteinander - sowohl innerhalb unseres Teams als auch mit unseren Kunden. Denn erfolgreiche Bauprojekte entstehen durch gute Zusammenarbeit und klare Absprachen.",
      promiseTitle: "Unser Versprechen an Sie",
      promise:
        "🏗 Verlässlichkeit & Termintreue - Wir halten unsere Zusagen ein.\n⚒ Qualitätsarbeit - Nur die besten Materialien und präzises Handwerk.\n🏡 Individuelle Beratung - Ihr Projekt, Ihre Wünsche - wir setzen es um.\n🌍 Nachhaltiges Bauen - Ressourcenschonende Lösungen für eine bessere Zukunft.\n\nUnsere Kunden schätzen uns für unsere professionelle Arbeit, ehrliche Beratung und lösungsorientierte Denkweise.",
    },
    tr: {
      title: "Hakkımızda",
      subtitle: "Berlin'de inşaat ve renovasyon çözüm ortağınız",
      p1: "Berlgrün GmbH, merkezi Berlin'de bulunan köklü bir inşaat şirketidir. Uzun yıllardır bölgede inşaat, renovasyon ve peyzaj projelerinde güvenilir bir iş ortağı olarak hizmet veriyoruz. Hedefimiz kaliteyi, verimliliği ve sürdürülebilirliği bir araya getiren güçlü çözümler üretmektir.",
      p2: "Bizi farklı kılan; deneyim, kalite ve güçlü bir ekip yapısıdır. Uzman kadromuz altyapı, üstyapı, renovasyon ve bahçe-peyzaj alanlarında kapsamlı bilgiye sahiptir. Projelerinizi yüksek özen ve uzmanlıkla hayata geçiririz.",
      claim: "Berlgrün GmbH - İnşaatta güçlü, bakımda özenli.",
      qTitle: "Standartlarımız: Kalite & Güvenilirlik",
      qList:
        "✔ Yüksek kaliteli malzemeler ve modern teknikler\n✔ Güvenilir ve zamanında teslim\n✔ Kişiye özel planlama ve çözümler\n✔ Sürdürülebilir ve verimli uygulamalar",
      p3: "Planlı çalışma, açık iletişim ve uyumlu ekip yapısı ile her projeyi profesyonel şekilde yönetiyoruz.",
      teamTitle: "Ekibimiz - Tutkulu uzmanlar",
      p4: "Başarılı her projenin arkasında güçlü bir ekip vardır. Şantiye yöneticilerimiz, ustalarımız ve peyzaj uzmanlarımız planlamadan teslimata kadar birlikte çalışır.",
      strengths:
        "🔹 Uzun yıllara dayanan sektör deneyimi\n🔹 Başarıyla tamamlanan çok sayıda proje\n🔹 Her proje için birebir iletişim noktası",
      p5: "Hem ekip içinde hem de müşterilerimizle iş birliğine dayalı güçlü bir iletişim kuruyoruz. Başarılı projeler net anlaşma ve iyi koordinasyonla ortaya çıkar.",
      promiseTitle: "Size sözümüz",
      promise:
        "🏗 Güvenilirlik ve zamanında teslim\n⚒ Kaliteli işçilik ve doğru malzeme\n🏡 İhtiyaca özel danışmanlık\n🌍 Sürdürülebilir yapım yaklaşımı\n\nMüşterilerimiz bizi profesyonel yaklaşımımız, dürüst iletişimimiz ve çözüm odaklı bakışımız için tercih ediyor.",
    },
    en: {
      title: "About Us",
      subtitle: "Your construction & renovation partner in Berlin",
      p1: "Berlgrün GmbH is an established construction company based in Berlin. For many years, we have been a reliable partner for construction, renovation and landscaping projects in the region. Our goal is to combine precision, efficiency and sustainability in every project.",
      p2: "What sets us apart? Experience, quality and a strong team. Our specialists bring broad expertise in civil works, structural works, renovation and landscaping. We approach each project with care and practical know-how.",
      claim: "Berlgrün GmbH - Strong in construction, meticulous in maintenance.",
      qTitle: "Our Standard: Quality & Reliability",
      qList:
        "✔ High-quality materials & modern construction techniques\n✔ Reliable, on-time execution\n✔ Individual planning & tailored solutions\n✔ Sustainable & efficient building methods",
      p3: "We rely on structured execution, clear communication and a coordinated team to deliver professional outcomes.",
      teamTitle: "Our Team - Experts with passion",
      p4: "Behind every successful project stands a strong team. Our site managers, craftsmen and landscaping specialists work hand in hand from planning to handover.",
      strengths:
        "🔹 Long-standing industry experience\n🔹 Numerous successfully delivered projects\n🔹 Dedicated contact person for every project",
      p5: "We value partnership-based collaboration both within our team and with our clients. Successful projects are built on clear communication and strong coordination.",
      promiseTitle: "Our Promise",
      promise:
        "🏗 Reliability & on-time delivery\n⚒ Quality workmanship with top materials\n🏡 Individual consultation tailored to your goals\n🌍 Sustainable construction for a better future\n\nOur clients value our professional execution, honest communication and solution-oriented mindset.",
    },
  }[locale];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 0 }}>
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          {copy.title}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2.5, fontWeight: 500 }}>
          {copy.subtitle}
        </Typography>
        <Typography sx={{ mb: 2.2, lineHeight: 1.75 }}>
          {copy.p1}
        </Typography>
        <Typography sx={{ mb: 2.2, lineHeight: 1.75 }}>
          {copy.p2}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          {copy.claim}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5, mt: 3 }}>
          {copy.qTitle}
        </Typography>
        <Typography sx={{ mb: 1.2, whiteSpace: "pre-line", lineHeight: 1.75 }}>
          {copy.qList}
        </Typography>
        <Typography sx={{ mb: 2.2, lineHeight: 1.75 }}>
          {copy.p3}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {copy.teamTitle}
        </Typography>
        <Typography sx={{ mb: 1.2, lineHeight: 1.75 }}>
          {copy.p4}
        </Typography>
        <Typography sx={{ mb: 1.2, whiteSpace: "pre-line", lineHeight: 1.75 }}>
          {copy.strengths}
        </Typography>
        <Typography sx={{ mb: 2.2, lineHeight: 1.75 }}>
          {copy.p5}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          {copy.promiseTitle}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line", lineHeight: 1.75 }}>
          {copy.promise}
        </Typography>
      </Paper>
    </Container>
  );
}
