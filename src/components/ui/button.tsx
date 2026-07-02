import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-bold uppercase tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beast focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-beast text-ink hover:bg-bone active:scale-[0.97] shadow-[0_0_0_0_rgba(198,255,61,0)] hover:shadow-[0_0_28px_2px_rgba(198,255,61,0.45)]",
        outline:
          "border-2 border-bone/25 text-bone hover:border-beast hover:text-beast active:scale-[0.97]",
        ghost: "text-bone hover:text-beast active:scale-[0.97]",
      },
      size: {
        default: "h-13 px-7 text-sm rounded-full min-h-11",
        lg: "h-14 px-9 text-base rounded-full min-h-11",
        sm: "h-11 px-5 text-xs rounded-full min-h-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
