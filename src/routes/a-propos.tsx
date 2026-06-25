import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Shield, Users, Building2, HandHeart, Eye, Target, BadgeCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { PartnersStrip } from "@/components/site/PartnersStrip";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos | 30 ans d'expertise en assurance au Cameroun — DIRECT INSURANCE SA" },
      { name: "description", content: "Depuis 1996, DIRECT INSURANCE SA accompagne particuliers et entreprises du Cameroun. Agréé MINFI N°03/038/CF/A. Membre SOGEP GROUP." },
      { property: "og:title", content: "À Propos — DIRECT INSURANCE SA" },
      { property: "og:url", content: "https://direct-assurance.lovable.app/a-propos" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/a-propos" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "1996", title: "Fondation", desc: "Création de DIRECT INSURANCE SA à Yaoundé." },
  { year: "2003", title: "Agrément MINFI", desc: "N°03/038/CF/A du 21 Mars 2003 — courtier d'assurance." },
  { year: "2010", title: "Expansion Douala", desc: "Ouverture de l'agence Douala, croissance régionale." },
  { year: "2020", title: "Modernisation", desc: "Modernisation des process et offres de gestion de risques." },
  { year: "2026", title: "Transformation digitale", desc: "Lancement de l'espace client digital et de l'offre auto en ligne." },
];

const VALUES = [
  { icon: BadgeCheck, title: "Professionnalisme", desc: "Une équipe formée à l'Institut International des Assurances de Yaoundé." },
  { icon: Shield, title: "Intégrité", desc: "Une distribution indépendante et un conseil transparent." },
  { icon: HandHeart, title: "Humanité", desc: "Une relation de proximité avec chaque client, particulier ou entreprise." },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* 1. HERO */}
      <section className="relative pt-28 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" alt="Équipe professionnelle DIRECT INSURANCE" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,28,61,0.92) 0%, rgba(11,28,61,0.75) 100%)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Notre Histoire · Notre Mission · Nos Valeurs
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
            Plus de 30 ans au service des assurés camerounais
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            DIRECT INSURANCE SA — courtier-conseil agréé, membre SOGEP GROUP, partenaire des particuliers, familles et entreprises du Cameroun.
          </p>
        </div>
      </section>

      {/* 2. CHIFFRES CLÉS */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: Award, value: 30, suffix: "+", label: "Ans d'expertise" },
            { icon: Users, value: 10000, suffix: "+", label: "Clients" },
            { icon: Building2, value: 3, suffix: "", label: "Agences" },
            { icon: Shield, value: 98, suffix: "%", label: "Satisfaction" },
            { icon: BadgeCheck, value: 2003, suffix: "", label: "Agréé MINFI" },
          ].map((s) => (
            <div key={s.label} className="p-5 bg-card rounded-2xl border border-border shadow-card-soft text-center">
              <s.icon className="h-7 w-7 text-gold mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-display font-bold text-navy mb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TIMELINE */}
      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Notre Histoire</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mt-3">30 ans de croissance et de confiance</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30" />
            {TIMELINE.map((it, i) => (
              <motion.div key={it.year}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative pl-12 md:pl-0 mb-8 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                  <div className="absolute left-2 md:left-1/2 top-1 -translate-x-1/2 h-5 w-5 rounded-full bg-gold border-4 border-background z-10" />
                  <div className="text-gold font-display font-bold text-2xl mb-1">{it.year}</div>
                  <h3 className="font-display font-bold text-navy text-lg mb-1">{it.title}</h3>
                  <p className="text-muted-foreground text-sm">{it.desc}</p>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRÉSENTATION */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Présentation</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mt-3 mb-6">Une entreprise citoyenne, ancrée au Cameroun</h2>
          <div className="prose prose-lg max-w-none text-foreground/85 space-y-4">
            <p>
              <strong>DIRECT INSURANCE SA</strong> est une entreprise citoyenne agréée par arrêté <strong>N°03/038/CF/A/MINFI du 21 Mars 2003</strong> portant agrément à la profession de courtiers d'assurance, évoluant sur le marché camerounais de l'assurance depuis plus d'une vingtaine d'années. Elle emploie une solide équipe de professionnels formés à l'Institut International des Assurances de Yaoundé et autres écoles d'enseignement supérieur.
            </p>
            <p>
              Nous mettons nos valeurs de <strong>professionnalisme, d'intégrité et d'humanité</strong> à la satisfaction des nombreux particuliers et entreprises qui nous font confiance.
            </p>
            <p>
              DIRECT INSURANCE SA vous donne des chances de réussite à vos projets et vos entreprises en vous garantissant des moyens de subsistance lors de la réalisation du risque et vous accompagne à chaque étape pour le développement durable de votre entreprise. Inspirer la confiance en couvrant de façon optimale les risques courus par nos clients constitue le cœur de notre métier.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MISSION + 6. VISION */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card-soft">
            <div className="h-12 w-12 rounded-xl bg-gold-gradient text-navy flex items-center justify-center mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-3">Notre Mission</h3>
            <ul className="space-y-2 text-foreground/85">
              <li>• La distribution en toute indépendance des produits disponibles sur le marché.</li>
              <li>• Le conseil et l'assistance des assurés.</li>
              <li>• Auditer, conseiller, couvrir les risques et répondre rapidement en cas de sinistre.</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-card border border-border shadow-card-soft">
            <div className="h-12 w-12 rounded-xl bg-gold-gradient text-navy flex items-center justify-center mb-4">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-3">Notre Vision</h3>
            <p className="text-foreground/85">
              Être le partenaire de référence en matière de conseil en assurance pour les hommes et les entreprises du Cameroun.
            </p>
          </div>
        </div>
      </section>

      {/* 7. PROFESSION DE FOI */}
      <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(232,160,32,0.5) 0px, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Sparkles className="h-8 w-8 text-gold mx-auto mb-5" />
          <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-3 block">Profession de Foi</span>
          <blockquote className="text-2xl md:text-4xl font-display font-bold leading-tight text-balance italic">
            « Nous amenons les Hommes et les Entreprises à jouir de façon efficiente de leur sécurité en matière d'Assurance. »
          </blockquote>
        </div>
      </section>

      {/* 8. VALEURS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Nos Valeurs</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3">Trois piliers, une promesse</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 rounded-xl bg-gold-gradient text-navy flex items-center justify-center mb-5">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AGRÉMENTS */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Agréments & Certifications</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mt-3">Un cadre légal solide</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Agrément MINFI", desc: "N°03/038/CF/A du 21 Mars 2003" },
              { title: "Code CIMA", desc: "Conformité réglementaire régionale" },
              { title: "SOGEP GROUP", desc: "Membre du Groupe SOGEP" },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-card border border-border text-center">
                <BadgeCheck className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="font-display font-bold text-navy mb-1">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PARTNERS */}
      <PartnersStrip title="Nos Partenaires" background="background" />
    </SiteLayout>
  );
}
