import type { TextareaHTMLAttributes } from "react";
import { cn } from "@mamokey/utils";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={cn(
        "w-full resize-none rounded-[12.75px] bg-gray-100 px-3.5 py-[10.5px] font-label-2 text-black placeholder:text-gray-500 outline-none dark:bg-gray-900 dark:text-gray-50 dark:placeholder:text-gray-600",
        className
      )}
      {...props}
    />
  );
}
