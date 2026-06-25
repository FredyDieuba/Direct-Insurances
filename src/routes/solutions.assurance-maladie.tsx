import { createFileRoute } from "@tanstack/react-router";
import { Stethoscope, Pill, Smile, Eye, Plane, Globe2, ShieldCheck, Zap, CreditCard, Headphones, HeartPulse } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";

export const Route = createFileRoute("/solutions/assurance-maladie")({
  head: () => ({
    meta: [
      { title: "Assurance Maladie Cameroun | Individuelle, Famille, Entreprise — DIRECT INSURANCE" },
      { name: "description", content: "Assurance santé individuelle, famille, entreprise au Cameroun. Frais médicaux, dentaire, lunetterie, voyage. DIRECT INSURANCE SA." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/solutions/assurance-maladie" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/solutions/assurance-maladie" }],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle Maladie · Santé"
      title="Une bonne vie passe par"
      highlight="une santé de fer !"
      intro="Couvrez vos frais médicaux, dentaires, optiques et vos déplacements à l'étranger. Une protection complète pour vous, votre famille et vos collaborateurs."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
      pillarLabel="Nos produits Maladie"
      products={[
        { title: "Assistance", desc: "Téléconsultation, prise en charge et orientation médicale.", icon: HeartPulse },
        { title: "Frais Médicaux & Pharmaceutiques", desc: "Remboursement ou prise en charge de vos consultations et médicaments.", icon: Stethoscope },
        { title: "Soins Dentaires", desc: "Soins courants, prothèses et orthodontie.", icon: Smile },
        { title: "Lunetterie", desc: "Verres, montures, lentilles.", icon: Eye },
        { title: "Soins à l'Étranger", desc: "Évacuation sanitaire et soins à l'international.", icon: Globe2 },
        { title: "Assurance Voyage", desc: "Visa Schengen, monde entier, rapatriement.", icon: Plane },
        { title: "Accidents Corporels", desc: "Capital, IPP, frais médicaux liés aux accidents.", icon: ShieldCheck },
        { title: "Pharmacie", desc: "Prise en charge des médicaments prescrits.", icon: Pill },
      ]}
      benefits={[
        { title: "Devis rapide", desc: "Estimation en moins de 2 minutes.", icon: Zap },
        { title: "Réseau de soins", desc: "Accès à un large réseau de prestataires médicaux.", icon: HeartPulse },
        { title: "Paiement Mobile Money", desc: "Orange Money, MTN MoMo, carte bancaire.", icon: CreditCard },
        { title: "Assistance 24/7", desc: "Une équipe disponible jour et nuit.", icon: Headphones },
      ]}
      process={[
        { title: "Évaluation", desc: "Profil santé et besoins de votre foyer." },
        { title: "Proposition", desc: "Formule adaptée — individuelle, famille ou entreprise." },
        { title: "Souscription", desc: "Mise en place rapide de votre contrat." },
        { title: "Prise en charge", desc: "Remboursements et tiers payant facilités." },
      ]}
      faqs={[
        { q: "Puis-je couvrir toute ma famille ?", a: "Oui, nos formules couvrent conjoint et enfants à charge, avec tarif dégressif selon le nombre d'ayants droit." },
        { q: "L'assurance voyage est-elle valide pour un visa Schengen ?", a: "Oui, nos attestations respectent les exigences consulaires (30 000 € minimum, rapatriement inclus)." },
        { q: "Les soins dentaires et la lunetterie sont-ils couverts ?", a: "Oui, selon la formule, avec des plafonds annuels et des taux de prise en charge clairement définis." },
        { q: "Que couvre la garantie soins à l'étranger ?", a: "Évacuation sanitaire d'urgence, hospitalisation et soins effectués hors du Cameroun." },
      ]}
      ctaTitle="Protégez votre santé dès aujourd'hui."
      ctaSubtitle="Un conseiller vous recontacte sous 24h."
    />
  ),
});
