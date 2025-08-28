import { LucideIcon } from "lucide-react"

type InfoCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

const Card = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <div className="bg-[#387478] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:z-20 flex flex-col gap-3 group cursor-pointer">
      {/* Icon */}
      <div className="flex justify-between items-start">
        <Icon className="w-6 h-6 text-[#E2F1E7] group-hover:text-[#243642] transition-colors duration-300 " />
        <span className="text--[#E2F1E7] opacity-70 group-hover:opacity-100 transition">↗</span>
      </div>
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#243642]">{title}</h3>
      {/* Description */}
      <p className="text-sm text-[#E2F1E7]">{description}</p>
    </div>
  )
}

export default Card
