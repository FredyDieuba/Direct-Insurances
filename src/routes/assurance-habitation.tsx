import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/assurance-habitation")({
  head: () => ({
    meta: [
      { title: "Assurance Habitation — DIRECT INSURANCE" },
      { name: "description", content: "Protégez votre maison : incendie, vol, dégâts des eaux, responsabilité civile." },
    ],
  }),
  component: () => (
    <ProductPage
      badge="Habitation"
      title="Votre foyer en sécurité"
      subtitle="Une protection complète pour votre habitation et vos biens contre les imprévus du quotidien."
      heroIcon={<Home className="h-24 w-24" />}
      benefits={[
        { title: "Tous risques habitation", desc: "Incendie, vol, dégâts des eaux, catastrophes naturelles." },
        { title: "Responsabilité civile vie privée", desc: "Couverture des dommages causés à des tiers par vous ou vos proches." },
        { title: "Objets de valeur", desc: "Bijoux, électronique, œuvres d'art — déclarez et protégez." },
      ]}
      coverage={[
        "Incendie & explosion",
        "Vol & vandalisme",
        "Dégâts des eaux",
        "Bris de glaces",
        "Catastrophes naturelles",
        "Responsabilité civile vie privée",
        "Objets de valeur",
        "Relogement temporaire",
      ]}
      faqs={[
        { q: "Locataire ou propriétaire ?", a: "Nos formules s'adaptent aux deux statuts avec des garanties spécifiques." },
        { q: "Comment estimer la valeur de mes biens ?", a: "Notre simulateur vous accompagne dans l'estimation pièce par pièce." },
      ]}
    />
  ),
});
