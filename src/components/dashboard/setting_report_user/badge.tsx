"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "active"
    | "inactive"
    | "pending"
    | "admin"
    | "employee"
    | "customer"
}

const baseClasses =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "border-transparent bg-[#54734e] text-primary-foreground hover:bg-primary/80",
  secondary: "border-transparent bg-[#172a1d] text-[#d9d9d9] hover:bg-[#172a1d]/80",
  destructive: "border-transparent bg-[#e64040] text-destructive-foreground hover:bg-[#e64040]/80",
  outline: "text-foreground",
  active: "border-transparent bg-[#2db82d]/10 text-[#2db82d] border-[#2db82d]/20",
  inactive: "border-transparent bg-[#808080]/10 text-[#808080] border-[#808080]/20",
  pending: "border-transparent bg-[#ffdb4d]/10 text-[#ffdb4d] border-[#ffdb4d]/20",
  admin: "border-transparent bg-[#4d94ff]/10 text-[#4d94ff] border-[#4d94ff]/20",
  employee: "border-transparent bg-[#8ba47d]/10 text-[#8ba47d] border-[#8ba47d]/20",
  customer: "border-transparent bg-[#c47dd9]/10 text-[#c47dd9] border-[#c47dd9]/20",
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    />
  )
}

export { Badge }
