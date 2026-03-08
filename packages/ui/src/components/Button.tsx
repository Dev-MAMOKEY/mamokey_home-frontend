import type { ButtonHTMLAttributes } from "react";
import { cn } from "@mamokey/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-[10px] px-10 py-2.5 text-button-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}