"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { DashboardSidebar } from "@/components/Menubars/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster } from "sonner"
import { SidebarProvider, useSidebar } from "@/context/sidebar-context"
import Image from "next/image"

// Main dashboard content that uses the sidebar context
function DashboardContent({ children }: { children: React.ReactNode }) {
  const [notifications] = useState(3)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { toggle, isOpen, closeSidebar } = useSidebar()
  
  // Set mounted state when component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Get page title from pathname
  const getPageTitle = () => {
    const path = pathname.split("/")[2] || ""
    
    const titles: Record<string, string> = {
      "": "Dashboard",
      "profile": "My Profile",
      "calendar": "Event Calendar",
      "rankings": "Rankings",
      "test-series": "Test Series",
      "assessments": "Assessments",
      "classroom": "Classroom",
      "help": "Help Desk",
      "settings": "Settings",
    }
    
    return titles[path] || "Dashboard"
  }
  
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b dark:border-gray-700 bg-[#2C3441] px-6 w-full">
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className=" text-white hover:bg-[#3a4452] border border-gray-500"
              onClick={toggle}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-xl font-semibold sm:block hidden">{getPageTitle()}</h1>
                 <div className="rounded-md sm:hideen mr-2">
                  <Image src="/onlyLogo.png" alt="Logo" width={100} height={100} className="w-6 h-auto rounded-full sm:hidden block" />
                </div>
                {/* <div className=" ">
                  <Image src="/nameLogo.png" alt="Logo" width={100} height={100} className="h-5 mt-2 w-auto  rounded-full" />
                </div> */}
            
            <div className="flex items-center gap-4">
              {/* <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                {mounted && (
                  <>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </>
                )}
                <span className="sr-only">Toggle theme</span>
              </Button> */}
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge
                    className="absolute -right-1 -top-1 h-5 w-5 justify-center rounded-full p-0"
                    variant="destructive"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <div className="container py-3 md:py-5">
          <main className="mx-auto px-4 md:px-8 bg-[#1D2735]">
            {children}
          </main>
        </div>
        <Toaster />
      </div>
    </div>
  )
}

// Wrapper component that provides the sidebar context
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  )
}
