import { LucideIcon } from "lucide-react"

type InfoCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

const Card = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <div className="bg-[#2c482e] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:z-20 flex flex-col gap-3 group cursor-pointer">
      {/* Icon */}
      <div className="flex justify-between items-start">
        <Icon className="w-6 h-6 text-[#f2f2f2] group-hover:text-[#8ba47d] transition-colors duration-300 " />
        <span className="text-[#f2f2f2] opacity-70 group-hover:opacity-100 transition">↗</span>
      </div>
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#f2f2f2]">{title}</h3>
      {/* Description */}
      <p className="text-sm text-[#a6a6a6]">{description}</p>
    </div>
  )
}

export default Card
