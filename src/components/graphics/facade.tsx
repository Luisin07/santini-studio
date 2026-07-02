"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * Assinatura visual do hero: uma fachada arquitetônica que se desenha
 * em traço champanhe. SVG animado por pathLength — custa quase nada
 * de performance e fala o idioma do mercado imobiliário.
 * Decorativa: aria-hidden, invisível para leitores de tela.
 */

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (order: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.4 + order * 0.28, duration: 1.4, ease: "easeInOut" },
      opacity: { delay: 0.4 + order * 0.28, duration: 0.01 },
    },
  }),
};

/* Cada path é um traço da fachada; `custom` define a ordem do desenho,
   como um arquiteto riscando o croqui: volume, pavimentos, esquadrias, base. */
const strokes: { d: string; order: number }[] = [
  // volume principal da torre
  { d: "M 60 380 L 60 60 L 200 20 L 200 380", order: 0 },
  // face lateral (profundidade)
  { d: "M 200 20 L 260 50 L 260 380", order: 1 },
  // linhas de pavimento — frente
  { d: "M 60 120 L 200 88", order: 2 },
  { d: "M 60 180 L 200 152", order: 2 },
  { d: "M 60 240 L 200 216", order: 3 },
  { d: "M 60 300 L 200 280", order: 3 },
  // linhas de pavimento — lateral
  { d: "M 200 88 L 260 112", order: 4 },
  { d: "M 200 152 L 260 172", order: 4 },
  { d: "M 200 216 L 260 232", order: 5 },
  { d: "M 200 280 L 260 296", order: 5 },
  // esquadrias verticais da frente
  { d: "M 106 380 L 106 47", order: 6 },
  { d: "M 152 380 L 152 34", order: 6 },
  // linha do térreo / chão
  { d: "M 20 380 L 320 380", order: 7 },
  // marquise de entrada
  { d: "M 106 330 L 152 330", order: 8 },
];

export function Facade({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 340 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {strokes.map(({ d, order }, i) => (
        <motion.path
          key={i}
          d={d}
          custom={order}
          variants={draw}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "visible"}
          stroke="var(--color-accent)"
          strokeOpacity={0.55}
          strokeWidth={1.25}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
