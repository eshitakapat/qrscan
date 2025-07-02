"use client"

import { createContext, useState, useContext, useEffect, ReactNode } from "react"
import { usePathname } from "next/navigation"

interface SidebarContextType {
  isOpen: boolean
  toggle: () => void
  setIsOpen: (isOpen: boolean) => void
  closeSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()
  
  // Auto-collapse sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768)
    }
    
    // Initial check
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
  }, [pathname])
  
  const toggle = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)
  
  return (
    <SidebarContext.Provider value={{ isOpen, toggle, setIsOpen, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
