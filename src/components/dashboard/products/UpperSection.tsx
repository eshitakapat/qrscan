import { Search, ChevronDown, Download, Plus } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="flex items-center justify-between w-full py-4">
      {/* Left: Search and Category */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent border border-gray-700 rounded-md pl-9 pr-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 w-56"
          />
        </div>
        {/* Categories Dropdown */}
        <button className="flex items-center bg-transparent border border-gray-700 rounded-md px-4 py-2 text-gray-100 font-medium hover:bg-gray-900 transition">
          All Categories
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>
      {/* Right: Export and Add Product */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="flex items-center border border-gray-700 rounded-md px-4 py-2 text-gray-100 font-medium bg-transparent hover:bg-gray-900 transition">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
        <button className="flex items-center rounded-md px-4 py-2 bg-white text-gray-900 font-medium shadow hover:bg-gray-100 transition">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>
    </div>
  );
}
