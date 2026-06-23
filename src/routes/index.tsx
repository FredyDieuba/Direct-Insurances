import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Play, ArrowRight, Smartphone, CreditCard, FileCheck, ShieldCheck,
  Users, HeartPulse, Briefcase, Sparkles, Star, X,
  Award, Building2, Clock, ScanLine, Check, Zap,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIRECT INSURANCE — Leader de l'assurance digitale au Cameroun" },
      { name: "description", content: "Assurance de personnes, maladie, IARDT et gestion des risques. Souscription 100% en ligne, paiement Mobile Money, attestation immédiate. Agréée CIMA depuis 1996." },
      { property: "og:title", content: "DIRECT INSURANCE — Leader InsurTech Cameroun" },
      { property: "og:description", content: "L'assurance nouvelle génération, simple, rapide et accessible partout au Cameroun." },
    ],
  }),
  component: HomePage,
});

const solutions = [
  { to: "/solutions/assurance-personnes", icon: Users, title: "Assurance de Personnes", desc: "Vie, décès, épargne, retraite et accidents individuels.", tag: "Famille & avenir" },
  { to: "/solutions/assurance-maladie", icon: HeartPulse, title: "Assurance Maladie", desc: "Santé individuelle, famille, entreprise. Réseau 250+.", tag: "Santé" },
  { to: "/solutions/assurance-iardt", icon: ShieldCheck, title: "Assurance IARDT", desc: "Auto, habitation, voyage, multirisque pro. Scan OCR IA.", tag: "Biens & activités" },
  { to: "/solutions/gestion-risques", icon: Briefcase, title: "Gestion des Risques", desc: "Audit, prévention et conseil pour les entreprises.", tag: "Corporate" },
];

const steps = [
  { icon: Smartphone, title: "Choisissez", desc: "Sélectionnez votre formule en quelques clics." },
  { icon: CreditCard, title: "Payez", desc: "Orange Money, MTN MoMo, Carte bancaire." },
  { icon: FileCheck, title: "Recevez", desc: "Attestation PDF par email et WhatsApp." },
];

const testimonials = [
  { name: "Aïcha M.", role: "Cliente Auto, Douala", text: "Souscription en 4 minutes, attestation reçue sur WhatsApp. Bluffant !", stars: 5 },
  { name: "Jean-Paul T.", role: "Entrepreneur, Yaoundé", text: "Service client réactif et indemnisation rapide après mon sinistre.", stars: 5 },
  { name: "Mireille K.", role: "Famille, Bafoussam", text: "Excellent rapport qualité-prix sur l'assurance santé famille.", stars: 5 },
];

