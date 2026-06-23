import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, PiggyBank, Sunrise, ShieldAlert, Users, Award, Headphones, Lock, FileText } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";

export const Route = createFileRoute("/solutions/assurance-personnes")({
  head: () => ({
    meta: [
      { title: "Assurance de Personnes — DIRECT INSURANCE" },
      { name: "description", content: "Vie, décès, épargne, retraite, accidents individuels. Préservez l'avenir de ceux que vous aimez avec DIRECT INSURANCE." },
      { property: "og:title", content: "Assurance de Personnes — DIRECT INSURANCE" },
      { property: "og:description", content: "Protection familiale, épargne et retraite — assureur agréé CIMA depuis 1996." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle 1 · Protection & Avenir"
      title="Préservez l'avenir de"
      highlight="ceux que vous aimez"
      intro="Assurance vie, décès, épargne, retraite et accidents individuels — des solutions pensées pour protéger votre famille et préparer sereinement l'avenir."
      heroImage="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80"
      pillarLabel="Nos produits"
      products={[
        { title: "Assurance Vie", desc: "Protégez vos proches avec un capital garanti versé en cas de décès.", icon: Heart, href: "/assurance-vie", bullets: ["Capital garanti", "Rente conjoint", "Fiscalité avantageuse"] },
        { title: "Assurance Décès", desc: "Capital immédiat pour vos bénéficiaires en cas de coup dur.", icon: ShieldAlert, bullets: ["Versement sous 15 jours", "Sans questionnaire médical*", "À partir de 3 000 FCFA/mois"] },
        { title: "Assurance Épargne", desc: "Constituez un capital à long terme avec un rendement compétitif.", icon: PiggyBank, bullets: ["Versements flexibles", "Capital disponible", "Rendement net 4,5%"] },
        { title: "Assurance Retraite", desc: "Préparez votre retraite avec une rente régulière garantie.", icon: Sunrise, bullets: ["Rente viagère", "Sortie en capital", "Avantage fiscal"] },
        { title: "Accidents Individuels", desc: "Indemnisation rapide en cas d'invalidité ou de décès accidentel.", icon: Sparkles, bullets: ["Couverture 24/7", "Monde entier", "Capital jusqu'à 50M FCFA"] },
      ]}
      benefits={[
        { title: "Capital protégé", desc: "Vos versements sont garantis par notre solidité financière et nos réassureurs internationaux.", icon: Lock },
        { title: "Bénéficiaires choisis", desc: "Désignez librement les bénéficiaires de vos contrats vie et décès.", icon: Users },
        { title: "Conseil personnalisé", desc: "Un conseiller dédié pour bâtir avec vous une stratégie patrimoniale.", icon: Headphones },
        { title: "Agrément CIMA", desc: "Compagnie régulée par la CIMA, sous supervision stricte des États membres.", icon: Award },
      ]}
      process={[
        { title: "Diagnostic", desc: "Un conseiller analyse vos besoins et objectifs de protection." },
        { title: "Proposition", desc: "Recevez une proposition sur-mesure avec garanties et primes." },
        { title: "Souscription", desc: "Signature électronique et premier versement Mobile Money." },
        { title: "Suivi", desc: "Pilotez votre contrat depuis votre espace client 24/7." },
      ]}
      faqs={[
        { q: "À partir de quel âge puis-je souscrire ?", a: "Dès 18 ans pour la plupart des contrats, jusqu'à 70 ans selon les garanties." },
        { q: "Le capital est-il transmissible hors succession ?", a: "Oui, le capital décès est versé directement aux bénéficiaires désignés, hors masse successorale." },
        { q: "Puis-je modifier mes bénéficiaires ?", a: "À tout moment, par simple avenant signé depuis votre espace client." },
        { q: "Quel est le rendement de l'épargne ?", a: "Le taux net minimum garanti est de 3,5%, avec participation aux bénéfices (4,5% en 2025)." },
      ]}
      ctaTitle="Construisons ensemble votre tranquillité."
      ctaSubtitle="Un conseiller vous rappelle sous 24h pour étudier votre projet."
    />
  ),
});
