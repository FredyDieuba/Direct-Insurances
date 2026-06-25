import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HeartPulse, Users, Briefcase, ArrowRight, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Devis Gratuit en Ligne | DIRECT INSURANCE SA Cameroun" },
      { name: "description", content: "Obtenez votre devis d'assurance gratuit en quelques minutes. IARDT, maladie, personnes ou gestion des risques — un conseiller vous recontacte sous 24h." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/devis" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/devis" }],
  }),
  component: DevisPage,
});

const CATEGORIES = [
  {
    id: "iardt", label: "Assurance IARDT", icon: ShieldCheck,
    sub: ["Automobile", "Habitation & Bâtiments", "Transports", "Multirisque", "Vol-Incendie"],
  },
  {
    id: "maladie", label: "Assurance Maladie", icon: HeartPulse,
    sub: ["Individuelle", "Famille", "Entreprise", "Voyage"],
  },
  {
    id: "personnes", label: "Assurance de Personnes", icon: Users,
    sub: ["Prévoyance Retraite", "Temporaire Décès", "Rente Éducation", "Accidents Corporels"],
  },
  {
    id: "risques", label: "Gestion des Risques", icon: Briefcase,
    sub: ["Audit", "PROGESPA", "Pack Vie GOLD"],
  },
] as const;

type FormData = Record<string, string>;

function fieldsFor(sub: string): { name: string; label: string; type: "text" | "number" | "select"; options?: string[] }[] {
  if (sub === "Automobile") {
    return [
      { name: "marque", label: "Marque & Modèle", type: "text" },
      { name: "annee", label: "Année du véhicule", type: "number" },
      { name: "valeur", label: "Valeur vénale (FCFA)", type: "number" },
      { name: "usage", label: "Usage", type: "select", options: ["Personnel", "Professionnel", "Flotte"] },
    ];
  }
  if (sub === "Individuelle" || sub === "Famille") {
    return [
      { name: "age", label: "Âge", type: "number" },
      { name: "ville", label: "Ville", type: "text" },
      { name: "personnes", label: "Nombre de personnes à couvrir", type: "number" },
      { name: "besoins", label: "Besoins prioritaires", type: "text" },
    ];
  }
  if (sub === "Entreprise" || sub === "Multirisque" || sub === "Audit" || sub === "PROGESPA") {
    return [
      { name: "secteur", label: "Secteur d'activité", type: "text" },
      { name: "employes", label: "Nombre d'employés", type: "number" },
      { name: "ville", label: "Ville", type: "text" },
      { name: "besoins", label: "Besoins spécifiques", type: "text" },
    ];
  }
  return [
    { name: "type", label: "Type de couverture souhaitée", type: "text" },
    { name: "age", label: "Âge", type: "number" },
    { name: "capital", label: "Capital ou plafond souhaité (FCFA)", type: "number" },
    { name: "duree", label: "Durée (années)", type: "number" },
  ];
}

