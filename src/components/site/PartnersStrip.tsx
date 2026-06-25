const PARTNERS_ASSUREURS = ["SUNU Assurances", "Activa", "AXA"];
const PARTNERS_REASSUREURS = ["Atlanta RE", "Munich RE", "Société Sénégalaise de Réassurance", "CICA-RE", "Swiss Re", "SCOR"];

function LogoChip({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 mx-4 md:mx-6 px-6 py-3 rounded-xl bg-card border border-border shadow-card-soft font-display font-bold text-navy text-sm md:text-base whitespace-nowrap grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
      {name}
    </div>
  );
}

function MarqueeRow({ items, fast = false }: { items: string[]; fast?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max ${fast ? "animate-marquee-fast" : "animate-marquee"} pause-on-hover`}>
        {doubled.map((n, i) => <LogoChip key={i} name={n} />)}
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
          <span className="text-gold text-xs font-bold tracking-[0.25em] uppercase">Écosystème</span>
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
