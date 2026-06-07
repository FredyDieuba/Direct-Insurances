import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Plane, Home, HeartPulse, Sparkles, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Simulateur de Devis — DIRECT INSURANCE" },
      { name: "description", content: "Obtenez votre devis d'assurance personnalisé en moins de 2 minutes." },
    ],
  }),
  component: DevisPage,
});

const productList = [
  { id: "auto", label: "Auto", icon: Car, base: 45000 },
  { id: "voyage", label: "Voyage", icon: Plane, base: 18000 },
  { id: "habitation", label: "Habitation", icon: Home, base: 25000 },
  { id: "sante", label: "Santé", icon: HeartPulse, base: 35000 },
  { id: "vie", label: "Vie", icon: Sparkles, base: 22000 },
];

const formules = [
  { id: "essentiel", label: "Essentiel", mult: 1 },
  { id: "confort", label: "Confort", mult: 1.6 },
  { id: "premium", label: "Premium", mult: 2.3 },
];

function DevisPage() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState<string | null>(null);
  const [formule, setFormule] = useState<string>("confort");
  const [age, setAge] = useState(30);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const selectedProduct = productList.find((p) => p.id === product);
  const selectedFormule = formules.find((f) => f.id === formule)!;
  const price = selectedProduct ? Math.round(selectedProduct.base * selectedFormule.mult * (1 + (age - 30) * 0.01)) : 0;

  return (
    <SiteLayout>
      <section className="pt-28 pb-20 bg-subtle-gradient min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Simulateur</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Obtenez votre devis en 2 minutes</h1>
            <p className="text-muted-foreground">100% en ligne, sans engagement.</p>
          </div>

          {/* Progress */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`h-2 rounded-full transition-all ${s <= step ? "bg-gold w-12" : "bg-border w-8"}`} />
            ))}
          </div>

          <div className="bg-card rounded-3xl shadow-elegant border border-border p-6 md:p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-2xl text-navy mb-6">1. Quel type d'assurance ?</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {productList.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => { setProduct(p.id); setStep(2); }}
                        className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                          product === p.id ? "border-gold bg-gold/10" : "border-border hover:border-primary hover:bg-muted"
                        }`}
                      >
                        <p.icon className="h-8 w-8 text-primary" />
                        <span className="font-semibold text-navy">{p.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-2xl text-navy mb-6">2. Choisissez votre formule</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {formules.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFormule(f.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all ${
                          formule === f.id ? "border-gold bg-gold/10 shadow-glow" : "border-border hover:border-primary"
                        }`}
                      >
                        <div className="font-display font-bold text-xl text-navy mb-2">{f.label}</div>
                        <div className="text-xs text-muted-foreground mb-3">{f.id === "premium" ? "Couverture maximale" : f.id === "confort" ? "Le meilleur rapport" : "Couverture de base"}</div>
                        {formule === f.id && <div className="text-gold text-sm font-semibold flex items-center gap-1"><Check className="h-4 w-4" /> Sélectionné</div>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-2xl text-navy mb-6">3. Quelques infos</h2>
                  <div className="space-y-5 max-w-md">
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Votre âge : <span className="text-gold">{age} ans</span></label>
                      <input type="range" min="18" max="75" value={age} onChange={(e) => setAge(+e.target.value)} className="w-full accent-[var(--gold)]" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Nom complet</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background" placeholder="Jean Mbarga" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Téléphone</label>
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background" placeholder="+237 6XX XX XX XX" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="text-center py-6">
                    <div className="inline-flex h-16 w-16 rounded-full bg-gold-gradient text-navy items-center justify-center mb-5">
                      <Check className="h-8 w-8" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-navy mb-2">Votre devis est prêt !</h2>
                    <p className="text-muted-foreground mb-8">Estimation pour {selectedProduct?.label} · Formule {selectedFormule.label}</p>
                    <div className="bg-hero-gradient text-white rounded-2xl p-8 mb-6 max-w-md mx-auto">
                      <div className="text-xs uppercase tracking-wider text-white/70 mb-2">Prime annuelle estimée</div>
                      <motion.div
                        key={price}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-5xl font-display font-bold text-gold mb-2"
                      >
                        {price.toLocaleString("fr-FR")} <span className="text-2xl">FCFA</span>
                      </motion.div>
                      <div className="text-sm text-white/70">Soit ~{Math.round(price / 12).toLocaleString("fr-FR")} FCFA/mois</div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground font-semibold px-8 py-4 rounded-lg hover:shadow-glow transition-all">
                      Finaliser ma souscription <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 4 && (
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                <button
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border font-medium hover:bg-muted disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" /> Précédent
                </button>
                <button
                  onClick={() => setStep(Math.min(4, step + 1))}
                  disabled={step === 1 && !product}
                  className="inline-flex items-center gap-2 bg-gold-gradient text-gold-foreground font-semibold px-7 py-3 rounded-lg hover:shadow-glow transition-all disabled:opacity-50"
                >
                  Suivant <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
