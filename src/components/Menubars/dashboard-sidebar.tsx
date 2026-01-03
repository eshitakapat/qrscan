"use client"

import { useState, useEffect, ComponentType } from "react"
import Link from "next/link"
import {
  Home,
  Package,
  QrCode,
  LineChart,
  AlertTriangle,
  Bot,
  Users,
  FileText,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/context/sidebar-context"

type NavItemWithSubLabelProps = {
  href: string
  icon: ComponentType<any>
  label: string
  sublabel?: string
  active?: boolean
}

const NavItemWithSubLabel = ({
  href,
  icon: Icon,
  label,
  sublabel,
  active = false,
}: NavItemWithSubLabelProps) => (
  <Link
    href={href}
    className={cn(
      "flex flex-col gap-0 rounded-r-lg px-3 py-2 transition-colors",
      active
        ? "bg-accent/10 text-accent border-l-4 border-accent"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    )}
  >
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </div>
    {sublabel && (
      <span className="ml-8 text-xs text-muted-foreground">{sublabel}</span>
    )}
  </Link>
)

type NavItemProps = {
  href: string
  icon: ComponentType<any>
  active?: boolean
}

const NavItem = ({ href, icon: Icon, active = false }: NavItemProps) => (
  <Link
    href={href}
    className={cn(
      "flex items-center justify-center rounded-lg py-2 transition-colors",
      active
        ? "bg-accent/10 text-accent"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    )}
  >
    <Icon className="h-5 w-5" />
  </Link>
)

export function DashboardSidebar() {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()
  const [expanded, setExpanded] = useState(false)

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768

  useEffect(() => {
    if (isMobile) setExpanded(isOpen)
  }, [isMobile, isOpen])

  return (
    <>
      <aside
        onMouseEnter={() => !isMobile && setExpanded(true)}
        onMouseLeave={() => !isMobile && setExpanded(false)}
        className={cn(
          "fixed md:static z-20 h-screen flex flex-col border-r transition-all duration-300",
          "bg-sidebar border-border",
          expanded ? "w-64" : "w-20"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 h-16 border-b border-border">
          <LayoutDashboard className="h-8 w-8 text-accent" />
          {expanded && (
            <div>
              <p className="font-bold text-foreground/50">Storelytics</p>
              <p className="text-xs text-subheading">
                AI-Powered System
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {expanded ? (
            <div className="space-y-6 px-2">
              <div>
                <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground">
                  Main Navigation
                </p>
                <NavItemWithSubLabel href="/dashboard" icon={Home} label="Dashboard" active={pathname === "/dashboard"} />
                <NavItemWithSubLabel href="/dashboard/products" icon={Package} label="Products"   active={pathname.startsWith("/dashboard/products")}/>
                <NavItemWithSubLabel href="/dashboard/scanner" icon={QrCode} label="QR Scanner"   active={pathname.startsWith("/dashboard/scanner")}/>
                <NavItemWithSubLabel href="/dashboard/forecast" icon={LineChart} label="AI Forecast" active={pathname.startsWith("/dashboard/forecast")}/>
                <NavItemWithSubLabel href="/dashboard/detection" icon={AlertTriangle} label="Anomaly Detection" active={pathname.startsWith("/dashboard/detection")}/>
                <NavItemWithSubLabel href="/dashboard/assistant" icon={Bot} label="AI Assistant" active={pathname.startsWith("/dashboard/assistant")}/>
              </div>

              <div>
                <p className="px-3 mb-2 text-xs font-semibold text-muted-foreground">
                  Administration
                </p>
                <NavItemWithSubLabel href="/dashboard/users" icon={Users} label="Users" active={pathname.startsWith("/dashboard/users")}/>
                <NavItemWithSubLabel href="/dashboard/reports" icon={FileText} label="Reports" active={pathname.startsWith("/dashboard/reports")}/>
                <NavItemWithSubLabel href="/dashboard/settings" icon={Settings} label="Settings" active={pathname.startsWith("/dashboard/settings")}/>
              </div>
            </div>
          ) : (
            <div className="space-y-4 px-2">
              <NavItem href="/dashboard" icon={Home} />
              <NavItem href="/dashboard/products" icon={Package} />
              <NavItem href="/dashboard/scanner" icon={QrCode} />
              <NavItem href="/dashboard/forecast" icon={LineChart} />
              <NavItem href="/dashboard/detection" icon={AlertTriangle} />
              <NavItem href="/dashboard/assistant" icon={Bot} />
              <NavItem href="/dashboard/users" icon={Users} />
              <NavItem href="/dashboard/reports" icon={FileText} />
              <NavItem href="/dashboard/settings" icon={Settings} />
            </div>
          )}
        </div>

        {/* User */}
        <div className="border-t border-border p-3 flex items-center justify-between">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {expanded && (
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4 text-muted-foreground" />
            </Button>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={toggle}
        />
      )}
    </>
  )
}
