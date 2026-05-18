import { PackageCheck } from "lucide-react";

const activities = [
  {
    title: "Updated Organic Apples",
    subtitle: "Added 10 units",
    time: "30 minutes ago",
  },
  {
    title: "Updated Almond Milk",
    subtitle: "Removed 2 units",
    time: "1 hour ago",
  },
  {
    title: "Updated Free Range Eggs",
    subtitle: "Added 12 units",
    time: "3 hours ago",
  },
  {
    title: "Updated Brown Bread",
    subtitle: "Added 6 units",
    time: "5 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-[#4B4038] bg-[#111827]/60 p-6 shadow-lg backdrop-blur-sm">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#CAAA98]">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-[#9A8678]">
          Your recent inventory updates
        </p>
      </div>

      {/* Activities */}
      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl border border-[#4B4038]/40 bg-[#202940]/60 p-4 transition hover:border-[#9A8678]/40"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4B4038]">
              <PackageCheck size={20} className="text-[#CAAA98]" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-medium text-[#CAAA98]">
                {activity.title}
              </h3>

              <p className="mt-1 text-sm text-[#9A8678]">
                {activity.subtitle}
              </p>
            </div>

            {/* Time */}
            <span className="text-xs text-[#9A8678]">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}