import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnniversaryModal } from "./AnniversaryModal";

export function SiteLayout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {!transparentHeader && <div className="h-20 md:h-24" aria-hidden />}
      {transparentHeader && <div className="h-16 md:h-20" aria-hidden />}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <AnniversaryModal />
    </div>
  );
}
