import Navbar from "@/components/landingPage/navBar/page"
import HeroSection from "@/components/landingPage/heroSection/page"
import ServicesSection from "@/components/landingPage/keyFeatures/page"
import Footer from "@/components/landingPage/footer/page"
import HowItWorksSection from "@/components/landingPage/howItWorks/page"
import TestimonialsSection from "@/components/landingPage/testimonials/page"


export default function HomePage() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection/>
      <TestimonialsSection/>
      <Footer/>
    </main>
  )
}