function DevisPage() {
  const [step, setStep] = useState(1);
  const [cat, setCat] = useState<string | null>(null);
  const [sub, setSub] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({});
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });

  const category = CATEGORIES.find((c) => c.id === cat);

  const fields = sub ? fieldsFor(sub) : [];

  return (
    <SiteLayout>
      <section className="pt-12 pb-20 bg-subtle-gradient min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Simulateur</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Obtenez votre devis en quelques minutes</h1>
            <p className="text-muted-foreground">100% en ligne, sans engagement. Un conseiller vous recontacte sous 24h.</p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`h-2 rounded-full transition-all ${s <= step ? "bg-gold w-12" : "bg-border w-8"}`} />
            ))}
          </div>

          <div className="bg-card rounded-3xl shadow-elegant border border-border p-6 md:p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-2xl text-navy mb-6">1. Quelle catégorie d'assurance ?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {CATEGORIES.map((c) => (
                      <button key={c.id}
                        onClick={() => { setCat(c.id); setSub(null); setStep(2); }}
                        className={`p-6 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${cat === c.id ? "border-gold bg-gold/10" : "border-border hover:border-primary hover:bg-muted"}`}>
                        <div className="h-12 w-12 rounded-xl bg-gold-gradient text-navy flex items-center justify-center flex-shrink-0">
                          <c.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-navy">{c.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{c.sub.slice(0, 3).join(" · ")}…</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && category && (
                <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-2xl text-navy mb-6">2. Quel produit ?</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.sub.map((s) => (
                      <button key={s} onClick={() => { setSub(s); setForm({}); }}
                        className={`p-5 rounded-2xl border-2 text-left transition-all ${sub === s ? "border-gold bg-gold/10" : "border-border hover:border-primary"}`}>
                        <div className="font-semibold text-navy">{s}</div>
                        {sub === s && <div className="text-gold text-xs font-semibold flex items-center gap-1 mt-1"><Check className="h-3 w-3" /> Sélectionné</div>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="font-display font-bold text-2xl text-navy mb-2">3. Quelques infos</h2>
                  <p className="text-sm text-muted-foreground mb-6">Produit sélectionné : <strong className="text-navy">{sub}</strong></p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {fields.map((f) => (
                      <div key={f.name}>
                        <label className="text-sm font-semibold text-navy block mb-2">{f.label}</label>
                        {f.type === "select" ? (
                          <select value={form[f.name] ?? ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none">
                            <option value="">— Choisir —</option>
                            {f.options?.map((o) => <option key={o}>{o}</option>)}
                          </select>
                        ) : (
                          <input type={f.type} value={form[f.name] ?? ""} onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Nom complet *</label>
                      <input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background" placeholder="Jean Mbarga" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Téléphone *</label>
                      <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background" placeholder="+237 6XX XX XX XX" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Email *</label>
                      <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background" placeholder="vous@email.com" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="text-center py-2">
                    <div className="inline-flex h-16 w-16 rounded-full bg-gold-gradient text-navy items-center justify-center mb-5">
                      <Check className="h-8 w-8" />
                    </div>
                    <h2 className="font-display font-bold text-3xl text-navy mb-2">Demande de devis envoyée !</h2>
                    <p className="text-muted-foreground mb-8">Un conseiller DIRECT INSURANCE vous contactera sous 24h.</p>

                    <div className="bg-muted rounded-2xl p-6 max-w-lg mx-auto text-left mb-6">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Résumé de votre demande</div>
                      <div className="space-y-1.5 text-sm">
                        <div><strong className="text-navy">Catégorie :</strong> {category?.label}</div>
                        <div><strong className="text-navy">Produit :</strong> {sub}</div>
                        {Object.entries(form).filter(([, v]) => v).map(([k, v]) => (
                          <div key={k}><strong className="text-navy capitalize">{k} :</strong> {v}</div>
                        ))}
                        {contact.name && <div><strong className="text-navy">Contact :</strong> {contact.name} · {contact.phone} · {contact.email}</div>}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                      <a href="https://wa.me/237677750485" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity">
                        <MessageCircle className="h-4 w-4" /> Continuer sur WhatsApp
                      </a>
                      <Link to="/" className="inline-flex items-center gap-2 border border-border bg-card text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-muted transition-colors">
                        Retour à l'accueil
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 4 && (
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border font-medium hover:bg-muted disabled:opacity-30">
                  <ArrowLeft className="h-4 w-4" /> Précédent
                </button>
                <button onClick={() => setStep(Math.min(4, step + 1))}
                  disabled={(step === 1 && !cat) || (step === 2 && !sub) || (step === 3 && (!contact.name || !contact.phone || !contact.email))}
                  className="inline-flex items-center gap-2 bg-gold-gradient text-navy font-semibold px-7 py-3 rounded-lg hover:shadow-glow transition-all disabled:opacity-50">
                  {step === 3 ? "Envoyer ma demande" : "Suivant"} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
