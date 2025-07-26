'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Sun, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/lib/store/authStore'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  
  const { isAuthenticated, user, logout } = useAuthStore()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleRegisterCompany = () => {
    if (!isAuthenticated) {
      router.push('/auth/login?redirect=/register/company')
    } else {
      router.push('/register/company')
    }
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Sun className="h-8 w-8 text-solar-orange mr-2" />
          <span className="text-xl font-bold solar-gradient-text">SolarConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-solar-orange ${
              pathname === '/' ? 'text-solar-orange' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/marketplace" 
            className={`text-sm font-medium transition-colors hover:text-solar-orange ${
              pathname === '/marketplace' ? 'text-solar-orange' : 'text-gray-700'
            }`}
          >
            Marketplace
          </Link>
          <Link 
            href="/companies" 
            className={`text-sm font-medium transition-colors hover:text-solar-orange ${
              pathname === '/companies' ? 'text-solar-orange' : 'text-gray-700'
            }`}
          >
            Companies
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors hover:text-solar-orange ${
              pathname === '/about' ? 'text-solar-orange' : 'text-gray-700'
            }`}
          >
            About
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-700 mr-2" />
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => logout()}
              >
                Logout
              </Button>
              {(user?.role === 'admin' || user?.role === 'manager') && (
                <Button 
                  variant="solar" 
                  size="sm"
                  onClick={handleRegisterCompany}
                >
                  Register Company
                </Button>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => router.push('/auth/login')}
              >
                Login
              </Button>
              <Button 
                variant="solar" 
                size="sm"
                onClick={() => router.push('/auth/register')}
              >
                Sign Up
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-solar-orange ${
                pathname === '/' ? 'text-solar-orange' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/marketplace" 
              className={`text-sm font-medium transition-colors hover:text-solar-orange ${
                pathname === '/marketplace' ? 'text-solar-orange' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              href="/companies" 
              className={`text-sm font-medium transition-colors hover:text-solar-orange ${
                pathname === '/companies' ? 'text-solar-orange' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors hover:text-solar-orange ${
                pathname === '/about' ? 'text-solar-orange' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-700 mr-2" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
                {(user?.role === 'admin' || user?.role === 'manager') && (
                  <Button 
                    variant="solar" 
                    size="sm"
                    onClick={() => {
                      handleRegisterCompany();
                      setIsMenuOpen(false);
                    }}
                  >
                    Register Company
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    router.push('/auth/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  variant="solar" 
                  size="sm"
                  onClick={() => {
                    router.push('/auth/register');
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header