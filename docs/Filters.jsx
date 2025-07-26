import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Filter, MapPin, Building, Star, X } from 'lucide-react'

const Filters = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    type: '',
    state: '',
    city: '',
    segment: '',
    rating: ''
  })

  const [activeFilters, setActiveFilters] = useState([])

  const estados = [
    'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 
    'Rio Grande do Sul', 'Pernambuco', 'Ceará', 'Pará', 'Santa Catarina'
  ]

  const cidades = {
    'São Paulo': ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto', 'Sorocaba'],
    'Rio de Janeiro': ['Rio de Janeiro', 'Niterói', 'Petrópolis', 'Nova Iguaçu', 'Campos'],
    'Minas Gerais': ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim']
  }

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    
    // Update active filters
    const newActiveFilters = Object.entries(newFilters)
      .filter(([_, val]) => val !== '')
      .map(([key, val]) => ({ key, value: val }))
    
    setActiveFilters(newActiveFilters)
    
    if (onFiltersChange) {
      onFiltersChange(newFilters)
    }
  }

  const removeFilter = (key) => {
    handleFilterChange(key, '')
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      type: '',
      state: '',
      city: '',
      segment: '',
      rating: ''
    }
    setFilters(clearedFilters)
    setActiveFilters([])
    
    if (onFiltersChange) {
      onFiltersChange(clearedFilters)
    }
  }

  const getFilterLabel = (key, value) => {
    const labels = {
      type: { empresa: 'Empresa', produto: 'Produto' },
      state: value,
      city: value,
      segment: { 
        residencial: 'Residencial', 
        comercial: 'Comercial', 
        industrial: 'Industrial',
        rural: 'Rural'
      },
      rating: `${value}+ estrelas`
    }
    return labels[key][value] || labels[key] || value
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-6">
        <Filter className="w-5 h-5 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="empresa">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Empresa
                </div>
              </SelectItem>
              <SelectItem value="produto">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Produto
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* State Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
          <Select value={filters.state} onValueChange={(value) => handleFilterChange('state', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar estado" />
            </SelectTrigger>
            <SelectContent>
              {estados.map((estado) => (
                <SelectItem key={estado} value={estado}>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {estado}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
          <Select 
            value={filters.city} 
            onValueChange={(value) => handleFilterChange('city', value)}
            disabled={!filters.state}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecionar cidade" />
            </SelectTrigger>
            <SelectContent>
              {filters.state && cidades[filters.state]?.map((cidade) => (
                <SelectItem key={cidade} value={cidade}>
                  {cidade}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Segment Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Segmento</label>
          <Select value={filters.segment} onValueChange={(value) => handleFilterChange('segment', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecionar segmento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residencial">Residencial</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Avaliação</label>
          <Select value={filters.rating} onValueChange={(value) => handleFilterChange('rating', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Mínimo de estrelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  5 estrelas
                </div>
              </SelectItem>
              <SelectItem value="4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  4+ estrelas
                </div>
              </SelectItem>
              <SelectItem value="3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  3+ estrelas
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Filtros ativos:</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters}
              className="text-gray-500 hover:text-gray-700"
            >
              Limpar todos
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map(({ key, value }) => (
              <Badge 
                key={key} 
                variant="secondary" 
                className="bg-orange-100 text-orange-800 hover:bg-orange-200"
              >
                {getFilterLabel(key, value)}
                <button
                  onClick={() => removeFilter(key)}
                  className="ml-2 hover:text-orange-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Apply Filters Button */}
      <div className="flex justify-end">
        <Button 
          className="bg-green-500 hover:bg-green-600 text-white px-6"
          disabled={activeFilters.length === 0}
        >
          Aplicar Filtros ({activeFilters.length})
        </Button>
      </div>
    </div>
  )
}

export default Filters

