import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        {/* Próximos blocos da Etapa 3: prova de qualidade, serviços, contato */}
      </main>
    </>
  );
}
