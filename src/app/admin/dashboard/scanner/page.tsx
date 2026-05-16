import QRCameraScanner from '@/components/dashboard/scanner/QRCameraScanner';
import InventoryUpdate from '@/components/dashboard/scanner/InventoryUpdate';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">QR Code Scanner</h1>
      <p className="mb-10 text-subheading">Scan product QR codes to update inventory in real-time</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <QRCameraScanner />
        <InventoryUpdate />
      </div>
    </div>
  );
}
