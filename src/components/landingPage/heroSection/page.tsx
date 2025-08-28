import Image, { StaticImageData } from "next/image"

type BentoCardProps = {
  src: StaticImageData | string
  alt: string
}

const BentoCard = ({ src, alt }: BentoCardProps) => {
  return (
    <div className="relative w-80 h-[22rem]"> {/* Bigger card */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-2xl object-center"
      />
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center flex-col min-h-screen bg-[#030303] px-4 py-12">
      <h1 className="text-lg text-[#E2F1E7] m-2 p-2">RetailTracker</h1>
      <div className="relative flex items-center justify-center">
        
        {/* Left Card (hidden on small screens) */}
        <div className="hidden md:block absolute left-0 transform -translate-x-40 z-0 transition-transform duration-500 ease-in-out hover:scale-105 hover:z-20 ">
          <div className="w-64 h-[22rem] bg-white rounded-2xl shadow-md shadow-[#629584] flex items-center justify-center">
            <BentoCard
              src="/left.png"
              alt="Image can not be loaded"
            />
          </div>
        </div>

        {/* Center Card */}
        <div className="relative z-10 transition-transform duration-500 ease-in-out hover:scale-105 hover:z-20">
          <div className="w-80 h-[28rem] bg-white rounded-2xl shadow-md shadow-[#629584] flex items-center justify-center my-12 md:my-0">
            <Image
              src="/Qr.png"
              alt="Image not found"
              fill
              className="object-cover rounded-2xl object-center"
            />
          </div>
        </div>

        {/* Right Card (hidden on small screens) */}
        <div className="hidden md:block absolute right-0 transform translate-x-40 z-0 transition-transform duration-500 ease-in-out hover:scale-105 hover:z-20">
          <div className="w-64 h-[22rem] bg-white rounded-2xl shadow-md shadow-[#629584] flex items-center justify-center">
            <BentoCard
              src="/right.png"
              alt="Image can not be loaded"
            />
          </div>
        </div>
      </div>

      {/* === Text & Buttons Under Cards ===
      <div className="mt-6 p-2"> 
        <div className=" p-2 bg-[#387478] rounded-2xl"> 
          <p className="font-xl bg-[387478] text-[#030303] text-center"> 
            An AI-powered inventory management website helps track stock and predict demand.<br/>
            It offers smart insights with real-time alerts to prevent shortages or excess.<br/> 
            This makes inventory control faster, easier, and more efficient for businesses.</p> 
        </div> 
        <div className="flex justify-center space-x-8 p-2 m-2"> 
          <button className="bg-[#629584] text-[#030303] w-48 h-10 rounded-md p-2 pl-4 pr-4 hover:font-medium hover:bg-[#387478] hover:cursor-pointer">
            <a className="hover:underline text-[#030303]">Try Now</a> 
          </button> 
          <button className="bg-[#629584] text-[#030303] w-48 h-10 rounded-md p-2 pl-4 pr-4 hover:font-medium hover:bg-[#387478] hover:cursor-pointer">
            <a className="hover:underline text-[#030303]">Know More</a> 
          </button> 
        </div>
      </div> */}

      {/* === Text & Buttons === */}
      <div className="mt-6 p-4 w-full max-w-3xl">
        {/* Text Box */}
        <div className="p-4 bg-[#387478] rounded-2xl text-center"> 
          <p className="text-[#030303] text-sm sm:text-base md:text-lg leading-relaxed">
            An AI-powered inventory management website helps track stock and predict demand.<br/>
            It offers smart insights with real-time alerts to prevent shortages or excess.<br/> 
            This makes inventory control faster, easier, and more efficient for businesses.
          </p> 
        </div> 

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 p-4">
          <button className="bg-[#629584] text-[#030303] w-full sm:w-40 h-10 rounded-md hover:font-medium hover:bg-[#387478] hover:cursor-pointer transition-colors">
            Try Now
          </button> 
          <button className="bg-[#629584] text-[#030303] w-full sm:w-40 h-10 rounded-md hover:font-medium hover:bg-[#387478] hover:cursor-pointer transition-colors">
            Know More
          </button> 
        </div>
      </div>

    </section>
  )
}
