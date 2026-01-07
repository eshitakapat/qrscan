import {
  Boxes,
  BarChart2,
  AlertCircle,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function SidebarRight() {
  return (
    <aside className="w-full md:w-96 flex flex-col space-y-4 md:space-y-6 px-4 sm:px-0">
      
      {/* Quick Actions */}
      <div className="bg-primary rounded-xl p-4 sm:p-5 md:p-6">
        <h2 className="text-foreground font-semibold mb-2 text-base sm:text-lg">
          Quick Actions
        </h2>
        <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
          Common inventory queries
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-2">
          <button className="flex items-center gap-2 sm:gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition text-xs sm:text-sm truncate">
            <Boxes size={18} className="text-accent flex-shrink-0 sm:size-5" />
            <span className="truncate">Stock Status</span>
          </button>

          <button className="flex items-center gap-2 sm:gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition text-xs sm:text-sm truncate">
            <BarChart2 size={18} className="text-accent flex-shrink-0 sm:size-5" />
            <span className="truncate">Sales Analytics</span>
          </button>

          <button className="flex items-center gap-2 sm:gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition text-xs sm:text-sm truncate">
            <AlertCircle size={18} className="text-accent flex-shrink-0 sm:size-5" />
            <span className="truncate">Alerts</span>
          </button>

          <button className="flex items-center gap-2 sm:gap-3 py-2 px-3 rounded bg-secondary text-foreground hover:bg-secondary transition text-xs sm:text-sm truncate">
            <Lightbulb size={18} className="text-accent flex-shrink-0 sm:size-5" />
            <span className="truncate">Recommendations</span>
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-primary rounded-xl p-4 sm:p-5 md:p-6">
        <h2 className="text-foreground font-semibold mb-2 text-base sm:text-lg">
          System Status
        </h2>

        <div className="flex flex-col gap-2 sm:gap-3">
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
    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
      <CheckCircle size={16} className="text-accent flex-shrink-0 sm:size-[18px]" />
      <span className="text-foreground text-xs sm:text-sm truncate">{label}</span>
      <span className="ml-auto bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 text-xs flex-shrink-0">
        {value}
      </span>
    </div>
  );
}
