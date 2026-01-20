"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, LogIn, UserPlus, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { PAGE_TITLES } from "@/lib/page-title";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Get title based on current route
  const pageTitle = PAGE_TITLES[pathname] ?? "";

  return (
    <nav className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-[#2c482e] px-6">
      
      {/* LEFT: App name + Page title */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-[#f2f2f2]">
          RetailTracker
        </h1>

        {pageTitle && (
          <>
            <span className="text-[#8ba47d]">/</span>
            <span className="text-lg font-medium text-[#8ba47d]">
              {pageTitle}
            </span>
          </>
        )}
      </div>

      {/* DESKTOP BUTTONS */}
       <div className="hidden sm:flex space-x-2">
  <Link 
  href="/auth/login">
    <button className="h-10 w-28 rounded-md bg-[#091315] text-[#8ba47d] transition hover:bg-[#8ba47d] hover:text-[#091315] cursor-pointer">
      Login
    </button>
  </Link>

  <Link href="/auth/register">
    <button className="h-10 w-28 rounded-md bg-[#8ba47d] text-[#091315] transition hover:bg-[#54734e] hover:text-[#f2f2f2] cursor-pointer">
      Register
    </button>
  </Link>
</div>

      {/* MOBILE MENU ICON */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-[#f2f2f2]" />
          ) : (
            <Menu size={28} className="text-[#f2f2f2]" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute right-4 top-16 flex w-40 flex-col gap-1 rounded-lg bg-[#2c482e] p-2 shadow-lg sm:hidden">
          <button className="flex items-center gap-2 rounded-md px-3 py-2 text-[#f2f2f2] transition hover:bg-[#8ba47d] hover:text-[#091315]">
            <LogIn size={18} /> Login
          </button>
          <button className="flex items-center gap-2 rounded-md px-3 py-2 text-[#f2f2f2] transition hover:bg-[#8ba47d] hover:text-[#091315]">
            <UserPlus size={18} /> Register
          </button>
        </div>
      )}
    </nav>
  );
}
