import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, ArrowRight, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/mon-espace")({
  head: () => ({
    meta: [
      { title: "Espace Client — DIRECT INSURANCE" },
      { name: "description", content: "Accédez à votre espace personnel sécurisé." },
    ],
  }),
  component: EspacePage,
});

function EspacePage() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  return (
    <SiteLayout>
      <section className="pt-28 pb-20 bg-subtle-gradient min-h-screen">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl shadow-elegant border border-border p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <div className="inline-flex h-14 w-14 rounded-2xl bg-gold-gradient text-navy items-center justify-center mb-4">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h1 className="text-2xl font-display font-bold text-navy mb-1">Espace Client</h1>
              <p className="text-sm text-muted-foreground">Accédez à vos contrats et attestations</p>
            </div>

            <div className="flex bg-muted rounded-xl p-1 mb-6">
              {(["login", "signup"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    tab === t ? "bg-card text-navy shadow-card-soft" : "text-muted-foreground"
                  }`}
                >
                  {t === "login" ? "Connexion" : "Créer un compte"}
                </button>
              ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {tab === "signup" && (
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <input placeholder="Nom complet" className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
                </div>
              )}
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                <input placeholder="Email ou téléphone" className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                <input type="password" placeholder="Mot de passe" className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:border-gold focus:outline-none" />
              </div>
              {tab === "login" && (
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-primary hover:text-navy">Mot de passe oublié ?</a>
                </div>
              )}
              <button type="submit" className="w-full bg-gold-gradient text-gold-foreground font-semibold py-3.5 rounded-lg inline-flex items-center justify-center gap-2 hover:shadow-glow transition-all">
                {tab === "login" ? "Se connecter" : "Créer mon compte"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="text-center text-xs text-muted-foreground mt-6">
              Pas encore client ? <Link to="/devis" className="text-primary font-semibold hover:text-navy">Obtenir un devis</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
