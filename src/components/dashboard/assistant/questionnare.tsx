import { Boxes, BarChart2, AlertCircle, Lightbulb, CheckCircle } from 'lucide-react';

export default function SidebarRight() {
  return (
    <aside className="w-96 flex flex-col space-y-6">
      <div className="bg-neutral-900 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-2">Quick Actions</h2>
        <p className="text-neutral-400 mb-4 text-sm">Common inventory queries</p>
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-neutral-950 text-white">
            <Boxes size={20} /> Stock Status
          </button>
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-neutral-950 text-white">
            <BarChart2 size={20} /> Sales Analytics
          </button>
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-neutral-950 text-white">
            <AlertCircle size={20} /> Alerts
          </button>
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-neutral-950 text-white">
            <Lightbulb size={20} /> Recommendations
          </button>
        </div>
      </div>
      <div className="bg-neutral-900 rounded-xl p-6">
        <h2 className="text-white font-semibold mb-2">System Status</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400" size={18} /> <span className="text-white">AI Model</span>
            <span className="bg-green-700 rounded-full px-2 text-xs ml-auto">Online</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400" size={18} /> <span className="text-white">Data Sync</span>
            <span className="bg-green-700 rounded-full px-2 text-xs ml-auto">Live</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-400" size={18} /> <span className="text-white">Response Time</span>
            <span className="bg-neutral-700 rounded-full px-2 text-xs ml-auto">~1.2s</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
