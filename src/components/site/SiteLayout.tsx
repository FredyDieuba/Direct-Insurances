import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { useUIPrefs } from "@/lib/ui-prefs";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { lang } = useUIPrefs();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AnnouncementBanner />
      {/* Spacer to push content under fixed header + banner */}
      <div className="h-16 md:h-20" aria-hidden />
      {lang === "en" && (
        <div className="bg-gold/10 border-y border-gold/30 text-navy text-center text-sm py-2 px-4">
          🌐 The English version of this content is being prepared — for now, body content is displayed in French.
        </div>
      )}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
