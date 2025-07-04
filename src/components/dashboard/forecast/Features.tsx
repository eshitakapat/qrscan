import { ShoppingCart, AlertTriangle, TrendingUp, TrendingDown, Circle } from "lucide-react";

const forecasts = [
  {
    name: "iPhone 15 Pro",
    currentStock: 25,
    predictedDemand: 45,
    recommendedRestock: 30,
    confidence: 94,
    confidenceTrend: "up",
    restockNeeded: true,
    restockText: "Restock recommended to avoid stockout",
    restockColor: "text-orange-500",
  },
  {
    name: "Samsung Galaxy S24",
    currentStock: 8,
    predictedDemand: 25,
    recommendedRestock: 20,
    confidence: 89,
    confidenceTrend: "up",
    restockNeeded: true,
    restockText: "Restock recommended to avoid stockout",
    restockColor: "text-orange-500",
  },
  {
    name: "MacBook Air M3",
    currentStock: 12,
    predictedDemand: 18,
    recommendedRestock: 10,
    confidence: 91,
    confidenceTrend: "neutral",
    restockNeeded: true,
    restockText: "Restock recommended to avoid stockout",
    restockColor: "text-orange-500",
  },
  {
    name: "AirPods Pro",
    currentStock: 45,
    predictedDemand: 35,
    recommendedRestock: 0,
    confidence: 87,
    confidenceTrend: "down",
    restockNeeded: false,
    restockText: "No action needed",
    restockColor: "text-green-500",
  },
];

interface ConfidenceBadgeProps {
  confidence: number;
  trend: string;
}

function ConfidenceBadge({ confidence, trend }:ConfidenceBadgeProps) {
  let icon, color;
  if (trend === "up") {
    icon = <TrendingUp className="w-3 h-3 mr-1 text-green-400 inline-block" />;
    color = "bg-gray-800 text-white";
  } else if (trend === "down") {
    icon = <TrendingDown className="w-3 h-3 mr-1 text-red-400 inline-block" />;
    color = "bg-gray-800 text-white";
  } else {
    icon = <Circle className="w-3 h-3 mr-1 text-gray-400 inline-block" />;
    color = "bg-gray-800 text-white";
  }
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${color}`}>
      {icon}
      {confidence}% confidence
    </span>
  );
}

export default function ProductForecasts() {
  return (
    <div className="bg-[#111112] border border-[#23232b] rounded-2xl p-6  mt-8">
      <div className="flex items-center mb-1">
        <ShoppingCart className="w-6 h-6 text-blue-400 mr-2" />
        <h2 className="text-2xl font-bold text-white">Product-Specific Forecasts</h2>
      </div>
      <p className="text-gray-400 mb-6 text-sm">
        AI-powered demand predictions and restock recommendations
      </p>
      <div className="flex flex-col gap-4">
        {forecasts.map((f, idx) => (
          <div
            key={f.name}
            className="bg-[#18181b] border border-[#23232b] rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Left: Product Info */}
            <div className="flex-1">
              <div className="font-bold text-white text-lg">{f.name}</div>
              <div className="flex gap-8 mt-2 text-sm">
                <div>
                  <div className="text-gray-400">Current Stock</div>
                  <div className="text-white text-xl font-bold">{f.currentStock}</div>
                </div>
                <div>
                  <div className="text-gray-400">Predicted Demand (30 days)</div>
                  <div className="text-blue-400 text-xl font-bold">{f.predictedDemand}</div>
                </div>
                <div>
                  <div className="text-gray-400">Recommended Restock</div>
                  <div className={`text-xl font-bold ${f.restockNeeded ? "text-green-400" : "text-green-500"}`}>
                    {f.restockNeeded ? `+${f.recommendedRestock}` : "No action needed"}
                  </div>
                </div>
              </div>
              {f.restockNeeded && (
                <div className="flex items-center mt-4 text-sm">
                  <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                  <span className={`${f.restockColor} font-medium`}>{f.restockText}</span>
                </div>
              )}
              {!f.restockNeeded && (
                <div className="flex items-center mt-4 text-sm">
                  <span className={`${f.restockColor} font-medium`}>{f.restockText}</span>
                </div>
              )}
            </div>
            {/* Right: Confidence & Action */}
            <div className="flex flex-col items-end justify-between min-w-[180px] gap-3">
              <ConfidenceBadge confidence={f.confidence} trend={f.confidenceTrend} />
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-md border border-[#23232b] hover:bg-gray-900 transition font-medium text-sm disabled:opacity-50"
                disabled={!f.restockNeeded}
              >
                Create Purchase Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
