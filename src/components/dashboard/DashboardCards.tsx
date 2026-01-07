import { AlertTriangle, DollarSign, Package, LineChart } from "lucide-react";

// Define your stats data array
const stats = [
  {
    label: "Total Products",
    value: "5",
    icon: Package,
    iconClass: "text-accent",
    change: "+2 from last week",
    changeClass: "text-foreground",
  },
  {
    label: "Low Stock Alerts",
    value: "2",
    icon: AlertTriangle,
    iconClass: "text-accent",
    change: "Requires attention",
    changeClass: "text-foreground",
  },
  {
    label: "Total Value",
    value: "$62,257",
    icon: DollarSign,
    iconClass: "text-accent",
    change: "+12% from last month",
    changeClass: "text-foreground",
  },
  {
    label: "AI Accuracy",
    value: "94.2%",
    icon: LineChart,
    iconClass: "text-accent",
    change: "Prediction accuracy",
    changeClass: "text-foreground",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            bg-primary
            rounded-xl
            p-4 sm:p-6
            flex flex-col
            gap-2
            shadow
            border-b border-foreground/70
            min-h-[110px]
          "
        >
          <div className="flex items-center justify-between text-subheading text-xs sm:text-sm">
            <span>{stat.label}</span>
            <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.iconClass}`} />
          </div>

          <div className="text-2xl sm:text-3xl font-bold text-foreground">
            {stat.value}
          </div>

          <div className={`${stat.changeClass} text-[11px] sm:text-xs`}>
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}
