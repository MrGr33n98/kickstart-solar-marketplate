'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Sliders, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FiltersProps {
  onFiltersChange?: (filters: FilterState) => void
  categories?: { id: number; name: string }[]
}

interface FilterState {
  search: string
  category: string
  minPrice: string
  maxPrice: string
  rating: string
}

const Filters = ({ onFiltersChange, categories = [] }: FiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    rating: searchParams.get('rating') || '',
  })

  useEffect(() => {
    // Update filters when URL search params change
    setFilters({
      search: searchParams.get('search') || '',
      category: searchParams.get('category') || '',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      rating: searchParams.get('rating') || '',
    })
  }, [searchParams])

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    
    if (onFiltersChange) {
      onFiltersChange(newFilters)
    }
  }

  const applyFilters = () => {
    const params = new URLSearchParams()
    
    if (filters.search) params.set('search', filters.search)
    if (filters.category) params.set('category', filters.category)
    if (filters.minPrice) params.set('minPrice', filters.minPrice)
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice)
    if (filters.rating) params.set('rating', filters.rating)
    
    router.push(`/marketplace?${params.toString()}`)
    setIsOpen(false)
  }

  const resetFilters = () => {
    setFilters({
      search: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      rating: '',
    })
    
    router.push('/marketplace')
    setIsOpen(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden">
          <Sliders className="h-4 w-4 mr-2" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      <div className={`space-y-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {/* Search */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categories
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <button
                  className="flex items-center text-sm text-gray-700 hover:text-solar-orange"
                  onClick={() => handleFilterChange('category', category.name)}
                >
                  <div className={`w-4 h-4 border rounded-sm mr-2 flex items-center justify-center ${
                    filters.category === category.name ? 'bg-solar-orange border-solar-orange' : 'border-gray-300'
                  }`}>
                    {filters.category === category.name && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  {category.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="w-1/2"
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="w-1/2"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Rating
          </label>
          <div className="flex space-x-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  Number(filters.rating) === rating 
                    ? 'bg-solar-orange text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleFilterChange('rating', rating.toString())}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            variant="solar" 
            className="w-full"
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={resetFilters}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Filters