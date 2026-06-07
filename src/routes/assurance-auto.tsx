import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Car, ScanLine, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/assurance-auto")({
  head: () => ({
    meta: [
      { title: "Assurance Auto — DIRECT INSURANCE" },
      { name: "description", content: "Assurance auto au Cameroun : tous risques, tiers, scan OCR de votre carte grise. Devis en 2 minutes." },
    ],
  }),
  component: AutoPage,
});

function OCRDemo() {
  const [step, setStep] = useState(0);
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-full" />
      <div className="relative bg-navy rounded-[2.5rem] p-3 border-4 border-white/10 shadow-elegant">
        <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/16] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted to-background flex flex-col">
            <div className="p-4 text-center text-xs font-semibold text-navy border-b border-border">Scanner carte grise</div>
            <div className="flex-1 p-5 flex flex-col gap-3">
              <div className="relative aspect-[1.6] rounded-xl bg-gradient-to-br from-gold/30 to-navy/10 border-2 border-dashed border-gold/40 overflow-hidden">
                <motion.div
                  className="absolute inset-x-0 h-1 bg-gold shadow-[0_0_20px_rgba(232,160,32,0.8)]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-3 border border-white/40 rounded-md flex items-center justify-center text-[10px] text-navy/60 font-mono">
                  CARTE GRISE
                </div>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-gold text-navy text-[9px] font-bold">SCAN</div>
              </div>
              <div className="space-y-2 text-xs">
                {[
                  { label: "Immatriculation", value: "CE 4521 XL" },
                  { label: "Marque", value: "TOYOTA HILUX" },
                  { label: "N° Châssis", value: "JTERB71J8..." },
                ].map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.4, duration: 0.4 }}
                    className="bg-muted rounded-lg p-2 flex justify-between items-center"
                  >
                    <span className="text-muted-foreground">{f.label}</span>
                    <span className="font-mono font-semibold text-navy">{f.value}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="bg-gold-gradient text-navy text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-1"
              >
                <Check className="h-3 w-3" /> Champs remplis automatiquement
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoPage() {
  return (
    <ProductPage
      badge="Auto"
      title="Assurance Auto avec scan OCR"
      subtitle="Scannez votre carte grise, nos algorithmes remplissent automatiquement votre dossier. Souscription en 3 minutes."
      heroIcon={<Car className="h-24 w-24" />}
      accentImage={<OCRDemo />}
      benefits={[
        { title: "Scan OCR instantané", desc: "Photographiez votre carte grise, tous les champs se remplissent automatiquement." },
        { title: "Indemnisation rapide", desc: "Pré-déclaration en ligne, expertise sous 48h, indemnisation accélérée." },
        { title: "Assistance 24/7", desc: "Dépannage, remorquage, véhicule de remplacement partout au Cameroun." },
      ]}
      coverage={[
        "Responsabilité Civile illimitée",
        "Tous risques (collision, vol, incendie)",
        "Bris de glace",
        "Vol & tentative de vol",
        "Catastrophes naturelles",
        "Assistance 24h/24",
        "Véhicule de remplacement",
        "Protection juridique conducteur",
      ]}
      faqs={[
        { q: "Combien de temps pour recevoir mon attestation ?", a: "Moins de 30 secondes après paiement, par email et WhatsApp." },
        { q: "Comment fonctionne le scan OCR ?", a: "Photographiez votre carte grise depuis le simulateur, notre IA extrait l'immatriculation, le numéro de châssis et la marque automatiquement." },
        { q: "Quels moyens de paiement acceptez-vous ?", a: "Orange Money, MTN Mobile Money, cartes Visa/Mastercard et virement bancaire." },
        { q: "Que faire en cas de sinistre ?", a: "Déclarez en ligne sur /sinistres ou via WhatsApp. Un expert vous contacte sous 24h." },
      ]}
    />
  );
}
