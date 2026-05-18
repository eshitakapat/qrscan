"use client";

import { QrCode, Package } from "lucide-react";

const recentScans = [
  {
    name: "Organic Apples",
    price: "$4.99",
    scanned: "Scanned 2 hours ago",
  },
  {
    name: "Whole Grain Bread",
    price: "$3.49",
    scanned: "Scanned yesterday",
  },
];

export default function CustomerDashboardPage() {
  return (
    <div className="min-h-screen bg-[#021526] px-6 py-10 text-[#E2E2B6]">
      
      {/* Wrapper */}
      <div className="mx-auto max-w-2xl">
        
        {/* Header */}
        <div className="mb-10 text-center">
          
          <h1 className="text-4xl font-bold tracking-tight text-[#E2E2B6]">
            Customer Dashboard
          </h1>

          <p className="mt-3 text-sm text-[#6EACDA]">
            Scan QR codes to check product information
          </p>
        </div>

        {/* Scan Card */}
        <div
          className="
            mb-8
            rounded-3xl
            border border-[#03346E]
            bg-[#021526]
            p-8
            shadow-xl
          "
        >
          
          <h2 className="text-3xl font-semibold text-[#E2E2B6]">
            Scan Product QR Code
          </h2>

          <p className="mt-2 text-sm text-[#6EACDA]">
            Get detailed information about products
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            
            <button
              className="
                flex items-center gap-3
                rounded-2xl
                bg-[#6EACDA]
                px-8 py-4
                text-sm font-semibold
                text-[#021526]
                transition-all duration-300
                hover:scale-105
                hover:opacity-90
              "
            >
              <QrCode size={18} />
              Scan QR Code
            </button>
          </div>
        </div>

        {/* Recent Scans */}
        <div
          className="
            rounded-3xl
            border border-[#03346E]
            bg-[#021526]
            p-8
            shadow-xl
          "
        >
          
          {/* Header */}
          <div className="mb-6">
            
            <h2 className="text-3xl font-semibold text-[#E2E2B6]">
              Recent Scans
            </h2>

            <p className="mt-2 text-sm text-[#6EACDA]">
              Products you've recently viewed
            </p>
          </div>

          {/* Items */}
          <div className="space-y-5">
            
            {recentScans.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-between
                  rounded-2xl
                  border border-[#03346E]
                  bg-[#021526]
                  p-4
                  transition hover:bg-[#03346E]/20
                "
              >
                
                {/* Left */}
                <div className="flex items-center gap-4">
                  
                  {/* Icon */}
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full
                      bg-[#03346E]/40
                    "
                  >
                    <Package
                      size={20}
                      className="text-[#6EACDA]"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-[#E2E2B6]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#6EACDA]">
                      {item.price} • {item.scanned}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <button
                  className="
                    rounded-xl
                    border border-[#03346E]
                    px-4 py-2
                    text-sm font-medium
                    text-[#E2E2B6]
                    transition hover:bg-[#03346E]
                  "
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}