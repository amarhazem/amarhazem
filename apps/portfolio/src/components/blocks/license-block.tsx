import type { License } from "@/payload-types";
import Button from "@mui/material/Button";
import type { ReactNode } from "react";

interface LicenseBlockProps {
  data: License;
}

export default function LicenseBlock({ data }: LicenseBlockProps): ReactNode {
  return (
    <Button color="inherit" href={data.licenseUrl ?? ""} target="_blank">
      {data.licenseText}
    </Button>
  );
}
