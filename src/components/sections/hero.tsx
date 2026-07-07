import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Reveal } from "@/components/motion/reveal";
import { Facade } from "@/components/graphics/facade";

/**
 * Hero do vitrine. Server component: só a Facade e os Reveals
 * são ilhas client — o texto chega renderizado, indexável, instantâneo.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      {/* Assinatura: fachada desenhando-se à direita, atrás do texto no mobile */}
      <Facade className="pointer-events-none absolute top-24 right-[-4rem] h-[26rem] w-auto opacity-40 md:right-10 md:top-28 md:h-[30rem] md:opacity-100" />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Estúdio digital — mercado imobiliário</Eyebrow>
          </Reveal>

          <Reveal delay={0.12} lcp>
            <Heading level={1} className="mt-5">
              Lançamentos que vendem antes do plantão abrir.
            </Heading>
          </Reveal>

          <Reveal delay={0.26}>
            <Text muted className="mt-6 max-w-xl">
              Hotsites e experiências digitais de alto padrão para
              incorporadoras, construtoras e imóveis de luxo — páginas rápidas,
              memoráveis e desenhadas para transformar visita em lead.
            </Text>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contato">Iniciar um projeto</Button>
              <Button href="#trabalho" variant="outline">
                Ver o padrão de qualidade
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
