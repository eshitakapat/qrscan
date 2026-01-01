"use client";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { QrCode } from "lucide-react";

export default function QRCameraScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedResult, setScannedResult] = useState("");

  return (
    <div className="
      bg-primary
      border-b border-subheading
      rounded-xl
      p-8
      flex flex-col
      items-center
    ">
      <h2 className="text-lg font-bold mb-2 text-foreground">
        Camera Scanner
      </h2>

      <p className="text-subheading mb-4">
        Use your device camera to scan QR codes
      </p>

      {isScanning ? (
        <div className="w-full">
          <Scanner
            onScan={(scans: any) => {
              if (typeof scans === "string") {
                setScannedResult(scans);
              } else if (scans && scans) {
                setScannedResult(
                  scans.rawValue ?? scans.data ?? scans.text ?? ""
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
            strokeWidth={1.5}
            className="mb-4 text-accent"
          />

          <span className="mb-2 text-subheading">
            Ready to Scan
          </span>

          <button
            className="
              bg-background
              hover:bg-secondary
              text-secondary-foreground
              rounded
              px-4 py-2
              mb-2
              transition-colors
            "
            onClick={() => setIsScanning(true)}
          >
            Start Camera
          </button>

          <span className="text-subheading">
            Point camera at QR code
          </span>
        </div>
      )}

      {scannedResult && (
        <div className="mt-4 text-accent font-semibold">
          Scanned: {scannedResult}
        </div>
      )}
    </div>
  );
}
