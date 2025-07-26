'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, ArrowLeft, ArrowRight, Check, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { useAuthStore } from '@/lib/store/authStore'
import api from '@/lib/api'

// Step 1: Basic Information Schema
const basicInfoSchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  website: z.string().url('Please enter a valid URL').or(z.string().length(0)),
  yearFounded: z.string()
    .refine(val => !val || !isNaN(Number(val)), { message: 'Year must be a number' })
    .refine(val => !val || (Number(val) >= 1900 && Number(val) <= new Date().getFullYear()), {
      message: `Year must be between 1900 and ${new Date().getFullYear()}`
    }),
});

// Step 2: Contact Information Schema
const contactInfoSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  zipCode: z.string().min(5, 'Zip code must be at least 5 characters'),
});

// Step 3: Solar Specific Schema
const solarSpecificSchema = z.object({
  annualEnergyOutput: z.string()
    .refine(val => !val || !isNaN(Number(val)), { message: 'Annual energy output must be a number' }),
  installationTypes: z.array(z.string()).min(1, 'Please select at least one installation type'),
  certifications: z.array(z.string()).optional(),
});

type BasicInfoFormValues = z.infer<typeof basicInfoSchema>;
type ContactInfoFormValues = z.infer<typeof contactInfoSchema>;
type SolarSpecificFormValues = z.infer<typeof solarSpecificSchema>;

type FormStep = 1 | 2 | 3 | 4;

