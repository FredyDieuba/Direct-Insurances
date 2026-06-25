import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";
export type Theme = "light" | "dark";

type Ctx = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  toggleLang: () => void;
  toggleTheme: () => void;
  t: (key: string) => string;
};

const UIPrefsContext = createContext<Ctx | null>(null);

const dict: Record<string, { fr: string; en: string }> = {
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.solutions": { fr: "Nos Solutions", en: "Our Solutions" },
  "nav.agences": { fr: "Nos Agences", en: "Our Offices" },
  "nav.actualites": { fr: "Actualités", en: "News" },
  "nav.about": { fr: "À Propos", en: "About" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.devis": { fr: "Devis Gratuit", en: "Free Quote" },
  "sol.personnes": { fr: "Assurance de Personnes", en: "Personal Insurance" },
  "sol.maladie": { fr: "Assurance Maladie", en: "Health Insurance" },
  "sol.iardt": { fr: "Assurance IARDT", en: "Property & Casualty" },
  "sol.risques": { fr: "Gestion des Risques", en: "Risk Management" },
  "banner.text": {
    fr: "DIRECT INSURANCE célèbre 30 ans d'engagement & d'excellence au service des assurés camerounais — Depuis 1996 ✦",
    en: "DIRECT INSURANCE celebrates 30 years of commitment & excellence — Since 1996 ✦",
  },
  "banner.badge": { fr: "30 ANS", en: "30 YEARS" },
  "hero.eyebrow": { fr: "Votre Courtier-Conseil de Confiance · Depuis 1996", en: "Your Trusted Insurance Broker · Since 1996" },
  "hero.title": { fr: "Le Gestionnaire de votre Patrimoine d'Assurance", en: "The Manager of Your Insurance Heritage" },
  "hero.sub": { fr: "Assureur de votre patrimoine, protecteur de votre avenir.", en: "Insurer of your assets, protector of your future." },
  "hero.body": {
    fr: "DIRECT INSURANCE SA vous accompagne depuis plus de 30 ans dans la gestion, le conseil et la maîtrise de vos contrats d'assurance — pour les particuliers, les familles et les entreprises du Cameroun.",
    en: "DIRECT INSURANCE SA has supported you for over 30 years in managing, advising and mastering your insurance contracts — for individuals, families and businesses in Cameroon.",
  },
  "hero.cta1": { fr: "Obtenir un Devis Gratuit", en: "Get a Free Quote" },
  "hero.cta2": { fr: "Découvrir nos Solutions", en: "Explore our Solutions" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "common.en_notice": {
    fr: "",
    en: "🌐 English version of this page is coming soon. The full page content is available in French.",
  },
};

export function UIPrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    try {
      const l = (localStorage.getItem("di_lang") as Lang | null) ?? "fr";
      const th = (localStorage.getItem("di_theme") as Theme | null) ?? "light";
      setLangState(l);
      setThemeState(th);
      document.documentElement.lang = l;
      document.documentElement.classList.toggle("dark", th === "dark");
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("di_lang", l);
      document.documentElement.lang = l;
    } catch {}
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("di_theme", t);
      document.documentElement.classList.toggle("dark", t === "dark");
    } catch {}
  }, []);

  const t = useCallback((key: string) => dict[key]?.[lang] ?? key, [lang]);

  return (
    <UIPrefsContext.Provider
      value={{
        lang,
        theme,
        setLang,
        setTheme,
        toggleLang: () => setLang(lang === "fr" ? "en" : "fr"),
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
        t,
      }}
    >
      {children}
    </UIPrefsContext.Provider>
  );
}

export function useUIPrefs() {
  const ctx = useContext(UIPrefsContext);
  if (!ctx) {
    // Safe fallback during SSR
    return {
      lang: "fr" as Lang,
      theme: "light" as Theme,
      setLang: () => {},
      setTheme: () => {},
      toggleLang: () => {},
      toggleTheme: () => {},
      t: (k: string) => dict[k]?.fr ?? k,
    };
  }
  return ctx;
}
