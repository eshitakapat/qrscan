import { AlertTriangle } from "lucide-react";

// Data-driven alerts array
const alerts = [
  {
    type: "Low Stock Alert",
    description: "Samsung Galaxy S24 is running low (8 units left)",
    color: "bg-secondary",            // was #54734e
    iconColor: "text-foreground",     // was #f2f2f2
  },
  {
    type: "Anomaly Detected",
    description: "Unusual stock movement detected for iPad Pro",
    color: "bg-secondary/80",            // was #486b43 (closest)
    iconColor: "text-foreground",     // was #f2f2f2
  },
  {
    type: "Restock Recommendation",
    description: "Recommended restock: iPhone 15 Pro (15 units)",
    color: "bg-primary",              // was #2c482e
    iconColor: "text-accent",         // was #8ba47d
  },
];

export default function ActiveAlerts() {
  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
        Active Alerts
      </h2>
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`${alert.color} rounded-lg p-3 sm:p-4 md:p-5 flex items-start sm:items-center gap-2.5 sm:gap-4`}
          >
            <AlertTriangle
              className={`w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0 ${alert.iconColor}`}
            />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-foreground text-sm sm:text-base">
                {alert.type}
              </div>
              <div className="text-subheading text-xs sm:text-sm leading-relaxed">
                {alert.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
