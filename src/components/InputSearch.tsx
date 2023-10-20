import { cn } from "@/lib/utils";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputHTMLAttributes, forwardRef } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const InputSearch = forwardRef<HTMLInputElement, Props>(
  ({ className, type, ...props }, ref) => {
    return (
      <label
        className={cn(
          "w-full max-w-sm h-10 border border-input rounded-full shadow-sm flex items-center justify-start focus-visible:ring-1 focus-visible:ring-ring group group-focus:border-text-muted-foregroud",
          className
        )}
      >
        <MagnifyingGlass className="w-5 h-5 text-muted-foreground ml-3" />
        <input
          type={type}
          className="flex w-full h-full rounded-full bg-transparent px-3 py-1 text-sm leading-6 transition-colors placeholder:text-muted focus-visible:outline-none group-disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Buscar parceiros"
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);
