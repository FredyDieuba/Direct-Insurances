import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, MessageSquare, Search, FileText, Handshake } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CONTACT_EMAIL, CONTACT_PHONE_1, CONTACT_PHONE_2, CONTACT_ADDRESS } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | DIRECT INSURANCE SA — Yaoundé, Cameroun" },
      { name: "description", content: "Contactez DIRECT INSURANCE SA à Yaoundé : Nouvelle Route Bastos. Téléphone, WhatsApp, email directinsurance2002@yahoo.fr." },
      { property: "og:url", content: "https://direct-assurance.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://direct-assurance.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const STEPS = [
  { icon: MessageSquare, title: "Vous nous contactez", desc: "Via WhatsApp, téléphone, email ou formulaire." },
  { icon: Search, title: "Analyse de vos besoins", desc: "Un conseiller qualifié étudie votre situation sous 24h." },
  { icon: FileText, title: "Proposition personnalisée", desc: "Nous vous soumettons une offre sur mesure." },
  { icon: Handshake, title: "Mise en place du contrat", desc: "Signature et émission de vos garanties." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="pt-12 pb-12 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Contact</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Parlons de votre projet</h1>
            <p className="text-muted-foreground">Notre équipe vous répond sous 24h. Pour une réponse immédiate, contactez-nous sur WhatsApp.</p>
          </div>

          {/* CONTACT CHANNELS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: MapPin, title: "Adresse", lines: [CONTACT_ADDRESS] },
              { icon: Phone, title: "Téléphone", lines: [CONTACT_PHONE_1, CONTACT_PHONE_2] },
              { icon: Mail, title: "Email", lines: [CONTACT_EMAIL], href: `mailto:${CONTACT_EMAIL}` },
              { icon: Clock, title: "Horaires", lines: ["Lun–Ven : 8h–17h", "Sam : 9h–13h"] },
            ].map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="p-5 bg-card rounded-2xl border border-border shadow-card-soft"
              >
                <div className="h-11 w-11 rounded-xl bg-gold-gradient text-navy flex items-center justify-center mb-3">
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
        </div>
      </section>

      {/* 4-STEP PROCESS */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Notre Démarche</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mt-3">Comment se passe une prise de contact ?</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Une démarche claire et structurée pour vous accompagner sans friction.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 relative">
            <div className="hidden md:block absolute left-[12%] right-[12%] top-9 h-0.5 bg-gradient-to-r from-gold/30 via-navy to-gold/30" />
            {STEPS.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative text-center p-5"
              >
                <div className="relative inline-flex h-[72px] w-[72px] rounded-full bg-gold-gradient text-navy items-center justify-center font-display font-bold text-2xl mb-4 z-10 shadow-glow">
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
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-6">
          <a href="https://wa.me/237677750485" target="_blank" rel="noopener noreferrer"
            className="block p-6 bg-[#25D366] text-white rounded-2xl shadow-elegant hover:shadow-glow transition-all lg:col-span-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-11 w-11 rounded-xl bg-white/20 flex items-center justify-center animate-pulse-ring">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-bold">WhatsApp Business</div>
                <div className="text-sm text-white/90">Réponse en moins de 5 min</div>
              </div>
            </div>
            <p className="text-sm text-white/90">+237 677 75 04 85</p>
          </a>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-2 bg-card rounded-3xl shadow-elegant border border-border p-6 md:p-10"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 rounded-full bg-gold-gradient text-navy items-center justify-center mb-5">
                  <Send className="h-7 w-7" />
                </div>
                <h2 className="font-display font-bold text-2xl text-navy mb-2">Message envoyé !</h2>
                <p className="text-muted-foreground">Notre équipe vous recontacte sous 24h.</p>
              </div>
            ) : (
              <form
                action={`mailto:${CONTACT_EMAIL}`}
                method="post"
                encType="text/plain"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <h2 className="font-display font-bold text-2xl text-navy mb-2">Envoyez-nous un message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">Nom complet *</label>
                    <input name="nom" required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">Email *</label>
                    <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">Téléphone</label>
                    <input name="telephone" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" placeholder="+237 6XX XX XX XX" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">Sujet</label>
                    <select name="sujet" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none">
                      <option>Demande de devis</option>
                      <option>Déclaration de sinistre</option>
                      <option>Information produit</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy block mb-2">Message *</label>
                  <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none resize-none" />
                </div>
                <button type="submit" className="bg-gold-gradient text-navy font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
                  Envoyer le message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