export default function CompanyRegistrationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuthStore();
  
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    basicInfo: {} as BasicInfoFormValues,
    contactInfo: {} as ContactInfoFormValues,
    solarSpecific: {
      annualEnergyOutput: '',
      installationTypes: [] as string[],
      certifications: [] as string[],
    } as SolarSpecificFormValues,
  });
  
  // File uploads
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [certificationFiles, setCertificationFiles] = useState<File[]>([]);
  
  // Basic Info Form
  const basicInfoForm = useForm<BasicInfoFormValues>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: formData.basicInfo,
  });
  
  // Contact Info Form
  const contactInfoForm = useForm<ContactInfoFormValues>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: formData.contactInfo,
  });
  
  // Solar Specific Form
  const solarSpecificForm = useForm<SolarSpecificFormValues>({
    resolver: zodResolver(solarSpecificSchema),
    defaultValues: formData.solarSpecific,
  });
  
  // Installation types options
  const installationTypes = [
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'utility', label: 'Utility-Scale' },
  ];
  
  // Handle logo upload
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogo(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle certification files upload
  const handleCertificationFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setCertificationFiles(prev => [...prev, ...filesArray]);
    }
  };
  
  // Remove certification file
  const removeCertificationFile = (index: number) => {
    setCertificationFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  // Handle installation type checkbox change
  const handleInstallationTypeChange = (type: string) => {
    const currentTypes = solarSpecificForm.getValues().installationTypes || [];
    
    if (currentTypes.includes(type)) {
      solarSpecificForm.setValue(
        'installationTypes',
        currentTypes.filter(t => t !== type)
      );
    } else {
      solarSpecificForm.setValue(
        'installationTypes',
        [...currentTypes, type]
      );
    }
  };
  
  // Handle form submission for each step
  const handleStepSubmit = async (step: FormStep) => {
    try {
      switch (step) {
        case 1:
          const basicInfoData = await basicInfoForm.handleSubmit(data => data)();
          setFormData(prev => ({ ...prev, basicInfo: basicInfoData }));
          setCurrentStep(2);
          break;
          
        case 2:
          const contactInfoData = await contactInfoForm.handleSubmit(data => data)();
          setFormData(prev => ({ ...prev, contactInfo: contactInfoData }));
          setCurrentStep(3);
          break;
          
        case 3:
          const solarSpecificData = await solarSpecificForm.handleSubmit(data => data)();
          setFormData(prev => ({ ...prev, solarSpecific: solarSpecificData }));
          setCurrentStep(4);
          break;
          
        case 4:
          await submitCompanyRegistration();
          break;
      }
    } catch (error) {
      console.error('Form validation error:', error);
    }
  };
  
  // Go back to previous step
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1 as FormStep);
    }
  };
  
  // Submit company registration
  const submitCompanyRegistration = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to register a company",
        variant: "destructive",
      });
      router.push('/auth/login?redirect=/register/company');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create form data for multipart/form-data submission
      const formDataToSubmit = new FormData();
      
      // Add basic info
      formDataToSubmit.append('company[name]', formData.basicInfo.name);
      formDataToSubmit.append('company[description]', formData.basicInfo.description);
      if (formData.basicInfo.website) {
        formDataToSubmit.append('company[website]', formData.basicInfo.website);
      }
      if (formData.basicInfo.yearFounded) {
        formDataToSubmit.append('company[year_founded]', formData.basicInfo.yearFounded);
      }
      
      // Add contact info
      formDataToSubmit.append('company[email]', formData.contactInfo.email);
      formDataToSubmit.append('company[phone]', formData.contactInfo.phone);
      formDataToSubmit.append('company[address]', formData.contactInfo.address);
      formDataToSubmit.append('company[city]', formData.contactInfo.city);
      formDataToSubmit.append('company[state]', formData.contactInfo.state);
      formDataToSubmit.append('company[zip_code]', formData.contactInfo.zipCode);
      
      // Add solar specific info
      if (formData.solarSpecific.annualEnergyOutput) {
        formDataToSubmit.append('company[annual_energy_output]', formData.solarSpecific.annualEnergyOutput);
      }
      formData.solarSpecific.installationTypes.forEach((type, index) => {
        formDataToSubmit.append(`company[installation_types][]`, type);
      });
      
      // Add logo if exists
      if (logo) {
        formDataToSubmit.append('company[logo]', logo);
      }
      
      // Add certification files
      certificationFiles.forEach((file, index) => {
        formDataToSubmit.append(`company[certification_files][]`, file);
      });
      
      // Submit to API
      const response = await api.post('/companies', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      toast({
        title: "Company registered successfully",
        description: "Your company has been registered and is pending approval.",
      });
      
      // Redirect to company profile or dashboard
      router.push(`/companies/${response.data.id}`);
      
    } catch (error: any) {
      console.error('Error submitting company registration:', error);
      toast({
        title: "Registration failed",
        description: error.response?.data?.error || "An error occurred while registering your company. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Render step indicators
  const renderStepIndicators = () => {
    return (
      <div className="flex justify-center mb-8">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === currentStep
                  ? 'bg-solar-orange text-white'
                  : step < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                step
              )}
            </div>
            {step < 4 && (
              <div
                className={`w-10 h-1 ${
                  step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // Render step title
  const renderStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Basic Information';
      case 2:
        return 'Contact Information';
      case 3:
        return 'Solar Specific Details';
      case 4:
        return 'Review & Submit';
      default:
        return '';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Register Your Company</h1>
          <p className="text-gray-600 text-center mb-6">
            Join our marketplace and connect with potential customers
          </p>
          
          {renderStepIndicators()}
          
          <h2 className="text-xl font-semibold mb-6">{renderStepTitle()}</h2>
          
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <form onSubmit={basicInfoForm.handleSubmit(() => handleStepSubmit(1))}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <Input
                    id="name"
                    {...basicInfoForm.register('name')}
                    className={basicInfoForm.formState.errors.name ? 'border-red-300' : ''}
                  />
                  {basicInfoForm.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-600">{basicInfoForm.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Description *
                  </label>
                  <Textarea
                    id="description"
                    {...basicInfoForm.register('description')}
                    className={basicInfoForm.formState.errors.description ? 'border-red-300' : ''}
                    rows={4}
                  />
                  {basicInfoForm.formState.errors.description && (
                    <p className="mt-1 text-sm text-red-600">{basicInfoForm.formState.errors.description.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website (optional)
                  </label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://example.com"
                    {...basicInfoForm.register('website')}
                    className={basicInfoForm.formState.errors.website ? 'border-red-300' : ''}
                  />
                  {basicInfoForm.formState.errors.website && (
                    <p className="mt-1 text-sm text-red-600">{basicInfoForm.formState.errors.website.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="yearFounded" className="block text-sm font-medium text-gray-700 mb-1">
                    Year Founded (optional)
                  </label>
                  <Input
                    id="yearFounded"
                    type="number"
                    placeholder={new Date().getFullYear().toString()}
                    {...basicInfoForm.{...basicInfoForm.register('yearFounded')}
                    className={basicInfoForm.formState.errors.yearFounded ? 'border-red-300' : ''}
                  />
                  {basicInfoForm.formState.errors.yearFounded && (
                    <p className="mt-1 text-sm text-red-600">{basicInfoForm.formState.errors.yearFounded.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Logo (optional)
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="cursor-pointer bg-gray-50 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleLogoChange}
                      />
                      <div className="flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        <span>Upload Logo</span>
                      </div>
                    </label>
                    
                    {logoPreview && (
                      <div className="relative">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="h-16 w-16 object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setLogo(null);
                            setLogoPreview(null);
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button type="submit">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
          
          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <form onSubmit={contactInfoForm.handleSubmit(() => handleStepSubmit(2))}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...contactInfoForm.register('email')}
                    className={contactInfoForm.formState.errors.email ? 'border-red-300' : ''}
                  />
                  {contactInfoForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-600">{contactInfoForm.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...contactInfoForm.register('phone')}
                    className={contactInfoForm.formState.errors.phone ? 'border-red-300' : ''}
                  />
                  {contactInfoForm.formState.errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{contactInfoForm.formState.errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <Input
                    id="address"
                    {...contactInfoForm.register('address')}
                    className={contactInfoForm.formState.errors.address ? 'border-red-300' : ''}
                  />
                  {contactInfoForm.formState.errors.address && (
                    <p className="mt-1 text-sm text-red-600">{contactInfoForm.formState.errors.address.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <Input
                      id="city"
                      {...contactInfoForm.register('city')}
                      className={contactInfoForm.formState.errors.city ? 'border-red-300' : ''}
                    />
                    {contactInfoForm.formState.errors.city && (
                      <p className="mt-1 text-sm text-red-600">{contactInfoForm.formState.errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <Input
                      id="state"
                      {...contactInfoForm.register('state')}
                      className={contactInfoForm.formState.errors.state ? 'border-red-300' : ''}
                    />
                    {contactInfoForm.formState.errors.state && (
                      <p className="mt-1 text-sm text-red-600">{contactInfoForm.formState.errors.state.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip Code *
                  </label>
                  <Input
                    id="zipCode"
                    {...contactInfoForm.register('zipCode')}
                    className={contactInfoForm.formState.errors.zipCode ? 'border-red-300' : ''}
                  />
                  {contactInfoForm.formState.errors.zipCode && (
                    <p className="mt-1 text-sm text-red-600">{contactInfoForm.formState.errors.zipCode.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
          
          {/* Step 3: Solar Specific Details */}
          {currentStep === 3 && (
            <form onSubmit={solarSpecificForm.handleSubmit(() => handleStepSubmit(3))}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="annualEnergyOutput" className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Energy Output (kWh, optional)
                  </label>
                  <Input
                    id="annualEnergyOutput"
                    type="number"
                    {...solarSpecificForm.register('annualEnergyOutput')}
                    className={solarSpecificForm.formState.errors.annualEnergyOutput ? 'border-red-300' : ''}
                  />
                  {solarSpecificForm.formState.errors.annualEnergyOutput && (
                    <p className="mt-1 text-sm text-red-600">{solarSpecificForm.formState.errors.annualEnergyOutput.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Installation Types *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {installationTypes.map((type) => (
                      <div key={type.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type.id}`}
                          value={type.id}
                          checked={solarSpecificForm.watch('installationTypes')?.includes(type.id)}
                          onChange={() => handleInstallationTypeChange(type.id)}
                          className="h-4 w-4 text-solar-orange focus:ring-solar-orange border-gray-300 rounded"
                        />
                        <label htmlFor={`type-${type.id}`} className="ml-2 text-sm text-gray-700">
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {solarSpecificForm.formState.errors.installationTypes && (
                    <p className="mt-1 text-sm text-red-600">{solarSpecificForm.formState.errors.installationTypes.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certification Documents (optional)
                  </label>
                  <div className="space-y-2">
                    <label className="cursor-pointer bg-gray-50 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100 transition-colors inline-block">
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                        onChange={handleCertificationFilesChange}
                      />
                      <div className="flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        <span>Upload Certifications</span>
                      </div>
                    </label>
                    
                    {certificationFiles.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700 mb-1">Uploaded Files:</p>
                        <ul className="space-y-1">
                          {certificationFiles.map((file, index) => (
                            <li key={index} className="flex items-center justify-between bg-gray-50 rounded-md px-3 py-2 text-sm">
                              <span className="truncate max-w-xs">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeCertificationFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
          
          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">Basic Information</h3>
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.basicInfo.name}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Website</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.basicInfo.website || 'Not provided'}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Year Founded</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.basicInfo.yearFounded || 'Not provided'}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Description</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.basicInfo.description}</dd>
                    </div>
                    {logoPreview && (
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Logo</dt>
                        <dd className="mt-1">
                          <img src={logoPreview} alt="Company logo" className="h-16 w-16 object-cover rounded-md" />
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">Contact Information</h3>
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.contactInfo.email}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Phone</dt>
                      <dd className="mt-1 text-sm text-gray-900">{formData.contactInfo.phone}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Address</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {formData.contactInfo.address}, {formData.contactInfo.city}, {formData.contactInfo.state} {formData.contactInfo.zipCode}
                      </dd>
                    </div>
                  </dl>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">Solar Specific Details</h3>
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Annual Energy Output</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {formData.solarSpecific.annualEnergyOutput ? `${formData.solarSpecific.annualEnergyOutput} kWh` : 'Not provided'}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Installation Types</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {formData.solarSpecific.installationTypes.map(type => {
                          const typeObj = installationTypes.find(t => t.id === type);
                          return typeObj ? typeObj.label : type;
                        }).join(', ')}
                      </dd>
                    </div>
                    {certificationFiles.length > 0 && (
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Certification Files</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <ul className="list-disc pl-5 space-y-1">
                            {certificationFiles.map((file, index) => (
                              <li key={index}>{file.name}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button 
                  onClick={() => handleStepSubmit(4)} 
                  disabled={isSubmitting}
                  className="bg-solar-orange hover:bg-solar-orange/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <Check className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}