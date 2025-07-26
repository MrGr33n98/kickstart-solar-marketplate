I'll implement all the tasks you've requested. Let's start with completing the remaining components and functionality.

### 1. Complete the Company Registration Page

### app/register/company/page.tsx [coder:save]
```tsx
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
```
[coder:end]

### components/ui/textarea.tsx [coder:save]
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
```
[coder:end]

### components/ui/toast.tsx [coder:save]
```tsx
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```
[coder:end]

### components/ui/use-toast.ts [coder:save]
```typescript
// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  }
}

function addToRemoveQueue(toastId: string) {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export { useToast, toast }
```
[coder:end]

### components/ui/toaster.tsx [coder:save]
```tsx
"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (<ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```
[coder:end]

### 2. Create Product Detail Page

### app/products/[id]/page.tsx [coder:save]
```tsx
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
```
[coder:end]
[coder:end]

### 3. Create Company Detail Page

### app/companies/[id]/page.tsx [coder:save]
```tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, Star, Check, Award, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { useAuthStore } from '@/lib/store/authStore'
import api from '@/lib/api'

interface Company {
  id: number
  name: string
  description: string
  logo: string
  coverImage: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  website: string
  yearFounded: number
  annualEnergyOutput: number
  installationTypes: string[]
  rating: number
  reviewCount: number
  certifications: Certification[]
  products: Product[]
  reviews: Review[]
}

interface Certification {
  id: number
  name: string
  issuedBy: string
  year: number
  image: string
}

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface Review {
  id: number
  rating: number
  comment: string
  userName: string
  userAvatar: string
  date: string
}

export default function CompanyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { isAuthenticated } = useAuthStore()
  
  const [company, setCompany] = useState<Company | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('about')
  
  // Contact form
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  
  useEffect(() => {
    const fetchCompany = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await api.get(`/companies/${params.id}`)
        setCompany(response.data)
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch company details. Please try again.')
        console.error('Error fetching company:', err)
      } finally {
        setIsLoading(false)
      }
    }
    
    if (params.id) {
      fetchCompany()
    }
  }, [params.id])
  
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!contactName || !contactEmail || !contactMessage) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmittingContact(true)
    
    try {
      await api.post('/leads', {
        lead: {
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          message: contactMessage,
          company_id: params.id,
        }
      })
      
      toast({
        title: "Message sent successfully",
        description: "The company will contact you soon",
      })
      
      // Reset form
      setContactName('')
      setContactEmail('')
      setContactPhone('')
      setContactMessage('')
    } catch (err: any) {
      toast({
        title: "Failed to send message",
        description: err.response?.data?.error || "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingContact(false)
    }
  }
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-solar-orange animate-spin" />
      </div>
    )
  }
  
  if (error || !company) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{error || 'Company not found'}</p>
            <Button onClick={() => router.back()}>Go Back</Button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Company Header */}
      <div className="relative h-64 bg-gradient-to-r from-solar-orange to-solar-green mb-24">
        {company.coverImage && (
          <Image
            src={company.coverImage}
            alt={`${company.name} cover`}
            fill
            className="object-cover opacity-30"
          />
        )}
        
        <div className="absolute -bottom-16 left-0 w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{company.name}</h1>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= company.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-white">({company.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
          <button
            className={`px-4 py-2 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'about'
                ? 'bg-solar-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`px-4 py-2 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'products'
                ? 'bg-solar-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('products')}
          >
            Products ({company.products.length})
          </button>
          <button
            className={`px-4 py-2 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'certifications'
                ? 'bg-solar-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications ({company.certifications.length})
          </button>
          <button
            className={`px-4 py-2 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'reviews'
                ? 'bg-solar-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({company.reviewCount})
          </button>
          <button
            className={`px-4 py-2 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-solar-orange text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">About {company.name}</h2>
                <p className="text-gray-700 mb-6">{company.description}</p>
                
                <h3 className="text-lg font-semibold mb-3">Installation Types</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {company.installationTypes.map((type, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
                
                {company.annualEnergyOutput > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Annual Energy Output</h3>
                    <p className="text-gray-700">{company.annualEnergyOutput.toLocaleString()} kWh</p>
                  </div>
                )}
                
                <h3 className="text-lg font-semibold mb-3">Year Founded</h3>
                <p className="text-gray-700">{company.yearFounded}</p>
              </div>
            )}
            
            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Products by {company.name}</h2>
                
                {company.products.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {company.products.map((product) => (
                      <Link key={product.id} href={`/products/${product.id}`}>
                        <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                          <div className="relative h-40 w-full">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-2 right-2 bg-solar-orange text-white text-xs font-bold px-2 py-1 rounded">
                              {product.category}
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <h3 className="font-medium mb-1 hover:text-solar-orange">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                            <p className="text-solar-orange font-bold">${product.price.toLocaleString()}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No products available</p>
                )}
              </div>
            )}
            
            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                
                {company.certifications.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {company.certifications.map((certification) => (
                      <div key={certification.id} className="border border-gray-200 rounded-lg p-4 flex items-center">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={certification.image}
                            alt={certification