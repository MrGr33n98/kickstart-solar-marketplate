import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, ShoppingCart, Zap, Award, Info } from 'lucide-react'
import { useState } from 'react'

const ProductCard = ({ product }) => {
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card-hover overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center">
          <Zap className="w-16 h-16 text-orange-500" />
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart 
            className={`w-4 h-4 ${
              isFavorited 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-red-500'
            }`} 
          />
        </button>

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            -{product.discount}%
          </div>
        )}

        {/* Certification Badge */}
        {product.certified && (
          <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center">
            <Award className="w-3 h-3 mr-1" />
            Certificado
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {product.brand}
          </p>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviewCount})
              </span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center text-gray-600">
              <Zap className="w-3 h-3 mr-1 text-orange-500" />
              {product.power}W
            </div>
            <div className="flex items-center text-gray-600">
              <Info className="w-3 h-3 mr-1 text-green-500" />
              {product.efficiency}%
            </div>
          </div>
          
          {/* Additional specs */}
          <div className="mt-2 text-xs text-gray-500">
            {product.warranty} anos de garantia
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-orange-100 text-orange-800 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </div>
              )}
              <div className="text-xl font-bold text-green-600">
                {formatPrice(product.price)}
              </div>
              <div className="text-xs text-gray-500">
                ou 12x de {formatPrice(product.price / 12)}
              </div>
            </div>
            
            {product.inStock ? (
              <Badge className="bg-green-100 text-green-800">
                Em estoque
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Sob consulta
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Comprar Agora' : 'Consultar Preço'}
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-green-500 text-green-500 hover:bg-green-50"
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

