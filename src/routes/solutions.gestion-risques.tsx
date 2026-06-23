import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, ClipboardList, BarChart3, GraduationCap, Factory, Truck, Building, ShoppingBag, Briefcase, Lock } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";

export const Route = createFileRoute("/solutions/gestion-risques")({
  head: () => ({
    meta: [
      { title: "Gestion des Risques — DIRECT INSURANCE" },
      { name: "description", content: "Audit, prévention, conseil et accompagnement risk-management pour entreprises camerounaises. Risk scoring, dashboards et études personnalisées." },
      { property: "og:title", content: "Gestion des Risques — DIRECT INSURANCE" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle 4 · Corporate Risk Advisory"
      title="Transformez les risques"
      highlight="en opportunités."
      intro="Audit, prévention, conformité et accompagnement stratégique : notre cellule risk-management aide les entreprises à anticiper, mesurer et maîtriser leurs expositions."
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
      pillarLabel="Nos services"
      products={[
        { title: "Audit des risques", desc: "Cartographie complète de vos expositions opérationnelles, juridiques et financières.", icon: ShieldAlert, bullets: ["Audit terrain", "Matrice de criticité", "Rapport exécutif"] },
        { title: "Prévention", desc: "Plans d'action concrets pour réduire la fréquence et la gravité des sinistres.", icon: ClipboardList, bullets: ["Procédures HSE", "Plan de continuité", "Tests d'intrusion"] },
        { title: "Risk Scoring & Dashboards", desc: "Tableaux de bord temps réel sur la sinistralité et les KPI risque.", icon: BarChart3, bullets: ["Score risque dynamique", "Alertes KPI", "Benchmark sectoriel"] },
        { title: "Conseil & Conformité", desc: "Conformité CIMA, RGPD, normes sectorielles et exigences bailleurs.", icon: Lock, bullets: ["Compliance CIMA", "Veille réglementaire", "Préparation audit"] },
        { title: "Accompagnement programmes captifs", desc: "Structuration de programmes d'assurance dédiés et réassurance.", icon: Briefcase, bullets: ["Programme captif", "Placement réassurance", "Négociation traités"] },
        { title: "Formation Risk Management", desc: "Sessions intra-entreprise pour vos équipes opérationnelles et dirigeants.", icon: GraduationCap, bullets: ["Modules certifiants", "Cas pratiques sectoriels", "Présentiel ou distanciel"] },
      ]}
      benefits={[
        { title: "Expertise sectorielle", desc: "Industrie, BTP, logistique, énergie, banque, distribution — nous parlons votre langage.", icon: Factory },
        { title: "Réseau réassureurs", desc: "Accès direct aux capacités de SCOR, Swiss-Re, Munich-Re et Africa-Re.", icon: Building },
        { title: "Accompagnement durable", desc: "Suivi annuel structuré, comité de pilotage trimestriel et reporting board.", icon: Truck },
        { title: "ROI mesuré", desc: "Nos clients constatent en moyenne -28% de sinistralité au bout de 18 mois.", icon: ShoppingBag },
      ]}
      process={[
        { title: "Diagnostic", desc: "Atelier de cadrage et collecte des données risque." },
        { title: "Cartographie", desc: "Identification, évaluation et priorisation des risques." },
        { title: "Plan d'action", desc: "Recommandations chiffrées, plan de traitement et budget." },
        { title: "Pilotage", desc: "Mise en œuvre, dashboards, comités et amélioration continue." },
      ]}
      faqs={[
        { q: "À quel type d'entreprises s'adressent vos services ?", a: "PME structurées, ETI et grands groupes opérant au Cameroun ou en zone CEMAC, tous secteurs confondus." },
        { q: "Faut-il être assuré chez DIRECT INSURANCE ?", a: "Non, notre cellule risk-management intervient indépendamment de tout placement d'assurance." },
        { q: "Quelle est la durée d'une mission type ?", a: "De 6 semaines pour un audit ciblé à 12 mois pour un programme complet de transformation risque." },
        { q: "Travaillez-vous avec les réassureurs internationaux ?", a: "Oui, nous structurons régulièrement des programmes co-pilotés avec SCOR, Swiss-Re et Munich-Re." },
      ]}
      ctaTitle="Parlons de vos enjeux."
      ctaSubtitle="Première séance de cadrage offerte. Un expert vous rappelle sous 48h."
    />
  ),
});
