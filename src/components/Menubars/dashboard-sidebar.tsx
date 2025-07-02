"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  ClipboardList,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  Trophy,
  User,
  Users,
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
import Image from "next/image"
import { useSidebar } from "@/context/sidebar-context"

export function DashboardSidebar() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)
  const { isOpen, toggle } = useSidebar()
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  // Handle hover events only on desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setExpanded(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpanded(false)
    }
  }

  // For mobile, we'll use the isOpen state from context
  useEffect(() => {
    if (isMobile) {
      setExpanded(isOpen)
    }
  }, [isOpen, isMobile])

  const NavItem = ({
    href,
    icon: Icon,
    label,
    active = false
  }: {
    href: string;
    icon: React.ComponentType<any>;
    label: string;
    active?: boolean;
  }) => {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-r-lg px-3 py-2",
          active
            ? "bg-accent text-[#3becd4] border-l-4 border-[#3becd4]"
            : "text-[#dee7e7] hover:bg-muted hover:text-foreground",
          !expanded && "justify-center"
        )}>
        <Icon className="h-5 w-5" />
        {expanded && <span className="font-medium">{label}</span>}
      </Link>
    )
  }

  return (
    <>
      <aside 
        className={cn(
          "flex h-screen flex-col border-r-[1px] dark:border-gray-700 transition-all duration-300 bg-[#2C3441] ease-in-out fixed md:static z-20",
          expanded ? "w-64 translate-x-0" : "w-0 md:w-20 -translate-x-full md:translate-x-0",
          "shadow-sm"
        )}
        style={{ backgroundColor: "#2C3441" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {expanded && (
          <>
            <div className="flex h-16 items-center sm:justify-center justify-start border-b dark:border-gray-700 pl-5 sm:px-2">
              <div className="flex items-center gap-2">
                <div className="rounded-md">
                  <Image src="/onlyLogo.png" alt="Logo" width={100} height={100} className="sm:w-8 w-6 h-auto rounded-full" />
                </div>
                <span className="text-xl font-bold">
                  <Image src="/nameLogo.png" alt="Logo" width={100} height={100} className="sm:h-7 h-6 w-auto sm:mt-3 mt-2 rounded-full" />
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-auto py-2">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">Main</h2>
                <div className="space-y-1">
                  <NavItem href="/dashboard" icon={Home} label="Dashboard" active={pathname === "/dashboard"} />
                  <NavItem href="/dashboard/profile" icon={User} label="My Profile" active={pathname === "/dashboard/profile"} />
                  <NavItem href="/dashboard/calendar" icon={Calendar} label="Event Calendar" active={pathname === "/dashboard/calendar"} />
                  <NavItem href="/dashboard/rankings" icon={Trophy} label="Rankings" active={pathname === "/dashboard/rankings"} />
                </div>
              </div>

              <div className="px-3 py-2">
                <h2 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">Learning</h2>
                <div className="space-y-1">
                  <NavItem href="/dashboard/test-series" icon={BookOpen} label="Test Series" active={pathname.startsWith("/dashboard/test-series")} />
                  <NavItem href="/dashboard/assessments" icon={ClipboardList} label="Assessments" active={pathname.startsWith("/dashboard/assessments")} />
                  <NavItem href="/dashboard/classroom" icon={Users} label="Classroom" active={pathname === "/dashboard/classroom"} />
                </div>
              </div>

              <div className="px-3 py-2">
                <h2 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">Support</h2>
                <div className="space-y-1">
                  <NavItem href="/dashboard/help" icon={HelpCircle} label="Help Desk" active={pathname === "/dashboard/help"} />
                  <NavItem href="/dashboard/settings" icon={Settings} label="Settings" active={pathname === "/dashboard/settings"} />
                </div>
              </div>
            </div>

            <div className="border-t dark:border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">John Doe</span>
                    <span className="text-xs text-muted-foreground">Computer Science</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setLogoutDialogOpen(true)}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}

        {!expanded && (
          // Collapsed sidebar view (desktop only)
          <div className="hidden md:flex flex-col h-full py-6">
            <div className="flex justify-center mb-6">
              <Image src="/onlyLogo.png" alt="Logo" width={100} height={100} className="w-8 h-auto rounded-full" />
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="space-y-2 px-2">
                <NavItem href="/dashboard" icon={Home} label="Dashboard" active={pathname === "/dashboard"} />
                <NavItem href="/dashboard/profile" icon={User} label="My Profile" active={pathname === "/dashboard/profile"} />
                <NavItem href="/dashboard/calendar" icon={Calendar} label="Event Calendar" active={pathname === "/dashboard/calendar"} />
                <NavItem href="/dashboard/rankings" icon={Trophy} label="Rankings" active={pathname === "/dashboard/rankings"} />
              </div>
              
              <div className="space-y-2 px-2">
                <NavItem href="/dashboard/test-series" icon={BookOpen} label="Test Series" active={pathname.startsWith("/dashboard/test-series")} />
                <NavItem href="/dashboard/assessments" icon={ClipboardList} label="Assessments" active={pathname.startsWith("/dashboard/assessments")} />
                <NavItem href="/dashboard/classroom" icon={Users} label="Classroom" active={pathname === "/dashboard/classroom"} />
              </div>
              
              <div className="space-y-2 px-2">
                <NavItem href="/dashboard/help" icon={HelpCircle} label="Help Desk" active={pathname === "/dashboard/help"} />
                <NavItem href="/dashboard/settings" icon={Settings} label="Settings" active={pathname === "/dashboard/settings"} />
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLogoutDialogOpen(true)}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </aside>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 md:hidden" 
          onClick={toggle}
          aria-hidden="true"
        />
      )}

      {/* Mobile toggle button */}
      <div className="fixed bottom-4 right-4 md:hidden z-30">
        <Button
          className="bg-primary h-10 w-10 rounded-full shadow-lg"
          onClick={toggle}
        >
          <Home className="h-5 w-5" />
        </Button>
      </div>

      <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>Are you sure you want to log out of your GRASPIQ account?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLogoutDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => (window.location.href = "/login")}>Logout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}