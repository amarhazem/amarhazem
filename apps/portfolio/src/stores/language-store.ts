import type { User } from "@/payload-types";
import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SupportedLanguage = "en" | "fr" | "ja";

interface LanguageState {
  language: SupportedLanguage;
  user: User | null;
  isInitialized: boolean;
  setLanguage: (language: SupportedLanguage) => void;
  setUser: (user: User | null) => void;
  initializeLanguage: () => void;
  updateUserLanguagePreference: (language: SupportedLanguage) => Promise<void>;
}

const detectBrowserLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") return "en";

  const browserLanguage = navigator.language.split("-")[0];
  if (browserLanguage === "ja" || browserLanguage === "jp") {
    return "ja";
  }
  if (["en", "fr"].includes(browserLanguage)) {
    return browserLanguage as SupportedLanguage;
  }
  return "en";
};

const saveUserLanguagePreference = async (
  language: SupportedLanguage,
): Promise<void> => {
  try {
    await fetch("/api/users/me", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        preferences: { language },
      }),
    });
  } catch (error) {
    console.error("Erreur lors de la sauvegarde de la langue:", error);
  }
};

// Fonction utilitaire pour sauvegarder dans les cookies
const saveLanguageToCookie = (
  language: SupportedLanguage,
  isInitialized: boolean = true,
) => {
  if (typeof document !== "undefined") {
    const cookieValue = JSON.stringify({
      state: {
        language,
        isInitialized,
      },
    });
    document.cookie = `language-preference=${encodeURIComponent(cookieValue)}; path=/; max-age=31536000; SameSite=Lax`;
  }
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "en",
      user: null,
      isInitialized: false,

      setLanguage: (language: SupportedLanguage) => {
        set({ language });

        // Sauvegarder dans les cookies pour next-intl
        saveLanguageToCookie(language);

        // Si utilisateur connecté, sauvegarder en base
        const { user } = get();
        if (user) {
          saveUserLanguagePreference(language);
        }

        // Recharger la page pour que next-intl détecte le changement
        if (typeof window !== "undefined") {
          // Délai court pour que l'utilisateur voie le changement
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      },

      setUser: (user: User | null) => {
        set({ user });

        // Si nouvel utilisateur connecté avec préférence, l'utiliser
        if (user?.preferences?.language) {
          const language =
            user.preferences.language === "jp"
              ? "ja"
              : user.preferences.language;
          if (["en", "fr", "ja"].includes(language)) {
            set({ language: language as SupportedLanguage });
          }
        }
      },

      initializeLanguage: () => {
        const { user, isInitialized } = get();

        if (isInitialized) return;

        // 1. Priorité : Utilisateur connecté avec préférence
        if (user?.preferences?.language) {
          const language =
            user.preferences.language === "jp"
              ? "ja"
              : user.preferences.language;
          if (["en", "fr", "ja"].includes(language)) {
            set({
              language: language as SupportedLanguage,
              isInitialized: true,
            });
            saveLanguageToCookie(language as SupportedLanguage);
            return;
          }
        }

        // 2. Fallback : Détection automatique du navigateur
        const detectedLanguage = detectBrowserLanguage();
        set({ language: detectedLanguage, isInitialized: true });
        saveLanguageToCookie(detectedLanguage);
      },

      updateUserLanguagePreference: async (language: SupportedLanguage) => {
        set({ language });

        const { user } = get();
        if (user) {
          await saveUserLanguagePreference(language);
        }
      },
    }),
    {
      name: "language-preference",
      partialize: (state) => ({
        language: state.language,
        isInitialized: state.isInitialized,
      }),
    },
  ),
);

// Hook utilitaire pour l'initialisation
export const useLanguageInitialization = () => {
  const { initializeLanguage, setUser, user } = useLanguageStore();

  // Initialiser la langue au montage du composant
  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  // Mettre à jour l'utilisateur quand il change
  useEffect(() => {
    setUser(user);
  }, [user, setUser]);
};
