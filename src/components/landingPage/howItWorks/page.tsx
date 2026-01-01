import {
  Database,
  Cpu,
  LineChart,
  Bell,
  CheckCircle,
} from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Database,
      title: "Collect Inventory Data",
      description:
        "Inventory activity is captured in real time from scanners and connected systems."
    },
    {
      icon: Cpu,
      title: "AI Processes Patterns",
      description:
        "Advanced models analyze demand cycles, usage trends, and anomalies automatically."
    },
    {
      icon: LineChart,
      title: "Generate Smart Insights",
      description:
        "Dashboards and forecasts turn complex data into clear, usable intelligence."
    },
    {
      icon: Bell,
      title: "Receive Proactive Alerts",
      description:
        "Get notified before stock issues, losses, or inefficiencies occur."
    },
    {
      icon: CheckCircle,
      title: "Act With Confidence",
      description:
        "Make fast, informed decisions that improve efficiency and reduce risk."
    }
  ]

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-4xl font-semibold text-foreground">
          How It Works
        </h2>
        <p className="mt-4 text-foreground/70">
          A simple and intelligent workflow designed to optimize your inventory
          from start to finish.
        </p>

        {/* Steps */}
        <div className="mt-16 space-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col mb-2 items-center"
            >
              {/* Icon */}
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-foreground/45">
                <step.icon size={20} />
              </div>

              {/* Title */}
              <h3 className="mt-2 text-lg font-medium text-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-subheading max-w-md">
                {step.description}
              </p>

              {/* Divider */}
              {index !== steps.length - 1 && (
                <div className="w-px bold h-8 bg-secondary mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
