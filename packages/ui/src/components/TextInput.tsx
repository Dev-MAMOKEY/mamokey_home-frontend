import type { InputHTMLAttributes } from "react";
import { cn } from "@mamokey/utils";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <input
      type="text"
      className={cn(
        "w-full rounded-[12.75px] bg-gray-100 px-3.5 py-[10.5px] font-label-2 text-black placeholder:text-gray-500 outline-none dark:bg-gray-900 dark:text-gray-50 dark:placeholder:text-gray-600",
        className
      )}
      {...props}
    />
  );
}
