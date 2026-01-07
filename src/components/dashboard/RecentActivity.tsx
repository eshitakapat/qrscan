const activities = [
  {
    name: "iPhone 15 Pro",
    stock: 25,
    status: "In Stock",
    statusColor: "bg-accent text-background",
    time: "2 mins ago",
  },
  {
    name: "Samsung Galaxy S24",
    stock: 8,
    status: "Low Stock",
    statusColor: "bg-secondary text-foreground",
    time: "5 mins ago",
  },
  {
    name: "MacBook Air M3",
    stock: 12,
    status: "In Stock",
    statusColor: "bg-accent text-background",
    time: "1 min ago",
  },
  {
    name: "AirPods Pro",
    stock: 45,
    status: "In Stock",
    statusColor: "bg-accent text-background",
    time: "3 mins ago",
  },
  {
    name: "iPad Pro",
    stock: 3,
    status: "Low Stock",
    statusColor: "bg-secondary text-foreground",
    time: "7 mins ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#2c482e] border-b border-[#a6a6a6] rounded-xl p-4 sm:p-6 w-full">
      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
        Recent Activity
      </h2>
      <p className="text-subheading mb-4 sm:mb-5 text-xs sm:text-sm">
        Latest inventory movements
      </p>

      <ul className="divide-y divide-background">
        {activities.map((activity) => (
          <li
            key={activity.name}
            className="flex items-start sm:items-center justify-between gap-3 py-3"
          >
            <div className="min-w-0">
              <div className="font-semibold text-foreground text-sm sm:text-base truncate">
                {activity.name}
              </div>
              <div className="text-subheading text-xs sm:text-sm">
                Stock: {activity.stock} units
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 shrink-0">
              <span
                className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${activity.statusColor}`}
              >
                {activity.status}
              </span>
              <span className="text-subheading text-[10px] sm:text-xs">
                {activity.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
