"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default:
    "bg-[#54734e] text-[#ffffff] hover:bg-[#54734e]/90",
  destructive:
    "bg-[#e64040] text-[#ffffff] hover:bg-[#e64040]/90",
  outline:
    "border border-[#213322] text-[#f2f2f2] bg-[#091315] hover:bg-[#8ba47d] hover:text-[#1a1a1a]",
  secondary:
    "bg-[#172a1d] text-[#d9d9d9] hover:bg-[#172a1d]/80",
  ghost:
    "hover:bg-[#8ba47d] hover:text-[#1a1a1a]",
  link:
    "text-[#54734e] underline-offset-4 hover:underline",
  success:
    "bg-[#33cc33] text-[#ffffff] hover:bg-[#33cc33]/90",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
