import { AlertTriangle, ShieldCheck, RotateCw } from "lucide-react";

const cards = [
  {
    label: "Active Alerts",
    value: "3",
    valueClass: "text-[#6fbf73]", // medium green
    icon: AlertTriangle,
    iconClass: "text-[#6fbf73]",
    subtext: "Requires attention",
    subtextClass: "text-gray-400",
  },
  {
    label: "Detection Accuracy",
    value: "96.8%",
    valueClass: "text-[#8fd694]", // lighter green
    icon: ShieldCheck,
    iconClass: "text-[#8fd694]",
    subtext: "AI model performance",
    subtextClass: "text-gray-400",
  },
  {
    label: "Prevented Losses",
    value: "$12,450",
    valueClass: "text-[#4d8b55]", // darker green
    icon: RotateCw,
    iconClass: "text-[#4d8b55]",
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
          <div className={`text-3xl font-bold mt-2 ${card.valueClass}`}>
            {card.value}
          </div>
          <div className={`text-xs mt-1 ${card.subtextClass}`}>{card.subtext}</div>
        </div>
      ))}
    </div>
  );
}
