'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Check, ArrowLeft, ShoppingCart, Share2, Heart, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { useAuthStore } from '@/lib/store/authStore'
import api from '@/lib/api'

interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviewCount: number
  image: string
  features: string[]
  specifications: Record<string, string>
  company: {
    id: number
    name: string
    logo: string
  }
  category: string
  reviews: Review[]
  relatedProducts: RelatedProduct[]
}

interface Review {
  id: number
  rating: number
  comment: string
  userName: string
  userAvatar: string
  date: string
}

interface RelatedProduct {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { isAuthenticated } = useAuthStore()
  
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false)
  const [quoteMessage, setQuoteMessage] = useState('')
  
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await api.get(`/products/${params.id}`)
        setProduct(response.data)
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch product details. Please try again.')
        console.error('Error fetching product:', err)
      } finally {
        setIsLoading(false)
      }
    }
    
    if (params.id) {
      fetchProduct()
    }
  }, [params.id])
  
  const handleRequestQuote = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to request a quote",
        variant: "destructive",
      })
      router.push(`/auth/login?redirect=/products/${params.id}`)
      return
    }
    
    if (!quoteMessage.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message for your quote request",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmittingQuote(true)
    
    try {
      await api.post('/quotes', {
        quote: {
          product_id: params.id,
          message: quoteMessage,
        }
      })
      
      toast({
        title: "Quote requested successfully",
        description: "The company will contact you soon with a quote",
      })
      
      setQuoteMessage('')
    } catch (err: any) {
      toast({
        title: "Failed to request quote",
        description: err.response?.data?.error || "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingQuote(false)
    }
  }
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-solar-orange animate-spin" />
      </div>
    )
  }
  
  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{error || 'Product not found'}</p>
            <Button onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-solar-orange">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/marketplace" className="text-gray-500 hover:text-solar-orange">Marketplace</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/marketplace?category=${product.category}`} className="text-gray-500 hover:text-solar-orange">{product.category}</Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>
        
        {/* Product Overview */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex items-center mb-2">
                <Link href={`/companies/${product.company.id}`} className="flex items-center">
                  <div className="relative h-6 w-6 mr-2">
                    <Image
                      src={product.company.logo}
                      alt={product.company.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-600 hover:text-solar-orange">{product.company.name}</span>
                </Link>
                
                <span className="mx-2 text-gray-300">•</span>
                
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviewCount} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="text-2xl font-bold text-solar-orange mb-4">
                ${product.price.toLocaleString()}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="solar" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    document.getElementById('request-quote')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Specifications */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Specifications</h2>
            
            {product.specifications && Object.keys(product.specifications).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2">
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No specifications available</p>
            )}
          </div>
          
          {/* Company Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">About the Company</h2>
            
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-16 mr-4">
                <Image
                  src={product.company.logo}
                  alt={product.company.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              
              <div>
                <h3 className="font-semibold">{product.company.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3 w-3 ${
                          star <= product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-600">({product.reviewCount})</span>
                </div>
              </div>
            </div>
            
            <Link href={`/companies/${product.company.id}`}>
              <Button variant="outline" className="w-full">
                View Company Profile
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Request Quote Section */}
        <div id="request-quote" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Request a Quote</h2>
          
          <div className="mb-4">
            <label htmlFor="quoteMessage" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              id="quoteMessage"
              placeholder="Describe your requirements, questions, or any specific details about your project..."
              rows={4}
              value={quoteMessage}
              onChange={(e) => setQuoteMessage(e.target.value)}
            />
          </div>
          
          <Button 
            variant="solar" 
            onClick={handleRequestQuote}
            disabled={isSubmittingQuote}
          >
            {isSubmittingQuote ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Quote Request'
            )}
          </Button>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          
          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="relative h-10 w-10 mr-4">
                      <Image
                        src={review.userAvatar}
                        alt={review.userName}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">{review.userName}</h4>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      
                      <div className="flex mt-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet</p>
          )}
          
          {isAuthenticated ? (
            <Button variant="outline" className="mt-6">
              Write a Review
            </Button>
          ) : (
            <p className="mt-4 text-sm text-gray-500">
              <Link href={`/auth/login?redirect=/products/${params.id}`} className="text-solar-orange hover:underline">
                Log in
              </Link>{' '}
              to write a review
            </p>
          )}
        </div>
        
        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Related Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {product.relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                  <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="relative h-40 w-full">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-3">
                      <h3 className="font-medium text-sm mb-1 group-hover:text-solar-orange truncate">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-solar-orange font-semibold text-sm">
                        ${relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}