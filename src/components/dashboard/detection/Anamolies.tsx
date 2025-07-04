import { AlertTriangle, Clock } from "lucide-react";

const anomalies = [
  {
    product: "iPad Pro",
    type: "THEFT",
    severity: "high",
    severityColor: "bg-red-800 text-red-100",
    description: "Unusual stock decrease detected without corresponding sales record",
    time: "2024-01-15 10:30 AM",
    confidence: 94,
    status: "investigating",
    statusColor: "bg-orange-800 text-orange-100",
    cardColor: "bg-[#5a2323]",
  },
  {
    product: "Samsung Galaxy S24",
    type: "DATA ERROR",
    severity: "medium",
    severityColor: "bg-yellow-800 text-yellow-100",
    description: "Stock count mismatch between physical and system inventory",
    time: "2024-01-15 09:15 AM",
    confidence: 87,
    status: "resolved",
    statusColor: "bg-green-900 text-green-200",
    cardColor: "bg-[#4a2027]",
  },
  {
    product: "MacBook Air M3",
    type: "UNUSUAL PATTERN",
    severity: "low",
    severityColor: "bg-blue-900 text-blue-100",
    description: "Abnormal sales velocity detected - 300% above normal",
    time: "2024-01-15 08:45 AM",
    confidence: 76,
    status: "monitoring",
    statusColor: "bg-blue-900 text-blue-100",
    cardColor: "bg-[#4a2e15]",
  },
];

interface SeverityBadgeProps {
  severity: string;
  color: string;
}

function SeverityBadge({ severity, color }:SeverityBadgeProps) {
  return (
    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold uppercase ${color}`}>
      {severity}
    </span>
  );
}

interface StatusBadgeProps {
  status: string;
  color: string;
}

function StatusBadge({ status, color }:StatusBadgeProps) {
  return (
    <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${color}`}>
      {status}
    </span>
  );
}

export default function DetectedAnomalies() {
  return (
    <div className="bg-[#18181b] border border-[#23232b] rounded-2xl p-6 mt-8">
      <div className="flex items-center mb-1">
        <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
        <h2 className="text-2xl font-bold text-white">Detected Anomalies</h2>
      </div>
      <p className="text-gray-400 mb-6 text-sm">
        Recent anomalies detected by AI monitoring system
      </p>
      <div className="flex flex-col gap-4">
        {anomalies.map((a, idx) => (
          <div
            key={a.product}
            className={`${a.cardColor} rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between border border-[#23232b]`}
          >
            <div>
              <div className="flex items-center text-white font-semibold text-lg mb-1">
                <Clock className="w-4 h-4 mr-2 text-gray-300" />
                {a.product} - {a.type}
                <SeverityBadge severity={a.severity} color={a.severityColor} />
              </div>
              <div className="text-gray-200 mb-2">{a.description}</div>
              <div className="flex gap-6 text-xs text-gray-300">
                <span>
                  Time: <span className="text-gray-100">{a.time}</span>
                </span>
                <span>
                  Confidence: <span className="text-gray-100">{a.confidence}%</span>
                </span>
                <StatusBadge status={a.status} color={a.statusColor} />
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="bg-black text-white px-4 py-2 rounded-md border border-[#23232b] hover:bg-gray-900 transition text-sm font-medium">
                Investigate
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md border border-[#23232b] hover:bg-gray-900 transition text-sm font-medium">
                Mark Resolved
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
