import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES } from "@/data/articles";

const BASE_URL = "https://direct-assurance.lovable.app";

interface SitemapEntry { path: string; lastmod?: string; changefreq?: "weekly" | "monthly"; priority?: string }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/solutions/assurance-iardt", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/solutions/assurance-maladie", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/solutions/assurance-personnes", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/solutions/gestion-risques", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/agences", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/a-propos", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/devis", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/actualites", changefreq: "weekly", priority: "0.8", lastmod: today },
          { path: "/sinistres", changefreq: "monthly", priority: "0.6", lastmod: today },
          ...ARTICLES.map((a) => ({ path: `/actualites/${a.slug}`, changefreq: "monthly" as const, priority: "0.6", lastmod: a.date })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
