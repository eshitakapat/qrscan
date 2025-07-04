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
import Image from "next/image"
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
"flex flex-col items-start gap-0 rounded-r-lg px-3 py-2",
active
? "bg-accent text-[#3becd4] border-l-4 border-[#3becd4]"
: "text-[#dee7e7] hover:bg-muted hover:text-foreground"
)}
style={{ minHeight: "48px" }}
>
<div className="flex items-center gap-3">
<Icon className="h-5 w-5" />
<span className="font-medium">{label}</span>
</div>
{sublabel && (
<span className="text-xs text-muted-foreground ml-8">{sublabel}</span>
)}
</Link>
)

type NavItemProps = {
href: string
icon: ComponentType<any>
label: string
active?: boolean
}

const NavItem = ({
href,
icon: Icon,
label,
active = false,
}: NavItemProps) => (
<Link
href={href}
className={cn(
"flex items-center gap-3 rounded-r-lg px-3 py-2 justify-center",
active
? "bg-accent text-[#3becd4] border-l-4 border-[#3becd4]"
: "text-[#dee7e7] hover:bg-muted hover:text-foreground"
)}
>
<Icon className="h-5 w-5" />
</Link>
)

export function DashboardSidebar() {
const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)
const { isOpen, toggle } = useSidebar()
const [expanded, setExpanded] = useState(false)
const pathname = usePathname()
const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false

const handleMouseEnter = () => {
if (!isMobile) setExpanded(true)
}

const handleMouseLeave = () => {
if (!isMobile) setExpanded(false)
}

useEffect(() => {
if (isMobile) setExpanded(isOpen)
}, [isOpen, isMobile])

