import { AlertTriangle, ShieldCheck, RotateCw } from "lucide-react";

const cards = [
  {
    label: "Active Alerts",
    value: "3",
    valueClass: "text-red-500",
    icon: AlertTriangle,
    iconClass: "text-red-500",
    subtext: "Requires attention",
    subtextClass: "text-gray-400",
  },
  {
    label: "Detection Accuracy",
    value: "96.8%",
    valueClass: "text-green-400",
    icon: ShieldCheck,
    iconClass: "text-green-400",
    subtext: "AI model performance",
    subtextClass: "text-gray-400",
  },
  {
    label: "Prevented Losses",
    value: "$12,450",
    valueClass: "text-blue-500",
    icon: RotateCw,
    iconClass: "text-blue-500",
    subtext: "This month",
    subtextClass: "text-gray-400",
  },
];

export default function DashboardSummaryCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex-1 bg-[#111112] border border-[#23232b] rounded-xl p-6 flex flex-col justify-between min-w-[220px]"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">{card.label}</div>
            </div>
            <card.icon className={`w-5 h-5 ${card.iconClass}`} />
          </div>
          <div className={`text-3xl font-bold mt-2 ${card.valueClass}`}>{card.value}</div>
          <div className={`text-xs mt-1 ${card.subtextClass}`}>{card.subtext}</div>
        </div>
      ))}
    </div>
  );
}
