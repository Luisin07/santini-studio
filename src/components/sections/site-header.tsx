import { Container } from "@/components/ui/container";

/**
 * Navegação mínima: wordmark + uma ação. Site de estúdio boutique
 * não precisa de menu — precisa de um caminho claro para o contato.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ivory"
        >
          Luis Santini{" "}
          <span className="text-muted italic">Studio</span>
        </a>
        <a
          href="#contato"
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          Iniciar um projeto
        </a>
      </Container>
    </header>
  );
}
