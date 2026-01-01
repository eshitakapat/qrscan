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
    <div className="bg-warning/90 border border-border rounded-2xl p-6 mt-8">
      <div className="flex items-center mb-1">
        <Calendar className="w-6 h-6 text-accent mr-2" />
        <h2 className="text-xl font-bold text-foreground">
          Seasonal Trends
        </h2>
      </div>

      <p className="text-subheading mb-5 text-sm">
        Historical patterns and seasonal variations
      </p>

      <div className="flex flex-col gap-3">
        {trends.map((trend) => (
          <div
            key={trend.title}
            className={`rounded-lg px-5 py-4 font-semibold ${trend.className}`}
          >
            <div className="text-base">{trend.title}</div>
            <div className="text-sm font-normal">
              {trend.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