function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100vh] bg-hero-gradient text-white overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 25% 30%, rgba(45,127,249,0.4) 0px, transparent 50%), radial-gradient(circle at 75% 70%, rgba(26,58,143,0.6) 0px, transparent 50%)"
        }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative grid lg:grid-cols-12 gap-10 py-20 items-center">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                Régie par le Code CIMA · Depuis 1996
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 text-balance">
                Votre assurance en <span className="text-gold">5 minutes</span><br />
                <span className="text-white/90">100% en ligne</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Souscrivez Auto, Voyage, Santé, Habitation ou Vie. Payez par Mobile Money. Recevez votre attestation PDF en 30 secondes sur WhatsApp.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-7 py-4 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
                  Obtenir mon devis <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group flex items-center gap-3 px-5 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <span className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-white">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </span>
                  <span className="font-medium">Voir la vidéo</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Agréé CIMA</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Attestation immédiate</div>
                <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> 30 ans d'expertise</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-elegant">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs text-white/60">DIRECT INSURANCE · Attestation</div>
                  <ShieldCheck className="h-5 w-5 text-gold" />
                </div>
                <div className="space-y-3 mb-5">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-white/50">Police N°</div>
                    <div className="font-mono text-sm">DI-2026-08472</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-wider text-white/50">Assuré</div>
                    <div className="font-medium">Marie K.</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="text-[10px] uppercase tracking-wider text-white/50">Formule</div>
                      <div className="text-sm font-medium">Tous risques</div>
                    </div>
                    <div className="bg-gold/20 rounded-lg p-3 border border-gold/30">
                      <div className="text-[10px] uppercase tracking-wider text-gold">Statut</div>
                      <div className="text-sm font-medium text-gold">Active</div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-xs text-white/60 pt-4 border-t border-white/10">
                  Reçue sur WhatsApp en 28 secondes ⚡
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gold-gradient text-white text-xs font-bold px-3 py-2 rounded-full shadow-glow"
              >
                ✓ Payé via Orange Money
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Paiement & Conformité</div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70">
            {["Orange Money", "MTN MoMo", "Visa", "Mastercard", "CIMA", "Express Union"].map((p) => (
              <div key={p} className="text-navy font-display font-bold text-lg md:text-xl tracking-tight grayscale hover:grayscale-0 transition-all">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Process</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-4">Comment ça marche</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Trois étapes simples pour être assuré en quelques minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-card rounded-2xl p-8 shadow-card-soft border border-border hover:shadow-elegant transition-all"
              >
                <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-navy text-gold font-display font-bold flex items-center justify-center text-sm">
                  0{i + 1}
                </div>
                <div className="h-14 w-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-white mb-5">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS HUBS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Nos Solutions</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 max-w-2xl">Des solutions adaptées à chaque besoin</h2>
            </div>
            <Link to="/devis" className="text-primary font-semibold hover:text-navy inline-flex items-center gap-1">
              Comparer les formules <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((p, i) => (
              <motion.div
                key={p.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={p.to}
                  className="group block h-full p-7 rounded-2xl border border-border bg-card hover:bg-navy hover:border-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-gold-gradient flex items-center justify-center text-primary group-hover:text-white transition-colors mb-5 w-fit">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground group-hover:text-gold transition-colors mb-2">{p.tag}</div>
                  <h3 className="font-display font-bold text-xl text-navy group-hover:text-white transition-colors mb-2 leading-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors mb-5">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                    Découvrir <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OCR SIGNATURE FEATURE */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(45,127,249,0.15) 0px, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-5">
              <Sparkles className="h-3.5 w-3.5" /> Innovation exclusive
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-5 leading-tight">
              Scannez votre carte grise, <span className="text-primary">l'IA fait le reste.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-7 max-w-xl leading-relaxed">
              Une première au Cameroun : photographiez votre carte grise depuis votre téléphone, notre IA extrait immatriculation, marque, modèle et châssis en moins de 3 secondes. Zéro saisie manuelle.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Extraction automatique en 3 secondes",
                "Formulaire de souscription pré-rempli",
                "Devis instantané et attestation immédiate",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <Link to="/solutions/assurance-iardt" className="bg-gold-gradient text-white font-semibold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
              <ScanLine className="h-4 w-4" /> Essayer le scan
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative mx-auto max-w-sm bg-navy rounded-[2.5rem] p-3 border-4 border-navy/40 shadow-elegant">
              <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/16] relative">
                <div className="absolute inset-0 flex flex-col">
                  <div className="p-4 text-center text-xs font-semibold text-navy border-b border-border">Scanner carte grise</div>
                  <div className="flex-1 p-5 flex flex-col gap-3">
                    <div className="relative aspect-[1.6] rounded-xl bg-gradient-to-br from-primary/30 to-navy/10 border-2 border-dashed border-primary/40 overflow-hidden">
                      <motion.div className="absolute inset-x-0 h-1 bg-primary shadow-[0_0_20px_rgba(45,127,249,0.9)]" animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
                      <div className="absolute inset-3 border border-primary/30 rounded-md flex items-center justify-center text-[10px] text-navy/60 font-mono">CARTE GRISE · CMR</div>
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-primary text-white text-[9px] font-bold animate-pulse">SCAN IA</div>
                    </div>
                    <div className="space-y-2 text-xs">
                      {[{ l: "Immatriculation", v: "CE 4521 XL" }, { l: "Marque", v: "TOYOTA HILUX" }, { l: "Châssis", v: "JTERB71J8…" }].map((f, i) => (
                        <motion.div key={f.l} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.3 }} className="bg-muted rounded-lg p-2 flex justify-between items-center">
                          <span className="text-muted-foreground">{f.l}</span>
                          <span className="font-mono font-semibold text-navy">{f.v}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="bg-gold-gradient text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-1 mt-auto">
                      <Zap className="h-3 w-3" /> Devis instantané prêt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(45,127,249,0.6) 0px, transparent 40%)"
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 30, suffix: "+", label: "Années d'expertise", icon: Award },
              { value: 10000, suffix: "+", label: "Clients protégés", icon: Users },
              { value: 12, suffix: "", label: "Agences au Cameroun", icon: Building2 },
              { value: 98, suffix: "%", label: "Taux de satisfaction", icon: Star },
            ].map((s) => (
              <div key={s.label}>
                <div className="inline-flex h-12 w-12 rounded-xl bg-gold/20 text-gold items-center justify-center mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Écosystème</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-4">Partenaires & Références</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Nous travaillons avec les leaders mondiaux de l'assurance et de la réassurance.</p>
          </div>
          <div className="space-y-8">
            {[
              { title: "Assureurs", items: ["ALLIANZ", "AXA", "ACTIVA", "SUNU", "SANLAM"] },
              { title: "Réassureurs", items: ["SCOR · Paris", "SWISS-RE · Genève", "MUNICH-RE · Allemagne"] },
              { title: "Références Clients", items: ["SABC", "CNPS", "CRTV", "ADC", "ONEL-ELECAM"] },
            ].map((row) => (
              <div key={row.title}>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">{row.title}</div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {row.items.map((i) => (
                    <div key={i} className="px-5 py-3 bg-card rounded-xl border border-border shadow-card-soft font-display font-bold text-navy text-sm md:text-base">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Témoignages</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3">Ils nous font confiance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-card rounded-2xl border border-border shadow-card-soft"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-5 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gold-gradient text-white font-bold flex items-center justify-center">{t.name[0]}</div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(45,127,249,0.4) 0px, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 text-balance">Assurez-vous en quelques clics.</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">Rejoignez les milliers de Camerounais qui font confiance à DIRECT INSURANCE.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
              Démarrer mon devis <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setVideoOpen(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-navy rounded-2xl overflow-hidden shadow-elegant" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10">
              <X className="h-5 w-5" />
            </button>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4 bg-hero-gradient">
              <div className="h-20 w-20 rounded-full bg-gold-gradient flex items-center justify-center">
                <Play className="h-8 w-8 fill-navy text-navy ml-1" />
              </div>
              <p className="text-white/70 text-sm">Vidéo de présentation DIRECT INSURANCE</p>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
