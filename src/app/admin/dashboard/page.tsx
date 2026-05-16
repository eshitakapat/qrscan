import StatsCards from "@/components/dashboard/DashboardCards"
import ActiveAlerts from "@/components/dashboard/ActiveAlerts"
import RecentActivity from "@/components/dashboard/RecentActivity"
import DashboardMiniCards from "@/components/dashboard/BottomCards"
export default function DashboardPage() {
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
      <p className="text-sm text-subheading mb-8">Real-time inventory insights and analytics</p>

      <StatsCards />
      <ActiveAlerts/>
      <div className="mt-8">
        <div className="w-full">
           <RecentActivity />
        </div>
        
      </div>

      <div className="mt-8">
         <DashboardMiniCards/>
      </div>
      
    </div>

    
  )
}
