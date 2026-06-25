import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Users, HeartPulse, ShieldCheck, Briefcase, ArrowRight, Moon, Sun, Globe } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { useUIPrefs } from "@/lib/ui-prefs";

const solutionsMeta = [
  { to: "/solutions/assurance-personnes", key: "sol.personnes", desc: "Vie, retraite, décès, éducation.", icon: Users },
  { to: "/solutions/assurance-maladie", key: "sol.maladie", desc: "Santé individuelle, famille, entreprise.", icon: HeartPulse },
  { to: "/solutions/assurance-iardt", key: "sol.iardt", desc: "Auto, habitation, voyage, transport.", icon: ShieldCheck },
  { to: "/solutions/gestion-risques", key: "sol.risques", desc: "Audit, PROGESPA, Pack Vie GOLD.", icon: Briefcase },
] as const;

export function Header() {
  const { t, lang, toggleLang, theme, toggleTheme } = useUIPrefs();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Glassmorphism navy when scrolled
  const headerBg = scrolled
    ? "bg-navy/85 backdrop-blur-md shadow-elegant"
    : "bg-transparent";
  const navTone = scrolled ? "text-white/90 hover:text-gold" : "text-white/90 hover:text-white";

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/agences", label: t("nav.agences") },
    { to: "/actualites", label: t("nav.actualites") },
    { to: "/a-propos", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Direct Insurance — Accueil">
          <div className="h-11 w-11 rounded-xl bg-white shadow-card-soft flex items-center justify-center">
            <img src={logoUrl} alt="Logo Direct Insurance" className="h-9 w-9 object-contain" />
          </div>
          <span className="font-display font-bold text-base md:text-lg tracking-tight text-white">
            Direct Insurance
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${navTone}`} activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
            {t("nav.home")}
          </Link>

          <div className="relative" onMouseEnter={() => setProdOpen(true)} onMouseLeave={() => setProdOpen(false)}>
            <button className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${navTone}`} aria-haspopup="true" aria-expanded={prodOpen}>
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
                        <div className="text-xs text-muted-foreground">{p.desc}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <Link key={l.to} to={l.to} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${navTone}`} activeProps={{ className: "text-gold" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: toggles + CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <button onClick={toggleLang} className="px-2.5 py-1.5 rounded-md text-xs font-bold text-white/80 hover:text-gold hover:bg-white/5 transition-colors inline-flex items-center gap-1" aria-label="Changer la langue">
            <Globe className="h-3.5 w-3.5" />
            <span className={lang === "fr" ? "text-gold" : ""}>FR</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-gold" : ""}>EN</span>
          </button>
          <button onClick={toggleTheme} className="h-8 w-8 inline-flex items-center justify-center rounded-md text-white/80 hover:text-gold hover:bg-white/5 transition-colors" aria-label="Basculer mode sombre">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/devis" className="ml-1 bg-gold-gradient text-navy font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-glow transition-all">
            {t("nav.devis")}
          </Link>
        </div>

        <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="lg:hidden bg-navy text-white border-t border-white/10 shadow-elegant animate-in slide-in-from-top-2">
          <nav className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto" aria-label="Navigation mobile">
            <Link to="/" className="px-3 py-3 rounded-md font-medium hover:bg-white/5" onClick={() => setOpen(false)}>{t("nav.home")}</Link>
            <div className="px-3 py-2 text-xs uppercase tracking-wider text-white/50 mt-2">{t("nav.solutions")}</div>
            {solutionsMeta.map((p) => (
              <Link key={p.to} to={p.to} className="px-3 py-2.5 rounded-md text-sm flex items-center gap-2 hover:bg-white/5" onClick={() => setOpen(false)}>
                <p.icon className="h-4 w-4 text-gold" /> {t(p.key)}
              </Link>
            ))}
            <Link to="/agences" className="px-3 py-3 rounded-md font-medium hover:bg-white/5" onClick={() => setOpen(false)}>{t("nav.agences")}</Link>
            <Link to="/actualites" className="px-3 py-3 rounded-md font-medium hover:bg-white/5" onClick={() => setOpen(false)}>{t("nav.actualites")}</Link>
            <Link to="/a-propos" className="px-3 py-3 rounded-md font-medium hover:bg-white/5" onClick={() => setOpen(false)}>{t("nav.about")}</Link>
            <Link to="/contact" className="px-3 py-3 rounded-md font-medium hover:bg-white/5" onClick={() => setOpen(false)}>{t("nav.contact")}</Link>

            <div className="flex gap-2 mt-3 px-3">
              <button onClick={toggleLang} className="flex-1 px-3 py-2 rounded-md text-xs font-bold bg-white/5 text-white inline-flex items-center justify-center gap-1">
                <Globe className="h-3.5 w-3.5" /> {lang.toUpperCase()}
              </button>
              <button onClick={toggleTheme} className="flex-1 px-3 py-2 rounded-md text-xs font-bold bg-white/5 text-white inline-flex items-center justify-center gap-1">
                {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />} {theme === "dark" ? "Clair" : "Sombre"}
              </button>
            </div>
            <Link to="/devis" className="mt-3 bg-gold-gradient text-navy font-semibold text-center py-3 rounded-lg" onClick={() => setOpen(false)}>
              {t("nav.devis")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
