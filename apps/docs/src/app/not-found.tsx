import { NotFoundPage } from "nextra-theme-docs";
import type { ReactNode } from "react";

export default function NotFound(): ReactNode {
  return (
    <NotFoundPage content="Submit an issue" labels="broken-link">
      <h1>The page is not found</h1>
    </NotFoundPage>
  );
}
