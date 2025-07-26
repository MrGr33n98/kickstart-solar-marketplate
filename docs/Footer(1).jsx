import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-500 to-green-500 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Receba as últimas notícias sobre energia solar, dicas de economia 
              e ofertas exclusivas diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white text-gray-900 border-0 flex-1"
              />
              <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 solar-gradient rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SolarConnect</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                O maior marketplace de energia solar do Brasil. Conectamos você 
                às melhores empresas e produtos do mercado solar.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#marketplace" className="text-gray-400 hover:text-white transition-colors">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#empresas" className="text-gray-400 hover:text-white transition-colors">
                    Empresas Parceiras
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#suporte" className="text-gray-400 hover:text-white transition-colors">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            {/* For Companies */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Para Empresas</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#cadastro" className="text-gray-400 hover:text-white transition-colors">
                    Cadastrar Empresa
                  </a>
                </li>
                <li>
                  <a href="#planos" className="text-gray-400 hover:text-white transition-colors">
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a href="#certificacao" className="text-gray-400 hover:text-white transition-colors">
                    Certificação
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-gray-400 hover:text-white transition-colors">
                    API para Desenvolvedores
                  </a>
                </li>
                <li>
                  <a href="#recursos" className="text-gray-400 hover:text-white transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-gray-400 hover:text-white transition-colors">
                    Cases de Sucesso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-400">contato@solarconnect.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">(11) 3000-0000</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div className="text-gray-400">
                    <div>Av. Paulista, 1000</div>
                    <div>São Paulo, SP - 01310-100</div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Horário de Atendimento</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 SolarConnect. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

