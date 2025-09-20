import type { Brand } from "@/payload-types";
import Button from "@mui/material/Button";
import type { ReactNode } from "react";

interface BrandBlockProps {
  data: Brand;
}

export default function BrandBlock({ data }: BrandBlockProps): ReactNode {
  return (
    <Button
      color="inherit"
      href="/"
      sx={{ fontSize: "1.5rem", textWrap: "nowrap" }}
    >
      {data.appName}
    </Button>
  );
}
