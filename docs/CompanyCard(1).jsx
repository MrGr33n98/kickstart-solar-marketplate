import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Star, Award, Phone, Mail, ExternalLink } from 'lucide-react'

const CompanyCard = ({ company, onProfileClick }) => {
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card-hover overflow-hidden">
      {/* Company Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            {/* Company Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">
                {company.name.charAt(0)}
              </span>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {company.name}
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {renderStars(company.rating)}
                  <span className="ml-2 text-sm text-gray-600">
                    ({company.reviewCount} avaliações)
                  </span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {company.location}
              </div>
            </div>
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${
                isFavorited 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-gray-400 hover:text-red-500'
              }`} 
            />
          </button>
        </div>

        {/* Company Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-orange-500">
              {company.yearsInMarket}
            </div>
            <div className="text-xs text-gray-500">Anos no mercado</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-green-500">
              {company.projectsCompleted}
            </div>
            <div className="text-xs text-gray-500">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-orange-500">
              {company.certifications}
            </div>
            <div className="text-xs text-gray-500">Certificações</div>
          </div>
        </div>

        {/* Segments Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {company.segments.map((segment, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-orange-100 text-orange-800 text-xs"
            >
              {segment}
            </Badge>
          ))}
        </div>

        {/* Certifications */}
        {company.certifications > 0 && (
          <div className="flex items-center text-sm text-green-600 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Empresa Certificada
          </div>
        )}
      </div>

      {/* Company Actions */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contato
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-green-500 text-green-500 hover:bg-green-50"
            onClick={() => onProfileClick && onProfileClick(company.id)}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ver Perfil
          </Button>
        </div>
        
        <Button 
          className="w-full mt-3 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white"
          size="sm"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </div>
  )
}

export default CompanyCard

