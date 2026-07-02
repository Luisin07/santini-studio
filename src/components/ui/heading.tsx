import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Level = 1 | 2 | 3;

const styles: Record<Level, string> = {
  1: "font-display text-5xl leading-[1.05] tracking-tight md:text-7xl",
  2: "font-display text-3xl leading-tight tracking-tight md:text-5xl",
  3: "font-display text-xl leading-snug md:text-2xl",
};

type HeadingProps = {
  level?: Level;
} & HTMLAttributes<HTMLHeadingElement>;

/** Títulos na display serifada. O nível controla tag semântica e escala. */
export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={cn(styles[level], className)} {...props} />;
}
