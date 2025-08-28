import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#030303] text-gray-300 py-10 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white">RetailTrack</h2>
          <p className="mt-3 text-sm text-gray-400">
            Modern inventory management for small retail businesses. 
            Streamline your operations with QR code-based tracking.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-[#629584]">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Github className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-[#629584] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#629584] hover:underline">About Us</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">Features</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">Blog</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-[#629584] mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#629584] hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-[#629584] hover:underline">GDPR Compliance</a></li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="font-semibold text-[#629584] mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates and features.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="p-2 w-full rounded-md bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="bg-[#629584] text-black px-4 rounded-r-md hover:bg-[#387478]">
              Subscribe
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@retailtrack.com</p>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567</p>
            <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Retail Street, Commerce City</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-6">
        <p>© 2025 RetailTrack. All rights reserved.</p>
        <p>Designed with ♥ for small businesses</p>
      </div>
    </footer>
  )
}
