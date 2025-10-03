"use client"
import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { QrCode } from 'lucide-react';

export default function QRCameraScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState('');

  return (
    <div className="bg-[#2c482e] border-b border-[#a6a6a6] rounded-xl p-8 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2 text-[#f2f2f2]">Camera Scanner</h2>
      <p className="text-[#a6a6a6] mb-4">Use your device camera to scan QR codes</p>
      {isScanning ? (
        <div className="w-full">
          <Scanner
            onScan={(scans: any) => {
              if (typeof scans === 'string') {
                setScannedResult(scans);
              } else if (scans && scans) {
                setScannedResult(
                  scans.rawValue ?? scans.data ?? scans.text ?? ''
                );
              }
            }}
            onError={(err) => console.error(err)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <QrCode
            size={52}
            color="#8ba47d" // accent green
            strokeWidth={1.5}
            className="mb-4"
          />
          <span className="mb-2 text-[#e2f1e7]">Ready to Scan</span>
          <button
            className="bg-[#54734e] hover:bg-[#486b43] text-[#f2f2f2] rounded px-4 py-2 mb-2 transition-colors"
            onClick={() => setIsScanning(true)}
          >
            Start Camera
          </button>
          <span className="text-[#a6a6a6]">Point camera at QR code</span>
        </div>
      )}
      {scannedResult && (
        <div className="mt-4 text-[#33cc33] font-semibold">
          Scanned: {scannedResult}
        </div>
      )}
    </div>
  );
}
