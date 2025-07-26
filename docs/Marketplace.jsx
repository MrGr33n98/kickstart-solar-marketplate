import { useState } from 'react'
import Filters from './Filters'
import CompanyCard from './CompanyCard'
import ProductCard from './ProductCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X } from 'lucide-react'

const Marketplace = ({ onCompanyClick }) => {
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('relevance')
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({})
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock data for companies
  const mockCompanies = [
    {
      id: 1,
      name: 'SolarTech Brasil',
      rating: 5,
      reviewCount: 127,
      location: 'São Paulo, SP',
      yearsInMarket: 8,
      projectsCompleted: 450,
      certifications: 3,
      segments: ['Residencial', 'Comercial'],
      type: 'empresa'
    },
    {
      id: 2,
      name: 'EcoEnergia Solar',
      rating: 4,
      reviewCount: 89,
      location: 'Rio de Janeiro, RJ',
      yearsInMarket: 5,
      projectsCompleted: 280,
      certifications: 2,
      segments: ['Residencial', 'Industrial'],
      type: 'empresa'
    },
    {
      id: 3,
      name: 'GreenPower Solutions',
      rating: 5,
      reviewCount: 203,
      location: 'Belo Horizonte, MG',
      yearsInMarket: 12,
      projectsCompleted: 680,
      certifications: 5,
      segments: ['Comercial', 'Industrial', 'Rural'],
      type: 'empresa'
    }
  ]

  // Mock data for products
  const mockProducts = [
    {
      id: 1,
      name: 'Painel Solar Monocristalino 550W',
      brand: 'Canadian Solar',
      rating: 5,
      reviewCount: 45,
      power: 550,
      efficiency: 21.2,
      warranty: 25,
      price: 890.00,
      originalPrice: 1200.00,
      discount: 25,
      inStock: true,
      certified: true,
      tags: ['Alta Eficiência', 'Monocristalino'],
      type: 'produto'
    },
    {
      id: 2,
      name: 'Inversor Solar 5kW String',
      brand: 'WEG',
      rating: 4,
      reviewCount: 32,
      power: 5000,
      efficiency: 97.5,
      warranty: 10,
      price: 2450.00,
      inStock: true,
      certified: true,
      tags: ['String', 'Monofásico'],
      type: 'produto'
    },
    {
      id: 3,
      name: 'Kit Solar Residencial 5kWp',
      brand: 'SolarTech',
      rating: 5,
      reviewCount: 78,
      power: 5000,
      efficiency: 20.8,
      warranty: 25,
      price: 18900.00,
      originalPrice: 22000.00,
      discount: 15,
      inStock: true,
      certified: true,
      tags: ['Kit Completo', 'Residencial'],
      type: 'produto'
    }
  ]

  const itemsPerPage = 9
  const totalPages = Math.ceil(results.length / itemsPerPage)

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      const allResults = [...mockCompanies, ...mockProducts]
      let filteredResults = allResults

      // Apply filters
      if (filters.type) {
        filteredResults = filteredResults.filter(item => item.type === filters.type)
      }
      if (filters.rating) {
        filteredResults = filteredResults.filter(item => item.rating >= parseInt(filters.rating))
      }
      if (filters.segment) {
        filteredResults = filteredResults.filter(item => 
          item.segments?.some(segment => 
            segment.toLowerCase().includes(filters.segment.toLowerCase())
          )
        )
      }

      // Apply sorting
      switch (sortBy) {
        case 'rating':
          filteredResults.sort((a, b) => b.rating - a.rating)
          break
        case 'price_low':
          filteredResults.sort((a, b) => (a.price || 0) - (b.price || 0))
          break
        case 'price_high':
          filteredResults.sort((a, b) => (b.price || 0) - (a.price || 0))
          break
        default:
          // Keep original order for relevance
          break
      }

      setResults(filteredResults)
      setLoading(false)
      setCurrentPage(1)
    }, 500)
  }, [filters, sortBy])

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters)
  }

  const getCurrentPageResults = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return results.slice(startIndex, endIndex)
  }

  const renderResultCard = (item) => {
    if (item.type === 'empresa') {
      return <CompanyCard key={`company-${item.id}`} company={item} onProfileClick={onCompanyClick} />
    } else {
      return <ProductCard key={`product-${item.id}`} product={item} />
    }
  }

  return (
    <section id="marketplace" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Marketplace de <span className="solar-gradient-text">Energia Solar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre as melhores empresas e produtos de energia solar do Brasil. 
            Compare preços, avaliações e escolha a solução ideal para você.
          </p>
        </div>

        {/* Filters */}
        <Filters onFiltersChange={handleFiltersChange} />

        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-700 font-medium">
              {results.length} resultados encontrados
            </span>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Ordenar por:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevância</SelectItem>
                <SelectItem value="rating">Melhor Avaliação</SelectItem>
                <SelectItem value="price_low">Menor Preço</SelectItem>
                <SelectItem value="price_high">Maior Preço</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {getCurrentPageResults().map(renderResultCard)}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Anterior
                </Button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-orange-500 hover:bg-orange-600" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Próxima
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Marketplace

