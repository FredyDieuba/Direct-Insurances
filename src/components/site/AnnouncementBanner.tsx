import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useUIPrefs } from "@/lib/ui-prefs";

// Session-only dismiss: banner re-appears on every reload of a fresh session.
const STORAGE_KEY = "di_banner_30ans_dismissed_session";

export function AnnouncementBanner() {
  const { t } = useUIPrefs();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      setVisible(sessionStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  const text = t("banner.text");
  const badgeLabel = t("banner.badge");

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 h-11 overflow-hidden text-white"
      style={{ background: "linear-gradient(90deg, #0B1C3D 0%, #1A3A8F 50%, #2D7FF9 100%)" }}
      role="region"
      aria-label="30 years anniversary"
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-70" />

      <div className="relative h-full max-w-7xl mx-auto pl-3 pr-12 sm:pl-4 flex items-center gap-3">
        <div className="relative flex-shrink-0">
          <span
            className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider bg-white/15 backdrop-blur-sm border border-white/30 text-white animate-pulse-ring"
            aria-label="30 ans"
          >
            <Sparkles className="h-3 w-3" />
            🎉 {badgeLabel}
          </span>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee pause-on-hover w-max">
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap px-8 text-[12px] sm:text-[13px] font-medium text-white/95"
              >
                {text} <span className="text-white mx-2">✦</span>
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={dismiss}
          aria-label="Close announcement"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-7 w-7 inline-flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
