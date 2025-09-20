import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["en", "fr", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const languagePreference = cookieStore.get("language-preference");

  let locale: Locale = defaultLocale;

  if (languagePreference) {
    try {
      const parsed = JSON.parse(decodeURIComponent(languagePreference.value));
      if (locales.includes(parsed.state?.language as Locale)) {
        locale = parsed.state.language as Locale;
      }
    } catch {}
  }

  return {
    locale,
    messages: {},
  };
});
