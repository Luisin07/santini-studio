import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type TextProps = {
  muted?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;

/** Texto corrido. `muted` para apoio e legendas. */
export function Text({ muted = false, className, ...props }: TextProps) {
  return (
    <p
      className={cn(
        "text-base leading-relaxed md:text-lg",
        muted ? "text-muted" : "text-ivory",
        className,
      )}
      {...props}
    />
  );
}
