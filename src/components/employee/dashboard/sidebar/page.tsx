"use client"

import { useState, ComponentType } from "react"
import Link from "next/link"
import {
  Home,
  Package,
  QrCode,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/context/sidebar-context"

type NavItemWithSubLabelProps = {
  href: string
  icon: ComponentType<any>
  label: string
  active?: boolean
}

const NavItemWithSubLabel = ({
  href,
  icon: Icon,
  label,
  active = false,
}: NavItemWithSubLabelProps) => (
  <Link
    href={href}
    className={cn(
      "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
      active
        ? "bg-[#9A8678] text-white"
        : "text-[#CAAA98] hover:bg-[#4B4038] hover:text-white"
    )}
  >
    <Icon className="h-5 w-5" />
    <span className="font-medium">{label}</span>
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
      "flex items-center justify-center rounded-xl py-3 transition-all duration-200",
      active
        ? "bg-[#9A8678] text-white"
        : "text-[#CAAA98] hover:bg-[#4B4038] hover:text-white"
    )}
  >
    <Icon className="h-5 w-5" />
  </Link>
)

export function DashboardSidebarEmployee() {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <aside
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={cn(
          "fixed md:relative z-20 h-screen flex flex-col transition-all duration-300",
          "bg-[#202940] border-r border-[#4B4038]",
          expanded ? "w-64" : "w-20",
          "translate-x-0",
          !isOpen && "md:translate-x-0 -translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-[#4B4038]">
          <LayoutDashboard className="h-8 w-8 text-[#CAAA98]" />

          {expanded && (
            <div>
              <p className="font-bold text-[#CAAA98]">
                Storelytics
              </p>
              <p className="text-xs text-[#9A8678]">
                AI-Powered System
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
<div className="flex-1 overflow-y-auto py-6">
  {expanded ? (
    <div className="space-y-3 px-3">
      
      <NavItemWithSubLabel
        href="/admin/dashboard"
        icon={Home}
        label="Dashboard"
        active={pathname === "/admin/dashboard"}
      />

      <NavItemWithSubLabel
        href="/admin/dashboard/products"
        icon={Package}
        label="Products"
        active={pathname.startsWith("/admin/dashboard/products")}
      />

      <NavItemWithSubLabel
        href="/admin/dashboard/scanner"
        icon={QrCode}
        label="QR Scanner"
        active={pathname.startsWith("/admin/dashboard/scanner")}
      />

      <NavItemWithSubLabel
        href="/admin/dashboard/settings"
        icon={Settings}
        label="Settings"
        active={pathname.startsWith("/admin/dashboard/settings")}
      />
    </div>
  ) : (
    <div className="space-y-4 px-2">
      
      <NavItem
        href="/admin/dashboard"
        icon={Home}
        active={pathname === "/admin/dashboard"}
      />

      <NavItem
        href="/admin/dashboard/products"
        icon={Package}
        active={pathname.startsWith("/admin/dashboard/products")}
      />

      <NavItem
        href="/admin/dashboard/scanner"
        icon={QrCode}
        active={pathname.startsWith("/admin/dashboard/scanner")}
      />

      <NavItem
        href="/admin/dashboard/settings"
        icon={Settings}
        active={pathname.startsWith("/admin/dashboard/settings")}
      />
    </div>
  )}
</div>

        {/* User */}
        <div className="border-t border-[#4B4038] p-3 flex items-center justify-between">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://ui-avatars.com/api/?name=JD" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          {expanded && (
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#4B4038]"
            >
              <LogOut className="h-4 w-4 text-[#CAAA98]" />
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