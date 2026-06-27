import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useUIPrefs } from "@/lib/ui-prefs";

export const Route = createFileRoute("/aide")({
    component: AidePage,
});

function AidePage() {
    const { t, lang } = useUIPrefs();
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const sections = [
        {
            title: lang === "fr" ? "Comment souscrire" : "How to subscribe",
            icon: "✍️",
            items: [
                { q: lang === "fr" ? "Puis-je souscrire en ligne ?" : "Can I subscribe online?", a: lang === "fr" ? "Pour le moment, vous pouvez demander un devis en ligne. Un conseiller finalise ensuite avec vous." : "For now, you can request a quote online. An advisor will then finalize it with you." },
                { q: lang === "fr" ? "Quels documents préparer ?" : "What documents to prepare?", a: lang === "fr" ? "Généralement : pièce d'identité, carte grise (véhicules) ou statuts (entreprises)." : "Usually: ID, vehicle registration (vehicles) or articles of association (companies)." }
            ]
        },
        {
            title: lang === "fr" ? "Comment déclarer un sinistre" : "How to claim",
            icon: "🚑",
            items: [
                { q: lang === "fr" ? "Quel est le délai de déclaration ?" : "What is the claim deadline?", a: lang === "fr" ? "Généralement 5 jours ouvrés, et de 48h en cas de vol, selon le code CIMA." : "Usually 5 working days, and 48h for theft, according to CIMA code." },
                { q: lang === "fr" ? "Qui contacter ?" : "Who to contact?", a: lang === "fr" ? "Contactez immédiatement notre service Sinistres par téléphone ou rendez-vous en agence pour remplir le formulaire de déclaration avec nos experts." : "Contact our Claims department by phone immediately or visit a branch to fill the claim form with our experts." }
            ]
        }
    ];

    return (
        <SiteLayout>
            <div className="pt-32 pb-24 bg-hero-gradient text-white text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{lang === "fr" ? "Centre d'Aide & FAQ" : "Help Center & FAQ"}</h1>
                <p className="text-white/80 max-w-xl mx-auto text-lg">{lang === "fr" ? "Nous sommes là pour vous accompagner à chaque étape." : "We are here to support you at every step."}</p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
                <div className="space-y-12">
                    {sections.map((sec, idx) => (
                        <section key={idx}>
                            <h2 className="text-2xl font-display font-bold text-navy mb-6 flex items-center gap-2">
                                <span>{sec.icon}</span> {sec.title}
                            </h2>
                            <div className="space-y-3">
                                {sec.items.map((f, i) => {
                                    const id = idx * 100 + i;
                                    return (
                                        <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
                                            <button
                                                className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy hover:bg-muted/50"
                                                onClick={() => setOpenFaq(openFaq === id ? null : id)}
                                            >
                                                <span>{f.q}</span>
                                                <ChevronDown className={`h-5 w-5 transition-transform flex-shrink-0 ${openFaq === id ? "rotate-180" : ""}`} />
                                            </button>
                                            {openFaq === id && (
                                                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </SiteLayout>
    );
}
