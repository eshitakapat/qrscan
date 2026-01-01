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
    <div className="bg-primary border border-border rounded-2xl p-6 mt-8">
      <div className="flex items-center mb-1">
        <AlertTriangle className="w-5 h-5 text-accent mr-2" />
        <h2 className="text-2xl font-bold text-foreground">
          Detected Anomalies
        </h2>
      </div>

      <p className="text-subheading mb-6 text-sm">
        Recent anomalies detected by AI monitoring system
      </p>

      <div className="flex flex-col gap-4">
        {anomalies.map((a) => (
          <div
            key={a.product}
            className="
              bg-secondary
              rounded-xl
              px-6 py-5
              flex flex-col
              md:flex-row
              md:items-center
              md:justify-between
              border border-border
            "
          >
            <div>
              <div className="flex items-center font-semibold text-lg mb-1 text-foreground">
                <Clock className="w-4 h-4 mr-2 text-foreground" />
                {a.product} – {a.type}
                <SeverityBadge
                  severity={a.severity}
                  color={a.severityColor}
                />
              </div>

              <div className="text-warning mb-2">
                {a.description}
              </div>

              <div className="flex gap-6 text-xs text-background">
                <span>
                  Time:{" "}
                  <span className="text-foreground/90">{a.time}</span>
                </span>
                <span>
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
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                className="
                  bg-card
                  text-foreground
                  px-4 py-2
                  rounded-md
                  border border-border
                  text-sm
                  font-medium
                  transition
                  cursor-pointer
                  hover:bg-card/50
                "
              >
                Investigate
              </button>

              <button
                className="
                  bg-card
                  text-foreground
                  px-4 py-2
                  rounded-md
                  border border-border
                  text-sm
                  font-medium
                  transition
                  hover:bg-card/50
                  cursor-pointer
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
