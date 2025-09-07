import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

export default async function LandingPage(): Promise<ReactNode> {
  return (
    <Typography
      sx={{
        alignSelf: "center",
        textAlign: "center",
      }}
      variant="h2"
    >
      Amar Hazem | Full Stack Developer
    </Typography>
  );
}
