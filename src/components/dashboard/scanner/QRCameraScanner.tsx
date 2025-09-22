"use client"
import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { QrCode } from 'lucide-react';

export default function QRCameraScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState('');

  return (
    <div className="bg-gray-900 rounded-xl p-8 flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2 text-white">Camera Scanner</h2>
      <p className="text-gray-300 mb-4">Use your device camera to scan QR codes</p>
      {isScanning ? (
         <div className="w-full">
          <Scanner
          onScan={(scans: any) => {
            // 'scans' could be a string or object depending on version
            if (typeof scans === 'string') {
              setScannedResult(scans);
            } else if (scans && scans) {
              // Try common property keys
              setScannedResult(
                scans.rawValue ?? scans.data ?? scans.text ?? ''
              );
            }
          }}
          onError={err => console.error(err)}
         
        />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <QrCode size={52} color="#A3A3A3" strokeWidth={1.5} className="mb-4" />

          <span className="mb-2 text-white">Ready to Scan</span>
          <button
            className="bg-blue-600 text-white rounded px-4 py-2 mb-2"
            onClick={() => setIsScanning(true)}
          >
            Start Camera
          </button>
          <span className="text-gray-400">Point camera at QR code</span>
        </div>
      )}
      {scannedResult && (
        <div className="mt-4 text-green-400">Scanned: {scannedResult}</div>
      )}
    </div>
  );
}
