import { Box, Container, Link, Paper, Stack, Typography } from "@mui/material";
import { useLocale } from "../context/locale-context";

export function KontaktPage() {
  const { locale } = useLocale();
  const copy = {
    de: {
      title: "Kontakt",
      company: "Firma",
      address: "Anschrift",
      phone: "Telefon",
      email: "E-Mail",
      note: "Sie planen ein Bauprojekt? Lassen Sie sich von unseren Fachkräften kompetent beraten. Gerne erstellen wir Ihnen ein unverbindliches Angebot.",
    },
    tr: {
      title: "İletişim",
      company: "Firma",
      address: "Adres",
      phone: "Telefon",
      email: "E-Posta",
      note: "Bir proje mi planlıyorsunuz? Uzman ekibimizden danışmanlık alın. Size özel, bağlayıcı olmayan bir teklif hazırlayalım.",
    },
    en: {
      title: "Contact",
      company: "Company",
      address: "Address",
      phone: "Phone",
      email: "E-Mail",
      note: "Planning a project? Get professional advice from our experts. We can prepare a non-binding offer tailored to your needs.",
    },
  }[locale];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
      <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 0 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          {copy.title}
        </Typography>
        <Stack spacing={1.5}>
          <Typography>
            <strong>{copy.company}:</strong> Berlgrün GmbH
          </Typography>
          <Typography>
            <strong>{copy.address}:</strong> Mohriner Allee 52-54, 12347 Berlin
          </Typography>
          <Typography>
            <strong>{copy.phone}:</strong> +49 30 992 656 90
          </Typography>
          <Typography>
            <strong>{copy.email}:</strong> <Link href="mailto:info@berlgruen.de">info@berlgruen.de</Link>
          </Typography>
        </Stack>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {copy.note}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
