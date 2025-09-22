import {Box} from "lucide-react"

export default function InventoryUpdate() {
  return (
    <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2 text-white">Inventory Update</h2>
      <p className="text-gray-300 mb-4">Update stock levels for scanned products</p>
      <Box size={52} color="#A3A3A3" strokeWidth={1.5} className="mb-4" />
      <span className="text-white mb-2">Scan a QR code to update inventory</span>
      <span className="text-gray-400">Use the camera scanner to detect product QR codes</span>
    </div>
  );
}
