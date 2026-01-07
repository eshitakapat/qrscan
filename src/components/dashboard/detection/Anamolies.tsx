import { AlertTriangle, Clock } from "lucide-react";

const anomalies = [
  {
    product: "iPad Pro",
    type: "THEFT",
    severity: "high",
    severityColor: "bg-primary text-foreground",
    description:
      "Unusual stock decrease detected without corresponding sales record",
    time: "2024-01-15 10:30 AM",
    confidence: 94,
    status: "investigating",
    statusColor: "bg-primary text-foreground",
    cardColor: "bg-card",
  },
  {
    product: "Samsung Galaxy S24",
    type: "DATA ERROR",
    severity: "medium",
    severityColor: "bg-primary text-foreground",
    description:
      "Stock count mismatch between physical and system inventory",
    time: "2024-01-15 09:15 AM",
    confidence: 87,
    status: "resolved",
    statusColor: "bg-primary text-foreground",
    cardColor: "bg-card",
  },
  {
    product: "MacBook Air M3",
    type: "UNUSUAL PATTERN",
    severity: "low",
    severityColor: "bg-primary text-foreground",
    description:
      "Abnormal sales velocity detected - 300% above normal",
    time: "2024-01-15 08:45 AM",
    confidence: 76,
    status: "monitoring",
    statusColor: "bg-primary text-foreground",
    cardColor: "bg-card",
  },
];

interface SeverityBadgeProps {
  severity: string;
  color: string;
}

function SeverityBadge({ severity, color }: SeverityBadgeProps) {
  return (
    <span
      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold uppercase ${color}`}
    >
      {severity}
    </span>
  );
}

interface StatusBadgeProps {
  status: string;
  color: string;
}

function StatusBadge({ status, color }: StatusBadgeProps) {
  return (
    <span
      className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${color}`}
    >
      {status}
    </span>
  );
}

export default function DetectedAnomalies() {
  return (
    <div className="bg-primary border border-border rounded-2xl p-4 sm:p-5 md:p-6 mt-6 sm:mt-8">
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0" />
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Detected Anomalies
        </h2>
      </div>

      <p className="text-subheading mb-4 sm:mb-6 text-xs sm:text-sm">
        Recent anomalies detected by AI monitoring system
      </p>

      <div className="flex flex-col gap-3 sm:gap-4">
        {anomalies.map((a) => (
          <div
            key={a.product}
            className="
              bg-secondary
              rounded-xl
              px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5
              flex flex-col
              md:flex-row
              md:items-center
              md:justify-between
              border border-border
              gap-3 sm:gap-4
            "
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 font-semibold text-base sm:text-lg mb-2 text-foreground flex-wrap">
                <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-wrap">
                  <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-foreground flex-shrink-0" />
                  <span className="truncate">{a.product}</span>
                  <span className="hidden sm:inline">–</span>
                  <span className="text-sm sm:text-base">{a.type}</span>
                </div>
                <SeverityBadge
                  severity={a.severity}
                  color={a.severityColor}
                />
              </div>

              <div className="text-warning mb-2 text-xs sm:text-sm leading-relaxed">
                {a.description}
              </div>

              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 text-xs text-background flex-wrap">
                <span className="whitespace-nowrap">
                  Time:{" "}
                  <span className="text-foreground/90">{a.time}</span>
                </span>
                <span className="whitespace-nowrap">
                  Confidence:{" "}
                  <span className="text-foreground/90">
                    {a.confidence}%
                  </span>
                </span>
                <StatusBadge
                  status={a.status}
                  color={a.statusColor}
                />
              </div>
            </div>

            {/* 🔒 UNIFIED ACTION BUTTONS */}
            <div className="flex gap-2 mt-3 sm:mt-4 md:mt-0 w-full md:w-auto flex-shrink-0">
              <button
                className="
                  bg-card
                  text-foreground
                  px-3 sm:px-4 py-2
                  rounded-md
                  border border-border
                  text-xs sm:text-sm
                  font-medium
                  transition
                  cursor-pointer
                  hover:bg-card/50
                  flex-1 sm:flex-none
                  whitespace-nowrap
                "
              >
                Investigate
              </button>

              <button
                className="
                  bg-card
                  text-foreground
                  px-3 sm:px-4 py-2
                  rounded-md
                  border border-border
                  text-xs sm:text-sm
                  font-medium
                  transition
                  hover:bg-card/50
                  cursor-pointer
                  flex-1 sm:flex-none
                  whitespace-nowrap
                "
              >
                Mark Resolved
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
