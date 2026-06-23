import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Users, HeartPulse, ShieldCheck, Briefcase, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const solutions = [
  { to: "/solutions/assurance-personnes", label: "Assurance de Personnes", desc: "Vie, décès, épargne, retraite.", icon: Users },
  { to: "/solutions/assurance-maladie", label: "Assurance Maladie", desc: "Santé individuelle, famille, entreprise.", icon: HeartPulse },
  { to: "/solutions/assurance-iardt", label: "Assurance IARDT", desc: "Auto, habitation, voyage, transport.", icon: ShieldCheck },
  { to: "/solutions/gestion-risques", label: "Gestion des Risques", desc: "Audit & conseil entreprises.", icon: Briefcase },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTone = scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-card-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-colors ${scrolled ? "bg-white shadow-card-soft" : "bg-white/95 backdrop-blur"}`}>
            <img src={logoAsset.url} alt="Direct Insurance S.A." className="h-9 w-9 object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-base md:text-lg tracking-tight ${scrolled ? "text-navy" : "text-white"}`}>Direct Insurance</span>
            <span className={`text-[10px] tracking-[0.22em] font-semibold ${scrolled ? "text-primary" : "text-white/70"}`}>S.A.</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${navTone}`}
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Accueil
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${navTone}`}
            >
              Nos Solutions <ChevronDown className="h-4 w-4" />
            </button>
            {prodOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px]">
                <div className="bg-popover rounded-2xl shadow-elegant border border-border overflow-hidden p-2 grid grid-cols-1 gap-1">
                  {solutions.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-navy text-sm">{p.label}</div>
                        <div className="text-xs text-muted-foreground">{p.desc}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { to: "/devis", label: "Obtenir un Devis" },
            { to: "/sinistres", label: "Sinistres" },
            { to: "/agences", label: "Agences" },
            { to: "/actualites", label: "Actualités" },
            { to: "/a-propos", label: "À Propos" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${navTone}`}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/mon-espace"
            className={`text-sm font-medium ${navTone}`}
          >
            Mon Espace
          </Link>
          <Link
            to="/devis"
            className="bg-gold-gradient text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-glow transition-all"
          >
            Devis Gratuit
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-elegant">
          <nav className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Accueil</Link>
            <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground mt-2">Nos Solutions</div>
            {solutions.map((p) => (
              <Link key={p.to} to={p.to} className="px-3 py-2.5 rounded-md text-sm flex items-center gap-2" onClick={() => setOpen(false)}>
                <p.icon className="h-4 w-4 text-primary" /> {p.label}
              </Link>
            ))}
            <Link to="/devis" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Obtenir un Devis</Link>
            <Link to="/sinistres" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Sinistres</Link>
            <Link to="/agences" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Agences</Link>
            <Link to="/actualites" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Actualités</Link>
            <Link to="/a-propos" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>À Propos</Link>
            <Link to="/contact" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/mon-espace" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Mon Espace</Link>
            <Link to="/devis" className="mt-3 bg-gold-gradient text-white font-semibold text-center py-3 rounded-lg" onClick={() => setOpen(false)}>
              Devis Gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
