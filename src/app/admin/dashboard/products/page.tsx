import ProductToolbar from "@/components/dashboard/products/UpperSection"
import ProductTable from "@/components/dashboard/products/LowerSection"
export default function ProductPage() {
  return (
    <div  className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-foreground mb-2">Product Management</h1>
      <p className="text-sm text-subheading mb-8">Manage your inventory products and stock levels</p>
      <ProductToolbar />
      <ProductTable/>
    </div>
  )
}
