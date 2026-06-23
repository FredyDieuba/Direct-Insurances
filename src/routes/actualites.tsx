import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités & Conseils — DIRECT INSURANCE" },
      { name: "description", content: "Conseils assurance, actualités du secteur, guides pratiques pour particuliers et entreprises au Cameroun." },
      { property: "og:title", content: "Actualités — DIRECT INSURANCE" },
      { property: "og:description", content: "Le blog d'expertise de l'assurance camerounaise." },
    ],
  }),
  component: ActualitesPage,
});

const categories = ["Tous", "Auto", "Santé", "Personnes", "Entreprise", "InsurTech"];

const articles = [
  { cat: "Auto", title: "Pourquoi l'assurance auto est obligatoire au Cameroun ?", excerpt: "Cadre légal, sanctions en cas de défaut d'assurance et comment souscrire en ligne.", author: "Paul B.", time: "5 min", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80" },
  { cat: "InsurTech", title: "Scan de carte grise : comment ça fonctionne ?", excerpt: "Notre technologie OCR révolutionne la souscription d'assurance auto.", author: "Sarah K.", time: "4 min", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" },
  { cat: "Voyage", title: "Assurance voyage en Afrique : le guide complet 2026", excerpt: "Vous voyagez vers Douala, Abidjan ou Paris ? Découvrez quelle couverture choisir.", author: "Christelle N.", time: "7 min", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80" },
  { cat: "Santé", title: "Maternité : tout ce que couvre votre assurance santé", excerpt: "Suivi prénatal, accouchement, post-partum — les garanties à vérifier avant le grand jour.", author: "Dr. Ngono", time: "6 min", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80" },
  { cat: "Entreprise", title: "Multirisque pro : les 5 garanties indispensables", excerpt: "Comment construire une couverture solide pour votre PME, sans exploser le budget.", author: "Marc T.", time: "8 min", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80" },
  { cat: "Personnes", title: "Assurance vie : un outil patrimonial sous-utilisé", excerpt: "Capital, transmission, fiscalité — pourquoi (re)considérer l'assurance vie en 2026.", author: "Hortense F.", time: "9 min", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80" },
];

function ActualitesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Blog d'expertise</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">Actualités <span className="text-gold">& Conseils</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Guides pratiques, décryptages réglementaires et innovations InsurTech — par les experts DIRECT INSURANCE.</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-md bg-background/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button key={c} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? "bg-navy text-white" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={a.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="inline-block px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mb-3">{a.cat}</span>
                <h3 className="font-display font-bold text-lg text-navy mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{a.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1.5"><User className="h-3 w-3" /> {a.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {a.time}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 hover:gap-2 transition-all">
                  Lire l'article <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Restez informé</h2>
          <p className="text-muted-foreground mb-6">1 newsletter par mois — actus, conseils, nouveautés produits. Pas de spam.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" placeholder="votre@email.com" className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="bg-gold-gradient text-white font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all">S'abonner</button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Besoin d'un conseil personnalisé ?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gold-gradient text-white font-semibold px-7 py-3.5 rounded-lg hover:shadow-glow transition-all mt-2">
            Contacter un expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
