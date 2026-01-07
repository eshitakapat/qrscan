import { ShoppingCart, Users, Activity } from "lucide-react";

const stats = [
  {
    label: "Today's Sales",
    value: "$12,450",
    subtext: "+8% from yesterday",
    icon: ShoppingCart,
    iconClass: "text-accent",
    valueClass: "text-foreground",
    subtextClass: "text-subheading",
  },
  {
    label: "Active Users",
    value: "24",
    subtext: "Currently online",
    icon: Users,
    iconClass: "text-accent",
    valueClass: "text-foreground",
    subtextClass: "text-subheading",
  },
  {
    label: "System Health",
    value: "99.9%",
    subtext: "Uptime this month",
    icon: Activity,
    iconClass: "text-accent",
    valueClass: "text-foreground font-bold",
    subtextClass: "text-subheading",
  },
];

export default function DashboardMiniCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-primary border border-accent rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[110px] sm:min-h-[120px] relative"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="pr-6">
              <div className="text-xs sm:text-sm text-subheading">
                {stat.label}
              </div>

              <div
                className={`text-2xl sm:text-3xl font-bold mt-1 ${stat.valueClass}`}
              >
                {stat.value}
              </div>

              <div
                className={`text-[11px] sm:text-xs mt-1 ${stat.subtextClass}`}
              >
                {stat.subtext}
              </div>
            </div>

            <stat.icon
              className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.iconClass} absolute top-3 sm:top-4 right-3 sm:right-4`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
