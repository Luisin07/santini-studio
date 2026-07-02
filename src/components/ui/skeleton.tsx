import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Placeholder de carregamento. Usar com as mesmas dimensões do conteúdo real. */
export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={cn("animate-pulse rounded-lg bg-surface", className)}
      {...props}
    />
  );
}
