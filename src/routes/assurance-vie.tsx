import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/assurance-vie")({
  head: () => ({
    meta: [
      { title: "Assurance Vie — DIRECT INSURANCE" },
      { name: "description", content: "Préparez l'avenir : prévoyance retraite, rente éducation, capital décès." },
    ],
  }),
  component: () => (
    <ProductPage
      badge="Vie"
      title="Protégez ceux que vous aimez"
      subtitle="Préparez votre retraite, financez les études de vos enfants, et garantissez l'avenir de vos proches."
      heroIcon={<Sparkles className="h-24 w-24" />}
      benefits={[
        { title: "Prévoyance Retraite", desc: "Constituez un complément de revenu pour votre retraite en toute sérénité." },
        { title: "Rente Éducation", desc: "Garantissez le financement des études de vos enfants quoiqu'il arrive." },
        { title: "Capital Décès", desc: "Protégez financièrement vos proches en cas d'imprévu." },
      ]}
      coverage={[
        "Capital décès toutes causes",
        "Rente éducation",
        "Épargne retraite",
        "Invalidité totale et permanente",
        "Décès accidentel (doublement)",
        "Versements libres ou programmés",
        "Fiscalité avantageuse",
        "Bénéficiaires librement désignés",
      ]}
      faqs={[
        { q: "À partir de quel âge puis-je souscrire ?", a: "Dès 18 ans et jusqu'à 65 ans pour la plupart de nos contrats." },
        { q: "Puis-je modifier mes bénéficiaires ?", a: "Oui, à tout moment, par simple demande écrite." },
      ]}
    />
  ),
});
