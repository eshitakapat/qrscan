import { QrCode, Pencil } from "lucide-react";

const products = [
  {
    name: "iPhone 15 Pro",
    category: "Electronics",
    stock: 25,
    minStock: 10,
    price: "$999",
    status: "In Stock",
  },
  {
    name: "Samsung Galaxy S24",
    category: "Electronics",
    stock: 8,
    minStock: 15,
    price: "$899",
    status: "Low Stock",
  },
  {
    name: "MacBook Air M3",
    category: "Electronics",
    stock: 12,
    minStock: 5,
    price: "$1299",
    status: "In Stock",
  },
  {
    name: "AirPods Pro",
    category: "Accessories",
    stock: 45,
    minStock: 20,
    price: "$249",
    status: "In Stock",
  },
  {
    name: "iPad Pro",
    category: "Electronics",
    stock: 3,
    minStock: 8,
    price: "$1099",
    status: "Low Stock",
  },
];

interface StatusBadgeProps {
  status: string;
}

function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "In Stock") {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-muted text-subheading">
        In Stock
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-muted text-subheading">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        className="mr-1 text-subheading"
      >
        <path
          d="M12 9v4m0 4h.01M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.586a2 2 0 0 1 1.414.586l6.414 6.414A2 2 0 0 1 21 11.414V19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Low Stock
    </span>
  );
}

export default function ProductTable() {
  return (
    /* OUTER CONTAINER */
    <div className="bg-primary rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-bold text-foreground mb-1">
        Products (5)
      </h2>
      <p className="text-subheading mb-6 text-sm">
        Manage and monitor your product inventory
      </p>

      {/* INNER TABLE CONTAINER */}
      <div className="bg-[#54734e] rounded-xl border border-secondary overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-foreground text-md bold border-b ">
              <th className="px-6 py-4 font-normal">Product</th>
              <th className="px-6 py-4 font-normal">Category</th>
              <th className="px-6 py-4 font-normal">Stock</th>
              <th className="px-6 py-4 font-normal">MinStock</th>
              <th className="px-6 py-4 font-normal">Price</th>
              <th className="px-6 py-4 font-normal">Status</th>
              <th className="px-6 py-4 font-normal">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, idx) => (
              <tr
                key={product.name}
                className={
                  idx !== products.length - 1
                    ? "border-b border-background"
                    : ""
                }
              >
                <td className="px-6 py-4 font-medium text-foreground">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-foreground">
                  {product.category}
                </td>
                <td className="px-6 py-4 text-foreground">
                  {product.stock}
                </td>
                <td className="px-6 py-4 text-foreground">
                  {product.minStock}
                </td>
                <td className="px-6 py-4 text-foreground">
                  {product.price}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={product.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {/* ACTION BUTTONS */}
                    <button
                      className="p-2 rounded-md border transition"
                      style={{
                        backgroundColor: "#172a1d",
                        borderColor: "#172a1d",
                      }}
                    >
                      <QrCode className="w-4 h-4 text-subheading" />
                    </button>

                    <button
                      className="p-2 rounded-md border transition"
                      style={{
                        backgroundColor: "#172a1d",
                        borderColor: "#172a1d",
                      }}
                    >
                      <Pencil className="w-4 h-4 text-subheading" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
