"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import {DashboardSidebarEmployee}  from "@/components/employee/dashboard/sidebar/page";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Bell, Menu, X } from "lucide-react";

import {
  SidebarProvider,
  useSidebar,
} from "@/context/sidebar-context";

import { Toaster } from "sonner";

function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications] = useState(3);

  const pathname = usePathname();

  const { toggle, isOpen } = useSidebar();

  const user = {
    name: "John Doe",
  };

  const getPageTitle = () => {
    const path = pathname.split("/")[3] || "";

    const titles: Record<string, string> = {
      "": "Dashboard",
      products: "Products",
      scanner: "QR Scanner",
      settings: "Settings",
    };

    return titles[path] || "Dashboard";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#202940]">
      
      {/* Sidebar */}
      <DashboardSidebarEmployee />

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* Header */}
        <header
          className="
            sticky top-0 z-20
            flex h-16 items-center justify-between
            border-b border-[#4B4038]
            bg-[#202940]
            px-6
          "
        >
          
          {/* Left */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              className="
                md:hidden
                border border-[#4B4038]
                text-[#CAAA98]
                hover:bg-[#4B4038]
              "
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>

            {/* Title */}
            <h1 className="text-2xl font-bold text-[#CAAA98]">
              {getPageTitle()}
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            
            {/* Notifications */}
            <Button
              variant="outline"
              size="icon"
              className="
                relative
                border-[#4B4038]
                bg-transparent
                text-[#CAAA98]
                hover:bg-[#4B4038]
              "
            >
              <Bell className="h-5 w-5" />

              {notifications > 0 && (
                <Badge
                  className="
                    absolute -right-1 -top-1
                    flex h-5 w-5 items-center justify-center
                    rounded-full
                    bg-[#9A8678]
                    p-0
                    text-[10px]
                    text-[#202940]
                  "
                >
                  {notifications}
                </Badge>
              )}
            </Button>

            {/* Avatar */}
            <Avatar className="border border-[#4B4038]">
              <AvatarImage src="/placeholder.svg" />

              <AvatarFallback
                className="
                  bg-[#4B4038]
                  text-[#CAAA98]
                "
              >
                {user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main
          className="
            flex-1 overflow-y-auto
            bg-[#202940]
            px-4 py-6
            text-[#CAAA98]
            md:px-8
          "
        >
          {children}
        </main>

        {/* Toast */}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#4B4038",
              color: "#CAAA98",
              border: "1px solid #9A8678",
            },
          }}
        />
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardContent>
        {children}
      </DashboardContent>
    </SidebarProvider>
  );
}