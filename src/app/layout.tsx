
import './globals.css'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SSidebar } from "@/components/Essentials/Sidebar";

export const metadata = {
  title: "Storelytics", // Change this to whatever you want to appear in the browser tab
  description: "A description of your app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <SSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
