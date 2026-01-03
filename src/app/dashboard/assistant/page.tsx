import AssistantPanel from "@/components/dashboard/assistant/ai";

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-6 py-6">
      
      {/* Full-width container */}
      <div className="h-full w-full">
        
        {/* AI Assistant takes full space */}
        <div className="h-full w-full">
          <AssistantPanel />
        </div>

      </div>
    </div>
  );
}
