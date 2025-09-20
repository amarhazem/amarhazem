import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url(),
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
