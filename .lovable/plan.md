## DIRECT INSURANCE — Comprehensive Site Update (14 priorities)

This is a large, multi-page overhaul. To deliver quality without losing focus, I'll execute it in **3 staged batches**. I'll need you to confirm before I start.

### Stage 1 — Global structure (the spine of the site)
Files: `Header.tsx`, `Footer.tsx`, new `AnnouncementBanner.tsx`, new `EspaceClientLayout`, `SiteLayout.tsx`, `__root.tsx`, `styles.css`.

1. **Announcement banner** (P1): dismissible, marquee 30-year anniversary, gold "30 ANS" badge, localStorage persistence, below sticky navbar.
2. **Navbar cleanup** (P2): exactly 6 links (Accueil / Nos Solutions ▾ / Nos Agences / Actualités / À Propos / Contact), remove "Mon Espace" + "S.A." + duplicates, glass-morphism on scroll, gold "Devis Gratuit" CTA only.
3. **Language toggle FR/EN + Dark mode toggle** (P11): React context, localStorage. EN = navbar + hero + CTAs + footer translated; body pages show "EN version coming soon" banner.
4. **Global email replace** (P4): `directinsurance2002@yahoo.fr` everywhere.
5. **/espace-client standalone route** (P6): replace `/mon-espace`, no global navbar/footer, dark navy + animated particles, countdown to Sept 23 2026, glass feature cards, email waitlist.

### Stage 2 — Home + key institutional pages
Files: `index.tsx`, `a-propos.tsx`, `agences.tsx`, `contact.tsx`, new `PartnersStrip.tsx`, new `SolutionCardHorizontal.tsx`.

6. **Home redesign** (P3): real Unsplash hero photo + dark overlay, trust badges row, replace payment strip with animated partner+reassurer logo bands, 4 horizontal glassmorphism solution cards, **Innovation Exclusive** section (auto online coming soon), updated stats (+30 / 10 000+ / 03 / 98%), glassmorphism testimonials carousel, full partners/references section before footer.
7. **About** (P10): 10-section restructure (hero → stats → timeline 1996→2026 → presentation → mission → vision → profession de foi → values → certifications → partners).
8. **Agencies** (P5): 3 exact agency cards (Bastos, Olembe, Douala) with phones, Google Maps GPS deep-link, "Coming Soon" navy CTA at bottom with email capture.
9. **Contact** (P12): new 4-step "Comment se passe une prise de contact" timeline, updated phones/email/address.

### Stage 3 — Solutions, Blog, Devis, SEO
Files: 4 solution pages, `actualites.tsx` + new `actualites.$slug.tsx`, `devis.tsx`, `sitemap.xml.ts`, `robots.txt`, per-route `head()`.

10. **Solution pages** (P9): exact product lists from PDFs + taglines per solution.
11. **Blog full functionality** (P7): category tabs (Tous / Auto & IARDT / Santé / Personnes & Vie / Entreprise / Conseils), live search, pagination (6/page), 6 sample articles, full article detail page with related + share + CTAs.
12. **Devis simulator** (P8): 4 product categories with the exact Direct Insurance sub-products, dynamic per-product forms, confirmation screen (no live pricing).
13. **SEO** (P14): per-route titles/descriptions/og, InsuranceAgency JSON-LD, sitemap.xml, robots.txt, alt text audit, canonical.
14. **EDIT_GUIDE.txt** (P13) in /public.

### Technical notes
- Translations stored in a simple `src/i18n/translations.ts` dictionary + `useLang()` hook. Heavy body content stays FR with a notice in EN to keep scope realistic.
- Dark mode via `class="dark"` on `<html>` + new tokens in `styles.css`.
- Partner logos: I'll reference `/logos/partners/*.svg` (per your prompt these "already exist"). If any are missing in `/public/logos/partners/`, I'll generate clean text-mark SVG placeholders so the build never breaks.
- Hero / solution / about photos: real Unsplash photo URLs (no image generation cost), with proper `alt` text.
- Countdown date fixed at **2026-09-23T00:00:00**.

### What I will NOT do
- Add real payment/Mobile Money integration (only UI mentions).
- Implement a real EN translation of every blog article (notice only).
- Build the OCR/scan engine for real (Innovation section is a marketing teaser).
- Edit `src/routeTree.gen.ts` (auto-generated).

### Estimated edit count
~25 files modified, ~10 new files. Three batches, one tool-call wave per stage. Once you approve, I'll proceed straight through Stage 1 → 2 → 3 without further questions unless something blocks me.

**Please confirm to start, or tell me what to adjust / drop / reprioritize.**