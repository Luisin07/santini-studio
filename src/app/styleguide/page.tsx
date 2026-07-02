import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Input, Textarea } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Text } from "@/components/ui/text";

export const metadata = { title: "Styleguide" };

/** Styleguide vivo — agora em /styleguide, fora da home. */
export default function StyleguidePage() {
  return (
    <main className="py-20">
      <Container className="space-y-16">
        <header className="space-y-4">
          <Eyebrow>Design system — fundação</Eyebrow>
          <Heading level={1}>Styleguide vivo</Heading>
          <Text muted className="max-w-2xl">
            Referência interna de tokens e componentes do estúdio.
          </Text>
        </header>
        <Divider />
        <section className="space-y-6">
          <Heading level={3}>Tipografia</Heading>
          <Heading level={1}>Display H1 — Fraunces</Heading>
          <Heading level={2}>Display H2 — hierarquia clara</Heading>
          <Text>Corpo em Instrument Sans.</Text>
          <Text muted>Texto secundário rebaixado.</Text>
        </section>
        <Divider />
        <section className="space-y-6">
          <Heading level={3}>Botões</Heading>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Iniciar um projeto</Button>
            <Button variant="outline">Ver projetos</Button>
            <Button variant="ghost">Saber mais</Button>
            <Button disabled>Enviando…</Button>
          </div>
        </section>
        <Divider />
        <section className="max-w-md space-y-4">
          <Heading level={3}>Formulário</Heading>
          <Input placeholder="Seu nome" aria-label="Seu nome" />
          <Textarea placeholder="Conte sobre o projeto" aria-label="Mensagem" />
        </section>
        <Divider />
        <section className="space-y-4">
          <Heading level={3}>Skeleton</Heading>
          <div className="grid max-w-md gap-3">
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-full" />
          </div>
        </section>
      </Container>
    </main>
  );
}
