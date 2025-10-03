import AssistantPanel from "@/components/dashboard/assistant/ai";
import SidebarRight from "@/components/dashboard/assistant/questionnare";

export default function Home() {
  return (
    <div className="bg-[#0e1510] min-h-screen flex justify-center items-center">
      <div className="flex flex-row w-[1200px] space-x-8">
        <div className="flex-1 flex flex-col justify-center p-3">
          <AssistantPanel />
        </div>
        <div className="w-[380px] p-3">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}
