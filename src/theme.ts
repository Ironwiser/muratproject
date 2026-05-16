import { createTheme } from "@mui/material/styles";

export const siteTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0d47a1" },
    secondary: { main: "#111318" },
    background: { default: "#f1f1f1", paper: "#ffffff" },
  },
  typography: {
    fontFamily: '"Noto Sans", "Segoe UI", Arial, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.03em", fontSize: "clamp(1.85rem, 5vw, 3rem)" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em", fontSize: "clamp(1.55rem, 4.2vw, 2.4rem)" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em", fontSize: "clamp(1.35rem, 3.5vw, 2rem)" },
    h4: { fontWeight: 700, fontSize: "clamp(1.15rem, 2.8vw, 1.5rem)" },
    h5: { fontWeight: 700, fontSize: "clamp(1.02rem, 2.4vw, 1.25rem)" },
    h6: { fontWeight: 700, fontSize: "clamp(0.95rem, 2vw, 1.1rem)" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          fontWeight: 700,
        },
      },
    },
  },
});
