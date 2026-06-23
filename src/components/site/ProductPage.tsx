import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";

interface FAQ { q: string; a: string }

export function ProductPage({
  badge,
  title,
  subtitle,
  heroIcon,
  benefits,
  coverage,
  faqs,
  accentImage,
}: {
  badge: string;
  title: string;
  subtitle: string;
  heroIcon: ReactNode;
  benefits: { title: string; desc: string }[];
  coverage: string[];
  faqs: FAQ[];
  accentImage?: ReactNode;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase mb-5">{badge}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 text-balance">{title}</h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/devis" className="bg-gold-gradient text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
                Souscrire maintenant <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
                Parler à un conseiller
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center">
            {accentImage ?? (
              <div className="h-72 w-72 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gold animate-float">
                {heroIcon}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Pourquoi nous choisir</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Des garanties solides, un service rapide et une équipe d'experts à votre écoute.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-border bg-card shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center text-white font-bold mb-4">{i + 1}</div>
                <h3 className="font-display font-bold text-lg text-navy mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-10 text-center">Garanties incluses</h2>
          <div className="grid sm:grid-cols-2 gap-3 bg-card rounded-2xl p-6 md:p-10 shadow-card-soft">
            {coverage.map((c) => (
              <div key={c} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-navy" />
                </div>
                <span className="text-sm md:text-base text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
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
                  <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
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
      <section className="py-20 bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Prêt à vous protéger ?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Obtenez votre devis en moins de 2 minutes, 100% en ligne.</p>
          <Link to="/devis" className="inline-flex items-center gap-2 bg-gold-gradient text-white font-semibold px-8 py-4 rounded-lg hover:shadow-glow transition-all">
            Démarrer mon devis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
