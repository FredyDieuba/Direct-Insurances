// Real partner logos fetched dynamically via Clearbit Logo API
// (free, no auth required). Missing logos fall back to a brand chip.

type Partner = { name: string; domain?: string };

const PARTNERS_ASSUREURS: Partner[] = [
  { name: "SUNU Assurances", domain: "sunu-group.com" },
  { name: "Activa", domain: "group-activa.com" },
  { name: "AXA", domain: "axa.com" },
  { name: "Allianz", domain: "allianz.com" },
  { name: "SAAR", domain: "saarassurances.com" },
  { name: "Chanas Assurances", domain: "chanas.net" },
];

const PARTNERS_REASSUREURS: Partner[] = [
  { name: "Munich RE", domain: "munichre.com" },
  { name: "Swiss Re", domain: "swissre.com" },
  { name: "SCOR", domain: "scor.com" },
  { name: "CICA-RE", domain: "cica-re.com" },
  { name: "Africa Re", domain: "africa-re.com" },
  { name: "Atlanta RE", domain: "atlanta-re.com" },
];

function LogoChip({ p }: { p: Partner }) {
  const src = p.domain ? `https://logo.clearbit.com/${p.domain}?size=120` : null;
  return (
    <div className="flex-shrink-0 mx-3 md:mx-5 h-16 md:h-20 w-40 md:w-48 px-5 rounded-xl bg-card border border-border shadow-card-soft flex items-center justify-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
      {src ? (
        <img
          src={src}
          alt={p.name}
          loading="lazy"
          className="max-h-9 md:max-h-10 max-w-full object-contain"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            (t.nextElementSibling as HTMLElement | null)?.removeAttribute("hidden");
          }}
        />
      ) : null}
      <span hidden={!!src} className="font-display font-bold text-navy text-sm md:text-base whitespace-nowrap">
        {p.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, fast = false }: { items: Partner[]; fast?: boolean }) {
  // Duplicate enough times to ensure continuous flow on wide screens
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max ${fast ? "animate-marquee-fast" : "animate-marquee"} pause-on-hover`}>
        {doubled.map((p, i) => <LogoChip key={`${p.name}-${i}`} p={p} />)}
      </div>
    </div>
  );
}

export function PartnersStrip({
  title = "Partenaires & Références",
  showClients = false,
  background = "muted",
}: {
  title?: string;
  showClients?: boolean;
  background?: "muted" | "background";
}) {
  return (
    <section className={`py-16 md:py-20 ${background === "muted" ? "bg-muted" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Écosystème</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mt-2">{title}</h2>
        </div>

        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center font-semibold">
              Partenaires Assureurs
            </div>
            <MarqueeRow items={PARTNERS_ASSUREURS} />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center font-semibold">
              Partenaires Réassureurs
            </div>
            <MarqueeRow items={PARTNERS_REASSUREURS} fast />
          </div>

          {showClients && (
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center font-semibold">
                Références Clients
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["Grandes Entreprises", "PME", "Particuliers", "Institutions"].map((n) => (
                  <div key={n} className="px-5 py-3 rounded-xl bg-card border border-border font-display font-semibold text-navy text-sm">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
