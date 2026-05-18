"use client";

import { useState } from "react";

import {
  QrCode,
  Search,
  Camera,
  History,
} from "lucide-react";

export default function ScannerPage() {
  const [scanMode, setScanMode] = useState("camera");

  return (
    <div className="min-h-screen bg-[#202940] text-[#CAAA98]">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#CAAA98]">
          QR Code Scanner
        </h1>

        <p className="mt-2 text-sm text-[#9A8678]">
          Scan product QR codes to update inventory
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex items-center gap-3">
        
        <button
          className="
            rounded-xl
            bg-[#4B4038]
            px-5 py-2.5
            text-sm font-medium
            text-[#CAAA98]
            transition hover:bg-[#9A8678]
            hover:text-[#202940]
          "
        >
          Scanner
        </button>

        <button
          className="
            rounded-xl
            border border-[#4B4038]
            bg-[#202940]
            px-5 py-2.5
            text-sm font-medium
            text-[#9A8678]
            transition hover:bg-[#4B4038]
            hover:text-[#CAAA98]
          "
        >
          Scan History
        </button>
      </div>

      {/* Scan Mode */}
      <div
        className="
          mb-8
          rounded-3xl
          border border-[#4B4038]
          bg-[#202940]
          p-6
          shadow-xl
        "
      >
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#CAAA98]">
            Scan Mode
          </h2>

          <p className="mt-1 text-sm text-[#9A8678]">
            Choose how to identify products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          
          {/* Camera Scanner */}
          <button
            onClick={() => setScanMode("camera")}
            className={`
              flex items-center justify-center gap-3
              rounded-2xl
              border
              px-5 py-4
              text-sm font-medium
              transition-all duration-300

              ${
                scanMode === "camera"
                  ? "border-[#CAAA98] bg-[#CAAA98] text-[#202940]"
                  : "border-[#4B4038] bg-[#202940] text-[#CAAA98] hover:bg-[#4B4038]"
              }
            `}
          >
            <Camera size={18} />
            Camera Scanner
          </button>

          {/* Manual Entry */}
          <button
            onClick={() => setScanMode("manual")}
            className={`
              flex items-center justify-center gap-3
              rounded-2xl
              border
              px-5 py-4
              text-sm font-medium
              transition-all duration-300

              ${
                scanMode === "manual"
                  ? "border-[#CAAA98] bg-[#CAAA98] text-[#202940]"
                  : "border-[#4B4038] bg-[#202940] text-[#CAAA98] hover:bg-[#4B4038]"
              }
            `}
          >
            <Search size={18} />
            Manual Entry
          </button>
        </div>
      </div>

      {/* Scanner Section */}
      <div
        className="
          rounded-3xl
          border border-[#4B4038]
          bg-[#4B4038]
          p-6
          shadow-xl
        "
      >
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#CAAA98]">
            QR Code Scanner
          </h2>

          <p className="mt-2 text-sm text-[#9A8678]">
            Scan a product QR code to update inventory
          </p>
        </div>

        {/* Scanner Box */}
        <div
          className="
            flex min-h-[350px] flex-col items-center justify-center
            rounded-3xl
            border border-dashed border-[#4B4038]
            bg-[#202940]
          "
        >
          
          {/* Scanner UI */}
          <div
            className="
              mb-8
              flex h-28 w-28 items-center justify-center
              rounded-full
              border border-[#4B4038]
              bg-[#4B4038]/30
            "
          >
            <QrCode size={50} className="text-[#CAAA98]" />
          </div>

          {/* Start Scanner */}
          <button
            className="
              flex items-center gap-3
              rounded-2xl
              bg-[#CAAA98]
              px-8 py-4
              text-sm font-semibold
              text-[#202940]
              transition-all duration-300
              hover:scale-105
              hover:opacity-90
            "
          >
            <Camera size={18} />
            Start Scanner
          </button>

          {/* Hint */}
          <p className="mt-6 text-sm text-[#9A8678]">
            Position the QR code inside the scanner frame
          </p>
        </div>
      </div>

      {/* History Section
      <div
        className="
          mt-8
          rounded-3xl
          border border-[#4B4038]
          bg-[#202940]
          p-6
          shadow-xl
        "
      >
        
        <div className="mb-6 flex items-center gap-3">
          <History className="text-[#CAAA98]" />

          <h2 className="text-2xl font-semibold text-[#CAAA98]">
            Recent Scans
          </h2>
        </div>

        <div className="space-y-4">
          
          {[
            {
              product: "Organic Apples",
              code: "#PRD-001",
              time: "2 mins ago",
            },
            {
              product: "Almond Milk",
              code: "#PRD-014",
              time: "15 mins ago",
            },
            {
              product: "Whole Grain Bread",
              code: "#PRD-032",
              time: "1 hour ago",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                flex items-center justify-between
                rounded-2xl
                border border-[#4B4038]
                bg-[#202940]
                p-4
                transition hover:bg-[#4B4038]/20
              "
            >
              
              <div>
                <h3 className="font-medium text-[#CAAA98]">
                  {item.product}
                </h3>

                <p className="mt-1 text-sm text-[#9A8678]">
                  {item.code}
                </p>
              </div>

              <span className="text-sm text-[#9A8678]">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}