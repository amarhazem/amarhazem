import type { Version } from "@/payload-types";
import Button from "@mui/material/Button";
import type { ReactNode } from "react";

interface VersionBlockProps {
  data: Version;
}

export default function VersionBlock({ data }: VersionBlockProps): ReactNode {
  return (
    <Button color="inherit" href={data.changelogUrl} target="_blank">
      {data.linkText} {data.versionNumber}
    </Button>
  );
}
