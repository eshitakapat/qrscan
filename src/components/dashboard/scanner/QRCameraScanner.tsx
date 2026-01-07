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
      p-3 sm:p-4 md:p-6 lg:p-10 xl:p-12
      flex flex-col
      items-center
      w-[95%] sm:w-full
      mx-auto
    ">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-foreground">
        Camera Scanner
      </h2>

      <p className="text-subheading mb-2.5 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base">
        Scan QR codes with camera
      </p>

      {isScanning ? (
        <div className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[500px]">
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
            size={40}
            strokeWidth={1.5}
            className="mb-2.5 sm:mb-4 md:mb-5 lg:mb-6 text-accent flex-shrink-0 md:w-16 md:h-16 lg:w-20 lg:h-20"
          />

          <span className="mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-subheading text-xs sm:text-sm md:text-base">
            Ready to Scan
          </span>

          <button
            className="
              bg-background
              hover:bg-secondary
              text-secondary-foreground
              rounded
              px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-3
              mb-1.5 sm:mb-2 md:mb-3 lg:mb-4
              transition-colors
              text-xs sm:text-sm md:text-base lg:text-lg
              font-medium
            "
            onClick={() => setIsScanning(true)}
          >
            Start Camera
          </button>

          <span className="text-subheading text-xs sm:text-sm md:text-base">
            Point camera at QR code
          </span>
        </div>
      )}

      {scannedResult && (
        <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-accent font-semibold text-xs sm:text-sm md:text-base break-all">
          Scanned: {scannedResult}
        </div>
      )}
    </div>
  );
}
