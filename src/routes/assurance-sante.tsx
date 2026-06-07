import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/assurance-sante")({
  head: () => ({
    meta: [
      { title: "Assurance Santé — DIRECT INSURANCE" },
      { name: "description", content: "Couverture santé complète : dentaire, hospitalisation, imagerie médicale, maternité." },
    ],
  }),
  component: () => (
    <ProductPage
      badge="Santé"
      title="Une santé sans compromis"
      subtitle="Remboursement rapide des soins dentaires, hospitalisation, imagerie médicale et maternité, pour vous et votre famille."
      heroIcon={<HeartPulse className="h-24 w-24" />}
      benefits={[
        { title: "Soins dentaires", desc: "Détartrage, soins, prothèses et orthodontie remboursés." },
        { title: "Hospitalisation", desc: "Chambre individuelle, chirurgie et anesthésie pris en charge." },
        { title: "Maternité", desc: "Suivi de grossesse, accouchement et soins post-natals." },
      ]}
      coverage={[
        "Consultations généralistes & spécialistes",
        "Hospitalisation médicale & chirurgicale",
        "Soins dentaires & prothèses",
        "Imagerie médicale (radio, scanner, IRM)",
        "Maternité & suivi de grossesse",
        "Pharmacie sur ordonnance",
        "Optique (lunettes, lentilles)",
        "Réseau de cliniques partenaires",
      ]}
      faqs={[
        { q: "Puis-je couvrir toute ma famille ?", a: "Oui, nos formules familiales couvrent conjoint et enfants à tarifs préférentiels." },
        { q: "Y a-t-il un délai de carence ?", a: "30 jours pour les soins courants, 9 mois pour la maternité." },
        { q: "Quels sont les plafonds de remboursement ?", a: "Variables selon la formule choisie, détaillés dans votre devis." },
      ]}
    />
  ),
});
