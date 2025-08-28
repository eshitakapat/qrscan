"use client"

import { useState } from "react"
import { Menu, LogIn, UserPlus, X } from "lucide-react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed flex justify-between items-center w-full p-4 h-16 z-50 bg-[#387478]">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-2xl">RetailTracker</h1>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden sm:flex space-x-2 mb-2">
        <button className="text-[#629584] bg-[#030303] w-28 h-10 rounded-md hover:font-medium hover:bg-[#629584] hover:text-[#030303] transition-colors">
          Login
        </button>
        <button className="bg-[#629584] text-[#030303] w-28 h-10 rounded-md hover:font-medium hover:bg-[#387478] transition-colors">
          Register
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[#387478] shadow-lg rounded-lg w-40 flex flex-col p-2 sm:hidden">
          <button className="flex items-center gap-2 text-white hover:bg-[#629584] px-3 py-2 rounded-md transition">
            <LogIn size={18} /> Login
          </button>
          <button className="flex items-center gap-2 text-white hover:bg-[#629584] px-3 py-2 rounded-md transition">
            <UserPlus size={18} /> Register
          </button>
        </div>
      )}
    </nav>
  )
}
