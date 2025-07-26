import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Menu, X, Sun, MapPin, Star, User } from 'lucide-react'
import CompanyRegistration from './CompanyRegistration'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showRegistration, setShowRegistration] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openRegistration = () => {
    setShowRegistration(true)
  }

  const closeRegistration = () => {
    setShowRegistration(false)
  }

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 solar-gradient rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <span className="text-2xl font-bold solar-gradient-text">SolarConnect</span>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Buscar empresas, produtos ou serviços..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 focus:border-orange-500 rounded-lg"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#marketplace" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Marketplace
              </a>
              <a href="#empresas" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Empresas
              </a>
              <a href="#produtos" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Produtos
              </a>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={openRegistration}
              >
                Cadastrar Empresa
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar empresas, produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 focus:border-orange-500 rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#marketplace" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  Marketplace
                </a>
                <a href="#empresas" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  Empresas
                </a>
                <a href="#produtos" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                  Produtos
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    <User className="w-4 h-4 mr-2" />
                    Entrar
                  </Button>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={openRegistration}
                  >
                    Cadastrar Empresa
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Company Registration Modal */}
      {showRegistration && (
        <CompanyRegistration onClose={closeRegistration} />
      )}
    </>
  )
}

export default Header

