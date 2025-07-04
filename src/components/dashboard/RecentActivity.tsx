const activities = [
  {
    name: "iPhone 15 Pro",
    stock: 25,
    status: "In Stock",
    statusColor: "bg-gray-700 text-gray-100",
    time: "2 mins ago",
  },
  {
    name: "Samsung Galaxy S24",
    stock: 8,
    status: "Low Stock",
    statusColor: "bg-red-700 text-white",
    time: "5 mins ago",
  },
  {
    name: "MacBook Air M3",
    stock: 12,
    status: "In Stock",
    statusColor: "bg-gray-700 text-gray-100",
    time: "1 min ago",
  },
  {
    name: "AirPods Pro",
    stock: 45,
    status: "In Stock",
    statusColor: "bg-gray-700 text-gray-100",
    time: "3 mins ago",
  },
  {
    name: "iPad Pro",
    stock: 3,
    status: "Low Stock",
    statusColor: "bg-red-700 text-white",
    time: "7 mins ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#18181b] border border-[#23232b] rounded-xl p-6 w-full">
      <h2 className="text-xl font-semibold text-white mb-1">Recent Activity</h2>
      <p className="text-gray-400 mb-5 text-sm">Latest inventory movements</p>
      <ul className="divide-y divide-[#23232b]">
        {activities.map((activity, idx) => (
          <li key={activity.name} className="flex items-center justify-between py-3">
            <div>
              <div className="font-semibold text-white">{activity.name}</div>
              <div className="text-gray-400 text-sm">Stock: {activity.stock} units</div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${activity.statusColor}`}
              >
                {activity.status}
              </span>
              <span className="text-gray-400 text-xs">{activity.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
