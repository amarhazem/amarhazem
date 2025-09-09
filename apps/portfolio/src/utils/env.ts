import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables.");
}

export const env = parsed.data;
