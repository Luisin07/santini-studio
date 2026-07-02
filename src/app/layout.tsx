import type { Metadata } from "next";
import { fraunces, instrument } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: trocar pela URL da Vercel no deploy
  title: {
    default: "Luis Santini Studio — Experiências digitais para o mercado imobiliário",
    template: "%s — Luis Santini Studio",
  },
  description:
    "Hotsites de lançamento e páginas de alto impacto para incorporadoras, construtoras e imóveis de alto padrão.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Luis Santini Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
