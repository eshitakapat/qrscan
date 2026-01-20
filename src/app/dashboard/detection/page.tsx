import DashboardSummaryCards from "@/components/dashboard/detection/CardSection";
import DetectedAnomalies from "@/components/dashboard/detection/Anamolies";

export default function Detection() {
  return (
    <div
      className="
        p-4 sm:p-6 md:p-8
        min-h-screen
        bg-background
      "
    >
      <h1
        className="
          text-xl sm:text-2xl md:text-3xl
          font-bold
          text-foreground
          mb-2
        "
      >
        Anomaly Detection
      </h1>

      <p
        className="
          text-xs sm:text-sm
          text-subheading
          mb-6 sm:mb-8
        "
      >
        AI-powered security monitoring and fraud detection
      </p>

      <DashboardSummaryCards />
      <DetectedAnomalies />
    </div>
  );
}
