import { Calendar } from "lucide-react";

const trends = [
  {
    title: "Peak Season Approaching",
    description: "Electronics typically see 40% increase in demand during Q4",
    className: "bg-primary text-foreground",
  },
  {
    title: "Back-to-School Trend",
    description: "Laptops and accessories show 25% uptick in August-September",
    className: "bg-secondary/80 text-foreground",
  },
  {
    title: "Holiday Preparation",
    description: "Recommend increasing stock by 35% before November",
    className: "bg-secondary text-foreground",
  },
];

export default function SeasonalTrendsCard() {
  return (
    <div className="bg-warning/90 border border-border w-full rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8">
      {/* Header */}
      <div className="flex items-center mb-1 gap-2">
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
        <h2 className="text-lg sm:text-xl font-bold text-foreground">
          Seasonal Trends
        </h2>
      </div>

      <p className="text-subheading mb-4 sm:mb-5 text-xs sm:text-sm">
        Historical patterns and seasonal variations
      </p>

      {/* Trend cards */}
      <div className="flex flex-col gap-3">
        {trends.map((trend) => (
          <div
            key={trend.title}
            className={`rounded-lg px-4 sm:px-5 py-3 sm:py-4 ${trend.className}`}
          >
            <div className="text-sm sm:text-base font-semibold">
              {trend.title}
            </div>
            <div className="text-xs sm:text-sm font-normal leading-relaxed">
              {trend.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
