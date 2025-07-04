import { Calendar } from "lucide-react";

const trends = [
  {
    title: "Peak Season Approaching",
    description: "Electronics typically see 40% increase in demand during Q4",
    color: "bg-green-900 text-green-100",
  },
  {
    title: "Back-to-School Trend",
    description: "Laptops and accessories show 25% uptick in August-September",
    color: "bg-blue-900 text-blue-100",
  },
  {
    title: "Holiday Preparation",
    description: "Recommend increasing stock by 35% before November",
    color: "bg-orange-900 text-orange-100",
  },
];

export default function SeasonalTrendsCard() {
  return (
    <div className="bg-[#18181b] border border-[#23232b] rounded-2xl p-6  mt-8">
      <div className="flex items-center mb-1">
        <Calendar className="w-6 h-6 text-green-300 mr-2" />
        <h2 className="text-xl font-bold text-white">Seasonal Trends</h2>
      </div>
      <p className="text-gray-400 mb-5 text-sm">
        Historical patterns and seasonal variations
      </p>
      <div className="flex flex-col gap-3">
        {trends.map((trend) => (
          <div
            key={trend.title}
            className={`rounded-lg px-5 py-4 ${trend.color} font-semibold`}
          >
            <div className="text-base">{trend.title}</div>
            <div className="text-sm font-normal">{trend.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
