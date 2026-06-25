import { createFileRoute } from "@tanstack/react-router";
import { PiggyBank, FileSignature, GraduationCap, Heart, Flower2, Briefcase, ShieldCheck, Zap, CreditCard, Headphones } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";

export const Route = createFileRoute("/solutions/assurance-personnes")({
  head: () => ({
    meta: [
      { title: "Assurance de Personnes | Retraite, Décès, Éducation — DIRECT INSURANCE Cameroun" },
      { name: "description", content: "Prévoyance retraite, temporaire décès, rente éducation, funérailles, accidents corporels. DIRECT INSURANCE SA accompagne les familles camerounaises." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/solutions/assurance-personnes" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=80" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/solutions/assurance-personnes" }],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle Personnes · Vie"
      title="La vie est un cadeau,"
      highlight="il faut l'assurer !"
      intro="Préparez votre retraite, protégez vos proches et financez les études de vos enfants. Des solutions sur mesure pour chaque étape de la vie."
      heroImage="https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2000&q=80"
      pillarLabel="Nos produits Personnes"
      products={[
        { title: "Prévoyance Retraite", desc: "Épargnez progressivement pour une retraite sereine.", icon: PiggyBank },
        { title: "Crédit Caution", desc: "Garantissez vos emprunts en toute sérénité.", icon: FileSignature },
        { title: "Rente Éducation", desc: "Sécurisez l'avenir scolaire et universitaire de vos enfants.", icon: GraduationCap },
        { title: "Temporaire Décès", desc: "Protégez vos proches en cas de décès prématuré.", icon: Heart },
        { title: "Funérailles", desc: "Prise en charge des frais d'obsèques.", icon: Flower2 },
        { title: "Indemnités de Fin de Carrière", desc: "Provisionner les indemnités de départ de vos collaborateurs.", icon: Briefcase },
        { title: "Accidents Corporels", desc: "Capital, IPP et frais médicaux liés aux accidents.", icon: ShieldCheck },
      ]}
      benefits={[
        { title: "Conseil sur-mesure", desc: "Une stratégie patrimoniale adaptée à votre situation.", icon: Briefcase },
        { title: "Devis rapide", desc: "Simulation en moins de 2 minutes.", icon: Zap },
        { title: "Paiement Mobile Money", desc: "Orange Money, MTN MoMo, carte bancaire.", icon: CreditCard },
        { title: "Suivi dédié", desc: "Un conseiller référent à votre écoute.", icon: Headphones },
      ]}
      process={[
        { title: "Diagnostic", desc: "Analyse de votre situation familiale et patrimoniale." },
        { title: "Recommandation", desc: "Une stratégie de protection adaptée." },
        { title: "Souscription", desc: "Mise en place rapide du contrat." },
        { title: "Suivi", desc: "Révision annuelle et accompagnement continu." },
      ]}
      faqs={[
        { q: "À quel âge souscrire une assurance vie ?", a: "Le plus tôt est le mieux : les primes sont plus faibles et la capacité d'épargne s'étale dans le temps." },
        { q: "Comment fonctionne la rente éducation ?", a: "Vous versez une cotisation périodique, et une rente est servie à vos enfants pour financer leurs études en cas de décès ou à terme." },
        { q: "Les Indemnités de Fin de Carrière sont-elles obligatoires ?", a: "Le Code du Travail impose des indemnités de départ ; les provisionner via une assurance protège votre trésorerie." },
      ]}
      ctaTitle="Préparez l'avenir de vos proches."
      ctaSubtitle="Un conseiller DIRECT INSURANCE vous recontacte sous 24h."
    />
  ),
});
