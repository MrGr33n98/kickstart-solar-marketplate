import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marketplace from './components/Marketplace'
import Footer from './components/Footer'
import CompanyProfile from './components/CompanyProfile'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedCompanyId, setSelectedCompanyId] = useState(null)

  const showCompanyProfile = (companyId) => {
    setSelectedCompanyId(companyId)
    setCurrentView('company-profile')
  }

  const goBackToHome = () => {
    setCurrentView('home')
    setSelectedCompanyId(null)
  }

  if (currentView === 'company-profile') {
    return (
      <div className="min-h-screen bg-white">
        <CompanyProfile 
          companyId={selectedCompanyId} 
          onBack={goBackToHome}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Marketplace onCompanyClick={showCompanyProfile} />
      <Footer />
    </div>
  )
}

export default App

