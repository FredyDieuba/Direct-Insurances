import { createFileRoute } from "@tanstack/react-router";
import { Car, Shield, Flame, Scale, Building2, Truck, Wrench, Droplets, GlassWater, Laptop, Home, Package, Users, ScanLine, Zap, CreditCard, Headphones } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";
import { assets } from "@/lib/assets";

export const Route = createFileRoute("/solutions/assurance-iardt")({
  head: () => ({
    meta: [
      { title: "Assurance IARDT Cameroun | Auto, Habitation, Transport — DIRECT INSURANCE" },
      { name: "description", content: "Assurance automobile, habitation, transport et multirisque au Cameroun. DIRECT INSURANCE SA, courtier agréé CIMA. Obtenez votre devis gratuit." },
      { property: "og:title", content: "Assurance IARDT — DIRECT INSURANCE" },
      { property: "og:url", content: "https://direct-assurance.lovable.app/solutions/assurance-iardt" },
      { property: "og:image", content: `https://direct-assurance.lovable.app${assets.hero.iardt}` },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/solutions/assurance-iardt" }],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle IARDT · Patrimoine"
      title="Vivez sereinement"
      highlight="chaque événement de votre vie !"
      intro="Les produits I.A.R.D.T. (Incendie, Accidents, Risques Divers et Transports) protègent vos biens, vos activités et votre responsabilité — pour les particuliers comme pour les entreprises."
      heroImage={assets.hero.iardt}
      pillarLabel="Nos produits IARDT"
      products={[
        { title: "Automobile", desc: "Responsabilité civile, tiers, tous risques, flotte.", icon: Car },
        { title: "Individuelle Accident", desc: "Couverture des accidents de la vie courante.", icon: Shield },
        { title: "Vol-Incendie", desc: "Protégez vos biens contre le vol et le feu.", icon: Flame },
        { title: "Protection Juridique (Défense-Recours)", desc: "Assistance juridique et défense de vos droits.", icon: Scale },
        { title: "Responsabilité Civile", desc: "Couverture des dommages causés à autrui.", icon: Users },
        { title: "Tous Risques Chantiers", desc: "Sécurisation des chantiers de construction.", icon: Building2 },
        { title: "Transports Maritimes & Terrestres", desc: "Marchandises, facultés import-export.", icon: Truck },
        { title: "Bris de Machines", desc: "Couverture des équipements industriels.", icon: Wrench },
        { title: "Dégâts des Eaux", desc: "Sinistres liés aux fuites et infiltrations.", icon: Droplets },
        { title: "Bris de Glaces", desc: "Vitrines, baies vitrées, glaces véhicules.", icon: GlassWater },
        { title: "Tous Risques Informatiques", desc: "Matériel IT, serveurs, périphériques.", icon: Laptop },
        { title: "Multirisque Bâtiments", desc: "Couverture globale des locaux pro & résidentiels.", icon: Home },
        { title: "Micro Assurance", desc: "Produits accessibles pour publics non bancarisés.", icon: Package },
      ]}
      benefits={[
        { title: "Devis instantané", desc: "Tarif personnalisé en moins de 2 minutes.", icon: Zap },
        { title: "Scan OCR (bientôt)", desc: "Scanner votre carte grise, l'IA remplit le dossier.", icon: ScanLine },
        { title: "Mobile Money", desc: "Orange Money, MTN MoMo, carte bancaire.", icon: CreditCard },
        { title: "Assistance 24/7", desc: "Hotline francophone disponible jour et nuit.", icon: Headphones },
      ]}
      process={[
        { title: "Audit", desc: "Analyse de votre patrimoine et de vos risques." },
        { title: "Devis", desc: "Comparez les offres du marché." },
        { title: "Souscription", desc: "Mise en place rapide de votre contrat." },
        { title: "Suivi", desc: "Gestion et indemnisation rapide en cas de sinistre." },
      ]}
      faqs={[
        { q: "Quelle assurance est obligatoire pour mon véhicule au Cameroun ?", a: "La Responsabilité Civile (RC) est obligatoire. Selon la valeur de votre véhicule, nous recommandons l'option Tiers étendu ou Tous risques." },
        { q: "Puis-je assurer plusieurs véhicules ?", a: "Oui, notre offre flotte vous fait bénéficier d'une remise dès 3 véhicules assurés." },
        { q: "Que couvre la multirisque bâtiments ?", a: "Incendie, dégâts des eaux, vol, bris de glaces, RC, et options selon votre profil." },
        { q: "L'assurance Tous Risques Chantiers est-elle obligatoire ?", a: "Souvent exigée par les maîtres d'ouvrage et bailleurs de fonds, elle couvre les sinistres pendant toute la durée du chantier." },
      ]}
      ctaTitle="Demandez votre devis IARDT."
      ctaSubtitle="Un conseiller DIRECT INSURANCE vous recontacte sous 24h."
    />
  ),
});
