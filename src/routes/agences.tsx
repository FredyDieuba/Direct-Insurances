import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/agences")({
  head: () => ({
    meta: [
      { title: "Nos Agences — DIRECT INSURANCE" },
      { name: "description", content: "Retrouvez nos agences à Yaoundé, Douala, Bafoussam et partout au Cameroun." },
    ],
  }),
  component: AgencesPage,
});

const agencies = [
  { city: "Yaoundé", name: "Agence Centrale Bastos", address: "Nouvelle route Bastos, Yaoundé", phone: "+237 242 651 606", hours: "Lun-Ven 8h-17h · Sam 9h-13h" },
  { city: "Yaoundé", name: "Agence Nkolbisson", address: "Face Mairie de Nkolbisson, Yaoundé", phone: "+237 677 75 04 85", hours: "Lun-Ven 8h-17h" },
  { city: "Douala", name: "Agence Akwa", address: "Boulevard de la République, Akwa, Douala", phone: "+237 677 75 04 85", hours: "Lun-Ven 8h-17h · Sam 9h-13h" },
  { city: "Bafoussam", name: "Agence Bafoussam Centre", address: "Avenue du Marché A, Bafoussam", phone: "+237 677 75 04 85", hours: "Lun-Ven 8h-17h" },
];

function AgencesPage() {
  const [filter, setFilter] = useState("Toutes");
  const cities = ["Toutes", ...Array.from(new Set(agencies.map((a) => a.city)))];
  const filtered = filter === "Toutes" ? agencies : agencies.filter((a) => a.city === filter);

  return (
    <SiteLayout>
      <section className="pt-28 pb-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Réseau</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Nos Agences au Cameroun</h1>
            <p className="text-muted-foreground">Un conseiller proche de chez vous, dans toutes les grandes villes.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === c ? "bg-navy text-white" : "bg-card border border-border text-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {filtered.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 bg-card rounded-2xl border border-border shadow-card-soft hover:shadow-elegant transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs text-gold font-bold uppercase tracking-wider mb-1">{a.city}</div>
                      <h3 className="font-display font-bold text-xl text-navy">{a.name}</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />{a.address}</div>
                    <div className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />{a.phone}</div>
                    <div className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />{a.hours}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="sticky top-28 h-[500px] rounded-3xl overflow-hidden shadow-elegant border border-border bg-navy relative">
              <div className="absolute inset-0 bg-hero-gradient" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }} />
              {[
                { x: "30%", y: "40%", label: "Yaoundé" },
                { x: "20%", y: "70%", label: "Douala" },
                { x: "45%", y: "55%", label: "Bafoussam" },
              ].map((p) => (
                <div key={p.label} className="absolute" style={{ left: p.x, top: p.y }}>
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-gold animate-pulse-ring" />
                    <div className="absolute left-6 top-0 bg-white text-navy text-xs font-bold px-2 py-1 rounded shadow-md whitespace-nowrap">{p.label}</div>
                  </div>
                </div>
              ))}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 text-navy">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Carte interactive</div>
                <div className="text-sm font-semibold">Cliquez sur une agence pour obtenir l'itinéraire GPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
