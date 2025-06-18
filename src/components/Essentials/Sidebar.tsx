

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Home,
  Package,
  QrCode,
  LineChart,
  ShieldAlert,
  Bot,
  Users,
  FileText,
  Settings,
  User,
} from "lucide-react";

// Split links into two groups
const mainLinks = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Products", icon: Package, href: "/products" },
  { label: "QR Scanner", icon: QrCode, href: "/qr-scanner" },
  { label: "AI Forecast", icon: LineChart, href: "/ai-forecast" },
  { label: "Anomaly Detection", icon: ShieldAlert, href: "/anomaly-detection" },
  { label: "AI Assistant", icon: Bot, href: "/ai-assistant" },
];

const adminLinks = [
  { label: "Users", icon: Users, href: "/users" },
  { label: "Reports", icon: FileText, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function SSidebar() {
  return (
    <Sidebar className="bg-zinc-900 text-white w-64 min-h-screen flex flex-col ">
      <SidebarContent className="flex flex-col h-full bg-zinc-900 text-sm">
        {/* Branding/Header */}
        <div className="flex items-center gap-3 px-5 py-5">
          <div className="bg-zinc-800 rounded-full p-2">
            <LineChart size={28} />
          </div>
          <div>
            <div className="font-bold text-lg">Storelytics</div>
            <div className="text-xs text-zinc-400">AI-Powered System</div>
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-zinc-400 px-5 pt-4 pb-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainLinks.map(({ label, icon: Icon, href }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={href}
                      className="flex items-center gap-3 px-6 py-3 rounded hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label={label}
                      title={label}
                    >
                      <Icon size={20} className="text-zinc-400" />
                      <span className="font-medium">{label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Administration */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-zinc-400 px-5 pt-6 pb-2">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {adminLinks.map(({ label, icon: Icon, href }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={href}
                      className="flex items-center gap-3 px-6 py-3 rounded hover:bg-zinc-800 hover:text-white transition-colors"
                      aria-label={label}
                      title={label}
                    >
                      <Icon size={20} className="text-zinc-400" />
                      <span className="font-medium">{label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Info Footer */}
        <div className="mt-auto px-6 py-8 flex items-center gap-3 border-t border-zinc-800">
          <User size={32} className="text-zinc-400" />
          <div>
            <div className="font-medium">Admin User</div>
            <div className="text-xs text-zinc-400">admin@company.com</div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
