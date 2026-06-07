import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Phone, ArrowRight, AlertTriangle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/sinistres")({
  head: () => ({
    meta: [
      { title: "Déclarer un sinistre — DIRECT INSURANCE" },
      { name: "description", content: "Déclarez votre sinistre en ligne en quelques minutes. Expertise sous 48h." },
    ],
  }),
  component: SinistresPage,
});

const steps = [
  { title: "Déclarez", desc: "Renseignez les circonstances et téléchargez vos documents en ligne." },
  { title: "Expertise", desc: "Un expert vous contacte sous 48h pour évaluer le dommage." },
  { title: "Indemnisation", desc: "Vous recevez votre indemnisation par virement Mobile Money ou bancaire." },
];

function SinistresPage() {
  return (
    <SiteLayout>
      <section className="pt-28 pb-16 bg-hero-gradient text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex h-16 w-16 rounded-2xl bg-gold/20 text-gold items-center justify-center mb-5">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Déclarer un sinistre</h1>
          <p className="text-white/80 max-w-2xl mx-auto">Nous sommes là pour vous accompagner. Déclarez en ligne, par téléphone ou WhatsApp, 24h/24.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-navy text-center mb-12">Procédure en 3 étapes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-card rounded-2xl border border-border shadow-card-soft relative"
              >
                <div className="absolute -top-4 left-7 h-9 w-9 rounded-full bg-navy text-gold flex items-center justify-center font-bold font-display">{i + 1}</div>
                <h3 className="font-display font-bold text-xl text-navy mb-2 mt-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: FileText, title: "Déclarer en ligne", desc: "Formulaire sécurisé 5 min", href: "/contact" },
              { icon: MessageCircle, title: "WhatsApp", desc: "Réponse immédiate", href: "https://wa.me/237677750485", ext: true },
              { icon: Phone, title: "Téléphone 24/7", desc: "+237 677 75 04 85", href: "tel:+237677750485", ext: true },
            ].map((c) => {
              const inner = (
                <div className="p-7 bg-card rounded-2xl border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all group h-full">
                  <c.icon className="h-10 w-10 text-gold mb-4" />
                  <h3 className="font-display font-bold text-lg text-navy mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{c.desc}</p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Démarrer <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              );
              return c.ext
                ? <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                : <Link key={c.title} to={c.href}>{inner}</Link>;
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
