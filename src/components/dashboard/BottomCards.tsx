import { ShoppingCart, Users, Activity } from "lucide-react";

const stats = [
  {
    label: "Today's Sales",
    value: "$12,450",
    subtext: "+8% from yesterday",
    icon: ShoppingCart,
    iconClass: "text-[#8ba47d]", 
    valueClass: "text-[#e2f1e7]", 
    subtextClass: "text-[#a1b5a4]", 
  },
  {
    label: "Active Users",
    value: "24",
    subtext: "Currently online",
    icon: Users,
    iconClass: "text-[#7fa6b0]", 
    valueClass: "text-[#e2f1e7]",
    subtextClass: "text-[#a1b5a4]",
  },
  {
    label: "System Health",
    value: "99.9%",
    subtext: "Uptime this month",
    icon: Activity,
    iconClass: "text-[#9acd32]",
    valueClass: "text-[#9acd32] font-bold",
    subtextClass: "text-[#a1b5a4]",
  },
];

export default function DashboardMiniCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#2c482e] border border-[#8ba47d] rounded-xl p-6 flex flex-col justify-between min-h-[120px] relative"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-[#a1b5a4]">{stat.label}</div>
              <div className={`text-3xl font-bold mt-1 ${stat.valueClass}`}>{stat.value}</div>
              <div className={`text-xs mt-1 ${stat.subtextClass}`}>{stat.subtext}</div>
            </div>
            <stat.icon className={`w-5 h-5 ${stat.iconClass} absolute top-4 right-4`} />
          </div>
        </div>
      ))}
    </div>
  );
}
