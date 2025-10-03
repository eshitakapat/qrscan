"use client"

import { useState } from "react"
import { Menu, LogIn, UserPlus, X } from "lucide-react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed flex justify-between items-center w-full p-4 h-16 z-50 bg-[#2c482e]">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-2xl text-[#f2f2f2]">RetailTracker</h1>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden sm:flex space-x-2 mb-2">
        <button className="text-[#8ba47d] bg-[#091315] w-28 h-10 rounded-md hover:font-medium hover:bg-[#8ba47d] hover:text-[#091315] transition-colors">
          Login
        </button>
        <button className="bg-[#8ba47d] text-[#091315] w-28 h-10 rounded-md hover:font-medium hover:bg-[#54734e] hover:text-[#f2f2f2] transition-colors">
          Register
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-[#f2f2f2]" /> : <Menu size={28} className="text-[#f2f2f2]" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#2c482e] shadow-lg rounded-lg w-40 flex flex-col p-2 sm:hidden">
          <button className="flex items-center gap-2 text-[#f2f2f2] hover:bg-[#8ba47d] hover:text-[#091315] px-3 py-2 rounded-md transition">
            <LogIn size={18} /> Login
          </button>
          <button className="flex items-center gap-2 text-[#f2f2f2] hover:bg-[#8ba47d] hover:text-[#091315] px-3 py-2 rounded-md transition">
            <UserPlus size={18} /> Register
          </button>
        </div>
      )}
    </nav>
  )
}
