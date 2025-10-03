import { Search, ChevronDown, Download, Plus } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="flex items-center justify-between w-full py-4">
      {/* Left: Search and Category */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a6a6a6]">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent border border-[#213322] rounded-md pl-9 pr-3 py-2 text-[#f2f2f2] placeholder-[#a6a6a6] focus:outline-none focus:ring-2 focus:ring-[#54734e] w-56"
          />
        </div>
        {/* Categories Dropdown */}
        <button className="flex items-center bg-transparent border border-[#213322] rounded-md px-4 py-2 text-[#f2f2f2] font-medium hover:bg-[#2c482e] transition">
          All Categories
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
      {/* Right: Export and Add Product */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="flex items-center border border-[#213322] rounded-md px-4 py-2 text-[#f2f2f2] font-medium bg-transparent hover:bg-[#2c482e] transition">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
        <button className="flex items-center rounded-md px-4 py-2 bg-[#54734e] text-[#f2f2f2] font-medium shadow hover:bg-[#486b43] transition">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>
    </div>
  );
}
