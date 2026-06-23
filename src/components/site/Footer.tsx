import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center">
                <img src={logoUrl} alt="Direct Insurance S.A." className="h-9 w-9 object-contain" />
              </div>
              <div className="leading-none">
                <div className="font-display font-bold text-lg">Direct Insurance</div>
                <div className="text-[10px] tracking-[0.2em] text-white/70 font-semibold">S.A.</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Depuis 1996, votre assurance de confiance au Cameroun. Agréée CIMA. Souscription 100% en ligne.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Nos Solutions</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/solutions/assurance-personnes" className="hover:text-gold">Assurance de Personnes</Link></li>
              <li><Link to="/solutions/assurance-maladie" className="hover:text-gold">Assurance Maladie</Link></li>
              <li><Link to="/solutions/assurance-iardt" className="hover:text-gold">Assurance IARDT</Link></li>
              <li><Link to="/solutions/gestion-risques" className="hover:text-gold">Gestion des Risques</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Société</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/a-propos" className="hover:text-gold">À Propos</Link></li>
              <li><Link to="/agences" className="hover:text-gold">Nos Agences</Link></li>
              <li><Link to="/actualites" className="hover:text-gold">Actualités</Link></li>
              <li><Link to="/sinistres" className="hover:text-gold">Déclarer un sinistre</Link></li>
              <li><Link to="/devis" className="hover:text-gold">Devis Gratuit</Link></li>
              <li><Link to="/mon-espace" className="hover:text-gold">Mon Espace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" /> Nouvelle route Bastos, Yaoundé</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" /> +237 677 75 04 85</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" /> contact@directinsurance.cm</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-white flex items-center justify-center transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-white flex items-center justify-center transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} DIRECT INSURANCE S.A. — Tous droits réservés. Agréée CIMA · N° CM-IA-006-2013.</p>
          <p>Yaoundé · Douala · Bafoussam · Garoua</p>
        </div>
      </div>
    </footer>
  );
}
