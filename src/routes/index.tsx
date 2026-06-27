import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, ShieldCheck, Users, HeartPulse, Briefcase,
  Sparkles, Star, Award, Building2, Check, ScanLine, CreditCard, Clock, Smartphone,
  PlayCircle, X, Zap, Headphones, MapPin, TrendingUp,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { PartnersStrip } from "@/components/site/PartnersStrip";
import { useUIPrefs } from "@/lib/ui-prefs";
import { assets } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIRECT INSURANCE SA | Courtier d'Assurance au Cameroun depuis 1996" },
      { name: "description", content: "DIRECT INSURANCE SA — votre courtier-conseil agréé au Cameroun. Assurance IARDT, Maladie, Personnes & Gestion des Risques. Devis gratuit. Agrément MINFI N°03/038/CF/A." },
      { property: "og:title", content: "DIRECT INSURANCE SA | Courtier d'Assurance au Cameroun" },
      { property: "og:description", content: "Courtier-conseil agréé au Cameroun depuis 1996. IARDT, Maladie, Personnes, Gestion des Risques." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/" }],
  }),
  component: HomePage,
});

// African professional / family / business imagery (Unsplash)
const HERO_IMG = assets.hero.home; // imported from registry
const HERO_VIDEO = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // placeholder, replace with brand video

