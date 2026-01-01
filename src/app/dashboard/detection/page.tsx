import DashboardSummaryCards from "@/components/dashboard/detection/CardSection";
import DetectedAnomalies from "@/components/dashboard/detection/Anamolies";

export default function Detection() {
  return (
    <div className="p-8 min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Anomaly Detection
      </h1>

      <p className="text-sm text-subheading mb-8">
        AI-powered security monitoring and fraud detection
      </p>

      <DashboardSummaryCards />
      <DetectedAnomalies />
    </div>
  );
}
