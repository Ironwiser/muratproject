import { Box, Container, Link, Paper, Stack, Typography } from "@mui/material";
import { useLocale } from "../context/locale-context";

export function KontaktPage() {
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
      title: "Kontakt",
      intro: "Kontaktieren Sie uns direkt für Ihr Bau- oder Sanierungsvorhaben. Unser Team skizziert schnell den passenden Umfang, Zeitplan und Kostenrahmen.",
      company: "Firma",
      address: "Anschrift",
      phone: "Telefon",
      email: "E-Mail",
      note: "Sie planen ein Bauprojekt? Lassen Sie sich von unseren Fachkräften kompetent beraten. Gerne erstellen wir Ihnen ein unverbindliches Angebot.",
    },
    tr: {
      title: "İletişim",
      intro: "Projeleriniz için hızlı ve net iletişim kurun. Ekibimiz size uygun kapsam, zaman ve maliyet çerçevesinde yol haritası oluştursun.",
      company: "Firma",
      address: "Adres",
      phone: "Telefon",
      email: "E-Posta",
      note: "Bir proje mi planlıyorsunuz? Uzman ekibimizden danışmanlık alın. Size özel, bağlayıcı olmayan bir teklif hazırlayalım.",
    },
    en: {
      title: "Contact",
      intro: "Reach us directly for your project needs. Our team can quickly outline scope, timeline and budget options for you.",
      company: "Company",
      address: "Address",
      phone: "Phone",
      email: "E-Mail",
      note: "Planning a project? Get professional advice from our experts. We can prepare a non-binding offer tailored to your needs.",
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

        <Paper
          sx={{
            p: { xs: 2.25, md: 2.8 },
            borderRadius: 0,
            border: "1px solid rgba(15,23,42,0.14)",
            boxShadow: "none",
            backgroundColor: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.95fr) minmax(0, 1.05fr)" },
              gap: { xs: 2, md: 3.2 },
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                minHeight: { xs: 180, md: 240, lg: 280 },
                borderRadius: 1.5,
                backgroundImage: "url(/images/contact/contact-hero.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Box>
              <Stack spacing={1.4}>
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
              <Box sx={{ mt: 2.2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.72 }}>
                  {copy.note}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
}
