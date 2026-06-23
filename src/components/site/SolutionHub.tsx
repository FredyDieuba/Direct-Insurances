import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, type LucideIcon } from "lucide-react";
import { useState, ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export interface HubProduct {
  title: string;
  desc: string;
  icon: LucideIcon;
  href?: string;
  bullets?: string[];
}

export interface HubFAQ { q: string; a: string }

export function SolutionHub({
  badge,
  title,
  highlight,
  intro,
  heroImage,
  heroOverlay,
  pillarLabel,
  products,
  benefits,
  process,
  faqs,
  ctaTitle,
  ctaSubtitle,
}: {
  badge: string;
  title: string;
  highlight: string;
  intro: string;
  heroImage: string;
  heroOverlay?: ReactNode;
  pillarLabel: string;
  products: HubProduct[];
  benefits: { title: string; desc: string; icon: LucideIcon }[];
  process: { title: string; desc: string }[];
  faqs: HubFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* HERO — full-bleed image with navy gradient overlay */}
      <section className="relative pt-28 pb-24 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center min-h-[480px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> {badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 text-balance leading-[1.05]">
              {title} <span className="text-gold">{highlight}</span>
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mb-8">{intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
                Obtenir un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors">
                Parler à un conseiller
              </Link>
            </div>
          </motion.div>

          {heroOverlay && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 hidden lg:block">
              {heroOverlay}
            </motion.div>
          )}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">{pillarLabel}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3">Nos produits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">Des couvertures sur-mesure pensées pour chaque profil et chaque situation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => {
              const card = (
                <div className="group h-full p-7 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-gold-gradient group-hover:text-white flex items-center justify-center transition-colors mb-5">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                  {p.bullets && (
                    <ul className="space-y-1.5 mb-4">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.href && (
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              );
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  {p.href ? <Link to={p.href}>{card}</Link> : card}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Pourquoi nous choisir</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3">Avantages clés</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-card-soft"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Comment souscrire</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3">Une démarche simple en {process.length} étapes</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {process.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative p-7 rounded-2xl bg-card border border-border text-center"
              >
                <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-gold-gradient text-white font-display font-bold flex items-center justify-center text-xl shadow-glow">
                  {i + 1}
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-10 text-center">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy hover:bg-muted/50"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(45,127,249,0.5) 0px, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance">{ctaTitle}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{ctaSubtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
              Obtenir un devis <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Contacter un conseiller
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
