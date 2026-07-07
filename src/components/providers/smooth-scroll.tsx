"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Scroll suave via Lenis — agora inicializado em requestIdleCallback:
 * a primeira pintura e a hidratação acontecem antes; o luxo do scroll
 * chega milissegundos depois, quando a thread está ociosa.
 * Ninguém percebe a espera; o Lighthouse percebe a folga.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: Lenis | undefined;
    let rafId: number;

    const start = () => {
      lenis = new Lenis({ lerp: 0.12 });
      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(start, { timeout: 1500 })
        : window.setTimeout(start, 300);

    return () => {
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