return (
<>
<aside
className={cn(
"flex h-screen flex-col border-r-[1px] dark:border-gray-700 transition-all duration-300 bg-[#2C3441] ease-in-out fixed md:static z-20 shadow-sm",
expanded
? "w-64 translate-x-0 opacity-100 pointer-events-auto"
: "w-0 md:w-20 -translate-x-full md:translate-x-0"
)}
style={{ backgroundColor: "#2C3441" }}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>

{/* Header */}
<div className={`flex  items-center sm:justify-center justify-start border-b dark:border-gray-700 pl-5 sm:px-2 transition-all duration-300 ${expanded?"h-16":"h-17"} px-0`

}

>
<div className="flex items-center gap-2">
<LayoutDashboard
className="w-8 h-8 rounded-full text-[#3becd4] bg-[#23303f] p-1"
strokeWidth={2.5}
/>
{expanded && (
<div className="flex flex-col ml-2 ">
<span className="text-lg font-bold text-white">Storelytics</span>
<span className="text-xs text-gray-400">AI-Powered System</span>
</div>
)}
</div>
</div>

{expanded ? (
<>

{/* Scrollable Nav */}
<div className="flex-1 py-2">
<div
className="h-full overflow-y-auto pr-2 scrollbar-hide"
style={{ scrollbarGutter: "stable" }}
>
{/* Main Navigation */}
<div className="px-3 py-2">
<h2 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">
Main Navigation
</h2>
<div className="space-y-1">
<NavItemWithSubLabel href="/dashboard" icon={Home} label="Dashboard" sublabel="Overview & Analytics" active={pathname === "/dashboard"} />
<NavItemWithSubLabel href="/dashboard/products" icon={Package} label="Products" sublabel="Inventory Management" active={pathname === "/dashboard/products"} />
<NavItemWithSubLabel href="/dashboard/scanner" icon={QrCode} label="QR Scanner" sublabel="Real-time Scanning" active={pathname === "/dashboard/qr-scanner"} />
<NavItemWithSubLabel href="/dashboard/forecast" icon={LineChart} label="AI Forecast" sublabel="Demand Prediction" active={pathname === "/dashboard/ai-forecast"} />
<NavItemWithSubLabel href="/dashboard/detection" icon={AlertTriangle} label="Anomaly Detection" sublabel="Security Monitoring" active={pathname === "/dashboard/anomaly-detection"} />
<NavItemWithSubLabel href="/dashboard/assistant" icon={Bot} label="AI Assistant" sublabel="Smart Support" active={pathname === "/dashboard/ai-assistant"} />
</div>
</div>

{/* Administration */}
<div className="px-3 py-2 mt-4">
<h2 className="mb-2 px-3 text-xs font-semibold text-muted-foreground">
Administration
</h2>
<div className="space-y-1">
<NavItemWithSubLabel href="/dashboard/users" icon={Users} label="Users" sublabel="Manage Access" active={pathname === "/dashboard/users"} />
<NavItemWithSubLabel href="/dashboard/reports" icon={FileText} label="Reports" sublabel="Export & Share" active={pathname === "/dashboard/reports"} />
<NavItemWithSubLabel href="/dashboard/settings" icon={Settings} label="Settings" sublabel="System Preferences" active={pathname === "/dashboard/settings"} />
</div>
</div>
</div>
</div>

{/* User info */}
<div className="border-t dark:border-gray-700 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<Avatar className="h-8 w-8">
<AvatarImage src="/placeholder.svg" alt="User" />
<AvatarFallback>JD</AvatarFallback>
</Avatar>
<div className="flex flex-col">
<span className="text-sm font-bold">John Doe</span>
<span className="text-xs text-muted-foreground">Computer Science</span>
</div>
</div>
<Button variant="ghost" size="icon" onClick={() => setLogoutDialogOpen(true)}>
<LogOut className="h-4 w-4" />
</Button>
</div>
</div>
</>
) : (
<div className="hidden md:flex flex-col h-full py-6">
<div className="flex justify-center mb-6">

</div>
<div className="flex-1 space-y-6">
<div className="space-y-2 px-2">
<NavItem href="/dashboard" icon={Home} label="Dashboard" active={pathname === "/dashboard"} />
<NavItem href="/dashboard/products" icon={Package} label="Products" active={pathname === "/dashboard/products"} />
<NavItem href="/dashboard/qr-scanner" icon={QrCode} label="QR Scanner" active={pathname === "/dashboard/qr-scanner"} />
<NavItem href="/dashboard/ai-forecast" icon={LineChart} label="AI Forecast" active={pathname === "/dashboard/ai-forecast"} />
<NavItem href="/dashboard/anomaly-detection" icon={AlertTriangle} label="Anomaly Detection" active={pathname === "/dashboard/anomaly-detection"} />
<NavItem href="/dashboard/ai-assistant" icon={Bot} label="AI Assistant" active={pathname === "/dashboard/ai-assistant"} />
</div>
<div className="space-y-2 px-2">
<NavItem href="/dashboard/users" icon={Users} label="Users" active={pathname === "/dashboard/users"} />
<NavItem href="/dashboard/reports" icon={FileText} label="Reports" active={pathname === "/dashboard/reports"} />
<NavItem href="/dashboard/settings" icon={Settings} label="Settings" active={pathname === "/dashboard/settings"} />
</div>
</div>
<div className="flex justify-center">
<Button variant="ghost" size="icon" onClick={() => setLogoutDialogOpen(true)}>
<LogOut className="h-4 w-4" />
</Button>
</div>
</div>
)}
</aside>

{/* Mobile Overlay */}
{isOpen && (
<div
className="fixed inset-0 bg-black/50 z-10 md:hidden"
onClick={toggle}
aria-hidden="true"
/>
)}

{/* Mobile Toggle Button */}
<div className="fixed bottom-4 right-4 md:hidden z-30">
<Button className="bg-primary h-10 w-10 rounded-full shadow-lg" onClick={toggle}>
<Home className="h-5 w-5" />
</Button>
</div>

{/* Logout Dialog */}
<Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
<DialogContent>
<DialogHeader>
<DialogTitle>Confirm Logout</DialogTitle>
<DialogDescription>
Are you sure you want to log out of your Storelytics account?
</DialogDescription>
</DialogHeader>
<DialogFooter>
<Button variant="outline" onClick={() => setLogoutDialogOpen(false)}>
Cancel
</Button>
<Button variant="destructive" onClick={() => (window.location.href = "/login")}>
Logout
</Button>
</DialogFooter>
</DialogContent>
</Dialog>
</>
)
}