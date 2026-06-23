import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Users, Building2, Baby, Hospital, Pill, Activity, Headphones, Award, Globe2 } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";

export const Route = createFileRoute("/solutions/assurance-maladie")({
  head: () => ({
    meta: [
      { title: "Assurance Maladie — DIRECT INSURANCE" },
      { name: "description", content: "Couverture santé individuelle, famille et entreprise. Réseau médical étendu, prise en charge rapide, télémédecine 24/7." },
      { property: "og:title", content: "Assurance Maladie — DIRECT INSURANCE" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle 2 · Santé & Bien-être"
      title="Protégez votre santé,"
      highlight="et celle des vôtres."
      intro="Hospitalisation, consultations, maternité, pharmacie et urgences — une couverture santé complète avec un réseau de plus de 250 partenaires médicaux au Cameroun."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
      pillarLabel="Nos formules"
      products={[
        { title: "Santé Individuelle", desc: "Une couverture santé essentielle pour vous, en toute simplicité.", icon: Stethoscope, bullets: ["Hospitalisation 100%", "Consultations & pharmacie", "Tiers-payant"] },
        { title: "Santé Famille", desc: "Protégez votre conjoint et vos enfants avec une formule unique.", icon: Users, bullets: ["Jusqu'à 6 ayants droit", "Maternité incluse", "Pédiatrie & vaccins"] },
        { title: "Santé Entreprise", desc: "Solutions collectives pour vos salariés, gestion 100% digitale.", icon: Building2, bullets: ["À partir de 5 salariés", "Portail RH dédié", "Rapport sinistralité"] },
        { title: "Maternité Premium", desc: "Accompagnement complet de la grossesse à la première année.", icon: Baby, bullets: ["Échographies & analyses", "Accouchement clinique privée", "Suivi nourrisson"] },
      ]}
      benefits={[
        { title: "Réseau de 250+ prestataires", desc: "Hôpitaux, cliniques, laboratoires et pharmacies partenaires partout au Cameroun.", icon: Hospital },
        { title: "Tiers-payant 100%", desc: "Aucune avance de frais dans notre réseau partenaire — sur simple présentation de la carte.", icon: Pill },
        { title: "Téléconsultation 24/7", desc: "Un médecin disponible en 5 minutes via notre app, jour et nuit.", icon: Activity },
        { title: "Couverture CEMAC", desc: "Soins remboursés dans toute la zone CEMAC pour les formules Premium.", icon: Globe2 },
      ]}
      process={[
        { title: "Simulez", desc: "Indiquez votre profil pour un tarif personnalisé en 30 secondes." },
        { title: "Choisissez", desc: "Comparez les formules Essentiel, Confort et Premium." },
        { title: "Souscrivez", desc: "Signature en ligne, paiement Mobile Money sécurisé." },
        { title: "Soignez-vous", desc: "Carte digitale immédiate, prise en charge directe au réseau." },
      ]}
      faqs={[
        { q: "Y a-t-il un délai de carence ?", a: "30 jours pour l'hospitalisation, 9 mois pour la maternité, immédiat pour les consultations." },
        { q: "Puis-je consulter hors réseau ?", a: "Oui, vous êtes remboursé sur facture selon votre formule (60% à 100%)." },
        { q: "Comment fonctionne la carte santé ?", a: "Carte digitale dans l'app + carte physique. Présentez-la chez nos partenaires pour le tiers-payant." },
        { q: "Mes affections antérieures sont-elles couvertes ?", a: "Sous réserve de déclaration. Certaines pathologies peuvent faire l'objet d'une exclusion temporaire." },
      ]}
      ctaTitle="Votre santé n'attend pas."
      ctaSubtitle="Devis personnalisé en 2 minutes. Souscription 100% en ligne."
    />
  ),
});
