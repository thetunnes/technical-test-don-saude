import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import { CaretDown } from "@phosphor-icons/react";
import { VariantProps, cva } from "class-variance-authority";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const triggerVariants = cva("w-full flex items-center justify-between", {
  variants: {
    variant: {
      default:
        "px-3 py-2 rounded-xl bg-transparent text-sm shadow-sm border border-border",
      small:
        "w-max gap-1 mx-1 h-4 px-1 text-xsmall font-bold text-accent bg-input border border-border rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const triggerIconVariants = cva("", {
  variants: {
    icon: {
      default: "w-4 h-4 text-muted-foreground",
      small: "w-1.5 h-1.5 text-accent",
    },
  },
  defaultVariants: {
    icon: "default",
  },
});

export interface TriggerProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof triggerVariants>,
    VariantProps<typeof triggerIconVariants> {}
const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  TriggerProps
>(({ className, icon, children, variant, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(triggerVariants({ variant, className }))}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <CaretDown className={cn(triggerIconVariants({ icon }))} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const itemVariants = cva(
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 text-sm outline-none focus:bg-accent-light focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        small: "pl-px py-px text-xsmall justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ItemProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof itemVariants> {}

const SelectItem = forwardRef<ElementRef<typeof SelectPrimitive.Item>, ItemProps>(
  ({ className, children, variant, ...props }, ref) => (
    <SelectPrimitive.Item ref={ref} className={cn(itemVariants({ variant, className}))} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
