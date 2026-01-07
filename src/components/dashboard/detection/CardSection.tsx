import { AlertTriangle, ShieldCheck, RotateCw } from "lucide-react";

const cards = [
  {
    label: "Active Alerts",
    value: "3",
    valueClass: "text-accent",          // closest to medium green
    icon: AlertTriangle,
    iconClass: "text-accent",
    subtext: "Requires attention",
    subtextClass: "text-subheading",
  },
  {
    label: "Detection Accuracy",
    value: "96.8%",
    valueClass: "text-accent",          // lighter green → accent
    icon: ShieldCheck,
    iconClass: "text-accent",
    subtext: "AI model performance",
    subtextClass: "text-subheading",
  },
  {
    label: "Prevented Losses",
    value: "$12,450",
    valueClass: "text-accent",          // darker green → still accent family
    icon: RotateCw,
    iconClass: "text-accent",
    subtext: "This month",
    subtextClass: "text-subheading",
  },
];

export default function DashboardSummaryCards() {
  return (
    <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 w-full px-4 sm:px-0">
      {cards.map((card) => (
        <div
          key={card.label}
          className="
            flex-1
            bg-primary
            border-b border-foreground/70
            rounded-xl
            p-3 sm:p-4 md:p-6
            flex flex-col
            justify-between
            min-w-[180px] sm:min-w-[220px]
          "
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-foreground">
                {card.label}
              </div>
            </div>
            <card.icon className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 ${card.iconClass}`} />
          </div>

          <div className={`text-2xl sm:text-3xl font-bold mt-2 sm:mt-3 ${card.valueClass}`}>
            {card.value}
          </div>

          <div className={`text-xs mt-1 sm:mt-2 ${card.subtextClass}`}>
            {card.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}
