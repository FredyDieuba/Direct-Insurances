import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { to: "/assurance-auto", label: "Auto" },
  { to: "/assurance-voyage", label: "Voyage" },
  { to: "/assurance-habitation", label: "Habitation" },
  { to: "/assurance-sante", label: "Santé" },
  { to: "/assurance-vie", label: "Vie" },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-card-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gold-gradient flex items-center justify-center font-display font-bold text-navy">D</div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-base md:text-lg ${scrolled ? "text-navy" : "text-white"}`}>DIRECT</span>
            <span className={`text-[10px] tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>INSURANCE</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {[
            { to: "/", label: "Accueil" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <button
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Nos Produits <ChevronDown className="h-4 w-4" />
            </button>
            {prodOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-popover rounded-xl shadow-elegant border border-border overflow-hidden">
                  {products.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-3 text-sm font-medium text-popover-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      Assurance {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { to: "/devis", label: "Simulateur" },
            { to: "/agences", label: "Nos Agences" },
            { to: "/a-propos", label: "À Propos" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/mon-espace"
            className={`text-sm font-medium ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Espace Client
          </Link>
          <Link
            to="/devis"
            className="bg-gold-gradient text-gold-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-glow transition-all"
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
            <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground mt-2">Nos Produits</div>
            {products.map((p) => (
              <Link key={p.to} to={p.to} className="px-3 py-2.5 rounded-md text-sm" onClick={() => setOpen(false)}>
                Assurance {p.label}
              </Link>
            ))}
            <Link to="/devis" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Simulateur</Link>
            <Link to="/agences" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Nos Agences</Link>
            <Link to="/a-propos" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>À Propos</Link>
            <Link to="/sinistres" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Sinistres</Link>
            <Link to="/contact" className="px-3 py-3 rounded-md font-medium" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/devis" className="mt-3 bg-gold-gradient text-gold-foreground font-semibold text-center py-3 rounded-lg" onClick={() => setOpen(false)}>
              Devis Gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
