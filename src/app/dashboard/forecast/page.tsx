import SeasonalTrendsCard from "@/components/dashboard/forecast/SeasonalTrends"
import ProductForecasts from "@/components/dashboard/forecast/Features"
export default function Detection() {
  return(
    <div className="p-8 min-h-screen">
       <h1 className="text-3xl font-bold text-foreground mb-2">AI Demand Forecast</h1>
      <p className="text-sm text-subheading mb-8">Machine learning predictions and demand analytics</p> 
      <div className="w-[800px]">
        <SeasonalTrendsCard />
      </div>
      <ProductForecasts/>
    </div>
  )
}
