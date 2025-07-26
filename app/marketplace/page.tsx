'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import Filters from '@/components/Filters'
import ProductCard from '@/components/ProductCard'
import api from '@/lib/api'

interface Product {
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

interface Category {
  id: number
  name: string
}

export default function MarketplacePage() {
  const searchParams = useSearchParams()
  
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories')
        setCategories(response.data)
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }
    
    fetchCategories()
  }, [])
  
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        // Build query params from URL search params
        const params = new URLSearchParams()
        
        const search = searchParams.get('search')
        const category = searchParams.get('category')
        const minPrice = searchParams.get('minPrice')
        const maxPrice = searchParams.get('maxPrice')
        const rating = searchParams.get('rating')
        
        if (search) params.append('search', search)
        if (category) params.append('category', category)
        if (minPrice) params.append('min_price', minPrice)
        if (maxPrice) params.append('max_price', maxPrice)
        if (rating) params.append('min_rating', rating)
        
        const response = await api.get(`/products?${params.toString()}`)
        setProducts(response.data)
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch products. Please try again.')
        console.error('Error fetching products:', err)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchProducts()
  }, [searchParams])
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Solar Products Marketplace</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <Filters categories={categories} />
          </div>
          
          {/* Products Grid */}
          <div className="w-full md:w-3/4">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 text-solar-orange animate-spin" />
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Image
                    src="/images/no-results.svg"
                    alt="No products found"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    image={product.image}
                    company={product.company}
                    category={product.category}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}