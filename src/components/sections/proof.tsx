import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Reveal } from "@/components/motion/reveal";

/**
 * Seção de prova. Em vez de cards genéricos de "diferenciais",
 * usamos um artefato do próprio mercado imobiliário: a ficha técnica.
 * Especificações mensuráveis que todo projeto do estúdio entrega de série.
 */

const specs: { label: string; value: string }[] = [
  { label: "Performance", value: "Lighthouse 95+" },
  { label: "Primeira renderização", value: "abaixo de 1 segundo" },
  { label: "Acessibilidade", value: "WCAG AA, navegável por teclado" },
  { label: "SEO", value: "indexação completa e dados estruturados" },
  { label: "Movimento", value: "cinematográfico — e desligável pelo usuário" },
  { label: "Entrega", value: "publicação contínua, sem manutenção surpresa" },
];

export function Proof() {
  return (
    <section id="trabalho" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <Eyebrow>O padrão</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <Heading level={2} className="mt-5">
                Todo projeto sai com ficha técnica.
              </Heading>
            </Reveal>
            <Reveal delay={0.2}>
              <Text muted className="mt-6 max-w-md">
                No mercado imobiliário, memorial descritivo é compromisso — não
                promessa. Aqui funciona igual: estas são as especificações
                mínimas, mensuráveis e auditáveis, de qualquer página que sai
                deste estúdio.
              </Text>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <dl>
              {specs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-5"
                >
                  <dt className="shrink-0 text-sm tracking-wide text-muted uppercase">
                    {label}
                  </dt>
                  <dd className="text-right font-display text-lg text-ivory">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Tease do case — vocabulário do setor aplicado ao próprio estúdio */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-2xl border border-line bg-surface px-8 py-10 md:mt-28 md:px-12 md:py-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Breve lançamento</Eyebrow>
                <Heading level={2} className="mt-4">
                  Alto da Garoa
                </Heading>
                <Text muted className="mt-4 max-w-lg">
                  Hotsite-conceito de um empreendimento paulistano de alto
                  padrão: fachada navegável, plantas, captação de interesse.
                  Em obras neste estúdio.
                </Text>
              </div>
              <p className="shrink-0 font-display text-sm text-accent italic">
                São Paulo — terra da garoa
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
