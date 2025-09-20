import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export default function NotFound(): ReactNode {
  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingBlock: "2rem",
      }}
    >
      <Typography sx={{ fontSize: "2rem" }}>404 - Page Not Found</Typography>
      <Link href="/">Go to home</Link>
    </Container>
  );
}
