import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useUIPrefs } from "@/lib/ui-prefs";

const STORAGE_KEY = "di_banner_30ans_dismissed_v1";

export function AnnouncementBanner() {
  const { t } = useUIPrefs();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setVisible(false);
  };

  const text = t("banner.text");
  const badgeLabel = t("banner.badge");

  return (
    <div
      className="fixed top-16 md:top-20 inset-x-0 z-40 h-11 overflow-hidden text-white"
      style={{ background: "linear-gradient(90deg, #0B1C3D 0%, #1A3A8F 100%)" }}
      role="region"
      aria-label="Annonce 30 ans"
    >
      <div className="relative h-full max-w-7xl mx-auto pl-3 pr-12 sm:pl-4 flex items-center gap-3">
        {/* Animated 30 ans badge */}
        <div className="relative flex-shrink-0">
          <span
            className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider bg-gold-gradient text-navy animate-pulse-ring"
            aria-label="30 ans"
          >
            <Sparkles className="h-3 w-3" />
            🏛 {badgeLabel}
          </span>
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden" onMouseEnter={() => {}}>
          <div className="flex animate-marquee pause-on-hover w-max">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap px-8 text-[12px] sm:text-[13px] font-medium text-white/95"
              >
                {text.split("—").map((seg, idx, arr) => (
                  <span key={idx}>
                    <span className={idx % 2 === 1 ? "text-gold font-semibold" : ""}>{seg}</span>
                    {idx < arr.length - 1 && <span className="text-gold mx-2">—</span>}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={dismiss}
          aria-label="Fermer l'annonce"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-7 w-7 inline-flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
