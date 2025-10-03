import { Boxes, BarChart2, AlertCircle, Lightbulb, CheckCircle } from 'lucide-react';

export default function SidebarRight() {
  return (
    <aside className="w-96 flex flex-col space-y-6">
      {/* Quick Actions */}
      <div className="bg-[#1a2a1d] rounded-xl p-6">
        <h2 className="text-white font-semibold mb-2">Quick Actions</h2>
        <p className="text-[#a3bfa8] mb-4 text-sm">Common inventory queries</p>
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-[#152518] text-white hover:bg-[#233d29] transition">
            <Boxes size={20} className="text-[#6fbf73]" /> Stock Status
          </button>
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-[#152518] text-white hover:bg-[#233d29] transition">
            <BarChart2 size={20} className="text-[#6fbf73]" /> Sales Analytics
          </button>
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-[#152518] text-white hover:bg-[#233d29] transition">
            <AlertCircle size={20} className="text-[#6fbf73]" /> Alerts
          </button>
          <button className="flex items-center gap-3 py-2 px-3 rounded bg-[#152518] text-white hover:bg-[#233d29] transition">
            <Lightbulb size={20} className="text-[#6fbf73]" /> Recommendations
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-[#1a2a1d] rounded-xl p-6">
        <h2 className="text-white font-semibold mb-2">System Status</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#6fbf73]" size={18} />
            <span className="text-white">AI Model</span>
            <span className="bg-[#2f4d35] text-[#bfe5c2] rounded-full px-2 text-xs ml-auto">
              Online
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#6fbf73]" size={18} />
            <span className="text-white">Data Sync</span>
            <span className="bg-[#2f4d35] text-[#bfe5c2] rounded-full px-2 text-xs ml-auto">
              Live
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#6fbf73]" size={18} />
            <span className="text-white">Response Time</span>
            <span className="bg-[#233d29] text-[#a3bfa8] rounded-full px-2 text-xs ml-auto">
              ~1.2s
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
