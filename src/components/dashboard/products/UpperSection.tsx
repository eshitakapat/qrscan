import { Search, ChevronDown, Download, Plus } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="flex items-center justify-between w-full py-4">
      {/* Left: Search and Category */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            className="
              bg-secondary
              hover:bg-primary
              border border-border
              rounded-md
              pl-9 pr-3 py-2
              text-foreground
              placeholder:text-foreground
              focus:outline-none
              focus:ring-2
              focus:ring-secondary
              w-56
            "
          />
        </div>

        {/* Categories Dropdown */}
        <button className="
          flex items-center
          bg-secondary
          border border-border
          rounded-md
          px-4 py-2
          text-foreground
          font-medium
          hover:bg-primary
          transition
        ">
          All Categories
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Right: Export and Add Product */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="
          flex items-center
          border border-border
          rounded-md
          px-4 py-2
          text-foreground
          font-medium
          bg-secondary
          hover:bg-transparent
          transition
        ">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>

        <button className="
          flex items-center
          border border-border
          rounded-md
          px-4 py-2
          bg-secondary
          text-secondary-foreground
          font-medium
          shadow
          hover:bg-transparent
          transition
        ">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>
    </div>
  );
}
