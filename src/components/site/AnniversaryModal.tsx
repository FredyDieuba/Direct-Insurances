import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ArrowRight, BookOpen, PhoneCall, Sparkles, X } from "lucide-react";

const STORAGE_KEY = "di_30th_modal_closed";

export function AnniversaryModal() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
      if (dismissed === "1") return;
    } catch {
      // ignore storage issues and fall back to showing the modal
    }

    const timer = window.setTimeout(() => setOpen(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || typeof window === "undefined") return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(panelRef.current, { opacity: 0, y: 36, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.42 }, "-=" + 0.05);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      timeline.kill();
    };
  }, [open]);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage issues and still close the modal
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="anniversary-title"
      onClick={dismiss}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_24px_90px_rgba(4,12,30,0.45)] backdrop-blur-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%),linear-gradient(135deg,rgba(11,28,61,0.95),rgba(45,127,249,0.88))]" />
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Fermer la promotion"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative grid min-h-[540px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              <Sparkles className="h-3.5 w-3.5" />
              30+ ans d'expertise
            </div>

            <h2 id="anniversary-title" className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3rem]">
              Direct Insurance celebrates more than 30 years of trust, protection and innovation.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Une expérience d'assurance premium, portée par des conseillers locaux, des solutions sur mesure et une protection pensée pour chaque étape de votre vie.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
                onClick={dismiss}
              >
                Discover our history <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                onClick={dismiss}
              >
                <PhoneCall className="h-4 w-4" /> Contact an advisor
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-end border-t border-white/20 bg-slate-950/20 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="rounded-[24px] border border-white/15 bg-white/15 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                <BookOpen className="h-4 w-4" />
                Premium advisory
              </div>
              <p className="mt-3 text-base leading-7 text-white/80">
                De la protection individuelle à la gestion des risques professionnels, notre équipe accompagne chaque décision avec clarté et réactivité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
