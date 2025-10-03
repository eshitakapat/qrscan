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
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#54734e] focus:ring-offset-2"

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "border-transparent bg-[#54734e] text-[#ffffff] hover:bg-[#54734e]/90",
  secondary:
    "border-transparent bg-[#172a1d] text-[#d9d9d9] hover:bg-[#172a1d]/80",
  destructive:
    "border-transparent bg-[#e64040] text-[#ffffff] hover:bg-[#e64040]/80",
  outline:
    "text-[#f2f2f2] border-[#213322]",
  active:
    "border-[#2db82d]/20 bg-[#2db82d]/10 text-[#2db82d]",
  inactive:
    "border-[#808080]/20 bg-[#808080]/10 text-[#808080]",
  pending:
    "border-[#ffdb4d]/20 bg-[#ffdb4d]/10 text-[#ffdb4d]",
  admin:
    "border-[#4d94ff]/20 bg-[#4d94ff]/10 text-[#4d94ff]",
  employee:
    "border-[#8ba47d]/20 bg-[#8ba47d]/10 text-[#8ba47d]",
  customer:
    "border-[#c47dd9]/20 bg-[#c47dd9]/10 text-[#c47dd9]",
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
