const activities = [
  {
    name: "iPhone 15 Pro",
    stock: 25,
    status: "In Stock",
    statusColor: "bg-[#8ba47d] text-[#1a1a1a]", // lighter green + dark text
    time: "2 mins ago",
  },
  {
    name: "Samsung Galaxy S24",
    stock: 8,
    status: "Low Stock",
    statusColor: "bg-[#54734e] text-[#f2f2f2]", // darker primary green
    time: "5 mins ago",
  },
  {
    name: "MacBook Air M3",
    stock: 12,
    status: "In Stock",
    statusColor: "bg-[#8ba47d] text-[#1a1a1a]",
    time: "1 min ago",
  },
  {
    name: "AirPods Pro",
    stock: 45,
    status: "In Stock",
    statusColor: "bg-[#8ba47d] text-[#1a1a1a]",
    time: "3 mins ago",
  },
  {
    name: "iPad Pro",
    stock: 3,
    status: "Low Stock",
    statusColor: "bg-[#54734e] text-[#f2f2f2]",
    time: "7 mins ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#2c482e] border-b border-[#a6a6a6] rounded-xl p-6 w-full">
      <h2 className="text-xl font-semibold text-[#f2f2f2] mb-1">Recent Activity</h2>
      <p className="text-[#a6a6a6] mb-5 text-sm">Latest inventory movements</p>
      <ul className="divide-y divide-[#213322]">
        {activities.map((activity) => (
          <li
            key={activity.name}
            className="flex items-center justify-between py-3"
          >
            <div>
              <div className="font-semibold text-[#f2f2f2]">
                {activity.name}
              </div>
              <div className="text-[#a6a6a6] text-sm">
                Stock: {activity.stock} units
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${activity.statusColor}`}
              >
                {activity.status}
              </span>
              <span className="text-[#a6a6a6] text-xs">{activity.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
