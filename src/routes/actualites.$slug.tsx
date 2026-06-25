import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, User, Calendar, MessageCircle, Share2, Linkedin, Copy, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/actualites/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    const related = ARTICLES.filter((a) => a.cat === article.cat && a.slug !== article.slug).slice(0, 3);
    return { article, related };
  },
  head: ({ params, loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} | DIRECT INSURANCE` : "Article | DIRECT INSURANCE";
    const desc = a?.excerpt ?? "Article DIRECT INSURANCE";
    const url = `https://direct-assurance.lovable.app/actualites/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(a ? [{ property: "og:image", content: a.img } as const] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: a ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: a.title, image: a.img, datePublished: a.date,
          author: { "@type": "Person", name: a.author },
          publisher: { "@type": "Organization", name: "DIRECT INSURANCE SA" },
        }),
      }] : [],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-display font-bold text-navy mb-4">Article introuvable</h1>
        <Link to="/actualites" className="text-primary hover:underline">← Retour aux actualités</Link>
      </div>
    </SiteLayout>
  ),
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <SiteLayout>
      <article className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link to="/actualites" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" /> Toutes les actualités
          </Link>

          <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">{article.cat}</span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-navy mb-5 leading-tight text-balance">{article.title}</h1>

          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {article.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(article.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.time} de lecture</span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-8 max-h-[400px]">
            <img src={article.img} alt={article.title} className="w-full h-auto object-cover" loading="eager" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-5">
            {article.body.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
          </div>

          {/* Share + CTAs */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-1 p-5 rounded-2xl bg-muted border border-border">
              <div className="font-display font-semibold text-navy text-sm mb-3 inline-flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Partager
              </div>
              <div className="flex gap-2">
                <button onClick={() => { navigator.clipboard?.writeText(shareUrl); }} className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-xs font-semibold hover:bg-background">
                  <Copy className="h-3.5 w-3.5" /> Copier
                </button>
                <a href={`https://wa.me/?text=${encodeURIComponent(article.title + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="md:col-span-2 p-5 rounded-2xl bg-hero-gradient text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">Vous voulez aller plus loin ?</div>
                <div className="font-display font-bold text-lg">Obtenez votre devis gratuit en 2 minutes</div>
              </div>
              <Link to="/devis" className="bg-gold-gradient text-navy font-semibold px-5 py-3 rounded-lg whitespace-nowrap inline-flex items-center gap-1 hover:shadow-glow">
                Démarrer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy mb-8">Articles liés</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.slug} to="/actualites/$slug" params={{ slug: a.slug }}
                  className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mb-2">{a.cat}</span>
                    <h3 className="font-display font-bold text-navy mb-2 leading-snug line-clamp-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
