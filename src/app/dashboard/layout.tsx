"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { DashboardSidebar } from "@/components/Menubars/dashboard-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Menu, X } from "lucide-react";
import { SidebarProvider, useSidebar } from "@/context/sidebar-context";
import Image from "next/image";
import { Toaster } from "sonner";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const [notifications] = useState(3);
  const pathname = usePathname();
  const { toggle, isOpen } = useSidebar();

  const getPageTitle = () => {
    const path = pathname.split("/")[2] || "";
    const titles: Record<string, string> = {
      "": "Dashboard",
      profile: "My Profile",
      calendar: "Event Calendar",
      rankings: "Rankings",
      "test-series": "Test Series",
      assessments: "Assessments",
      classroom: "Classroom",
      help: "Help Desk",
      settings: "Settings",
    };
    return titles[path] || "Dashboard";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />

      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 bg-card border-b border-border px-6">
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary border border-border"
              onClick={toggle}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          <div className="flex flex-1 justify-between items-center">
            <h1 className="text-xl font-semibold hidden sm:block">{getPageTitle()}</h1>

            <Image
              src="/onlyLogo.png"
              alt="Logo"
              width={24}
              height={24}
              className="sm:hidden rounded-full"
            />

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0">
                    {notifications}
                  </Badge>
                )}
              </Button>

              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="px-4 md:px-8 py-4">{children}</main>
        <Toaster />
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
