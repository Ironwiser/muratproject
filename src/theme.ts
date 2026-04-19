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
    h1: { fontWeight: 700, letterSpacing: "-0.03em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
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
