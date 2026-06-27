import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Search, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ARTICLES, CATEGORIES } from "@/data/articles";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités & Conseils Assurance Cameroun — DIRECT INSURANCE" },
      { name: "description", content: "Conseils assurance, actualités du secteur, guides pratiques pour particuliers et entreprises au Cameroun." },
      { property: "og:title", content: "Actualités — DIRECT INSURANCE" },
      { property: "og:url", content: "https://direct-assurance.lovable.app/actualites" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/actualites" }],
  }),
  component: ActualitesPage,
});

const PAGE_SIZE = 6;

function ActualitesPage() {
  const [cat, setCat] = useState<string>("Tous");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState(false);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return ARTICLES.filter((a) =>
      (cat === "Tous" || a.cat === cat) &&
      (needle === "" || a.title.toLowerCase().includes(needle) || a.excerpt.toLowerCase().includes(needle))
    );
  }, [cat, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <SiteLayout>
      <section className="relative pt-12 pb-16 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">Blog d'expertise</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-5">Actualités <span className="text-gold">& Conseils</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Guides pratiques, décryptages et innovations — par les experts DIRECT INSURANCE.</p>
        </div>
      </section>

      <section className="py-6 bg-background border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-md bg-background/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => { setCat(c); setPage(1); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${cat === c ? "bg-navy text-white" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Rechercher un article…"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {slice.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">Aucun article ne correspond à votre recherche.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {slice.map((a, i) => (
                <motion.article key={a.slug}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mb-3">{a.cat}</span>
                    <h2 className="font-display font-bold text-lg text-navy mb-2 leading-snug line-clamp-2">{a.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{a.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                      <span className="flex items-center gap-1.5"><User className="h-3 w-3" /> {a.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {a.time}</span>
                    </div>
                    <Link to="/actualites/$slug" params={{ slug: a.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 hover:gap-2 transition-all">
                      Lire l'article <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button onClick={() => setPage(Math.max(1, current - 1))} disabled={current === 1}
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border bg-card disabled:opacity-30 hover:bg-muted">
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)}
                  className={`h-9 w-9 rounded-lg text-sm font-semibold ${current === i + 1 ? "bg-navy text-white" : "bg-card border border-border hover:bg-muted"}`}>
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setPage(Math.min(totalPages, current + 1))} disabled={current === totalPages}
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border bg-card disabled:opacity-30 hover:bg-muted">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Restez informé des actualités assurance</h2>
          <p className="text-muted-foreground mb-6">1 newsletter par mois — actus, conseils, nouveautés produits. Pas de spam.</p>
          {sub ? (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold/10 text-navy border border-gold/30 font-semibold">
              ✓ Inscription confirmée !
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSub(true); }} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <button type="submit" className="bg-gold-gradient text-navy font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all">S'abonner</button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
