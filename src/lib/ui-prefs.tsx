import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const UIPrefsContext = createContext<Ctx | null>(null);

const dict: Record<string, { fr: string; en: string }> = {
  // NAV
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.solutions": { fr: "Nos Solutions", en: "Our Solutions" },
  "nav.agences": { fr: "Nos Agences", en: "Our Offices" },
  "nav.actualites": { fr: "Actualités", en: "News" },
  "nav.about": { fr: "À Propos", en: "About" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.devis": { fr: "Devis Gratuit", en: "Free Quote" },

  // SOLUTIONS
  "sol.personnes": { fr: "Assurance de Personnes", en: "Personal Insurance" },
  "sol.personnes.desc": { fr: "Protégez les personnes qui comptent et préparez l'avenir.", en: "Protect those who matter and prepare for the future." },
  "sol.maladie": { fr: "Assurance Maladie", en: "Health Insurance" },
  "sol.maladie.desc": { fr: "Couverture santé complète, individus, familles et entreprises.", en: "Comprehensive health coverage for individuals, families and companies." },
  "sol.iardt": { fr: "Assurance IARDT", en: "Property & Casualty" },
  "sol.iardt.desc": { fr: "Protection de vos biens, véhicules, locaux et marchandises.", en: "Protection for your property, vehicles, premises and goods." },
  "sol.risques": { fr: "Gestion des Risques", en: "Risk Management" },
  "sol.risques.desc": { fr: "Audit, conseil et gestion de patrimoine d'assurance.", en: "Audit, consulting and insurance heritage management." },

  // BANNER
  "banner.text": {
    fr: "DIRECT INSURANCE célèbre 30 ans d'engagement & d'excellence au service des assurés camerounais — Depuis 1996",
    en: "DIRECT INSURANCE celebrates 30 years of commitment & excellence — Since 1996",
  },
  "banner.badge": { fr: "30 ANS", en: "30 YEARS" },

  // HERO
  "hero.eyebrow": { fr: "Votre Courtier-Conseil de Confiance · Depuis 1996", en: "Your Trusted Insurance Broker · Since 1996" },
  "hero.title": { fr: "Le Gestionnaire de votre Patrimoine d'Assurance", en: "The Manager of Your Insurance Heritage" },
  "hero.sub": { fr: "Assureur de votre patrimoine, protecteur de votre avenir.", en: "Insurer of your assets, protector of your future." },
  "hero.body": {
    fr: "DIRECT INSURANCE SA vous accompagne depuis plus de 30 ans dans la gestion, le conseil et la maîtrise de vos contrats d'assurance — pour les particuliers, les familles et les entreprises du Cameroun.",
    en: "DIRECT INSURANCE SA has supported you for over 30 years in managing, advising and mastering your insurance contracts — for individuals, families and businesses in Cameroon.",
  },
  "hero.cta1": { fr: "Obtenir un Devis Gratuit", en: "Get a Free Quote" },
  "hero.cta2": { fr: "Découvrir nos Solutions", en: "Explore our Solutions" },
  "hero.video": { fr: "Voir la vidéo", en: "Watch the video" },

  // WHY
  "why.eyebrow": { fr: "Pourquoi nous choisir", en: "Why Choose Us" },
  "why.title": { fr: "Une expertise, des engagements, une signature", en: "Expertise, commitment, a signature" },
  "why.sub": { fr: "Cinq raisons de confier votre patrimoine d'assurance à Direct Insurance.", en: "Five reasons to entrust your insurance heritage to Direct Insurance." },
  "why.f1.t": { fr: "30 ans d'expertise", en: "30 years of expertise" },
  "why.f1.d": { fr: "Une connaissance fine du marché camerounais et de la zone CIMA.", en: "Deep knowledge of the Cameroonian market and the CIMA zone." },
  "why.f2.t": { fr: "Sinistres traités rapidement", en: "Fast claims handling" },
  "why.f2.d": { fr: "Une équipe dédiée pour défendre vos intérêts auprès des assureurs.", en: "A dedicated team to defend your interests with insurers." },
  "why.f3.t": { fr: "Accompagnement personnalisé", en: "Personalized support" },
  "why.f3.d": { fr: "Un conseiller référent, joignable et à l'écoute, pour chaque contrat.", en: "A dedicated advisor, reachable and attentive, for every contract." },
  "why.f4.t": { fr: "Couverture nationale", en: "National coverage" },
  "why.f4.d": { fr: "Trois agences à Yaoundé (Bastos, Olembe) et Douala.", en: "Three offices in Yaoundé (Bastos, Olembe) and Douala." },
  "why.f5.t": { fr: "Solidité financière", en: "Financial strength" },
  "why.f5.d": { fr: "Membre SOGEP GROUP, agréé MINFI N°03/038/CF/A.", en: "Member of SOGEP GROUP, approved by MINFI N°03/038/CF/A." },

  // SOLUTIONS SECTION
  "solutions.eyebrow": { fr: "Nos Solutions", en: "Our Solutions" },
  "solutions.title": { fr: "Quatre pôles, une expertise unique", en: "Four pillars, one unique expertise" },
  "solutions.sub": { fr: "Des solutions adaptées à chaque profil — particuliers, familles, professionnels et grandes entreprises.", en: "Tailored solutions for every profile — individuals, families, professionals and large companies." },
  "solutions.discover": { fr: "Découvrir", en: "Discover" },

  // STATS
  "stats.years": { fr: "Ans d'expertise", en: "Years of expertise" },
  "stats.clients": { fr: "Clients", en: "Clients" },
  "stats.offices": { fr: "Agences", en: "Offices" },
  "stats.satisfaction": { fr: "Taux de satisfaction", en: "Satisfaction rate" },

  // TESTIMONIALS
  "testimonials.eyebrow": { fr: "Témoignages", en: "Testimonials" },
  "testimonials.title": { fr: "Ils nous font confiance", en: "They trust us" },

  // CTA FINAL
  "cta.title": { fr: "Prêt à protéger ce qui compte ?", en: "Ready to protect what matters?" },
  "cta.sub": { fr: "Obtenez votre devis gratuit en quelques minutes. Un conseiller vous recontacte sous 24h.", en: "Get your free quote in minutes. An advisor will contact you within 24 hours." },
  "cta.start": { fr: "Démarrer mon devis", en: "Start my quote" },
  "cta.contact": { fr: "Nous contacter", en: "Contact us" },

  // CONTACT
  "contact.eyebrow": { fr: "Contact", en: "Contact" },
  "contact.title": { fr: "Parlons de votre projet", en: "Let's talk about your project" },
  "contact.sub": { fr: "Notre équipe vous répond sous 24h. Pour une réponse immédiate, contactez-nous sur WhatsApp.", en: "Our team responds within 24h. For an instant reply, message us on WhatsApp." },
  "contact.form.title": { fr: "Envoyez-nous un message", en: "Send us a message" },
  "contact.form.name": { fr: "Nom complet", en: "Full name" },
  "contact.form.email": { fr: "Email", en: "Email" },
  "contact.form.phone": { fr: "Téléphone", en: "Phone" },
  "contact.form.subject": { fr: "Sujet", en: "Subject" },
  "contact.form.message": { fr: "Message", en: "Message" },
  "contact.form.send": { fr: "Envoyer le message", en: "Send the message" },
  "contact.form.sent.title": { fr: "Message envoyé !", en: "Message sent!" },
  "contact.form.sent.desc": { fr: "Votre client email vient de s'ouvrir. Sinon, écrivez-nous directement à directinsurance2002@yahoo.fr.", en: "Your email client just opened. Otherwise, write to us at directinsurance2002@yahoo.fr." },
  "contact.address": { fr: "Adresse", en: "Address" },
  "contact.phone": { fr: "Téléphone", en: "Phone" },
  "contact.email": { fr: "Email", en: "Email" },
  "contact.hours": { fr: "Horaires", en: "Hours" },
  "contact.hours.week": { fr: "Lun–Ven : 8h–17h", en: "Mon–Fri: 8am–5pm" },
  "contact.hours.sat": { fr: "Sam : 9h–13h", en: "Sat: 9am–1pm" },
  "contact.agencies.title": { fr: "Nos agences", en: "Our offices" },

  // FOOTER
  "footer.solutions": { fr: "Nos Solutions", en: "Our Solutions" },
  "footer.company": { fr: "Société", en: "Company" },
  "footer.contact": { fr: "Contact", en: "Contact" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.desc": { fr: "Depuis 1996, votre courtier-conseil en assurance au Cameroun. Agréé MINFI N°03/038/CF/A. Membre SOGEP GROUP.", en: "Since 1996, your insurance broker in Cameroon. MINFI Approved N°03/038/CF/A. SOGEP GROUP Member." },
  "footer.sinistre": { fr: "Déclarer un sinistre", en: "Report a claim" },
  "footer.espaceclient": { fr: "Espace Client (bientôt)", en: "Customer Area (soon)" },
  "footer.legal": { fr: "Mentions Légales", en: "Legal Notice" },
  "footer.privacy": { fr: "Politique de Confidentialité", en: "Privacy Policy" },
  "footer.terms": { fr: "Conditions Générales", en: "Terms & Conditions" },
};

export function UIPrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const l = (localStorage.getItem("di_lang") as Lang | null) ?? "fr";
      setLangState(l);
      document.documentElement.lang = l;
    } catch { }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("di_lang", l);
      document.documentElement.lang = l;
    } catch { }
  }, []);

  const t = useCallback((key: string) => dict[key]?.[lang] ?? key, [lang]);

  return (
    <UIPrefsContext.Provider
      value={{
        lang,
        setLang,
        toggleLang: () => setLang(lang === "fr" ? "en" : "fr"),
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
    return {
      lang: "fr" as Lang,
      setLang: () => { },
      toggleLang: () => { },
      t: (k: string) => dict[k]?.fr ?? k,
    };
  }
  return ctx;
}