function HomePage() {
  const { t } = useUIPrefs();
  const [tIdx, setTIdx] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const solutions = [
    {
      to: "/solutions/assurance-personnes",
      badge: "Famille & avenir",
      title: t("sol.personnes"),
      desc: t("sol.personnes.desc"),
      products: ["Prévoyance Retraite", "Temporaire Décès", "Rente Éducation"],
      img: assets.hero.auto,
      icon: Users,
    },
    {
      to: "/solutions/assurance-maladie",
      badge: "Santé",
      title: t("sol.maladie"),
      desc: t("sol.maladie.desc"),
      products: ["Frais Médicaux & Pharmaceutiques", "Soins Dentaires & Lunetterie", "Assurance Voyage"],
      img: assets.hero.maladie,
      icon: HeartPulse,
    },
    {
      to: "/solutions/assurance-iardt",
      badge: "Biens & activités",
      title: t("sol.iardt"),
      desc: t("sol.iardt.desc"),
      products: ["Automobile", "Multirisque Bâtiments", "Transports Maritimes & Terrestres"],
      img: assets.hero.iardt,
      icon: ShieldCheck,
    },
    {
      to: "/solutions/gestion-risques",
      badge: "Corporate",
      title: t("sol.risques"),
      desc: t("sol.risques.desc"),
      products: ["Audit des Assurances", "PROGESPA", "Pack Vie GOLD"],
      img: assets.hero.risques,
      icon: Briefcase,
    },
  ];

  const whyFeatures = [
    { icon: Award, t: t("why.f1.t"), d: t("why.f1.d") },
    { icon: Zap, t: t("why.f2.t"), d: t("why.f2.d") },
    { icon: Headphones, t: t("why.f3.t"), d: t("why.f3.d") },
    { icon: MapPin, t: t("why.f4.t"), d: t("why.f4.d") },
    { icon: TrendingUp, t: t("why.f5.t"), d: t("why.f5.d") },
  ];

  const testimonials = [
    { name: "Aïcha Mbarga", role: "Cliente Auto, Douala", text: "Souscription en quelques minutes, attestation reçue sur WhatsApp. Service vraiment professionnel.", stars: 5, photo: assets.hero.profile },
    { name: "Jean-Paul Tchoua", role: "Entrepreneur, Yaoundé", text: "Service client réactif et indemnisation rapide après mon sinistre. Je recommande vivement.", stars: 5, photo: assets.hero.profile },
    { name: "Mireille Kamgang", role: "Famille, Bafoussam", text: "Excellent rapport qualité-prix sur l'assurance santé famille. Une équipe à l'écoute.", stars: 5, photo: assets.hero.profile },
    { name: "Christelle Nguele", role: "Directrice PME, Douala", text: "PROGESPA a transformé notre gestion des risques. Audit clair, conseils actionnables.", stars: 5, photo: assets.hero.profile },
  ];

  return (
    <SiteLayout transparentHeader>
      {/* HERO — full-bleed African professional imagery */}
      <section className="relative min-h-[92vh] text-white overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Professionnels africains, sérénité et confiance" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,28,61,0.94) 0%, rgba(11,28,61,0.78) 45%, rgba(11,28,61,0.45) 100%)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="h-2 w-2 rounded-full bg-[#2D7FF9] animate-pulse" />
                {t("hero.eyebrow")}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.05] mb-5 text-balance">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-[#7BA9FF] font-semibold mb-5">{t("hero.sub")}</p>
              <p className="text-[17px] text-white/85 mb-8 max-w-2xl leading-relaxed">{t("hero.body")}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-7 py-4 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
                  {t("hero.cta1")} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/solutions/assurance-iardt" className="border border-white/30 text-white font-semibold px-7 py-4 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors">
                  {t("hero.cta2")}
                </Link>
                <button onClick={() => setVideoOpen(true)} className="inline-flex items-center gap-2 px-5 py-4 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors group">
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur border border-white/25 animate-pulse-ring">
                    <PlayCircle className="h-6 w-6 text-white" />
                  </span>
                  {t("hero.video")}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                {["✓ Agréé MINFI N°03/038/CF/A", "✓ Code CIMA", "✓ SOGEP GROUP", "✓ +30 ans d'expertise"].map((b) => (
                  <span key={b} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-sm">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS STRIP */}
      <PartnersStrip background="background" />

      {/* COUNTERS — position 3 */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(45,127,249,0.6) 0px, transparent 45%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 30, suffix: "+", label: t("stats.years"), icon: Award },
              { value: 10000, suffix: "+", label: t("stats.clients"), icon: Users },
              { value: 3, suffix: "", label: t("stats.offices"), icon: Building2 },
              { value: 98, suffix: "%", label: t("stats.satisfaction"), icon: Star },
            ].map((s) => (
              <div key={s.label}>
                <div className="inline-flex h-12 w-12 rounded-xl bg-white/10 text-[#7BA9FF] items-center justify-center mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">{t("why.eyebrow")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">{t("why.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("why.sub")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyFeatures.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.07 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-gradient text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2 text-lg leading-tight">{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">{t("solutions.eyebrow")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">{t("solutions.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("solutions.sub")}</p>
          </div>

          <div className="space-y-6">
            {solutions.map((s, i) => (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden rounded-3xl shadow-elegant"
              >
                <div className="grid lg:grid-cols-5 min-h-[320px]">
                  <div className="lg:col-span-2 relative overflow-hidden bg-navy">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/60 lg:to-navy/95" />
                  </div>
                  <div
                    className="lg:col-span-3 p-8 md:p-10 relative text-white"
                    style={{
                      background: "rgba(11,28,61,0.94)",
                      backdropFilter: "blur(12px)",
                      borderLeft: "1px solid rgba(45,127,249,0.3)",
                    }}
                  >
                    {/* Clear solution title first, then badge */}
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">{s.title}</h3>
                    <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#7BA9FF] font-bold mb-3">{s.badge}</span>
                    <p className="text-white/80 mb-5 max-w-xl">{s.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {s.products.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-white/90">
                          <Check className="h-4 w-4 text-[#7BA9FF] flex-shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                    <Link to={s.to} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold-gradient text-white font-semibold hover:shadow-glow transition-all">
                      {t("solutions.discover")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-hero-gradient text-white shadow-elegant relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, rgba(45,127,249,0.6) 0px, transparent 50%)" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">
                <Sparkles className="h-3.5 w-3.5" /> INNOVATION EXCLUSIVE · BIENTÔT DISPONIBLE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight text-balance">
                Votre Assurance Automobile <span className="text-[#7BA9FF]">100% en Ligne</span>
              </h2>
              <p className="text-white/85 text-lg mb-7 max-w-xl">
                DIRECT INSURANCE lance la première plateforme de souscription d'assurance auto 100% digitale au Cameroun. Devis instantané, paiement Mobile Money, attestation immédiate.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { icon: ScanLine, text: "Scan OCR de votre carte grise" },
                  { icon: CreditCard, text: "Paiement Orange Money & MTN MoMo" },
                  { icon: Check, text: "Attestation PDF instantanée" },
                  { icon: Clock, text: "Disponible 24h/24 — 7j/7" },
                ].map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <span className="h-7 w-7 rounded-full bg-gold-gradient text-white flex items-center justify-center flex-shrink-0">
                      <f.icon className="h-4 w-4" />
                    </span>
                    <span className="text-white/95">{f.text}</span>
                  </li>
                ))}
              </ul>
              <Link to="/espace-client" className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-7 py-3.5 rounded-lg hover:shadow-glow transition-all">
                Être informé en avant-première <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-navy rounded-[2.5rem] p-3 border-4 border-navy/40 shadow-elegant">
                <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/16] relative">
                  <div className="p-4 text-center text-xs font-semibold text-navy border-b border-border flex items-center justify-center gap-2">
                    <Smartphone className="h-3.5 w-3.5" /> DIRECT · Mobile
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="relative aspect-[1.6] rounded-xl bg-gradient-to-br from-primary/20 to-navy/10 border-2 border-dashed border-primary/50 overflow-hidden">
                      <motion.div className="absolute inset-x-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(45,127,249,0.9)]"
                        animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
                      <div className="absolute inset-3 border border-primary/30 rounded-md flex items-center justify-center text-[10px] text-navy/60 font-mono">CARTE GRISE</div>
                    </div>
                    {[{ l: "Marque", v: "TOYOTA HILUX" }, { l: "Immat.", v: "CE 4521 XL" }].map((f) => (
                      <div key={f.l} className="bg-muted rounded-lg p-2 flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">{f.l}</span>
                        <span className="font-mono font-semibold text-navy">{f.v}</span>
                      </div>
                    ))}
                    <div className="bg-gold-gradient text-white text-xs font-bold py-3 rounded-lg text-center">Devis prêt ⚡</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0B1C3D 0%, #1A3A8F 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(45,127,249,0.5) 0px, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12">
            <span className="text-[#7BA9FF] text-xs font-bold tracking-[0.25em] uppercase">{t("testimonials.eyebrow")}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">{t("testimonials.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((offset) => {
              const tm = testimonials[(tIdx + offset) % testimonials.length];
              return (
                <motion.div
                  key={offset + tIdx}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: offset * 0.08 }}
                  className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 border-l-[3px] border-l-[#2D7FF9]"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: tm.stars }).map((_, j) => <Star key={j} className="h-4 w-4 fill-[#2D7FF9] text-[#2D7FF9]" />)}
                  </div>
                  <p className="text-white/90 italic leading-relaxed mb-5">"{tm.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <img src={tm.photo} alt={tm.name} className="h-11 w-11 rounded-full object-cover border-2 border-[#2D7FF9]/50" loading="lazy" />
                    <div>
                      <div className="font-semibold text-white text-sm">{tm.name}</div>
                      <div className="text-xs text-white/60">{tm.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)}
                className={`h-2 rounded-full transition-all ${i === tIdx ? "bg-[#2D7FF9] w-8" : "bg-white/30 w-2"}`}
                aria-label={`Témoignage ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <PartnersStrip title="Nos Partenaires & Références" showClients background="muted" />

      {/* FINAL CTA */}
      <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(45,127,249,0.5) 0px, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-5 text-balance">{t("cta.title")}</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">{t("cta.sub")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
              {t("cta.start")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              {t("cta.contact")}
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-3 -right-3 z-10 h-10 w-10 rounded-full bg-white text-navy flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={`${HERO_VIDEO}?autoplay=1`}
                title="DIRECT INSURANCE — Présentation"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
