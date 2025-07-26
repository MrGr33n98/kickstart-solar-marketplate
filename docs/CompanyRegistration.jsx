import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Building, 
  MapPin, 
  Settings, 
  Award, 
  Upload, 
  FileText, 
  CheckCircle, 
  ArrowLeft, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Users
} from 'lucide-react'

const CompanyRegistration = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    cnpj: '',
    companyName: '',
    tradeName: '',
    phone: '',
    email: '',
    website: '',
    
    // Step 2: Location
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    
    // Step 3: Segments and Services
    segments: [],
    services: [],
    description: '',
    
    // Step 4: Certifications
    certifications: [],
    licenses: [],
    
    // Step 5: Images and Documents
    logo: null,
    coverImage: null,
    documents: [],
    
    // Step 6: Terms
    acceptTerms: false,
    acceptPrivacy: false,
    acceptMarketing: false
  })

  const [errors, setErrors] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState({})

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const steps = [
    { id: 1, title: 'Informações Básicas', icon: Building },
    { id: 2, title: 'Localização', icon: MapPin },
    { id: 3, title: 'Segmentos e Serviços', icon: Settings },
    { id: 4, title: 'Certificações', icon: Award },
    { id: 5, title: 'Imagens e Documentos', icon: Upload },
    { id: 6, title: 'Termos e Condições', icon: FileText }
  ]

  const segmentOptions = [
    'Residencial',
    'Comercial',
    'Industrial',
    'Rural',
    'Público'
  ]

  const serviceOptions = [
    'Instalação de Painéis Solares',
    'Manutenção de Sistemas',
    'Consultoria Energética',
    'Projeto e Dimensionamento',
    'Financiamento Solar',
    'Monitoramento Remoto'
  ]

  const certificationOptions = [
    'INMETRO',
    'ABNT NBR 16690',
    'IEC 61215',
    'IEC 61730',
    'ISO 9001',
    'ISO 14001'
  ]

  const brazilianStates = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }))
  }

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
    
    setUploadedFiles(prev => ({
      ...prev,
      [field]: file?.name || null
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}
    
    switch (step) {
      case 1:
        if (!formData.cnpj) newErrors.cnpj = 'CNPJ é obrigatório'
        if (!formData.companyName) newErrors.companyName = 'Razão social é obrigatória'
        if (!formData.phone) newErrors.phone = 'Telefone é obrigatório'
        if (!formData.email) newErrors.email = 'E-mail é obrigatório'
        break
      case 2:
        if (!formData.cep) newErrors.cep = 'CEP é obrigatório'
        if (!formData.address) newErrors.address = 'Endereço é obrigatório'
        if (!formData.city) newErrors.city = 'Cidade é obrigatória'
        if (!formData.state) newErrors.state = 'Estado é obrigatório'
        break
      case 3:
        if (formData.segments.length === 0) newErrors.segments = 'Selecione pelo menos um segmento'
        if (formData.services.length === 0) newErrors.services = 'Selecione pelo menos um serviço'
        break
      case 6:
        if (!formData.acceptTerms) newErrors.acceptTerms = 'Você deve aceitar os termos de uso'
        if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'Você deve aceitar a política de privacidade'
        break
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Here you would submit the form data
      console.log('Form submitted:', formData)
      alert('Cadastro realizado com sucesso! Aguarde a análise da nossa equipe.')
      onClose()
    }
  }

  const formatCNPJ = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18)
  }

  const formatCEP = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9)
  }

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input
                  id="cnpj"
                  value={formData.cnpj}
                  onChange={(e) => handleInputChange('cnpj', formatCNPJ(e.target.value))}
                  placeholder="00.000.000/0000-00"
                  className={errors.cnpj ? 'border-red-500' : ''}
                />
                {errors.cnpj && <p className="text-red-500 text-sm mt-1">{errors.cnpj}</p>}
              </div>
              
              <div>
                <Label htmlFor="companyName">Razão Social *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Nome da empresa"
                  className={errors.companyName ? 'border-red-500' : ''}
                />
                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="tradeName">Nome Fantasia</Label>
              <Input
                id="tradeName"
                value={formData.tradeName}
                onChange={(e) => handleInputChange('tradeName', e.target.value)}
                placeholder="Nome comercial (opcional)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                  placeholder="(11) 99999-9999"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="contato@empresa.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://www.empresa.com"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="cep">CEP *</Label>
                <Input
                  id="cep"
                  value={formData.cep}
                  onChange={(e) => handleInputChange('cep', formatCEP(e.target.value))}
                  placeholder="00000-000"
                  className={errors.cep ? 'border-red-500' : ''}
                />
                {errors.cep && <p className="text-red-500 text-sm mt-1">{errors.cep}</p>}
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="address">Endereço *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Rua, Avenida, etc."
                  className={errors.address ? 'border-red-500' : ''}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="number">Número</Label>
                <Input
                  id="number"
                  value={formData.number}
                  onChange={(e) => handleInputChange('number', e.target.value)}
                  placeholder="123"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="complement">Complemento</Label>
                <Input
                  id="complement"
                  value={formData.complement}
                  onChange={(e) => handleInputChange('complement', e.target.value)}
                  placeholder="Sala, Andar, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  id="neighborhood"
                  value={formData.neighborhood}
                  onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                  placeholder="Nome do bairro"
                />
              </div>
              
              <div>
                <Label htmlFor="city">Cidade *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Nome da cidade"
                  className={errors.city ? 'border-red-500' : ''}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              
              <div>
                <Label htmlFor="state">Estado *</Label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger className={errors.state ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {brazilianStates.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Segmentos de Atuação *</Label>
              <p className="text-sm text-gray-600 mb-3">Selecione os segmentos em que sua empresa atua</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {segmentOptions.map(segment => (
                  <div key={segment} className="flex items-center space-x-2">
                    <Checkbox
                      id={segment}
                      checked={formData.segments.includes(segment)}
                      onCheckedChange={(checked) => handleArrayChange('segments', segment, checked)}
                    />
                    <Label htmlFor={segment} className="text-sm">{segment}</Label>
                  </div>
                ))}
              </div>
              {errors.segments && <p className="text-red-500 text-sm mt-1">{errors.segments}</p>}
            </div>

            <div>
              <Label>Serviços Oferecidos *</Label>
              <p className="text-sm text-gray-600 mb-3">Selecione os serviços que sua empresa oferece</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) => handleArrayChange('services', service, checked)}
                    />
                    <Label htmlFor={service} className="text-sm">{service}</Label>
                  </div>
                ))}
              </div>
              {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
            </div>

            <div>
              <Label htmlFor="description">Descrição da Empresa</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Descreva sua empresa, experiência e diferenciais..."
                rows={4}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label>Certificações</Label>
              <p className="text-sm text-gray-600 mb-3">Selecione as certificações que sua empresa possui</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {certificationOptions.map(cert => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Checkbox
                      id={cert}
                      checked={formData.certifications.includes(cert)}
                      onCheckedChange={(checked) => handleArrayChange('certifications', cert, checked)}
                    />
                    <Label htmlFor={cert} className="text-sm">{cert}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="licenses">Licenças e Registros</Label>
              <Textarea
                id="licenses"
                value={formData.licenses}
                onChange={(e) => handleInputChange('licenses', e.target.value)}
                placeholder="Liste outras licenças, registros profissionais ou certificações específicas..."
                rows={3}
              />
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <Label>Logo da Empresa</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Clique para fazer upload do logo</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('logo', e.target.files[0])}
                  className="hidden"
                  id="logo-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('logo-upload').click()}
                >
                  Selecionar Arquivo
                </Button>
                {uploadedFiles.logo && (
                  <p className="text-sm text-green-600 mt-2">✓ {uploadedFiles.logo}</p>
                )}
              </div>
            </div>

            <div>
              <Label>Imagem de Capa</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Imagem para o perfil da empresa</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload('coverImage', e.target.files[0])}
                  className="hidden"
                  id="cover-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('cover-upload').click()}
                >
                  Selecionar Arquivo
                </Button>
                {uploadedFiles.coverImage && (
                  <p className="text-sm text-green-600 mt-2">✓ {uploadedFiles.coverImage}</p>
                )}
              </div>
            </div>

            <div>
              <Label>Documentos Adicionais</Label>
              <p className="text-sm text-gray-600 mb-2">Certificados, licenças, etc. (opcional)</p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload('documents', Array.from(e.target.files))}
                  className="hidden"
                  id="docs-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('docs-upload').click()}
                >
                  Selecionar Arquivos
                </Button>
                {formData.documents?.length > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ {formData.documents.length} arquivo(s) selecionado(s)
                  </p>
                )}
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
                  className={errors.acceptTerms ? 'border-red-500' : ''}
                />
                <div>
                  <Label htmlFor="acceptTerms" className="text-sm">
                    Aceito os <a href="#" className="text-orange-500 hover:underline">Termos de Uso</a> *
                  </Label>
                  {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onCheckedChange={(checked) => handleInputChange('acceptPrivacy', checked)}
                  className={errors.acceptPrivacy ? 'border-red-500' : ''}
                />
                <div>
                  <Label htmlFor="acceptPrivacy" className="text-sm">
                    Aceito a <a href="#" className="text-orange-500 hover:underline">Política de Privacidade</a> *
                  </Label>
                  {errors.acceptPrivacy && <p className="text-red-500 text-sm">{errors.acceptPrivacy}</p>}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="acceptMarketing"
                  checked={formData.acceptMarketing}
                  onCheckedChange={(checked) => handleInputChange('acceptMarketing', checked)}
                />
                <Label htmlFor="acceptMarketing" className="text-sm">
                  Aceito receber comunicações de marketing e promoções
                </Label>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Próximos Passos</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Sua solicitação será analisada em até 2 dias úteis</li>
                <li>• Você receberá um e-mail com o status da aprovação</li>
                <li>• Após aprovação, poderá acessar o painel da empresa</li>
                <li>• Complete seu perfil para aparecer nas buscas</li>
              </ul>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Cadastro de Empresa</h2>
            <Button variant="ghost" onClick={onClose}>×</Button>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Etapa {currentStep} de {totalSteps}</span>
              <span>{Math.round(progress)}% concluído</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = step.id === currentStep
              const isCompleted = step.id < currentStep
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isActive 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs text-center ${
                    isActive ? 'text-orange-500 font-medium' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="p-6">
          {renderStep()}
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {currentStep === totalSteps ? (
            <Button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Finalizar Cadastro
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Próxima
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CompanyRegistration

