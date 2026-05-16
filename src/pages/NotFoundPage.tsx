import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useLocale } from "../context/use-locale";

export function NotFoundPage() {
  const { locale } = useLocale();
  const copy = {
    de: {
      title: "Seite nicht gefunden",
      text: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
      home: "Zur Startseite",
    },
    tr: {
      title: "Sayfa bulunamadı",
      text: "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
      home: "Anasayfaya dön",
    },
    en: {
      title: "Page not found",
      text: "The page you requested does not exist or may have been moved.",
      home: "Back to home",
    },
  }[locale];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, sm: 3 }, textAlign: "center" }}>
      <Typography component="h1" variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
        {copy.title}
      </Typography>
      <Typography sx={{ mb: 3, color: "text.secondary", lineHeight: 1.7 }}>
        {copy.text}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, flexWrap: "wrap" }}>
        <Button variant="contained" component={RouterLink} to="/">
          {copy.home}
        </Button>
        <Button variant="outlined" component={RouterLink} to="/kontakt">
          {locale === "de" ? "Kontakt" : locale === "tr" ? "İletişim" : "Contact"}
        </Button>
      </Box>
    </Container>
  );
}
