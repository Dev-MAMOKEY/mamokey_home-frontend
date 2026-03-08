import type { InputHTMLAttributes } from "react";
import { cn } from "@mamokey/utils";

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
  return (
    <input
      type="password"
      className={cn(
        "w-full rounded-[12.75px] bg-gray-100 px-3.5 py-[10.5px] text-label-1 text-black placeholder:text-gray-500 outline-none",
        className
      )}
      {...props}
    />
  );
}
