import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CompanyProfilePage from './pages/CompanyProfilePage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'company-profile') {
    return <CompanyProfilePage />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Marketplace de Energia Solar</h2>
          <p className="text-gray-600 mb-8">Conecte-se com as melhores empresas de energia solar do Brasil</p>
          
          {/* Demo Company Profile Button */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">ST</span>
            </div>
            <h3 className="text-xl font-bold mb-2">SolarTech Brasil</h3>
            <p className="text-gray-600 mb-4">Empresa líder em soluções de energia solar</p>
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="ml-2 text-sm text-gray-600">4.8 (127 avaliações)</span>
            </div>
            <button
              onClick={() => setCurrentPage('company-profile')}
              className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-green-600 transition-colors"
            >
              Ver Perfil da Empresa
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App