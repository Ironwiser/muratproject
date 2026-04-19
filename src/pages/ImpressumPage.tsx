import { Container, Link, Paper, Typography } from "@mui/material";
import { useLocale } from "../context/locale-context";

export function ImpressumPage() {
  const { locale } = useLocale();
  const copy = {
    de: {
      title: "Impressum",
      note: "Hinweis: Bitte dieses Impressum vor Livegang rechtlich final prüfen lassen.",
    },
    tr: {
      title: "Künye",
      note: "Not: Bu metni yayına almadan önce hukuki olarak son kez kontrol ettiriniz.",
    },
    en: {
      title: "Imprint",
      note: "Note: Please have this imprint legally reviewed before going live.",
    },
  }[locale];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 0 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          {copy.title}
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Angaben gemaess Paragraph 5 TMG und Paragraph 18 MStV.
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Berlgrün GmbH
          <br />
          Mohriner Allee 52-54
          <br />
          12347 Berlin
          <br />
          Deutschland
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Vertretungsberechtigt: [Geschäftsführung]
          <br />
          Telefon: +49 30 992 656 90
          <br />
          E-Mail: info@berlgruen.de
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Umsatzsteuer-ID gemaess Paragraph 27a UStG: [Bitte ausfuellen]
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          EU-Streitbeilegung:
          <br />
          Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
          <br />
          <Link href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
            https://ec.europa.eu/consumers/odr/
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {copy.note}
        </Typography>
      </Paper>
    </Container>
  );
}
