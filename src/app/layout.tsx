import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Food Truck Federal | Em desenvolvimento",
    template: "%s | Food Truck Federal",
  },
  description:
    "Conheça o projeto digital do Food Truck Federal, comércio independente em frente ao IFSP — Campus São Paulo. Site em desenvolvimento.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#conteudo"
          className="sr-only fixed top-4 left-4 z-50 rounded-lg bg-stone-900 px-5 py-3 text-white focus:not-sr-only"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
