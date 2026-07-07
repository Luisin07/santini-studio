"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * Modo LCP-safe: para o maior elemento da tela (ex.: H1 do hero).
   * Anima só a posição, nunca a opacidade — elemento com opacity: 0
   * "não existe" para o Largest Contentful Paint, e esconder o
   * protagonista do juiz custava segundos na métrica.
   */
  lcp?: boolean;
};

export function Reveal({ children, delay = 0, className, lcp = false }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={
        reduced ? { opacity: lcp ? 1 : 0 } : lcp ? { y: 28 } : { opacity: 0, y: 28 }
      }
      whileInView={lcp ? { y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduced
          ? { duration: 0.01 }
          : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </m.div>
  );
}
