import { AlertTriangle, DollarSign, Package, LineChart } from "lucide-react";

// Define your stats data array
const stats = [
  {
    label: "Total Products",
    value: "5",
    icon: Package,
    iconClass: "text-[#33cc33]", 
    change: "+2 from last week",
    changeClass: "text-[#33cc33]",
  },
  {
    label: "Low Stock Alerts",
    value: "2",
    icon: AlertTriangle,
    iconClass: "text-[#8ba47d]", 
    change: "Requires attention",
    changeClass: "text-[#8ba47d]",
  },
  {
    label: "Total Value",
    value: "$62,257",
    icon: DollarSign,
    iconClass: "text-[#54734e]", 
    change: "+12% from last month",
    changeClass: "text-[#54734e]",
  },
  {
    label: "AI Accuracy",
    value: "94.2%",
    icon: LineChart,
    iconClass: "text-[#33cc33]", 
    change: "Prediction accuracy",
    changeClass: "text-[#33cc33]",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#2c482e] rounded-lg p-6 flex flex-col gap-2 shadow border-b border-[#a6a6a6]"
        >
          <div className="flex items-center justify-between text-[#a6a6a6] text-sm">
            <span>{stat.label}</span>
            <stat.icon className={`w-5 h-5 ${stat.iconClass}`} />
          </div>
          <div className="text-3xl font-bold text-[#f2f2f2]">
            {stat.value}
          </div>
          <div className={`${stat.changeClass} text-xs`}>{stat.change}</div>
        </div>
      ))}
    </div>
  );
}
