import { AlertTriangle, DollarSign, Package, LineChart } from "lucide-react";

// Define your stats data array
const stats = [
  {
    label: "Total Products",
    value: "5",
    icon: Package,
    iconClass: "",
    change: "+2 from last week",
    changeClass: "text-green-400",
  },
  {
    label: "Low Stock Alerts",
    value: "2",
    icon: AlertTriangle,
    iconClass: "text-yellow-400",
    change: "Requires attention",
    changeClass: "text-yellow-400",
  },
  {
    label: "Total Value",
    value: "$62,257",
    icon: DollarSign,
    iconClass: "text-green-400",
    change: "+12% from last month",
    changeClass: "text-green-400",
  },
  {
    label: "AI Accuracy",
    value: "94.2%",
    icon: LineChart,
    iconClass: "text-blue-400",
    change: "Prediction accuracy",
    changeClass: "text-blue-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#1c1c21] rounded-lg p-6 flex flex-col gap-2 shadow border border-[#23232b]"
        >
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <span>{stat.label}</span>
            <stat.icon className={`w-5 h-5 ${stat.iconClass}`} />
          </div>
          <div className="text-3xl font-bold text-white">{stat.value}</div>
          <div className={`${stat.changeClass} text-xs`}>{stat.change}</div>
        </div>
      ))}
    </div>
  );
}
