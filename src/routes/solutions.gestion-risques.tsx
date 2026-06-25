import { createFileRoute } from "@tanstack/react-router";
import { Search, FolderKanban, Crown, BarChart3, Briefcase, Headphones, FileText, Lightbulb } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";

export const Route = createFileRoute("/solutions/gestion-risques")({
  head: () => ({
    meta: [
      { title: "Gestion des Risques & Audit d'Assurance Cameroun — DIRECT INSURANCE SA" },
      { name: "description", content: "Audit des assurances, PROGESPA (programme de gestion de patrimoine d'assurance), Pack Vie GOLD. DIRECT INSURANCE SA accompagne entreprises et institutions." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/solutions/gestion-risques" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/solutions/gestion-risques" }],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle Risques · Corporate"
      title="Anticipez. Comprenez. Évaluez."
      highlight="Gérez. Exploitez."
      intro="Une démarche structurée pour analyser, prévenir et maîtriser les risques de votre entreprise. Audit indépendant, gestion patrimoniale d'assurance, et offres premium."
      heroImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=80"
      pillarLabel="Nos services Gestion des Risques"
      products={[
        { title: "Audit des Assurances", desc: "Diagnostic complet de votre portefeuille de contrats, identification des doublons et des manques.", icon: Search, bullets: ["Cartographie des risques", "Analyse des garanties", "Recommandations d'optimisation"] },
        { title: "PROGESPA", desc: "Programme de Gestion de Patrimoine d'Assurance — pilotage continu de l'ensemble de vos contrats.", icon: FolderKanban, bullets: ["Suivi des échéances", "Reporting périodique", "Tableau de bord risques"] },
        { title: "Pack Vie GOLD DIRECT INSURANCE", desc: "Offre premium combinant prévoyance, épargne et services dédiés.", icon: Crown, bullets: ["Conciergerie", "Conseil patrimonial", "Garanties renforcées"] },
      ]}
      benefits={[
        { title: "Approche stratégique", desc: "Aligner la couverture sur la stratégie d'entreprise.", icon: Lightbulb },
        { title: "Indépendance", desc: "Conseil libre de tout conflit d'intérêt.", icon: Briefcase },
        { title: "Reporting", desc: "Tableaux de bord clairs et actionnables.", icon: BarChart3 },
        { title: "Support dédié", desc: "Un référent unique pour votre compte.", icon: Headphones },
      ]}
      process={[
        { title: "Cadrage", desc: "Identification des enjeux et périmètre." },
        { title: "Audit", desc: "Analyse exhaustive de l'existant." },
        { title: "Recommandations", desc: "Plan d'action et arbitrages." },
        { title: "Pilotage", desc: "Suivi continu via PROGESPA." },
      ]}
      faqs={[
        { q: "À quoi sert un audit des assurances ?", a: "Il permet d'identifier les sur-assurances, les sous-assurances, les doublons et les manques pour optimiser votre budget et votre couverture." },
        { q: "Qu'apporte PROGESPA ?", a: "Un pilotage centralisé de tous vos contrats : suivi des échéances, reporting, optimisation continue." },
        { q: "Le Pack Vie GOLD est-il réservé aux dirigeants ?", a: "Il est conçu pour les dirigeants, professions libérales et patrimoines à protéger en priorité." },
      ]}
      ctaTitle="Auditons votre patrimoine d'assurance."
      ctaSubtitle="Un audit clair et indépendant pour mieux décider."
    />
  ),
});
