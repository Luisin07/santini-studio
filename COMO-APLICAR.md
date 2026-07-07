# Sprint de performance: 65 → meta 95+

Copie a pasta `src` por cima da do projeto (C:\dev\vitrine).

NOVOS:
- src/components/graphics/facade.module.css  → animação do traço em CSS puro
- src/components/providers/app-providers.tsx → LazyMotion + SmoothScroll juntos

SUBSTITUÍDOS:
- src/components/graphics/facade.tsx   → virou server component, zero JS
- src/components/motion/reveal.tsx     → usa <m.div> (LazyMotion) + modo lcp
- src/components/providers/smooth-scroll.tsx → Lenis inicia em idle
- src/components/sections/hero.tsx     → H1 usa Reveal lcp (não nasce invisível)
- src/app/layout.tsx                   → usa AppProviders

ATENÇÃO: seu layout.tsx local é igual ao do rebrand — este só troca o
provider. Se você fez qualquer edição própria nele, aplique só a troca:
SmoothScroll → AppProviders (import e uso).

Commit:
git add .
git commit -m "perf: css-driven facade, lazy motion, lcp-safe reveal, idle lenis"
git push

RE-MEDIÇÃO (mesmo método, senão não é comparável):
1. Espere o deploy da Vercel terminar
2. Janela anônima → santini-studio.vercel.app → F12 → Lighthouse
3. Desktop, 4 categorias, Analyze page load
4. PRINT do antes (65) e do depois lado a lado = conteúdo do Post 5
