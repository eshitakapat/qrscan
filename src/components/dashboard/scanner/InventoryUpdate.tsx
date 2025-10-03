import { Box } from "lucide-react";

export default function InventoryUpdate() {
  return (
    <div className="bg-[#2c482e] rounded-xl p-8 flex flex-col border-b border-[#a6a6a6] items-center">
      <h2 className="text-lg font-bold mb-2 text-[#f2f2f2]">Inventory Update</h2>
      <p className="text-[#a6a6a6] mb-4">Update stock levels for scanned products</p>
      <Box
        size={52}
        color="#8ba47d" // muted green accent
        strokeWidth={1.5}
        className="mb-4"
      />
      <span className="text-[#e2f1e7] mb-2">Scan a QR code to update inventory</span>
      <span className="text-[#a6a6a6]">
        Use the camera scanner to detect product QR codes
      </span>
    </div>
  );
}
