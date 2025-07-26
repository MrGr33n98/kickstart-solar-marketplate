import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Sun, Battery, Zap, Leaf } from 'lucide-react'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Solar <span className="solar-gradient-text">Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <Link href="/marketplace?category=panels" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-solar-orange/10 rounded-full p-4 inline-flex mb-4">
                  <Sun className="h-8 w-8 text-solar-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Solar Panels</h3>
                <p className="text-gray-600 mb-4">High-efficiency panels for residential and commercial use</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Panels
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            {/* Category 2 */}
            <Link href="/marketplace?category=batteries" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-solar-green/10 rounded-full p-4 inline-flex mb-4">
                  <Battery className="h-8 w-8 text-solar-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Storage</h3>
                <p className="text-gray-600 mb-4">Battery solutions to store and manage your solar energy</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Storage
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            {/* Category 3 */}
            <Link href="/marketplace?category=inverters" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-solar-blue/10 rounded-full p-4 inline-flex mb-4">
                  <Zap className="h-8 w-8 text-solar-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inverters</h3>
                <p className="text-gray-600 mb-4">Convert DC power from solar panels to usable AC electricity</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Inverters
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            {/* Category 4 */}
            <Link href="/marketplace?category=accessories" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                  <Leaf className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                <p className="text-gray-600 mb-4">Mounting systems, monitoring tools, and other accessories</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Accessories
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/solar-installation.jpg"
                  alt="Solar Installation"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose <span className="solar-gradient-text">SolarConnect</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We connect you with the best solar solutions tailored to your needs. 
                Our platform makes it easy to compare products, read reviews, and make informed decisions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Verified Providers</h3>
                    <p className="text-gray-600 text-sm">All companies and products are thoroughly vetted</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Transparent Reviews</h3>
                    <p className="text-gray-600 text-sm">Authentic customer reviews and ratings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p className="text-gray-600 text-sm">Guidance from solar energy specialists</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Price Comparison</h3>
                    <p className="text-gray-600 text-sm">Find the best deals and save money</p>
                  </div>
                </li>
              </ul>
              
              <Button variant="solar" className="mt-8">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-solar-orange to-solar-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar Energy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners and businesses who have already made the switch to clean, renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" className="bg-white text-solar-orange hover:bg-gray-100">
              Browse Products
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Find Installers
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}