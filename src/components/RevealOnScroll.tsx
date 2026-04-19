import { Box, type BoxProps } from "@mui/material";
import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = BoxProps & {
  delayMs?: number;
};

export function RevealOnScroll({ children, delayMs = 0, sx, ...rest }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      className={visible ? "reveal visible" : "reveal"}
      sx={{ transitionDelay: `${delayMs}ms`, ...sx }}
      {...rest}
    >
      {children}
    </Box>
  );
}
