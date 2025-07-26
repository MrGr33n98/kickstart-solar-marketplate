'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/marketplace?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find the Best <span className="solar-gradient-text">Solar Solutions</span> for Your Needs
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Compare top-rated solar products and services from verified providers. 
              Start your journey to sustainable energy today.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex w-full max-w-md mb-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for solar products..."
                  className="pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <Button type="submit" variant="solar" className="ml-2">
                Search
              </Button>
            </form>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-solar-orange">500+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-solar-green">100+</p>
                <p className="text-sm text-gray-600">Companies</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-solar-blue">10k+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-64 md:h-96 animate-float">
              <Image
                src="/images/solar-panels-hero.jpg"
                alt="Solar Panels"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-1/4 -left-4 bg-white p-3 rounded-full shadow-lg">
              <Image
                src="/images/eco-badge.svg"
                alt="Eco Friendly"
                width={40}
                height={40}
              />
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <Image
                src="/images/savings-badge.svg"
                alt="Cost Savings"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,263.46,67.29,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero