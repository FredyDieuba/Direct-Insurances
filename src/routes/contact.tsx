import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DIRECT INSURANCE" },
      { name: "description", content: "Contactez-nous : siège à Bastos Yaoundé, WhatsApp, téléphone +237 677 75 04 85." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="pt-28 pb-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Contact</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-navy mt-3 mb-3">Parlons de votre projet</h1>
            <p className="text-muted-foreground">Notre équipe vous répond sous 24h. Pour une réponse immédiate, contactez-nous sur WhatsApp.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              {[
                { icon: MapPin, title: "Siège Social", lines: ["Nouvelle route Bastos", "Yaoundé, Cameroun"] },
                { icon: Phone, title: "Téléphone", lines: ["+237 242 651 606", "+237 677 75 04 85"] },
                { icon: Mail, title: "Email", lines: ["contact@directinsurance.cm"] },
                { icon: Clock, title: "Horaires", lines: ["Lun–Ven : 8h–17h", "Sam : 9h–13h"] },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 bg-card rounded-2xl border border-border shadow-card-soft flex gap-4"
                >
                  <div className="h-11 w-11 rounded-xl bg-gold-gradient text-navy flex items-center justify-center flex-shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy mb-1">{c.title}</div>
                    {c.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                  </div>
                </motion.div>
              ))}

              <a
                href="https://wa.me/237677750485"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-[#25D366] text-white rounded-2xl shadow-elegant hover:shadow-glow transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-white/20 flex items-center justify-center animate-pulse-ring">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold">WhatsApp Business</div>
                    <div className="text-sm text-white/90">Réponse en moins de 5 min</div>
                  </div>
                </div>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-5"
                >
                  <h2 className="font-display font-bold text-2xl text-navy mb-2">Envoyez-nous un message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Nom complet *</label>
                      <input required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Email *</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Téléphone</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" placeholder="+237 6XX XX XX XX" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy block mb-2">Sujet</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none">
                        <option>Demande de devis</option>
                        <option>Déclaration de sinistre</option>
                        <option>Information produit</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy block mb-2">Message *</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none resize-none" />
                  </div>
                  <button type="submit" className="bg-gold-gradient text-gold-foreground font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 hover:shadow-glow transition-all">
                    Envoyer le message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
