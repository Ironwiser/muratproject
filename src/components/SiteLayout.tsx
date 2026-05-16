import { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { useLocale } from "../context/use-locale";
import { SeoHead } from "./SeoHead";

const ABOUT_SUBMENU_ID = "about-submenu";
const MOBILE_ABOUT_SUBMENU_ID = "mobile-about-submenu";

const footerSectionTitleSx = {
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.42)",
  mb: 1.75,
} as const;

const NAVBAR_SCROLL_DOWN = 40;
const NAVBAR_SCROLL_UP = 8;
const BACK_TO_TOP_SHOW = 240;
const BACK_TO_TOP_HIDE = 160;

const footerLinkSx = {
  color: "rgba(255,255,255,0.78)",
  textDecoration: "none",
  fontSize: { xs: "0.86rem", md: "0.875rem" },
  fontWeight: 500,
  display: "inline-block",
  py: 0.4,
  transition: "color 180ms ease, transform 180ms ease",
  "&:hover": {
    color: "#93c5fd",
    transform: "translateX(4px)",
  },
} as const;

export function SiteLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrolledRef = useRef(false);
  const showBackToTopRef = useRef(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [aboutMenuAnchor, setAboutMenuAnchor] = useState<HTMLElement | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileAboutMenuOpen, setMobileAboutMenuOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const theme = useTheme();
  const isMobileNav = useMediaQuery(theme.breakpoints.down("md"));

  const copy = {
    de: {
      home: "Startseite",
      aboutPage: "Über Uns",
      servicesPage: "Leistung",
      contact: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutz",
      footerBrand: "Berlgrün GmbH",
      footerTagline: "Bau, Sanierung und Pflege in Berlin",
      footerNavTitle: "Navigation",
      footerAboutTitle: "Unternehmen",
      footerLegalTitle: "Rechtliches",
      footerCopy: "© Urheberrecht. Alle Rechte vorbehalten.",
      footerCreditPrefix: "Website by",
      footerCreditName: "Ömür Genç",
      languageLabel: "Sprache wählen",
      navLabel: "Hauptnavigation",
      menuItems: [
        { label: "Unternehmensprofil", to: "/kurumsal/about" },
        { label: "Geschichte", to: "/kurumsal/history" },
        { label: "Management", to: "/kurumsal/management" },
        { label: "Qualitätspolitik", to: "/kurumsal/quality-policy" },
        { label: "Karriere", to: "/kurumsal/careers" },
      ],
    },
    tr: {
      home: "Anasayfa",
      aboutPage: "Hakkımızda",
      servicesPage: "Hizmetler",
      contact: "İletişim",
      imprint: "Künye",
      privacy: "Gizlilik",
      footerBrand: "Berlgrün GmbH",
      footerTagline: "Berlin'de inşaat, renovasyon ve bakım",
      footerNavTitle: "Menü",
      footerAboutTitle: "Kurumsal",
      footerLegalTitle: "Yasal",
      footerCopy: "© Telif hakkı. Tüm hakları saklıdır.",
      footerCreditPrefix: "Web sitesi:",
      footerCreditName: "Ömür Genç",
      languageLabel: "Dil seçin",
      navLabel: "Ana menü",
      menuItems: [
        { label: "Şirket Profilimiz", to: "/kurumsal/about" },
        { label: "Tarihçemiz", to: "/kurumsal/history" },
        { label: "Yönetim Kurulu", to: "/kurumsal/management" },
        { label: "Kalite Politikası", to: "/kurumsal/quality-policy" },
        { label: "İnsan Kaynakları", to: "/kurumsal/careers" },
      ],
    },
    en: {
      home: "Home",
      aboutPage: "About Us",
      servicesPage: "Services",
      contact: "Contact",
      imprint: "Imprint",
      privacy: "Privacy",
      footerBrand: "Berlgrün GmbH",
      footerTagline: "Construction, renovation and maintenance in Berlin",
      footerNavTitle: "Explore",
      footerAboutTitle: "Company",
      footerLegalTitle: "Legal",
      footerCopy: "© Copyright. All rights reserved.",
      footerCreditPrefix: "Website by",
      footerCreditName: "Ömür Genç",
      languageLabel: "Choose language",
      navLabel: "Main navigation",
      menuItems: [
        { label: "Company Profile", to: "/kurumsal/about" },
        { label: "Our History", to: "/kurumsal/history" },
        { label: "Management", to: "/kurumsal/management" },
        { label: "Quality Policy", to: "/kurumsal/quality-policy" },
        { label: "Careers", to: "/kurumsal/careers" },
      ],
    },
  }[locale];

  useEffect(() => {
    let frame = 0;

    const syncScrollState = () => {
      const y = window.scrollY;

      const nextScrolled = scrolledRef.current ? y > NAVBAR_SCROLL_UP : y > NAVBAR_SCROLL_DOWN;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      const nextShowBackToTop = showBackToTopRef.current ? y > BACK_TO_TOP_HIDE : y > BACK_TO_TOP_SHOW;
      if (nextShowBackToTop !== showBackToTopRef.current) {
        showBackToTopRef.current = nextShowBackToTop;
        setShowBackToTop(nextShowBackToTop);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncScrollState();
      });
    };

    syncScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setMobileAboutMenuOpen(false);
  };

  const openAboutMenu = (anchor: HTMLElement) => {
    setAboutMenuAnchor(anchor);
    setAboutMenuOpen(true);
  };

  const closeAboutMenu = () => {
    setAboutMenuOpen(false);
  };

  const localeSelect = (
    <FormControl size="small" sx={{ minWidth: { xs: "100%", md: 108, lg: 116 } }}>
      <Select
        value={locale}
        variant="outlined"
        onChange={(e: SelectChangeEvent<string>) => {
          const v = e.target.value;
          if (v === "de" || v === "tr" || v === "en") setLocale(v);
        }}
        inputProps={{ "aria-label": copy.languageLabel }}
        sx={{
          borderRadius: "10px",
          transition: "none",
          fontSize: { xs: "0.9rem", md: "0.88rem", lg: "0.95rem" },
          fontWeight: 600,
          color: isMobileNav ? "text.primary" : "rgba(255,255,255,0.9)",
          "& .MuiSelect-select": { py: { xs: 1.1, md: 1, lg: 1.1 }, px: { xs: 1.35, md: 1.15, lg: 1.35 } },
          "& .MuiSelect-icon": { color: "inherit" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: isMobileNav ? "divider" : "transparent" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: isMobileNav ? "primary.main" : "transparent" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: isMobileNav ? "primary.main" : "transparent" },
        }}
      >
        <MenuItem value="de">Deutsch</MenuItem>
        <MenuItem value="tr">Türkçe</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </FormControl>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        "--layout-header-height": "62px",
      }}
    >
      <SeoHead />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: scrolled ? "rgba(10,12,17,0.97)" : "rgba(10,12,17,0.82)",
          transition: "background-color 260ms ease, box-shadow 260ms ease",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.28)" : "none",
          backdropFilter: "blur(7px)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 62, md: 62 },
            gap: 2,
            px: { xs: 2, sm: 3, md: 6 },
          }}
        >
          {isMobileNav ? (
            <IconButton
              color="inherit"
              aria-label={mobileNavOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMobileNavOpen((open) => !open)}
              sx={{ mr: 0.5, flexShrink: 0 }}
            >
              {mobileNavOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : null}
          <Box
            component={RouterLink}
            to="/"
            aria-label="Berlgrün GmbH"
            onClick={closeMobileNav}
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
              ml: { md: 3 },
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
            }}
          >
            <Button component={RouterLink} to="/" color="inherit" sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}>
              {copy.home}
            </Button>
            <Button component={RouterLink} to="/leistung" color="inherit" sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}>
              {copy.servicesPage}
            </Button>
            <Box
              onMouseEnter={(e) => openAboutMenu(e.currentTarget)}
              onMouseLeave={closeAboutMenu}
              sx={{ position: "relative", display: "inline-flex" }}
            >
              <Button
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
                aria-haspopup="menu"
                aria-expanded={aboutMenuOpen}
                aria-controls={aboutMenuOpen ? ABOUT_SUBMENU_ID : undefined}
                onClick={(e) => {
                  if (aboutMenuOpen) {
                    closeAboutMenu();
                  } else {
                    openAboutMenu(e.currentTarget);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") closeAboutMenu();
                }}
                sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}
              >
                {copy.aboutPage}
              </Button>
              <Popper
                open={aboutMenuOpen}
                anchorEl={aboutMenuAnchor}
                placement="bottom-start"
                disablePortal
                sx={{ zIndex: (t) => t.zIndex.modal }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: 0,
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: -8,
                      height: 8,
                    },
                  }}
                >
                  <MenuList id={ABOUT_SUBMENU_ID} dense sx={{ backgroundColor: "#0f3d91", py: 0.5, minWidth: 210 }}>
                    {copy.menuItems.map((item) => (
                      <MenuItem
                        key={item.to}
                        component={RouterLink}
                        to={item.to}
                        onClick={closeAboutMenu}
                        sx={{
                          color: "#fff",
                          fontSize: "0.78rem",
                          minHeight: 34,
                          "@media (hover: hover) and (pointer: fine)": {
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.18)" },
                          },
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Popper>
            </Box>
            <Button
              component={RouterLink}
              to="/kontakt"
              color="inherit"
              sx={{ fontSize: { xs: "0.76rem", md: "0.88rem" }, minWidth: "auto", px: { xs: 1.05, md: 1.2 }, py: 0.5, fontWeight: 700 }}
            >
              {copy.contact}
            </Button>
          </Stack>
          <Stack direction="row" spacing={0.6} sx={{ ml: "auto", alignItems: "center", color: "rgba(255,255,255,0.9)", display: { xs: "none", md: "flex" } }}>
            {localeSelect}
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isMobileNav && mobileNavOpen}
        onClose={closeMobileNav}
        slotProps={{
          paper: {
            sx: {
              width: "min(320px, 88vw)",
              pt: 1,
              pb: 2,
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography sx={{ fontWeight: 800, fontSize: "1rem", mb: 1.5 }}>{copy.footerBrand}</Typography>
          {localeSelect}
        </Box>
        <Divider />
        <Box component="nav" aria-label={copy.navLabel}>
        <List sx={{ py: 0.5 }}>
          <ListItemButton component={RouterLink} to="/" onClick={closeMobileNav}>
            <ListItemText primary={copy.home} slotProps={{ primary: { sx: { fontWeight: 700 } } }} />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/leistung" onClick={closeMobileNav}>
            <ListItemText primary={copy.servicesPage} slotProps={{ primary: { sx: { fontWeight: 700 } } }} />
          </ListItemButton>
          <ListItemButton
            onClick={() => setMobileAboutMenuOpen((open) => !open)}
            aria-expanded={mobileAboutMenuOpen}
            aria-controls={MOBILE_ABOUT_SUBMENU_ID}
          >
            <ListItemText primary={copy.aboutPage} slotProps={{ primary: { sx: { fontWeight: 700 } } }} />
            {mobileAboutMenuOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </ListItemButton>
          <Collapse in={mobileAboutMenuOpen} timeout="auto" unmountOnExit>
            <List id={MOBILE_ABOUT_SUBMENU_ID} disablePadding>
              {copy.menuItems.map((item) => (
                <ListItemButton key={item.to} component={RouterLink} to={item.to} onClick={closeMobileNav} sx={{ pl: 4 }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <ListItemButton component={RouterLink} to="/kontakt" onClick={closeMobileNav}>
            <ListItemText primary={copy.contact} slotProps={{ primary: { sx: { fontWeight: 700 } } }} />
          </ListItemButton>
        </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          pt: "var(--layout-header-height)",
        }}
      >
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          position: "relative",
          color: "#fff",
          background: "linear-gradient(165deg, #0c0e14 0%, #101218 45%, #080a0f 100%)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 10% -20%, rgba(30,64,175,0.22) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 95% 110%, rgba(96,165,250,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            height: 3,
            background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 45%, #60a5fa 100%)",
          }}
        />
        <Container maxWidth="xl" sx={{ position: "relative", py: { xs: 4, md: 5 }, px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(260px, 340px) 1fr" },
              columnGap: { md: 6, lg: 10 },
              rowGap: { xs: 3.5, md: 0 },
              alignItems: "start",
            }}
          >
            <Box sx={{ maxWidth: 360 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{ display: "inline-flex", mb: 2, textDecoration: "none" }}
              >
                <Box
                  component="img"
                  src="/images/brand-logo.svg"
                  alt={copy.footerBrand}
                  sx={{
                    height: "auto",
                    maxHeight: { xs: 38, md: 44 },
                    width: "auto",
                    maxWidth: { xs: 150, md: 172 },
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.95,
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", md: "0.95rem" },
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.88)",
                  lineHeight: 1.45,
                  maxWidth: 320,
                  mb: 2.25,
                }}
              >
                {copy.footerTagline}
              </Typography>
              <Stack spacing={1.25}>
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 18, color: "#60a5fa", mt: 0.15, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                    Mohriner Allee 52–54, 12347 Berlin
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                  <EmailOutlinedIcon sx={{ fontSize: 18, color: "#60a5fa", flexShrink: 0 }} />
                  <Link href="mailto:info@berlgruen.de" sx={{ ...footerLinkSx, py: 0 }}>
                    info@berlgruen.de
                  </Link>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(3, minmax(0, 1fr))",
                },
                columnGap: { xs: 3, sm: 5, md: 6, lg: 8 },
                rowGap: { xs: 3, sm: 0 },
                width: "100%",
                maxWidth: { md: 720 },
                ml: { md: "auto" },
              }}
            >
              <Box component="nav" aria-label={copy.footerNavTitle}>
                <Typography sx={footerSectionTitleSx}>{copy.footerNavTitle}</Typography>
                <Stack spacing={0.15}>
                  <Link component={RouterLink} to="/" sx={footerLinkSx}>
                    {copy.home}
                  </Link>
                  <Link component={RouterLink} to="/leistung" sx={footerLinkSx}>
                    {copy.servicesPage}
                  </Link>
                  <Link component={RouterLink} to="/kontakt" sx={footerLinkSx}>
                    {copy.contact}
                  </Link>
                </Stack>
              </Box>

              <Box component="nav" aria-label={copy.footerAboutTitle}>
                <Typography sx={footerSectionTitleSx}>{copy.footerAboutTitle}</Typography>
                <Stack spacing={0.15}>
                  {copy.menuItems.map((item) => (
                    <Link key={item.to} component={RouterLink} to={item.to} sx={footerLinkSx}>
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ gridColumn: { xs: "1 / -1", sm: "auto" } }}>
                <Typography sx={footerSectionTitleSx}>{copy.footerLegalTitle}</Typography>
                <Stack spacing={0.15} direction={{ xs: "row", sm: "column" }} useFlexGap sx={{ flexWrap: "wrap", gap: { xs: 2, sm: 0 } }}>
                  <Link component={RouterLink} to="/impressum" sx={footerLinkSx}>
                    {copy.imprint}
                  </Link>
                  <Link component={RouterLink} to="/datenschutz" sx={footerLinkSx}>
                    {copy.privacy}
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: { xs: 3, md: 3.5 }, borderColor: "rgba(255,255,255,0.1)" }} />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.75, sm: 2 }}
            useFlexGap
            sx={{
              flexWrap: "wrap",
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", letterSpacing: "0.02em" }}>
              {copy.footerCopy}
            </Typography>
            <Typography
              component="span"
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.52)", fontSize: "0.8rem", lineHeight: 1.4 }}
            >
              {copy.footerCreditPrefix}{" "}
              <Link
                href="https://omurgenc.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${copy.footerCreditPrefix} ${copy.footerCreditName}`}
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 180ms ease",
                  "&:hover": { color: "#93c5fd" },
                }}
              >
                {copy.footerCreditName}
              </Link>
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
          right: { xs: 12, sm: 16 },
          bottom: { xs: 12, sm: 16 },
          minWidth: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          color: "#fff",
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? "visible" : "hidden",
          transform: showBackToTop ? "translateY(0)" : "translateY(10px)",
          pointerEvents: showBackToTop ? "auto" : "none",
          transition: "opacity 220ms ease, transform 220ms ease, visibility 220ms ease",
          zIndex: 1200,
          "&:hover": { backgroundColor: "#0a3a86" },
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Box>
  );
}
