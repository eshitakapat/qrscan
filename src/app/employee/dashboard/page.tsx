"use client";
import StatsCards from "@/components/employee/dashboard/DashboardCards";
import RecentActivity from "@/components/employee/dashboard/RecentActivity";
import DashboardMiniCards from "@/components/employee/dashboard/BottomCards";
import { QrCode } from "lucide-react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (
      role !== "employee" &&
      role !== "admin"
    ) {
      router.push("/auth/login");
    }
  }, [router]);
  return (
    <div className="min-h-screen bg-[#202940] px-6 py-8 text-[#CAAA98]">
      
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[#CAAA98]">
            Employee Dashboard
          </h1>

          <p className="mt-2 text-sm text-[#9A8678]">
            Monitor inventory, stock alerts, and employee activity in real time.
          </p>
        </div>

        {/* Scan Button */}
        <button className="flex w-fit items-center gap-2 rounded-xl bg-[#CAAA98] px-5 py-3 text-sm font-semibold text-[#202940] transition hover:opacity-90">
          <QrCode size={18} />
          Scan QR Code
        </button>
      </div>

      {/* Top Stats */}
      <div className="mb-8">
        <StatsCards />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        
        {/* Recent Activity */}
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>

        {/* Side Cards */}
        <div className="space-y-6">
          <DashboardMiniCards />
        </div>
      </div>
    </div>
  );
}