import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Navigation, Mail, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/agences")({
  head: () => ({
    meta: [
      { title: "Nos Agences — Yaoundé & Douala | DIRECT INSURANCE SA" },
      { name: "description", content: "Retrouvez DIRECT INSURANCE SA à Yaoundé (Bastos, Olembe) et Douala. Itinéraires GPS, téléphone, WhatsApp." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/agences" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/agences" }],
  }),
  component: AgencesPage,
});

const agencies = [
  {
    name: "Siège Social — Bastos",
    city: "Yaoundé",
    address: "Nouvelle Route Bastos, à côté de Tradex avant Air France",
    phone: "(237) 677 750 485",
    phone2: "242 65 16 07",
    whatsapp: "237677750485",
  },
  {
    name: "Agence Olembe",
    city: "Yaoundé",
    address: "Olembe, Yaoundé",
    phone: "(237) 677 750 485",
    phone2: null,
    whatsapp: "237677750485",
  },
  {
    name: "Agence Douala",
    city: "Douala",
    address: "Boulevard de la République, Douala",
    phone: "(237) 662 074 467",
    phone2: null,
    whatsapp: "237662074467",
  },
];

function AgencesPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-12 pb-16 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Notre Réseau</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Nos Agences au Cameroun</h1>
            <p className="text-muted-foreground">Trois agences à votre service à Yaoundé et Douala.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((a, i) => {
              const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(a.address + ", " + a.city + ", Cameroun")}`;
              return (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 bg-card rounded-2xl border border-border shadow-card-soft hover:shadow-elegant transition-all flex flex-col"
                >
                  <div className="text-xs text-gold font-bold uppercase tracking-wider mb-1">{a.city}</div>
                  <h3 className="font-display font-bold text-xl text-navy mb-4">{a.name}</h3>
                  <div className="space-y-3 text-sm text-foreground/85 flex-1">
                    <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> {a.address}</div>
                    <div className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{a.phone}{a.phone2 && <> · {a.phone2}</>}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors">
                      <Navigation className="h-4 w-4" /> Itinéraire GPS
                    </a>
                    <a href={`https://wa.me/${a.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMING SOON CTA */}
      <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(232,160,32,0.4) 0px, transparent 50%), radial-gradient(circle at 70% 70%, rgba(26,58,143,0.6) 0px, transparent 50%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Sparkles className="h-8 w-8 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-4">Votre Assurance Bientôt Disponible en Ligne</h2>
          <p className="text-white/85 mb-8 text-lg">
            DIRECT INSURANCE prépare le lancement de sa plateforme digitale. Soyez parmi les premiers à y accéder.
          </p>
          {sent ? (
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-gold/30 text-gold">
              <Check className="h-5 w-5" /> Merci ! Vous serez informé en avant-première.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <button type="submit" className="bg-gold-gradient text-navy font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all whitespace-nowrap">
                Je veux être informé
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
