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
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  /* Base */
  default:
    "border-border bg-background text-foreground",

  secondary:
    "border-border bg-secondary text-foreground",

  destructive:
    "border-destructive bg-destructive/15 text-destructive",

  outline:
    "border-border text-foreground",

  /* 🔄 STATUS BADGES — THEME BASED */
  active:
    "border-secondary/70 bg-secondary/50 text-foreground",

  inactive:
    "border-muted/40 bg-muted/20 text-muted-foreground",

  pending:
    "border-warning/40 bg-warning text-secondary",

  /* 🟢 ROLE BADGES — GREEN THEME */
  admin:
    "border-secondary/70 bg-secondary/50 text-foreground",

  employee:
    "border-secondary/50 bg-secondary/10 text-foreground",

  customer:
    "border-background bg-background text-subheading",
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
