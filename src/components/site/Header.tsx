import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Users, HeartPulse, ShieldCheck, Briefcase, ArrowRight, Globe } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { useUIPrefs } from "@/lib/ui-prefs";

const solutionsMeta = [
  { to: "/solutions/assurance-personnes", key: "sol.personnes", descKey: "sol.personnes.desc", icon: Users },
  { to: "/solutions/assurance-maladie", key: "sol.maladie", descKey: "sol.maladie.desc", icon: HeartPulse },
  { to: "/solutions/assurance-iardt", key: "sol.iardt", descKey: "sol.iardt.desc", icon: ShieldCheck },
  { to: "/solutions/gestion-risques", key: "sol.risques", descKey: "sol.risques.desc", icon: Briefcase },
] as const;

export function Header() {
  const { t, lang, toggleLang } = useUIPrefs();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(11,28,61,0.08)] border-b border-slate-200/80"
    : "bg-transparent";
  const navTone = scrolled
    ? "text-slate-800 hover:text-primary"
    : "text-white hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]";
  const brandTone = scrolled ? "text-slate-900" : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]";

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/agences", label: t("nav.agences") },
    { to: "/actualites", label: t("nav.actualites") },
    { to: "/a-propos", label: t("nav.about") },
    { to: "/aide", label: lang === "fr" ? "Aide" : "Help" },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Direct Insurance — Accueil">
          <div className={`h-11 w-11 rounded-xl ${scrolled ? "bg-slate-100" : "bg-white/95"} shadow-card-soft flex items-center justify-center`}>
            <img src={logoUrl} alt="Logo Direct Insurance" className="h-9 w-9 object-contain" />
          </div>
          <span className={`font-display font-bold text-base md:text-lg tracking-tight transition-colors ${brandTone}`}>
            Direct Insurance
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          <Link to="/" className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${navTone}`} activeProps={{ className: "!text-primary" }} activeOptions={{ exact: true }}>
            {t("nav.home")}
          </Link>

          <div className="relative" onMouseEnter={() => setProdOpen(true)} onMouseLeave={() => setProdOpen(false)}>
            <button className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center gap-1 transition-colors ${navTone}`} aria-haspopup="true" aria-expanded={prodOpen}>
              {t("nav.solutions")} <ChevronDown className="h-4 w-4" />
            </button>
            {prodOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px]">
                <div className="bg-popover rounded-2xl shadow-elegant border border-border overflow-hidden p-2 grid grid-cols-1 gap-1">
                  {solutionsMeta.map((p) => (
                    <Link key={p.to} to={p.to} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <p.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-navy text-sm">{t(p.key)}</div>
                        <div className="text-xs text-muted-foreground">{t(p.descKey)}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <Link key={l.to} to={l.to} className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${navTone}`} activeProps={{ className: "!text-primary" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button onClick={toggleLang} className={`px-2.5 py-1.5 rounded-md text-xs font-bold inline-flex items-center gap-1 transition-colors ${scrolled ? "text-navy hover:text-primary hover:bg-muted" : "text-white hover:bg-white/10"}`} aria-label="Toggle language">
            <Globe className="h-3.5 w-3.5" />
            <span className={lang === "fr" ? "text-primary" : ""}>FR</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-primary" : ""}>EN</span>
          </button>
          <Link to="/devis" className="ml-1 bg-gold-gradient text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-glow transition-all">
            {t("nav.devis")}
          </Link>
        </div>

        <button className={`lg:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white text-navy border-t border-border shadow-elegant animate-in slide-in-from-top-2">
          <nav className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto" aria-label="Navigation mobile">
            <Link to="/" className="px-3 py-3 rounded-md font-medium hover:bg-muted" onClick={() => setOpen(false)}>{t("nav.home")}</Link>
            <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground mt-2">{t("nav.solutions")}</div>
            {solutionsMeta.map((p) => (
              <Link key={p.to} to={p.to} className="px-3 py-2.5 rounded-md text-sm flex items-center gap-2 hover:bg-muted" onClick={() => setOpen(false)}>
                <p.icon className="h-4 w-4 text-primary" /> {t(p.key)}
              </Link>
            ))}
            <Link to="/agences" className="px-3 py-3 rounded-md font-medium hover:bg-muted" onClick={() => setOpen(false)}>{t("nav.agences")}</Link>
            <Link to="/actualites" className="px-3 py-3 rounded-md font-medium hover:bg-muted" onClick={() => setOpen(false)}>{t("nav.actualites")}</Link>
            <Link to="/a-propos" className="px-3 py-3 rounded-md font-medium hover:bg-muted" onClick={() => setOpen(false)}>{t("nav.about")}</Link>
            <Link to="/aide" className="px-3 py-3 rounded-md font-medium hover:bg-muted" onClick={() => setOpen(false)}>{lang === "fr" ? "Aide" : "Help"}</Link>
            <Link to="/contact" className="px-3 py-3 rounded-md font-medium hover:bg-muted" onClick={() => setOpen(false)}>{t("nav.contact")}</Link>

            <button onClick={toggleLang} className="mt-3 mx-3 px-3 py-2 rounded-md text-xs font-bold bg-muted text-navy inline-flex items-center justify-center gap-1">
              <Globe className="h-3.5 w-3.5" /> {lang.toUpperCase()}
            </button>
            <Link to="/devis" className="mt-3 mx-3 bg-gold-gradient text-white font-semibold text-center py-3 rounded-lg" onClick={() => setOpen(false)}>
              {t("nav.devis")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
