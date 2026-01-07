import { Search, ChevronDown, Download, Plus } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-4 py-3 sm:py-4">
      {/* Left: Search and Category */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="
              bg-secondary
              hover:bg-primary
              border border-border
              rounded-md
              pl-9 pr-3 py-2
              text-xs sm:text-sm
              text-foreground
              placeholder:text-foreground
              focus:outline-none
              focus:ring-2
              focus:ring-secondary
              w-full sm:w-40 md:w-56
            "
          />
        </div>

        {/* Categories Dropdown */}
        <button className="
          flex items-center justify-center sm:justify-start
          bg-secondary
          border border-border
          rounded-md
          px-3 sm:px-4 py-2
          text-xs sm:text-sm
          text-foreground
          font-medium
          hover:bg-primary
          transition
          whitespace-nowrap
        ">
          All Categories
          <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4 ml-1.5 sm:ml-2 flex-shrink-0" />
        </button>
      </div>

      {/* Right: Export and Add Product */}
      <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto sm:ml-auto">
        <button className="
          flex items-center justify-center sm:justify-start
          border border-border
          rounded-md
          px-2 sm:px-4 py-2
          text-xs sm:text-sm
          text-foreground
          font-medium
          bg-secondary
          hover:bg-transparent
          transition
          flex-1 sm:flex-none
          whitespace-nowrap
        ">
          <Download className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          <span className="hidden sm:inline">Export</span>
        </button>

        <button className="
          flex items-center justify-center sm:justify-start
          border border-border
          rounded-md
          px-2 sm:px-4 py-2
          text-xs sm:text-sm
          bg-secondary
          text-secondary-foreground
          font-medium
          shadow
          hover:bg-transparent
          transition
          flex-1 sm:flex-none
          whitespace-nowrap
        ">
          <Plus className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
          <span className="hidden sm:inline">Add Product</span>
        </button>
      </div>
    </div>
  );
}
