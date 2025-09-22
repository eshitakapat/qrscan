import AssistantPanel from "@/components/dashboard/assistant/ai";
import SidebarRight from "@/components/dashboard/assistant/questionnare";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="flex w-[1200px] space-x-8">
        <div className="flex-1 flex flex-col justify-center">
          <AssistantPanel />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
}
