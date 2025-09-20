"server-only";

import { z } from "zod";

const envSchema = z.object({
  APP_URL: z.url(),
  BLOB_READ_WRITE_TOKEN: z.string(),
  DATABASE_URL: z.string(),
  NODE_ENV: z.string(),
  PAYLOAD_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables.");
}

export default parsed.data;
