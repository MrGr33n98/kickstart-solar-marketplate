import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  Award, 
  Calendar, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle,
  MessageCircle,
  Share2,
  Heart,
  ArrowLeft,
  ExternalLink,
  Download,
  Play,
  Image as ImageIcon,
  FileText,
  Clock,
  TrendingUp,
  Target,
  Lightbulb
} from 'lucide-react'

const CompanyProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock company data
  const company = {
    id: 'solartech-brasil',
    name: 'SolarTech Brasil',
    tradeName: 'SolarTech',
    logo: '/api/placeholder/120/120',
    coverImage: '/api/placeholder/1200/400',
    description: 'Líder em soluções de energia solar no Brasil, com mais de 8 anos de experiência no mercado. Especializados em projetos residenciais, comerciais e industriais, oferecemos desde o dimensionamento até a instalação e manutenção de sistemas fotovoltaicos.',
    rating: 4.8,
    reviewCount: 127,
    location: {
      city: 'São Paulo',
      state: 'SP',
      address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100'
    },
    contact: {
      phone: '(11) 3000-0000',
      email: 'contato@solartech.com.br',
      website: 'https://www.solartech.com.br'
    },
    stats: {
      yearsInMarket: 8,
      projectsCompleted: 450,
      certifications: 3,
      employees: 25,
      powerInstalled: '2.5 MW',
      co2Saved: '1,200 ton'
    },
    segments: ['Residencial', 'Comercial', 'Industrial'],
    services: [
      'Instalação de Painéis Solares',
      'Manutenção de Sistemas',
      'Consultoria Energética',
      'Projeto e Dimensionamento',
      'Monitoramento Remoto'
    ],
    certifications: [
      { name: 'INMETRO', year: '2023', image: '/api/placeholder/80/80' },
      { name: 'ABNT NBR 16690', year: '2022', image: '/api/placeholder/80/80' },
      { name: 'ISO 9001', year: '2021', image: '/api/placeholder/80/80' }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Residência Familiar - 5kWp',
        type: 'Residencial',
        power: '5 kWp',
        location: 'São Paulo, SP',
        year: '2024',
        image: '/api/placeholder/300/200',
        description: 'Sistema residencial com 16 painéis solares, economia de 95% na conta de luz.'
      },
      {
        id: 2,
        title: 'Indústria Metalúrgica - 100kWp',
        type: 'Industrial',
        power: '100 kWp',
        location: 'Guarulhos, SP',
        year: '2023',
        image: '/api/placeholder/300/200',
        description: 'Grande projeto industrial com 300 painéis, ROI em 4 anos.'
      },
      {
        id: 3,
        title: 'Shopping Center - 250kWp',
        type: 'Comercial',
        power: '250 kWp',
        location: 'Campinas, SP',
        year: '2023',
        image: '/api/placeholder/300/200',
        description: 'Sistema comercial de grande porte com monitoramento 24/7.'
      }
    ],
    reviews: [
      {
        id: 1,
        author: 'Maria Silva',
        rating: 5,
        date: '2024-01-15',
        comment: 'Excelente atendimento e qualidade na instalação. Recomendo!',
        project: 'Sistema Residencial 3kWp'
      },
      {
        id: 2,
        author: 'João Santos',
        rating: 5,
        date: '2024-01-10',
        comment: 'Profissionais muito competentes, prazo cumprido à risca.',
        project: 'Sistema Comercial 15kWp'
      },
      {
        id: 3,
        author: 'Ana Costa',
        rating: 4,
        date: '2024-01-05',
        comment: 'Ótimo custo-benefício, sistema funcionando perfeitamente.',
        project: 'Sistema Residencial 8kWp'
      }
    ],
    team: [
      {
        name: 'Carlos Mendes',
        role: 'Diretor Técnico',
        experience: '12 anos',
        image: '/api/placeholder/100/100'
      },
      {
        name: 'Fernanda Lima',
        role: 'Engenheira de Projetos',
        experience: '8 anos',
        image: '/api/placeholder/100/100'
      },
      {
        name: 'Roberto Silva',
        role: 'Coordenador de Instalação',
        experience: '10 anos',
        image: '/api/placeholder/100/100'
      }
    ]
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SolarConnect</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-orange-400 to-green-400">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="container mx-auto">
            <div className="flex items-end space-x-4">
              {/* Company Logo */}
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-orange-500">ST</span>
              </div>
              
              {/* Company Info */}
              <div className="flex-1 text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">{company.name}</h1>
                <div className="flex items-center space-x-4 text-sm md:text-base">
                  <div className="flex items-center">
                    {renderStars(company.rating)}
                    <span className="ml-2">{company.rating} ({company.reviewCount} avaliações)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {company.location.city}, {company.location.state}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hidden md:flex space-x-2">
                <Button
                  variant={isFollowing ? "secondary" : "default"}
                  onClick={() => setIsFollowing(!isFollowing)}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFollowing ? 'fill-current text-red-500' : ''}`} />
                  {isFollowing ? 'Seguindo' : 'Seguir'}
                </Button>
                <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="flex border-b">
                {[
                  { id: 'overview', label: 'Visão Geral' },
                  { id: 'portfolio', label: 'Portfólio' },
                  { id: 'reviews', label: 'Avaliações' },
                  { id: 'team', label: 'Equipe' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* About Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Sobre a Empresa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {company.description}
                    </p>
                    
                    {/* Segments */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Segmentos de Atuação</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.segments.map((segment, index) => (
                          <Badge key={index} variant="secondary">{segment}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="font-semibold mb-2">Serviços Oferecidos</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {company.services.map((service, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-500">{company.stats.yearsInMarket}</div>
                        <div className="text-sm text-gray-600">Anos no Mercado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-500">{company.stats.projectsCompleted}</div>
                        <div className="text-sm text-gray-600">Projetos Concluídos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-500">{company.stats.employees}</div>
                        <div className="text-sm text-gray-600">Funcionários</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-500">{company.stats.powerInstalled}</div>
                        <div className="text-sm text-gray-600">Potência Instalada</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{company.stats.co2Saved}</div>
                        <div className="text-sm text-gray-600">CO₂ Evitado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-500">{company.stats.certifications}</div>
                        <div className="text-sm text-gray-600">Certificações</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card>
                  <CardHeader>
                    <CardTitle>Certificações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {company.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Award className="w-6 h-6 text-yellow-500" />
                          </div>
                          <div>
                            <div className="font-semibold">{cert.name}</div>
                            <div className="text-sm text-gray-600">{cert.year}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <Card>
                <CardHeader>
                  <CardTitle>Projetos Realizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {company.portfolio.map((project) => (
                      <div key={project.id} className="border rounded-lg overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center">
                          <Zap className="w-16 h-16 text-orange-500" />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">{project.type}</Badge>
                            <span className="text-sm text-gray-600">{project.year}</span>
                          </div>
                          <h3 className="font-semibold mb-2">{project.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-orange-500">{project.power}</span>
                            <span className="text-gray-500">{project.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'reviews' && (
              <Card>
                <CardHeader>
                  <CardTitle>Avaliações dos Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold text-orange-600">
                                {review.author.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold">{review.author}</div>
                              <div className="text-sm text-gray-600">{review.project}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center">
                              {renderStars(review.rating)}
                            </div>
                            <div className="text-sm text-gray-600">{review.date}</div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'team' && (
              <Card>
                <CardHeader>
                  <CardTitle>Nossa Equipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {company.team.map((member, index) => (
                      <div key={index} className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="w-12 h-12 text-orange-500" />
                        </div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-orange-600 font-medium">{member.role}</p>
                        <p className="text-sm text-gray-600">{member.experience} de experiência</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm">{company.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm">{company.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-gray-500 mr-3" />
                    <a href={company.contact.website} className="text-sm text-orange-500 hover:underline">
                      Website
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mr-3 mt-0.5" />
                    <span className="text-sm">{company.location.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Destaques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tempo de Resposta</span>
                  <span className="text-sm font-semibold">2 horas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Taxa de Aprovação</span>
                  <span className="text-sm font-semibold text-green-600">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Projetos este Ano</span>
                  <span className="text-sm font-semibold">85</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Garantia</span>
                  <span className="text-sm font-semibold">25 anos</span>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Distintivos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="w-full justify-center bg-green-100 text-green-800 hover:bg-green-100">
                    <Shield className="w-4 h-4 mr-2" />
                    Empresa Verificada
                  </Badge>
                  <Badge className="w-full justify-center bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    <Award className="w-4 h-4 mr-2" />
                    Top Rated
                  </Badge>
                  <Badge className="w-full justify-center bg-blue-100 text-blue-800 hover:bg-blue-100">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Crescimento Rápido
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfilePage

