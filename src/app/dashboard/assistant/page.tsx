import AssistantPanel from "@/components/dashboard/assistant/ai";

export default function Home() {
  return (
    <div
      className="
        min-h-screen
        bg-background
        px-4 sm:px-6 md:px-8
        py-4 sm:py-6
      "
    >
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
