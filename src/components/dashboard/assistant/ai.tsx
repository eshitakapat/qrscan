import { Lock } from 'lucide-react';

export default function AssistantPanel() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">AI Assistant</h1>
      <p className="text-[#a3bfa8] mb-8 text-lg">
        Intelligent inventory support and insights
      </p>
      <div className="bg-[#1a2a1d] rounded-xl p-8 w-[600px]">
        <div className="flex items-center mb-2">
          <Lock size={20} className="text-[#6fbf73] mr-1" />
          <span className="text-xl font-semibold text-white">
            AI Inventory Assistant
          </span>
        </div>
        <p className="text-[#a3bfa8] mb-4">
          Ask questions about your inventory, get insights, and receive
          recommendations
        </p>
        <div className="bg-[#233d29] rounded-lg p-5 mb-4">
          <p className="text-[#e2f1e4] mb-3">
            Hello! I'm your AI Inventory Assistant. I can help you with stock
            levels, demand forecasting, anomaly detection, and general inventory
            questions. What would you like to know?
          </p>
          <span className="text-[#8cae90] text-xs">22:38:59</span>
          <div className="flex gap-2 mt-4">
            <button className="bg-[#2f4d35] py-2 px-3 rounded text-white text-sm hover:bg-[#3e6244] transition">
              Show me low stock items
            </button>
            <button className="bg-[#2f4d35] py-2 px-3 rounded text-white text-sm hover:bg-[#3e6244] transition">
              What's the demand forecast for iPhone 15 Pro?
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="bg-[#2f4d35] py-2 px-3 rounded text-white text-sm hover:bg-[#3e6244] transition">
              Any anomalies detected today?
            </button>
            <button className="bg-[#2f4d35] py-2 px-3 rounded text-white text-sm hover:bg-[#3e6244] transition">
              Generate a restock report
            </button>
          </div>
        </div>
        <div className="flex items-center mt-5 bg-[#152518] rounded p-2">
          <input
            className="flex-1 bg-transparent text-white p-2 outline-none placeholder-[#6fbf73]"
            placeholder="Ask about inventory, demand, or get recommendations..."
          />
          <button className="p-2 text-[#6fbf73] hover:text-[#8fd694] transition">
            {/* Add Lucide send icon here, e.g. <Send size={20} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
