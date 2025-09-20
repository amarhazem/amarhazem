"use client";

import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import { type ReactNode } from "react";

export default function RefreshRouteOnSave(): ReactNode {
  const router = useRouter();

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL="http://localhost:3000/admin"
    />
  );
}
