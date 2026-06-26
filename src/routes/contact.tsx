import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, MessageSquare, Search, FileText, Handshake, Building2, AlertCircle, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CONTACT_EMAIL, CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_ADDRESS } from "@/components/site/Footer";
import { useUIPrefs } from "@/lib/ui-prefs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | DIRECT INSURANCE SA — Yaoundé, Cameroun" },
      { name: "description", content: "Contactez DIRECT INSURANCE SA : agences à Yaoundé (Bastos, Olembe) et Douala. Téléphone, WhatsApp, email directinsurance2002@yahoo.fr." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const AGENCIES = [
  { city: "Yaoundé — Bastos", address: "Nouvelle Route Bastos, à côté de Tradex avant Air France", phone: "+237 677 75 04 85", maps: "https://maps.google.com/?q=Bastos+Yaoundé" },
  { city: "Yaoundé — Olembe", address: "Quartier Olembe, Yaoundé", phone: "+237 242 65 16 07", maps: "https://maps.google.com/?q=Olembe+Yaoundé" },
  { city: "Douala", address: "Centre-ville, Douala", phone: "+237 233 42 00 00", maps: "https://maps.google.com/?q=Douala+centre+ville" },
];

const WA_NUMBER = "237677750485";

type FormState = "idle" | "validating" | "sending" | "sent" | "error";

function ContactPage() {
  const { t } = useUIPrefs();
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const STEPS = [
    { icon: MessageSquare, title: "Vous nous contactez", desc: "WhatsApp, téléphone, email ou formulaire." },
    { icon: Search, title: "Analyse de vos besoins", desc: "Un conseiller étudie votre situation sous 24h." },
    { icon: FileText, title: "Proposition personnalisée", desc: "Nous vous soumettons une offre sur mesure." },
    { icon: Handshake, title: "Mise en place du contrat", desc: "Signature et émission de vos garanties." },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nom = String(fd.get("nom") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("telephone") || "").trim();
    const sujet = String(fd.get("sujet") || "");
    const message = String(fd.get("message") || "").trim();

    const errs: Record<string, string> = {};
    if (!nom || nom.length < 2) errs.nom = "Nom requis (min 2 caractères)";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Email invalide";
    if (!message || message.length < 10) errs.message = "Message trop court (min 10 caractères)";
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setState("error");
      return;
    }

    setState("sending");

    // Build a clean mailto + a WhatsApp fallback
    const body = [
      `Nom: ${nom}`,
      `Email: ${email}`,
      `Téléphone: ${phone || "—"}`,
      `Sujet: ${sujet}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[Site Web] ${sujet} — ${nom}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => setState("sent"), 600);
  }

  return (
    <SiteLayout>
      <section className="pt-8 pb-10 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">{t("contact.eyebrow")}</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">{t("contact.title")}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.sub")}</p>
          </div>

          {/* 4 CONTACT CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: MapPin, title: t("contact.address"), lines: [CONTACT_ADDRESS] },
              { icon: Phone, title: t("contact.phone"), lines: [CONTACT_PHONE_1, CONTACT_PHONE_2], href: `tel:${CONTACT_PHONE_1.replace(/\s/g, "")}` },
              { icon: Mail, title: t("contact.email"), lines: [CONTACT_EMAIL], href: `mailto:${CONTACT_EMAIL}` },
              { icon: Clock, title: t("contact.hours"), lines: [t("contact.hours.week"), t("contact.hours.sat")] },
            ].map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 bg-card rounded-2xl border border-border shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-gold-gradient text-white flex items-center justify-center mb-3">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="font-display font-bold text-navy mb-2">{c.title}</div>
                {c.lines.map((l) => (
                  c.href ? <a key={l} href={c.href} className="block text-sm text-muted-foreground hover:text-primary break-all">{l}</a>
                  : <div key={l} className="text-sm text-muted-foreground">{l}</div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* COMPACT WHATSAPP STRIP */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Bonjour Direct Insurance, j'aimerais obtenir des informations sur vos offres.")}`}
            target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 p-4 sm:p-5 bg-[#25D366] text-white rounded-2xl shadow-card-soft hover:shadow-elegant transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center animate-pulse-ring flex-shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-sm sm:text-base">WhatsApp Business — réponse en moins de 5 min</div>
                <div className="text-xs sm:text-sm text-white/90 truncate">+237 677 75 04 85 · Devis, sinistres, infos produits</div>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white/15 text-sm font-semibold group-hover:bg-white/25 transition-colors flex-shrink-0">
              Démarrer
            </span>
          </a>
        </div>
      </section>

      {/* AGENCIES */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">{t("contact.agencies.title")}</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mt-3">Yaoundé · Douala</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {AGENCIES.map((a, i) => (
              <motion.div key={a.city}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl border border-border bg-card shadow-card-soft hover:shadow-elegant transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{a.city}</h3>
                <p className="text-sm text-muted-foreground mb-2 flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> {a.address}</p>
                <a href={`tel:${a.phone.replace(/\s/g, "")}`} className="text-sm text-navy font-semibold flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> {a.phone}</a>
                <a href={a.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary hover:underline">
                  Itinéraire Google Maps →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="py-14 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Notre Démarche</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mt-3">Comment se passe une prise de contact ?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute left-[12%] right-[12%] top-9 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            {STEPS.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative text-center p-5"
              >
                <div className="relative inline-flex h-[72px] w-[72px] rounded-full bg-gold-gradient text-white items-center justify-center font-display font-bold text-2xl mb-4 z-10 shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center mb-3">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-card rounded-3xl shadow-elegant border border-border p-6 md:p-10"
          >
            {state === "sent" ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 rounded-full bg-gold-gradient text-white items-center justify-center mb-5">
                  <Send className="h-7 w-7" />
                </div>
                <h2 className="font-display font-bold text-2xl text-navy mb-2">{t("contact.form.sent.title")}</h2>
                <p className="text-muted-foreground mb-6">{t("contact.form.sent.desc")}</p>
                <button onClick={() => { setState("idle"); setErrors({}); }} className="text-primary font-semibold hover:underline">
                  ← Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h2 className="font-display font-bold text-2xl text-navy mb-2">{t("contact.form.title")}</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">{t("contact.form.name")} *</label>
                    <input name="nom" required maxLength={100} className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:border-primary ${errors.nom ? "border-destructive" : "border-border"}`} />
                    {errors.nom && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.nom}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">{t("contact.form.email")} *</label>
                    <input name="email" required type="email" maxLength={255} className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:border-primary ${errors.email ? "border-destructive" : "border-border"}`} />
                    {errors.email && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">{t("contact.form.phone")}</label>
                    <input name="telephone" maxLength={30} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary" placeholder="+237 6XX XX XX XX" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">{t("contact.form.subject")}</label>
                    <select name="sujet" defaultValue="Demande de devis" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary">
                      <option>Demande de devis</option>
                      <option>Déclaration de sinistre</option>
                      <option>Information produit</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-navy block mb-2">{t("contact.form.message")} *</label>
                  <textarea name="message" required rows={5} maxLength={2000} className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:border-primary resize-none ${errors.message ? "border-destructive" : "border-border"}`} />
                  {errors.message && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.message}</p>}
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="bg-gold-gradient text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all disabled:opacity-60"
                  >
                    {state === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Envoi…</> : <>{t("contact.form.send")} <Send className="h-4 w-4" /></>}
                  </button>
                  <span className="text-xs text-muted-foreground">Le message sera ouvert dans votre client de messagerie.</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
