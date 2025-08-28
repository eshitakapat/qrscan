import { 
  Star, 
  Layers, 
  Wrench, 
  Shield, 
  Package, 
  LineChart 
} from "lucide-react"
import  Card  from "@/components/landingPage/Card"

export default function ServicesSection() {
  const services = [
    {
      icon: Star,
      title: "Production and Assembly",
      description: "Details on production processes, assembly, capacity, and product types."
    },
    {
      icon: Layers,
      title: "Custom Manufacturing",
      description: "Custom product creation with design and customization options."
    },
    {
      icon: Wrench,
      title: "Quality Control",
      description: "Procedures and systems in place to ensure high product quality."
    },
    {
      icon: Shield,
      title: "Technology and Innovation",
      description: "Details on the latest manufacturing technologies and ongoing innovations."
    },
    {
      icon: Package,
      title: "Packaging and Logistics",
      description: "Packaging and logistics for shipping to customers and distributors."
    },
    {
      icon: LineChart,
      title: "Consulting Market Research",
      description: "Services to help companies understand market needs and provide strategic advice."
    }
  ]

  return (
    <section className="bg-[#030303] min-h-screen flex items-center justify-center p-8">
      <div>
        <div className="m-6 p-2 rounded-2xl text-center">
            <h1 className="text-6xl text-[#E2F1E7] shadow-2xl">EFFICIENT AND INTIGRATED <br/>INVENTORY SERVICES </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {services.map((service, idx) => (
            <Card key={idx} {...service} />
            ))}
      </div>
      </div>
    </section>
  )
}
