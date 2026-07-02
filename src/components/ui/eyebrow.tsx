import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Rótulo editorial em caixa alta espaçada — o "olho" acima de títulos.
 * Marca a hierarquia sem gritar.
 */
export function Eyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-[0.22em] text-accent uppercase",
        className,
      )}
      {...props}
    />
  );
}
