import { Lock } from 'lucide-react';

export default function AssistantPanel() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">AI Assistant</h1>
      <p className="text-neutral-400 mb-8 text-lg">Intelligent inventory support and insights</p>
      <div className="bg-neutral-900 rounded-xl p-8 w-[600px]">
        <div className="flex items-center mb-2">
          <Lock size={20} className="text-neutral-400 mr-1" />
          <span className="text-xl font-semibold text-white">AI Inventory Assistant</span>
        </div>
        <p className="text-neutral-400 mb-4">Ask questions about your inventory, get insights, and receive recommendations</p>
        <div className="bg-neutral-800 rounded-lg p-5 mb-4">
          <p className="text-neutral-200 mb-3">
            Hello! I'm your AI Inventory Assistant. I can help you with stock levels, demand forecasting, anomaly detection, and general inventory questions. What would you like to know?
          </p>
          <span className="text-neutral-500 text-xs">22:38:59</span>
          <div className="flex gap-2 mt-4">
            <button className="bg-black py-2 px-3 rounded text-white text-sm">Show me low stock items</button>
            <button className="bg-black py-2 px-3 rounded text-white text-sm">What's the demand forecast for iPhone 15 Pro?</button>
          </div>
          <div className="flex gap-2 mt-2">
            <button className="bg-black py-2 px-3 rounded text-white text-sm">Any anomalies detected today?</button>
            <button className="bg-black py-2 px-3 rounded text-white text-sm">Generate a restock report</button>
          </div>
        </div>
        <div className="flex items-center mt-5 bg-neutral-950 rounded p-2">
          <input
            className="flex-1 bg-transparent text-white p-2 outline-none"
            placeholder="Ask about inventory, demand, or get recommendations..."
          />
          <button className="p-2">
            {/* Add Lucide send icon here, e.g. <Send size={20} /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
