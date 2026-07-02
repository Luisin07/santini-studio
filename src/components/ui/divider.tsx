import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Hairline editorial entre seções. */
export function Divider({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("border-0 border-t border-line", className)} {...props} />;
}
