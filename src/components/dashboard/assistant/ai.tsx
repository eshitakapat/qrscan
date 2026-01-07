import { Lock } from 'lucide-react';

export default function AssistantPanel() {
  return (
    <div className="w-full px-4 sm:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">AI Assistant</h1>
      <p className="text-[#a3bfa8] mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
        Intelligent inventory support and insights
      </p>
      <div className="bg-primary rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-full md:w-[600px]">
        <div className="flex items-center mb-2 gap-1 sm:gap-2">
          <Lock size={18} className="text-[#6fbf73] flex-shrink-0 sm:size-5" />
          <span className="text-lg sm:text-xl font-semibold text-white">
            AI Inventory Assistant
          </span>
        </div>
        <p className="text-[#a3bfa8] mb-4 text-sm sm:text-base">
          Ask questions about your inventory, get insights, and receive
          recommendations
        </p>
        <div className="bg-secondary rounded-lg p-3 sm:p-4 md:p-5 mb-4">
          <p className="text-[#e2f1e4] mb-3 text-sm sm:text-base leading-relaxed">
            Hello! I'm your AI Inventory Assistant. I can help you with stock
            levels, demand forecasting, anomaly detection, and general inventory
            questions. What would you like to know?
          </p>
          <span className="text-primary text-xs">22:38:59</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            <button className="bg-primary py-2 px-3 rounded text-white text-xs sm:text-sm hover:bg-[#3e6244] transition truncate">
              Show me low stock items
            </button>
            <button className="bg-primary py-2 px-3 rounded text-white text-xs sm:text-sm hover:bg-[#3e6244] transition truncate">
              Demand forecast iPhone 15 Pro?
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <button className="bg-primary py-2 px-3 rounded text-white text-xs sm:text-sm hover:bg-[#3e6244] transition truncate">
              Anomalies detected today?
            </button>
            <button className="bg-primary py-2 px-3 rounded text-white text-xs sm:text-sm hover:bg-[#3e6244] transition truncate">
              Generate restock report
            </button>
          </div>
        </div>
        <div className="flex items-center mt-5 bg-[#152518] rounded p-2 gap-2">
          <input
            className="flex-1 bg-transparent text-white p-2 outline-none placeholder-[#6fbf73] text-sm min-w-0"
            placeholder="Ask about inventory..."
          />
          <button className="p-2 text-[#6fbf73] hover:text-[#8fd694] transition flex-shrink-0">
            {/* Add Lucide send icon here, e.g. <Send size={20} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
