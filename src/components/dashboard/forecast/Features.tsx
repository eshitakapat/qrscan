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
      <TrendingUp className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-accent flex-shrink-0" />
    ) : trend === "down" ? (
      <TrendingDown className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-accent flex-shrink-0" />
    ) : (
      <Circle className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-muted-foreground flex-shrink-0" />
    );

  return (
    <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-card text-muted-foreground whitespace-nowrap">
      {icon}
      <span>{confidence}%</span>
    </span>
  );
}

export default function ProductForecasts() {
  return (
    /* 🔹 OUTER CONTAINER */
    <div className="bg-primary rounded-2xl p-4 sm:p-5 md:p-6 mt-6 sm:mt-8 mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6 text-accent flex-shrink-0" />
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Product-Specific Forecasts
        </h2>
      </div>

      <p className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm">
        AI-powered demand predictions and restock recommendations
      </p>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        {forecasts.map((f) => (
          /* 🔹 INNER ROW */
          <div
            key={f.name}
            className="bg-secondary rounded-xl p-3 sm:p-4 md:p-6 flex flex-col md:flex-row md:justify-between gap-3 sm:gap-4"
          >
            {/* LEFT */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-base sm:text-lg text-foreground truncate">
                {f.name}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-10 mt-2 sm:mt-3 text-xs sm:text-sm">
                <div>
                  <div className="text-foreground/70 text-xs sm:text-sm">
                    Current Stock
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-foreground">
                    {f.currentStock}
                  </div>
                </div>

                <div>
                  <div className="text-foreground/70 text-xs sm:text-sm">
                    Predicted Demand
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-foreground">
                    {f.predictedDemand}
                  </div>
                </div>

                <div>
                  <div className="text-foreground/70 text-xs sm:text-sm">
                    Recommended Restock
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-foreground truncate">
                    {f.restockNeeded
                      ? `+${f.recommendedRestock}`
                      : "No action"}
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-2 sm:mt-4 text-xs sm:text-sm gap-1 sm:gap-2">
                {f.restockNeeded && (
                  <AlertTriangle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-warning flex-shrink-0" />
                )}
                <span className="text-warning font-medium">
                  {f.restockText}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start sm:items-end justify-between gap-2 sm:gap-4 min-w-fit sm:min-w-[200px]">
              <ConfidenceBadge
                confidence={f.confidence}
                trend={f.confidenceTrend}
              />

              {/* 🔹 CONSISTENT ACTION BUTTON */}
              <button
                disabled={!f.restockNeeded}
                className="
                  px-3 sm:px-4 md:px-5 py-2
                  bg-background
                  text-muted-foreground
                  rounded-md
                  border border-border
                  text-xs sm:text-sm
                  transition
                  hover:bg-card
                  cursor-pointer
                  hover:disabled:bg-card
                  w-full sm:w-auto
                  whitespace-nowrap
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
