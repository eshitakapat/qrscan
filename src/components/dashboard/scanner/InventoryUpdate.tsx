import { Box } from "lucide-react";

export default function InventoryUpdate() {
  return (
    <div className="
      bg-primary
      rounded-xl
      p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
      flex flex-col
      border-b border-subheading
      items-center
    ">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-foreground">
        Inventory Update
      </h2>

      <p className="text-subheading mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base">
        Update stock levels for scanned products
      </p>

      <Box
        size={40}
        strokeWidth={1.5}
        className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-accent flex-shrink-0 md:w-14 md:h-14 lg:w-16 lg:h-16"
      />

      <span className="text-subheading mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base">
        Scan a QR code to update inventory
      </span>

      <span className="text-subheading text-xs sm:text-sm md:text-base">
        Use the camera scanner to detect product QR codes
      </span>
    </div>
  );
}
