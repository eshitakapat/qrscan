// app/layout.tsx

import { SidebarProvider } from "@/context/sidebar-context"
import { DashboardSidebar } from "@/components/Menubars/dashboard-sidebar"
import "./globals.css" // Import your global styles if needed

export const metadata = {
  title: "Dashboard",
  description: "Your dashboard description here",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
           <DashboardSidebar/>{children}
           
         
        </SidebarProvider>
      </body>
    </html>
  )
}
