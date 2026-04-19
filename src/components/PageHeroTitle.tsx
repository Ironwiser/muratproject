import { Box, Typography } from "@mui/material";

type PageHeroTitleProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
};

export function PageHeroTitle({ title, subtitle, kicker }: PageHeroTitleProps) {
  return (
    <Box sx={{ mb: { xs: 3, md: 4 } }}>
      {kicker ? (
        <Typography
          sx={{
            display: "inline-flex",
            px: 1.25,
            py: 0.35,
            mb: 1.2,
            borderRadius: 99,
            fontSize: "0.73rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "primary.main",
            border: "1px solid rgba(30,64,175,0.28)",
            backgroundColor: "rgba(30,64,175,0.08)",
          }}
        >
          {kicker}
        </Typography>
      ) : null}

      <Typography
        variant="h3"
        sx={{
          mb: 1,
          fontWeight: 800,
          letterSpacing: "-0.025em",
          lineHeight: 1.08,
          position: "relative",
          display: "inline-block",
          pr: 2,
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -10,
            width: { xs: 82, md: 108 },
            height: 4,
            borderRadius: 999,
            background: "linear-gradient(90deg, #1e40af 0%, #60a5fa 100%)",
            boxShadow: "0 6px 14px rgba(30,64,175,0.25)",
          },
        }}
      >
        {title}
      </Typography>

      {subtitle ? (
        <Typography sx={{ mt: 2.2, maxWidth: 980, lineHeight: 1.75, color: "text.secondary" }}>
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}
