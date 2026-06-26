import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnnouncementBanner } from "./AnnouncementBanner";

export function SiteLayout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner is FIXED at top:0, Header is FIXED at top:11 (44px = h-11 banner) */}
      <AnnouncementBanner />
      <Header />
      {/* Spacer pushes content below banner+header unless the page wants the hero behind the header */}
      {!transparentHeader && <div className="h-[124px] md:h-[124px]" aria-hidden />}
      {transparentHeader && <div className="h-11" aria-hidden />}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
