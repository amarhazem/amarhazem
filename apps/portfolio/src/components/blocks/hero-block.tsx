import type { Hero } from "@/payload-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

interface HeroBlockProps {
  data: Hero;
}

export default function HeroBlock({ data }: HeroBlockProps): ReactNode {
  return (
    <Box component="section" id={data.anchorId ?? undefined}>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingBlock: "2rem",
        }}
      >
        {data.title && (
          <Typography sx={{ textAlign: data.textAlign }}>
            {data.title}
          </Typography>
        )}
        {data.subtitle && (
          <Typography sx={{ textAlign: data.textAlign }}>
            {data.subtitle}
          </Typography>
        )}
        {data.cta && (
          <Button
            color="primary"
            href={data.cta.href}
            target={data.cta.openInNewTab ? "_blank" : "_self"}
            variant="contained"
          >
            {data.cta.label}
          </Button>
        )}
      </Container>
    </Box>
  );
}
