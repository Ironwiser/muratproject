import { Container, Paper, Typography } from "@mui/material";
import { useLocale } from "../context/locale-context";

export function DatenschutzPage() {
  const { locale } = useLocale();
  const copy = {
    de: {
      title: "Datenschutzerklaerung",
      p1: "Diese Website wird als Unternehmenspraesenz der Berlgrün GmbH betrieben. Es werden keine Online-Verkaeufe und keine Zahlungsdaten verarbeitet.",
      p2: "Beim Besuch der Website koennen technisch notwendige Daten (IP-Adresse, Datum/Uhrzeit, Browsertyp) in Server-Logs verarbeitet werden. Die Verarbeitung erfolgt gem. Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses an sicherem Betrieb.",
      p3: "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b/f DSGVO).",
      p4: "Sie haben Rechte auf Auskunft, Berichtigung, Loeschung, Einschraenkung der Verarbeitung sowie Beschwerde bei einer Aufsichtsbehoerde.",
      note: "Hinweis: Diese Datenschutzerklaerung sollte vor Livegang juristisch final geprueft werden.",
    },
    tr: {
      title: "Gizlilik Politikası",
      p1: "Bu web sitesi Berlgrün GmbH kurumsal tanıtımı için işletilmektedir. Çevrimiçi satış ve ödeme verisi işlenmemektedir.",
      p2: "Site ziyareti sırasında teknik olarak gerekli veriler (IP adresi, tarih/saat, tarayıcı tipi) sunucu kayıtlarında işlenebilir. İşleme, güvenli işletim için meşru menfaat kapsamında yapılır.",
      p3: "E-posta ile iletişime geçtiğinizde bilgileriniz yalnızca talebinizi yanıtlamak amacıyla işlenir.",
      p4: "Bilgi edinme, düzeltme, silme, işlemeyi kısıtlama ve denetim otoritesine şikayet haklarınız bulunmaktadır.",
      note: "Not: Bu gizlilik metni yayına almadan önce hukuki olarak doğrulanmalıdır.",
    },
    en: {
      title: "Privacy Policy",
      p1: "This website is operated as the corporate presence of Berlgrün GmbH. No online sales or payment data processing is performed.",
      p2: "When visiting the site, technically required data (IP address, date/time, browser type) may be processed in server logs for secure operations.",
      p3: "If you contact us by email, your information is processed only to handle your request.",
      p4: "You have rights to access, correction, deletion, restriction of processing and complaint to a supervisory authority.",
      note: "Note: This privacy policy should be legally reviewed before going live.",
    },
  }[locale];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 0 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          {copy.title}
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {copy.p1}
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {copy.p2}
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {copy.p3}
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          {copy.p4}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {copy.note}
        </Typography>
      </Paper>
    </Container>
  );
}
