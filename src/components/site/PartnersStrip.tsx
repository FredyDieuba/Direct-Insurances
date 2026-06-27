import { partners, Partner } from "@/data/partners";

const assureurs = partners.filter((p) => p.type === "assureur");
const reassureurs = partners.filter((p) => p.type === "réassureur");

function LogoGrid({ items }: { items: Partner[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
      {items.map((p, i) => (
        <div
          key={`${p.name}-${i}`}
          className="h-24 md:h-28 px-4 rounded-xl bg-card border border-border shadow-card-soft flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all bg-white"
        >
          <img
            src={p.logoUrl}
            alt={p.name}
            loading="lazy"
            className="max-h-12 md:max-h-14 max-w-full object-contain"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              (t.nextElementSibling as HTMLElement | null)?.removeAttribute("hidden");
            }}
          />
          <span hidden className="font-display font-bold text-navy text-sm md:text-base whitespace-nowrap">
            {p.name}
          </span>
        </div>
      ))}
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

        <div className="space-y-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center font-semibold border-b border-border pb-4 w-max mx-auto px-6">
              Nos Assureurs
            </div>
            <LogoGrid items={assureurs} />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center font-semibold border-b border-border pb-4 w-max mx-auto px-6">
              Nos Réassureurs
            </div>
            <LogoGrid items={reassureurs} />
          </div>

          {showClients && (
            <div className="mt-12">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center font-semibold border-b border-border pb-4 w-max mx-auto px-6">
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
