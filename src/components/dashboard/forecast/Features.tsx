import {
  ShoppingCart,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Circle,
} from "lucide-react";

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
  },
];

function ConfidenceBadge({
  confidence,
  trend,
}: {
  confidence: number;
  trend: string;
}) {
  const icon =
    trend === "up" ? (
      <TrendingUp className="w-3 h-3 mr-1 text-accent" />
    ) : trend === "down" ? (
      <TrendingDown className="w-3 h-3 mr-1 text-accent" />
    ) : (
      <Circle className="w-3 h-3 mr-1 text-muted-foreground" />
    );

  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-card text-muted-foreground">
      {icon}
      {confidence}% confidence
    </span>
  );
}

export default function ProductForecasts() {
  return (
    /* 🔹 OUTER CONTAINER */
    <div className="bg-primary rounded-2xl p-6 mt-8">
      <div className="flex items-center mb-1">
        <ShoppingCart className="w-6 h-6 text-accent mr-2" />
        <h2 className="text-2xl font-bold text-foreground">
          Product-Specific Forecasts
        </h2>
      </div>

      <p className="text-muted-foreground mb-6 text-sm">
        AI-powered demand predictions and restock recommendations
      </p>

      <div className="flex flex-col gap-5">
        {forecasts.map((f) => (
          /* 🔹 INNER ROW */
          <div
            key={f.name}
            className="bg-secondary rounded-xl p-6 flex flex-col md:flex-row md:justify-between gap-4"
          >
            {/* LEFT */}
            <div className="flex-1">
              <div className="font-bold text-lg text-foreground">
                {f.name}
              </div>

              <div className="flex gap-10 mt-3 text-sm">
                <div>
                  <div className="text-foreground">
                    Current Stock
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    {f.currentStock}
                  </div>
                </div>

                <div>
                  <div className="text-foreground">
                    Predicted Demand
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    {f.predictedDemand}
                  </div>
                </div>

                <div>
                  <div className="text-foreground">
                    Recommended Restock
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    {f.restockNeeded
                      ? `+${f.recommendedRestock}`
                      : "No action needed"}
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-4 text-sm">
                {f.restockNeeded && (
                  <AlertTriangle className="w-4 h-4 mr-2 text-warning" />
                )}
                <span className="text-warning font-medium">
                  {f.restockText}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end justify-between gap-4 min-w-[200px]">
              <ConfidenceBadge
                confidence={f.confidence}
                trend={f.confidenceTrend}
              />

              {/* 🔹 CONSISTENT ACTION BUTTON */}
              <button
                disabled={!f.restockNeeded}
                className="
                  px-5 py-2
                  bg-background
                  text-muted-foreground
                  rounded-md
                  border border-border
                  text-sm
                  transition
                  hover:bg-card
                  cursor-pointer
                  hover:disabled:bg-card
                "
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
