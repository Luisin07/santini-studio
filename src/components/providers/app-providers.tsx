"use client";

import { LazyMotion, domAnimation } from "motion/react";
import { SmoothScroll } from "./smooth-scroll";
import type { ReactNode } from "react";

/**
 * Providers globais. LazyMotion em modo strict carrega só o subconjunto
 * de animação DOM da lib — componentes usam <m.*> em vez de <motion.*>,
 * cortando o JavaScript enviado e executado no load.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <SmoothScroll>{children}</SmoothScroll>
    </LazyMotion>
  );
}
