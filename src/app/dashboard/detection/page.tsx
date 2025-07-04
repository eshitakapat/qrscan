import DashboardSummaryCards from "@/components/dashboard/detection/CardSection"
import DetectedAnomalies from "@/components/dashboard/detection/Anamolies"
export default function Detection() {
  return(
    <div className="p-8 min-h-screen">
       <h1 className="text-3xl font-bold text-white mb-2">Anomaly Detection</h1>
      <p className="text-sm text-gray-400 mb-8">AI-powered security monitoring and fraud detection</p> 
      <DashboardSummaryCards/>
      <DetectedAnomalies/>
    </div>
  )
}
