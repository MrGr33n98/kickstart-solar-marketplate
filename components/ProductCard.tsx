'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviewCount: number
  image: string
  company: {
    id: number
    name: string
    logo: string
  }
  category: string
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  reviewCount,
  image,
  company,
  category
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-solar-orange text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      {/* Product Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Link href={`/companies/${company.id}`} className="flex items-center">
            <div className="relative h-6 w-6 mr-2">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-xs text-gray-600">{company.name}</span>
          </Link>
          
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-solar-orange font-bold">
            ${price.toLocaleString()}
          </div>
          
          <Link href={`/products/${id}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`group ${isHovered ? 'text-solar-orange' : 'text-gray-600'}`}
            >
              View Details
              <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${isHovered ? 'transform translate-x-1 text-solar-orange' : ''}`} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard