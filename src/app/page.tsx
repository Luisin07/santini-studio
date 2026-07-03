import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Proof />
        {/* Próximos blocos: processo/serviços, contato */}
      </main>
    </>
  );
}
