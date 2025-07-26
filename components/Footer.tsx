import Link from 'next/link'
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-solar-orange mr-2" />
              <span className="text-xl font-bold solar-gradient-text">SolarConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting you with the best solar energy solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-solar-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-solar-orange">
                  Marketplace
                </Link></li>
              <li>
                <Link href="/companies" className="text-gray-400 hover:text-solar-orange">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-solar-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-solar-orange">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace?category=panels" className="text-gray-400 hover:text-solar-orange">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=batteries" className="text-gray-400 hover:text-solar-orange">
                  Energy Storage
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=inverters" className="text-gray-400 hover:text-solar-orange">
                  Inverters
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=installation" className="text-gray-400 hover:text-solar-orange">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=maintenance" className="text-gray-400 hover:text-solar-orange">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-solar-orange mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Solar Street, Green City, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-solar-orange mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-solar-orange mr-2" />
                <span className="text-gray-400">info@solarconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SolarConnect. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-solar-orange text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-solar-orange text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-solar-orange text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer