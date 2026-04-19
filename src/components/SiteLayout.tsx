import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Link,
  Menu,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { useLocale } from "../context/locale-context";

export function SiteLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [kurumsalAnchor, setKurumsalAnchor] = useState<HTMLElement | null>(null);
  const { locale, setLocale } = useLocale();

  const copy = {
    de: {
      home: "Startseite",
      aboutPage: "Über Uns",
      servicesPage: "Leistung",
      corporate: "Unternehmen",
      contact: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutz",
      footerBrand: "Berlgrün GmbH",
      footerCopy: "©Urheberrecht. Alle Rechte vorbehalten.",
      menuItems: [
        { label: "Über uns", to: "/kurumsal/about" },
        { label: "Geschichte", to: "/kurumsal/history" },
        { label: "Management", to: "/kurumsal/management" },
        { label: "Karriere", to: "/kurumsal/careers" },
        { label: "Qualitätspolitik", to: "/kurumsal/quality-policy" },
      ],
    },
    tr: {
      home: "Anasayfa",
      aboutPage: "Hakkımızda",
      servicesPage: "Hizmetler",
      corporate: "Kurumsal",
      contact: "İletişim",
      imprint: "Künye",
      privacy: "Gizlilik",
      footerBrand: "Berlgrün GmbH",
      footerCopy: "©Telif hakkı. Tüm hakları saklıdır.",
      menuItems: [
        { label: "Hakkımızda", to: "/kurumsal/about" },
        { label: "Tarihçemiz", to: "/kurumsal/history" },
        { label: "Yönetim Kurulu", to: "/kurumsal/management" },
        { label: "İnsan Kaynakları", to: "/kurumsal/careers" },
        { label: "Kalite Politikası", to: "/kurumsal/quality-policy" },
      ],
    },
    en: {
      home: "Home",
      aboutPage: "About Us",
      servicesPage: "Services",
      corporate: "Corporate",
      contact: "Contact",
      imprint: "Imprint",
      privacy: "Privacy",
      footerBrand: "Berlgrün GmbH",
      footerCopy: "©Copyright. All rights reserved.",
      menuItems: [
        { label: "About Us", to: "/kurumsal/about" },
        { label: "Our History", to: "/kurumsal/history" },
        { label: "Management", to: "/kurumsal/management" },
        { label: "Careers", to: "/kurumsal/careers" },
        { label: "Quality Policy", to: "/kurumsal/quality-policy" },
      ],
    },
  }[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(10,12,17,0.97)" : "rgba(10,12,17,0.82)",
          transition: "all 260ms ease",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.28)" : "none",
          backdropFilter: "blur(7px)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 62, md: scrolled ? 62 : 68 },
            gap: 2,
            transition: "all 260ms ease",
            px: { xs: 3.5, md: 6 },
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            aria-label="Berlgrün GmbH"
            sx={{
              display: "flex",
              alignItems: "center",
              flex: { xs: "1 1 auto", md: "0 1 auto" },
              minWidth: 0,
              textDecoration: "none",
              py: 0.5,
            }}
          >
            <Box
              component="img"
              src="/images/brand-logo.svg"
              alt="Berlgrün GmbH"
              sx={{
                height: "auto",
                maxHeight: { xs: 34, sm: 38, md: 42 },
                width: "auto",
                maxWidth: { xs: 136, sm: 150, md: 170 },
                objectFit: "contain",
                display: "block",
                flexShrink: 0,
              }}
            />
          </Box>
          <Stack
            direction="row"
            spacing={0.15}
            sx={{
              ml: { xs: 1, md: 3 },
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            <Button component={RouterLink} to="/" color="inherit" sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}>
              {copy.home}
            </Button>
            <Button component={RouterLink} to="/ueber-uns" color="inherit" sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}>
              {copy.aboutPage}
            </Button>
            <Button component={RouterLink} to="/leistung" color="inherit" sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}>
              {copy.servicesPage}
            </Button>
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              onMouseEnter={(e) => setKurumsalAnchor(e.currentTarget)}
              sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}
            >
              {copy.corporate}
            </Button>
            <Button
              component={RouterLink}
              to="/kontakt"
              color="inherit"
              sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}
            >
              {copy.contact}
            </Button>
          </Stack>
          <Stack direction="row" spacing={0.6} sx={{ ml: "auto", alignItems: "center", color: "rgba(255,255,255,0.9)" }}>
            <FormControl
              size="small"
              sx={{
                minWidth: { md: 108, lg: 116 },
                display: { xs: "none", md: "block" },
              }}
            >
              <Select
                value={locale}
                variant="outlined"
                onChange={(e: SelectChangeEvent<string>) => {
                  const v = e.target.value;
                  if (v === "de" || v === "tr" || v === "en") setLocale(v);
                }}
                inputProps={{ "aria-label": "Sprache" }}
                sx={{
                  borderRadius: "10px",
                  transition: "none",
                  fontSize: { md: "0.88rem", lg: "0.95rem" },
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  "& .MuiSelect-select": { py: { md: 1, lg: 1.1 }, px: { md: 1.15, lg: 1.35 } },
                  "& .MuiSelect-icon": { color: "inherit" },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&:hover": { color: "#fff", backgroundColor: "transparent" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "&.Mui-focused": { color: "#fff", backgroundColor: "transparent" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              >
                <MenuItem value="de">Deutsch</MenuItem>
                <MenuItem value="tr">Türkçe</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={kurumsalAnchor}
        open={Boolean(kurumsalAnchor)}
        onClose={() => setKurumsalAnchor(null)}
        slotProps={{
          list: {
            onMouseLeave: () => setKurumsalAnchor(null),
            sx: { backgroundColor: "#0f3d91", py: 0.5, minWidth: 210 },
          },
          paper: { sx: { borderRadius: 0 } },
        }}
      >
        {copy.menuItems.map((item) => (
          <MenuItem
            key={item.label}
            component={RouterLink}
            to={item.to}
            onClick={() => setKurumsalAnchor(null)}
            sx={{
              color: "#fff",
              fontSize: "0.78rem",
              minHeight: 34,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.18)" },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      <Box component="main" sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </Box>

      <Box component="footer" sx={{ backgroundColor: "#101218", color: "#fff" }}>
        <Container maxWidth="xl" sx={{ py: 1.2 }}>
          <Stack direction="row" spacing={1.2} useFlexGap sx={{ flexWrap: "wrap", alignItems: "center" }}>
            <Typography sx={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.2, mr: 0.2 }}>
              {copy.footerBrand}
            </Typography>
            <Link component={RouterLink} to="/impressum" color="inherit" underline="hover">
              {copy.imprint}
            </Link>
            <Link component={RouterLink} to="/datenschutz" color="inherit" underline="hover">
              {copy.privacy}
            </Link>
            <Link component={RouterLink} to="/kontakt" color="inherit" underline="hover">
              {copy.contact}
            </Link>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.2 }}>
              {copy.footerCopy}
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Nach oben"
        sx={{
          position: "fixed",
          right: 16,
          bottom: 16,
          minWidth: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          color: "#fff",
          "&:hover": { backgroundColor: "#0a3a86" },
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Box>
  );
}
