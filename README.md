# Vitrine — site profissional

Site vitrine de estúdio especializado em hotsites de lançamento e páginas de
alto impacto para o mercado imobiliário de alto padrão.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis · Zod

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 — a home atual é o styleguide vivo do design system.

## Estrutura

```
src/
├── app/                  # rotas, layout, metadata
├── components/
│   ├── ui/               # primitivos do design system
│   ├── sections/         # seções de página (Etapa 3)
│   ├── providers/        # SmoothScroll etc.
│   └── three/            # ilhas R3F, sempre lazy (Etapa 3)
├── lib/                  # fonts, utils, validações
├── hooks/                # hooks de animação (Etapa 3)
├── content/              # cases em MDX (Etapa 5)
└── styles/               # tokens e globals
```

## Convenções

- Tokens de design vivem em `src/styles/globals.css` — cor e fonte nunca são
  hardcoded em componente.
- `components/three` nunca importa de `sections`; sections consomem 3D apenas
  via dynamic import com Suspense.
- Todo movimento respeita `prefers-reduced-motion`.
