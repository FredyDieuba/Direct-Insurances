import { createFileRoute } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/assurance-voyage")({
  head: () => ({
    meta: [
      { title: "Assurance Voyage — DIRECT INSURANCE" },
      { name: "description", content: "Voyagez sereinement : couverture monde entier, visa Schengen, assistance médicale 24/7." },
    ],
  }),
  component: () => (
    <ProductPage
      badge="Voyage"
      title="Voyagez l'esprit tranquille"
      subtitle="Couverture mondiale, conforme aux exigences Schengen. Assistance médicale et rapatriement 24h/24."
      heroIcon={<Plane className="h-24 w-24" />}
      benefits={[
        { title: "Conforme Schengen", desc: "Attestation acceptée par toutes les ambassades pour vos demandes de visa." },
        { title: "Assistance médicale 24/7", desc: "Frais médicaux, hospitalisation et rapatriement sanitaire pris en charge." },
        { title: "Bagages & retards", desc: "Indemnisation en cas de perte de bagages ou de retard de vol." },
      ]}
      coverage={[
        "Frais médicaux jusqu'à 30 000 €",
        "Rapatriement sanitaire",
        "Responsabilité civile à l'étranger",
        "Annulation de voyage",
        "Perte/vol de bagages",
        "Retard de vol",
        "Assistance juridique",
        "Avance de fonds",
      ]}
      faqs={[
        { q: "L'attestation est-elle acceptée pour le visa Schengen ?", a: "Oui, notre attestation respecte intégralement les exigences consulaires européennes." },
        { q: "Quelle est la durée maximale de couverture ?", a: "Jusqu'à 365 jours pour les longs séjours et études à l'étranger." },
        { q: "La COVID est-elle couverte ?", a: "Oui, les frais médicaux liés à la COVID-19 sont inclus." },
      ]}
    />
  ),
});
