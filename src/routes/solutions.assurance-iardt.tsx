import { createFileRoute } from "@tanstack/react-router";
import { Car, Home, Plane, Truck, Building2, Package, ScanLine, Zap, ShieldCheck, Headphones, CreditCard } from "lucide-react";
import { SolutionHub } from "@/components/site/SolutionHub";
import { motion } from "framer-motion";

function OCRBadge() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full" />
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-elegant">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <ScanLine className="h-4 w-4 text-gold" /> SCAN CARTE GRISE — IA
          </div>
          <span className="px-2 py-0.5 bg-gold text-white text-[10px] font-bold rounded">EN DIRECT</span>
        </div>
        <div className="relative aspect-[1.6] rounded-xl bg-gradient-to-br from-gold/30 to-navy/40 border-2 border-dashed border-gold/50 overflow-hidden mb-4">
          <motion.div
            className="absolute inset-x-0 h-0.5 bg-gold shadow-[0_0_20px_rgba(45,127,249,0.9)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-3 border border-white/30 rounded flex items-center justify-center text-[10px] text-white/70 font-mono tracking-wider">
            CARTE GRISE · CMR
          </div>
        </div>
        <div className="space-y-2">
          {[
            { l: "Immatriculation", v: "CE 4521 XL" },
            { l: "Marque · Modèle", v: "Toyota Hilux" },
            { l: "Châssis", v: "JTERB71J8…" },
          ].map((r, i) => (
            <motion.div
              key={r.l}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.3 }}
              className="bg-white/10 rounded-lg p-2.5 flex justify-between items-center text-xs"
            >
              <span className="text-white/60">{r.l}</span>
              <span className="font-mono font-semibold text-white">{r.v}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center text-[11px] text-gold mt-4 font-semibold">
          ✓ Formulaire pré-rempli en 3 secondes
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/solutions/assurance-iardt")({
  head: () => ({
    meta: [
      { title: "Assurance IARDT — DIRECT INSURANCE" },
      { name: "description", content: "Auto, habitation, voyage, transport, multirisque pro. Scan OCR carte grise, souscription 100% en ligne, paiement Mobile Money." },
      { property: "og:title", content: "Assurance IARDT — DIRECT INSURANCE" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: () => (
    <SolutionHub
      badge="Pôle 3 · IARDT · Innovation OCR"
      title="Protégez vos biens"
      highlight="et vos activités."
      intro="Auto, habitation, voyage, transport et multirisque professionnelle — assurez-vous en 3 minutes grâce à notre scan IA de carte grise, une exclusivité DIRECT INSURANCE."
      heroImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80"
      heroOverlay={<OCRBadge />}
      pillarLabel="Nos produits IARDT"
      products={[
        { title: "Assurance Automobile", desc: "RC, tiers étendu, tous risques, flotte. Scan OCR carte grise.", icon: Car, href: "/assurance-auto", bullets: ["Scan carte grise IA", "Assistance 24/7", "Véhicule de remplacement"] },
        { title: "Assurance Habitation", desc: "Incendie, vol, dégâts des eaux, RC vie privée.", icon: Home, href: "/assurance-habitation", bullets: ["Maison & appartement", "Mobilier & high-tech", "RC vie privée"] },
        { title: "Assurance Voyage", desc: "Visa Schengen, monde entier, rapatriement urgent.", icon: Plane, href: "/assurance-voyage", bullets: ["Visa Schengen", "Rapatriement médical", "Bagages & retard avion"] },
        { title: "Multirisque Pro", desc: "Locaux, marchandises, perte d'exploitation, RC pro.", icon: Building2, bullets: ["TPE/PME & grandes entreprises", "Cyber-risques", "RC professionnelle"] },
        { title: "Assurance Marchandises", desc: "Couverture facultés import-export, tous modes de transport.", icon: Package, bullets: ["Maritime · aérien · routier", "Tous risques W.A.", "Couverture porte à porte"] },
        { title: "Assurance Transport", desc: "Flottes de véhicules de transport, RC contractuelle.", icon: Truck, bullets: ["RC contractuelle", "Marchandises transportées", "Assistance dépannage"] },
      ]}
      benefits={[
        { title: "OCR carte grise", desc: "Scannez votre carte grise — l'IA remplit votre dossier auto en 3 secondes.", icon: ScanLine },
        { title: "Devis instantané", desc: "Tarif personnalisé en moins de 2 minutes, sans appel ni rendez-vous.", icon: Zap },
        { title: "Mobile Money", desc: "Orange Money, MTN MoMo, carte bancaire. Attestation immédiate.", icon: CreditCard },
        { title: "Assistance 24/7", desc: "Dépannage, expertise, hotline francophone disponible jour et nuit.", icon: Headphones },
      ]}
      process={[
        { title: "Simulation", desc: "Indiquez votre besoin, scannez vos documents." },
        { title: "Devis", desc: "Comparez les formules Essentiel, Confort, Premium." },
        { title: "Paiement", desc: "Mobile Money sécurisé en quelques secondes." },
        { title: "Attestation", desc: "Reçue par email et WhatsApp instantanément." },
      ]}
      faqs={[
        { q: "Comment fonctionne le scan OCR carte grise ?", a: "Prenez en photo votre carte grise depuis le simulateur. Notre IA extrait immatriculation, marque, modèle et châssis en 3 secondes — vous n'avez rien à saisir." },
        { q: "Puis-je assurer plusieurs véhicules ?", a: "Oui, notre offre flotte vous fait bénéficier d'une remise dès 3 véhicules assurés." },
        { q: "Quels biens couvre la multirisque professionnelle ?", a: "Locaux, matériel, marchandises, perte d'exploitation, responsabilité civile professionnelle et cyber-risques en option." },
        { q: "L'assurance voyage est-elle reconnue pour le visa Schengen ?", a: "Oui, nos attestations Schengen respectent les exigences consulaires (30 000 € minimum, rapatriement inclus)." },
      ]}
      ctaTitle="Devis IARDT en 2 minutes."
      ctaSubtitle="Scan OCR exclusif, paiement Mobile Money, attestation immédiate."
    />
  ),
});
