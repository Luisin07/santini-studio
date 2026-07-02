"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos — permite orquestrar sequências entre elementos. */
  delay?: number;
  className?: string;
};

/**
 * Reveal padrão do site: sobe suave + fade, uma única vez, ao entrar na viewport.
 * Centralizado aqui para que TODA entrada do site tenha a mesma física —
 * consistência de movimento é o que faz um site parecer dirigido, não montado.
 * Com prefers-reduced-motion, vira um fade quase instantâneo.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduced
          ? { duration: 0.01 }
          : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
