"use client";

import {
  QrCode,
  Download,
  Filter,
  SlidersHorizontal,
} from "lucide-react";

const products = [
  {
    id: 4,
    name: "Almond Milk",
    category: "Dairy",
    price: "$3.99",
    stock: 8,
    percentage: 80,
    status: "Low Stock",
  },
  {
    id: 7,
    name: "Chocolate Chip Cookies",
    category: "Snacks",
    price: "$4.49",
    stock: 30,
    percentage: 200,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Free Range Eggs",
    category: "Dairy",
    price: "$5.99",
    stock: 24,
    percentage: 240,
    status: "In Stock",
  },
  {
    id: 8,
    name: "Fresh Salmon",
    category: "Meat",
    price: "$12.99",
    stock: 6,
    percentage: 75,
    status: "Low Stock",
  },
  {
    id: 6,
    name: "Ground Coffee",
    category: "Beverages",
    price: "$8.99",
    stock: 18,
    percentage: 360,
    status: "In Stock",
  },
  {
    id: 1,
    name: "Organic Apples",
    category: "Produce",
    price: "$4.99",
    stock: 45,
    percentage: 450,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Organic Spinach",
    category: "Produce",
    price: "$2.99",
    stock: 15,
    percentage: 188,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Whole Grain Bread",
    category: "Bakery",
    price: "$3.49",
    stock: 12,
    percentage: 80,
    status: "Low Stock",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#202940] p-6 text-[#CAAA98]">
      
      {/* Container */}
      <div className="rounded-3xl border border-[#4B4038] bg-[#202940] shadow-2xl">
        
        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-[#4B4038] p-6 md:flex-row md:items-center md:justify-between">
          
          <div>
            <h1 className="text-3xl font-bold text-[#CAAA98]">
              Products
            </h1>

            <p className="mt-1 text-sm text-[#9A8678]">
              View and manage inventory products
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            
            <button
              className="
                flex items-center gap-2
                rounded-xl
                bg-[#CAAA98]
                px-4 py-2.5
                text-sm font-medium
                text-[#202940]
                transition hover:opacity-90
              "
            >
              <QrCode size={16} />
              Scan QR Code
            </button>

            <button
              className="
                flex items-center gap-2
                rounded-xl
                border border-[#4B4038]
                bg-[#202940]
                px-4 py-2.5
                text-sm
                text-[#CAAA98]
                transition hover:bg-[#4B4038]
              "
            >
              <Download size={16} />
              Export
            </button>

            <button
              className="
                flex items-center gap-2
                rounded-xl
                border border-[#4B4038]
                bg-[#202940]
                px-4 py-2.5
                text-sm
                text-[#CAAA98]
                transition hover:bg-[#4B4038]
              "
            >
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse">
            
            {/* Table Head */}
            <thead className="bg-[#4B4038]/30">
              <tr className="border-b border-[#4B4038] text-left">
                {[
                  "ID",
                  "Name",
                  "Category",
                  "Price",
                  "Stock",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-4 text-sm font-semibold text-[#CAAA98]"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="
                    border-b border-[#4B4038]/60
                    transition hover:bg-[#4B4038]/10
                  "
                >
                  {/* ID */}
                  <td className="px-6 py-5 text-sm text-[#CAAA98]">
                    {product.id}
                  </td>

                  {/* Name */}
                  <td className="px-6 py-5 font-medium text-[#CAAA98]">
                    {product.name}
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5 text-sm text-[#9A8678]">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 text-sm text-[#CAAA98]">
                    {product.price}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5">
                    <div className="space-y-2">
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#CAAA98]">
                          {product.stock} units
                        </span>

                        <span className="text-[#9A8678]">
                          {product.percentage}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[#4B4038]">
                        <div
                          className="h-full rounded-full bg-[#CAAA98]"
                          style={{
                            width: `${Math.min(
                              product.percentage,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-xs font-medium
                        ${
                          product.status === "In Stock"
                            ? "bg-[#CAAA98]/20 text-[#CAAA98]"
                            : "bg-[#9A8678]/20 text-[#9A8678]"
                        }
                      `}
                    >
                      {product.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <button
                      className="
                        rounded-lg
                        border border-[#4B4038]
                        p-2
                        text-[#CAAA98]
                        transition hover:bg-[#4B4038]
                      "
                    >
                      <SlidersHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4 p-6 text-sm text-[#9A8678] md:flex-row md:items-center md:justify-between">
          
          <p>
            Showing 1 to 8 of 8 products
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            
            <button className="rounded-lg border border-[#4B4038] px-3 py-1.5 hover:bg-[#4B4038]">
              Previous
            </button>

            <button className="rounded-lg bg-[#CAAA98] px-3 py-1.5 text-[#202940]">
              1
            </button>

            <button className="rounded-lg border border-[#4B4038] px-3 py-1.5 hover:bg-[#4B4038]">
              2
            </button>

            <button className="rounded-lg border border-[#4B4038] px-3 py-1.5 hover:bg-[#4B4038]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}