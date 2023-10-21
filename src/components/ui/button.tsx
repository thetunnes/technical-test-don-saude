import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center group rounded-md transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow enabled:hover:bg-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm",
        outline:
          "border border-transparent bg-transparent text-muted-foreground enabled:hover:border-muted-foreground enabled:hover:brightness-75",
        secondary:
          "bg-secondary text-primary enabled:hover:brightness-95",
      },
      size: {
        default: "h-8 rounded-full px-3.5 py-2",
        lg: "h-10 font-semibold text-sm rounded-full px-4 py-2.5",
        small: "py-2 px-3 text-xs leading-none gap-1 font-medium rounded-full",
        icon: "h-8 w-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
