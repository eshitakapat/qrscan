import { AlertTriangle } from "lucide-react";

// Data-driven alerts array
const alerts = [
  {
    type: "Low Stock Alert",
    description: "Samsung Galaxy S24 is running low (8 units left)",
    color: "bg-[#5a2323]",
    iconColor: "text-yellow-300",
  },
  {
    type: "Anomaly Detected",
    description: "Unusual stock movement detected for iPad Pro",
    color: "bg-[#4a2027]",
    iconColor: "text-red-400",
  },
  {
    type: "Restock Recommendation",
    description: "Recommended restock: iPhone 15 Pro (15 units)",
    color: "bg-[#232e5a]",
    iconColor: "text-blue-300",
  },
];

export default function ActiveAlerts() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Active Alerts</h2>
      <div className="flex flex-col gap-1">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`${alert.color} rounded-lg p-5 flex items-center gap-4`}
          >
            <AlertTriangle className={`w-6 h-6 flex-shrink-0 ${alert.iconColor}`} />
            <div>
              <div className="font-semibold text-white">{alert.type}</div>
              <div className="text-gray-200 text-sm">{alert.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
