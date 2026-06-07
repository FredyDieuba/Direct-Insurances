import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Shield, Users, Target, Heart, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — DIRECT INSURANCE" },
      { name: "description", content: "Depuis 1996, DIRECT INSURANCE S.A. accompagne particuliers et entreprises au Cameroun. Agréée CIMA." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Shield, title: "Confiance", desc: "Inspirer la confiance par la transparence et l'expertise." },
  { icon: Target, title: "Audit des risques", desc: "Analyser finement chaque situation pour mieux protéger." },
  { icon: Heart, title: "Adaptation", desc: "Souscrire des garanties sur-mesure pour chaque client." },
  { icon: Users, title: "Indemnisation rapide", desc: "Régler les sinistres avec célérité et équité." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-28 pb-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(232,160,32,0.5) 0px, transparent 50%)" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase mb-5">À Propos</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">30 ans au service des Camerounais</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Créée en 1996, DIRECT INSURANCE S.A. est une compagnie d'assurance régie par le Code CIMA, dédiée à la protection des particuliers et des entreprises au Cameroun.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Notre Histoire</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mt-3 mb-5">Une vision, trois décennies d'expertise</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Depuis nos premiers contrats en 1996, nous avons accompagné des milliers de familles et d'entreprises camerounaises dans la protection de ce qui leur est cher.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aujourd'hui, nous combinons l'expérience traditionnelle de l'assurance avec les meilleures technologies InsurTech pour offrir un service rapide, transparent et 100% digital.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, value: 30, suffix: "+", label: "Années d'expertise" },
                { icon: Users, value: 10000, suffix: "+", label: "Clients" },
                { icon: Building2, value: 12, suffix: "", label: "Agences" },
                { icon: Shield, value: 100, suffix: "%", label: "Agréé CIMA" },
              ].map((s) => (
                <div key={s.label} className="p-6 bg-card rounded-2xl border border-border shadow-card-soft text-center">
                  <s.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-navy mb-1">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Nos Missions</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3">Nos engagements</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-card rounded-2xl border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-gradient text-navy flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Partenaires</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Un réseau international</h2>
            <p className="text-muted-foreground">Nous nous appuyons sur les plus grands noms de l'assurance mondiale.</p>
          </div>
          <div className="space-y-8">
            {[
              { title: "Assureurs partenaires", items: ["ALLIANZ", "AXA", "ACTIVA", "SUNU", "SANLAM"] },
              { title: "Réassureurs", items: ["SCOR · Paris", "SWISS-RE · Genève", "MUNICH-RE · Allemagne"] },
              { title: "Banques partenaires", items: ["Société Générale", "Ecobank", "Afriland First Bank"] },
              { title: "Références Clients", items: ["SABC (Brasseries)", "CNPS", "CRTV", "ADC (Aéroports du Cameroun)", "ONEL-ELECAM"] },
            ].map((row) => (
              <div key={row.title}>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">{row.title}</div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {row.items.map((i) => (
                    <div key={i} className="px-5 py-3 bg-muted rounded-xl border border-border font-display font-bold text-navy text-sm md:text-base">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
