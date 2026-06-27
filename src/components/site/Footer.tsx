import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { useUIPrefs } from "@/lib/ui-prefs";

export const CONTACT_EMAIL = "directinsurance2002@yahoo.fr";
export const CONTACT_PHONE_1 = "+237 677 75 04 85";
export const CONTACT_PHONE_2 = "242 65 16 07";
export const CONTACT_ADDRESS = "Nouvelle Route Bastos, à côté de Tradex avant Air France, Yaoundé";

export function Footer() {
  const { t, lang } = useUIPrefs();
  return (
    <footer className="bg-navy text-navy-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center">
                <img src={logoUrl} alt="Logo Direct Insurance" className="h-9 w-9 object-contain" />
              </div>
              <div className="leading-none">
                <div className="font-display font-bold text-lg">Direct Insurance</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">{t("footer.solutions")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/solutions/assurance-personnes" className="hover:text-gold">{t("sol.personnes")}</Link></li>
              <li><Link to="/solutions/assurance-maladie" className="hover:text-gold">{t("sol.maladie")}</Link></li>
              <li><Link to="/solutions/assurance-iardt" className="hover:text-gold">{t("sol.iardt")}</Link></li>
              <li><Link to="/solutions/gestion-risques" className="hover:text-gold">{t("sol.risques")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/a-propos" className="hover:text-gold">{t("nav.about")}</Link></li>
              <li><Link to="/agences" className="hover:text-gold">{t("nav.agences")}</Link></li>
              <li><Link to="/actualites" className="hover:text-gold">{t("nav.actualites")}</Link></li>
              <li><Link to="/sinistres" className="hover:text-gold">{t("footer.sinistre")}</Link></li>
              <li><Link to="/devis" className="hover:text-gold">{t("nav.devis")}</Link></li>
              <li><Link to="/espace-client" className="hover:text-gold">{t("footer.espaceclient")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" /> {CONTACT_ADDRESS}</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" /> {CONTACT_PHONE_1} · {CONTACT_PHONE_2}</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold break-all">{CONTACT_EMAIL}</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-col gap-2">
            <p>© {new Date().getFullYear()} DIRECT INSURANCE SA — {t("footer.rights")} {lang === "en" ? "MINFI Approved N°03/038/CF/A · CIMA Code · SOGEP GROUP Member." : "Agréé MINFI N°03/038/CF/A du 21 Mars 2003 · Code CIMA · Membre SOGEP GROUP."}</p>
            <div className="flex gap-4">
              <Link to="/mentions-legales" className="hover:text-white transition-colors">{t("footer.legal")}</Link>
              <Link to="/politique-de-confidentialite" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
              <Link to="/conditions-generales" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
            </div>
          </div>
          <p>{lang === "en" ? "Yaoundé (Bastos · Olembe) · Douala" : "Yaoundé (Bastos · Olembe) · Douala"}</p>
        </div>
      </div>
    </footer>
  );
}
