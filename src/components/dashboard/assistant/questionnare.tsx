import {
  Boxes,
  BarChart2,
  AlertCircle,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function SidebarRight() {
  return (
    <aside className="w-96 flex flex-col space-y-6">
      
      {/* Quick Actions */}
      <div className="bg-primary rounded-xl p-6">
        <h2 className="text-foreground font-semibold mb-2">
          Quick Actions
        </h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Common inventory queries
        </p>

        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition">
            <Boxes size={20} className="text-accent" />
            Stock Status
          </button>

          <button className="flex items-center gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition">
            <BarChart2 size={20} className="text-accent" />
            Sales Analytics
          </button>

          <button className="flex items-center gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition">
            <AlertCircle size={20} className="text-accent" />
            Alerts
          </button>

          <button className="flex items-center gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition">
            <Lightbulb size={20} className="text-accent" />
            Recommendations
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-primary rounded-xl p-6">
        <h2 className="text-foreground font-semibold mb-2">
          System Status
        </h2>

        <div className="flex flex-col gap-3">
          <StatusRow label="AI Model" value="Online" />
          <StatusRow label="Data Sync" value="Live" />
          <StatusRow label="Response Time" value="~1.2s" />
        </div>
      </div>
    </aside>
  );
}

function StatusRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle size={18} className="text-accent" />
      <span className="text-foreground">{label}</span>
      <span className="ml-auto bg-secondary text-secondary-foreground rounded-full px-2 text-xs">
        {value}
      </span>
    </div>
  );
}
