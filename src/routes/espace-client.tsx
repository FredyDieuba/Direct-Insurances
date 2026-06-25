import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Bell, CreditCard, Smartphone, ArrowLeft, Mail, Check } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/espace-client")({
  head: () => ({
    meta: [
      { title: "Espace Client InsurTech — Bientôt disponible | DIRECT INSURANCE" },
      { name: "description", content: "Votre Espace Client digital DIRECT INSURANCE arrive bientôt : contrats, sinistres, paiements Mobile Money, application mobile." },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/espace-client" }],
  }),
  component: EspaceClientPage,
});

const LAUNCH = new Date("2026-09-23T00:00:00").getTime();

function useCountdown() {
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return useMemo(() => {
    const diff = Math.max(0, LAUNCH - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  }, [now]);
}

function EspaceClientPage() {
  const { d, h, m, s } = useCountdown();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const features = [
    { icon: FileText, title: "Mes Contrats", desc: "Tous vos contrats centralisés et téléchargeables." },
    { icon: Bell, title: "Suivi Sinistres", desc: "Déclarez et suivez chaque sinistre en temps réel." },
    { icon: CreditCard, title: "Paiement Mobile Money", desc: "Orange Money, MTN MoMo en 1 clic." },
    { icon: Smartphone, title: "Application Mobile", desc: "iOS & Android — votre assurance en poche." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy text-white">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 25% 30%, rgba(232,160,32,0.25) 0px, transparent 50%), radial-gradient(circle at 75% 70%, rgba(26,58,143,0.6) 0px, transparent 50%)"
      }} />
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Floating shapes */}
      {[
        { left: "8%", top: "20%", size: 90, delay: "0s" },
        { left: "85%", top: "15%", size: 60, delay: "3s" },
        { left: "75%", top: "70%", size: 120, delay: "6s" },
        { left: "12%", top: "75%", size: 70, delay: "9s" },
      ].map((c, i) => (
        <div key={i} className="pointer-events-none absolute rounded-full bg-gold/10 blur-2xl animate-float-shape"
          style={{ left: c.left, top: c.top, width: c.size, height: c.size, animationDelay: c.delay }} />
      ))}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Top: logo */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-elegant">
              <img src={logoUrl} alt="Direct Insurance" className="h-10 w-10 object-contain" />
            </div>
            <span className="font-display font-bold text-lg">Direct Insurance</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            INSURTECH · COMING SOON
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 text-balance">
            Votre Espace Client Digital <span className="text-gold">arrive très bientôt</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            Gérez vos contrats, suivez vos sinistres, téléchargez vos attestations et payez vos primes en ligne. La première plateforme InsurTech de DIRECT INSURANCE sera disponible prochainement.
          </p>
        </motion.div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-12">
          {[
            { label: "Jours", value: d },
            { label: "Heures", value: h },
            { label: "Minutes", value: m },
            { label: "Secondes", value: s },
          ].map((c) => (
            <div key={c.label} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="text-3xl md:text-5xl font-display font-bold text-gold tabular-nums">
                {String(c.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/60 mt-1">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/40 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gold-gradient text-navy flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-base mb-1">{f.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Waitlist form */}
        <div className="max-w-xl mx-auto p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <label className="block text-center text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Soyez notifié dès le lancement
          </label>
          {submitted ? (
            <div className="text-center py-2">
              <div className="inline-flex h-12 w-12 rounded-full bg-gold-gradient text-navy items-center justify-center mb-3">
                <Check className="h-6 w-6" />
              </div>
              <p className="text-white font-semibold">Merci ! Vous serez parmi les premiers informés.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <button type="submit" className="bg-gold-gradient text-navy font-semibold px-6 py-3 rounded-lg hover:shadow-glow transition-all whitespace-nowrap">
                M'inscrire à la liste d'attente
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/60 space-y-2">
          <p>© {new Date().getFullYear()} DIRECT INSURANCE SA · directinsurance2002@yahoo.fr · (237) 677 750 485</p>
          <Link to="/" className="inline-flex items-center gap-1 text-gold hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Retour au site
          </Link>
        </div>
      </div>
    </div>
  );
}
