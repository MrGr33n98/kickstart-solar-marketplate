I'll help you build the frontend application to consume your backend. Let's start by setting up a Next.js project with the necessary configurations.

### 1. First, let's create the Next.js project structure

### package.json [coder:save]
```json
{
  "name": "solar-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.2",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "axios": "^1.6.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "jwt-decode": "^4.0.0",
    "lucide-react": "^0.292.0",
    "next": "14.0.3",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.48.2",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.22.4",
    "zustand": "^4.4.6"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.3",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```
[coder:end]

### tsconfig.json [coder:save]
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
[coder:end]

### tailwind.config.js [coder:save]
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'solar-orange': 'var(--solar-orange)',
        'solar-green': 'var(--solar-green)',
        'solar-blue': 'var(--solar-blue)',
        'solar-gray': 'var(--solar-gray)',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```
[coder:end]

### postcss.config.js [coder:save]
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
[coder:end]

### .env.local [coder:save]
```
NEXT_PUBLIC_RAILS_API_URL=http://localhost:3000/api/v1
```
[coder:end]

### app/globals.css [coder:save]
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --solar-orange: #FF7A00;
  --solar-green: #4CAF50;
  --solar-blue: #2196F3;
  --solar-gray: #F5F5F5;
  
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;

  --primary: 24 9 96;
  --primary-foreground: 255 255 255;
  --secondary: 255 122 0;
  --secondary-foreground: 255 255 255;
  --muted: 240 240 240;
  --muted-foreground: 115 115 115;
  --accent: 245 245 245;
  --accent-foreground: 24 9 96;
  --destructive: 255 0 0;
  --destructive-foreground: 255 255 255;
  --border: 230 230 230;
  --input: 230 230 230;
  --ring: 255 122 0;
  --radius: 0.5rem;
  --background: 255 255 255;
  --foreground: 0 0 0;
  --card: 255 255 255;
  --card-foreground: 0 0 0;
  --popover: 255 255 255;
  --popover-foreground: 0 0 0;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Poppins', sans-serif;
  }
}

@layer components {
  .solar-gradient {
    @apply bg-gradient-to-r from-solar-orange to-solar-green;
  }
  
  .solar-gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-solar-orange to-solar-green;
  }
  
  .card-hover {
    @apply transition-all duration-300 hover:shadow-lg hover:-translate-y-1;
  }
}
```
[coder:end]

### 2. Now, let's set up the API client and authentication

### lib/api.ts [coder:save]
```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RAILS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include JWT token in requests
api.interceptors.request.use(
  (config) => {
    // Check if we're in the browser and if there's a token
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired or invalid)
    if (error.response && error.response.status === 401) {
      // Clear token and redirect to login if we're in the browser
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
```
[coder:end]

### 3. Let's create the authentication store with Zustand

### lib/store/authStore.ts [coder:save]
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '@/lib/api';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
}

interface JwtPayload {
  sub: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
  exp: number;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  checkAuth: () => boolean;
  hasRole: (roles: string[]) => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post('/users/sign_in', {
            user: { email, password }
          });
          
          const token = response.headers.authorization?.split(' ')[1];
          
          if (!token) {
            throw new Error('Authentication token not found in response');
          }
          
          // Decode JWT to get user info
          const decoded = jwtDecode<JwtPayload>(token);
          
          const user: User = {
            id: parseInt(decoded.sub),
            email: decoded.email,
            name: decoded.name || email.split('@')[0],
            role: decoded.role || 'user',
          };
          
          set({ 
            token, 
            user, 
            isAuthenticated: true, 
            isLoading: false 
          });
          
          // Store token in localStorage for API interceptor
          localStorage.setItem('token', token);
          
        } catch (error: any) {
          set({ 
            isLoading: false, 
            error: error.response?.data?.error || 'Failed to login. Please check your credentials.' 
          });
          throw error;
        }
      },
      
      logout: () => {
        localStorage.removeItem('token');
        set({ token: null, user: null, isAuthenticated: false });
      },
      
      register: async (name: string, email: string, password: string, passwordConfirmation: string) => {
        set({ isLoading: true, error: null });
        try {
          await api.post('/users', {
            user: { name, email, password, password_confirmation: passwordConfirmation }
          });
          
          set({ isLoading: false });
          
          // Login after successful registration
          await get().login(email, password);
          
        } catch (error: any) {
          set({ 
            isLoading: false, 
            error: error.response?.data?.error || 'Registration failed. Please try again.' 
          });
          throw error;
        }
      },
      
      checkAuth: () => {
        const { token, user } = get();
        
        if (!token || !user) {
          return false;
        }
        
        try {
          const decoded = jwtDecode<JwtPayload>(token);
          const currentTime = Date.now() / 1000;
          
          if (decoded.exp < currentTime) {
            // Token expired
            get().logout();
            return false;
          }
          
          return true;
        } catch (error) {
          get().logout();
          return false;
        }
      },
      
      hasRole: (roles: string[]) => {
        const { user } = get();
        if (!user) return false;
        return roles.includes(user.role);
      },
    }),
    {
      name: 'auth-storage',
      // Only persist these fields
      partialize: (state) => ({ 
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }),
    }
  )
);
```
[coder:end]

### 4. Let's create UI components

### components/ui/button.tsx [coder:save]
```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        solar: "bg-solar-orange text-white hover:bg-solar-orange/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```
[coder:end]

### components/ui/input.tsx [coder:save]
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```
[coder:end]

### lib/utils.ts [coder:save]
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
[coder:end]

### 5. Let's create the layout and main components

### app/layout.tsx [coder:save]
```tsx
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'SolarConnect - Connecting Solar Energy Solutions',
  description: 'Find and compare the best solar energy products and services for your needs.',
  keywords: 'solar, energy, renewable, panels, installation, green energy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
```
[coder:end]

### components/Header.tsx [coder:save]
```tsx
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
```
[coder:end]

### components/Footer.tsx [coder:save]
```tsx
import Link from 'next/link'
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-solar-orange mr-2" />
              <span className="text-xl font-bold solar-gradient-text">SolarConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting you with the best solar energy solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-solar-orange">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-solar-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-gray-400 hover:text-solar-orange">
                  Marketplace
                </Link></li>
              <li>
                <Link href="/companies" className="text-gray-400 hover:text-solar-orange">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-solar-orange">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-solar-orange">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace?category=panels" className="text-gray-400 hover:text-solar-orange">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=batteries" className="text-gray-400 hover:text-solar-orange">
                  Energy Storage
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=inverters" className="text-gray-400 hover:text-solar-orange">
                  Inverters
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=installation" className="text-gray-400 hover:text-solar-orange">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link href="/marketplace?category=maintenance" className="text-gray-400 hover:text-solar-orange">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-solar-orange mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Solar Street, Green City, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-solar-orange mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-solar-orange mr-2" />
                <span className="text-gray-400">info@solarconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SolarConnect. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-solar-orange text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-solar-orange text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-solar-orange text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```
[coder:end]

### components/Hero.tsx [coder:save]
```tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/marketplace?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find the Best <span className="solar-gradient-text">Solar Solutions</span> for Your Needs
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Compare top-rated solar products and services from verified providers. 
              Start your journey to sustainable energy today.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex w-full max-w-md mb-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for solar products..."
                  className="pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <Button type="submit" variant="solar" className="ml-2">
                Search
              </Button>
            </form>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-solar-orange">500+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-solar-green">100+</p>
                <p className="text-sm text-gray-600">Companies</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-solar-blue">10k+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-64 md:h-96 animate-float">
              <Image
                src="/images/solar-panels-hero.jpg"
                alt="Solar Panels"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-1/4 -left-4 bg-white p-3 rounded-full shadow-lg">
              <Image
                src="/images/eco-badge.svg"
                alt="Eco Friendly"
                width={40}
                height={40}
              />
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <Image
                src="/images/savings-badge.svg"
                alt="Cost Savings"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,263.46,67.29,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
```
[coder:end]

### components/ProductCard.tsx [coder:save]
```tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviewCount: number
  image: string
  company: {
    id: number
    name: string
    logo: string
  }
  category: string
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  reviewCount,
  image,
  company,
  category
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-solar-orange text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      
      {/* Product Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Link href={`/companies/${company.id}`} className="flex items-center">
            <div className="relative h-6 w-6 mr-2">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-xs text-gray-600">{company.name}</span>
          </Link>
          
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-solar-orange font-bold">
            ${price.toLocaleString()}
          </div>
          
          <Link href={`/products/${id}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`group ${isHovered ? 'text-solar-orange' : 'text-gray-600'}`}
            >
              View Details
              <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${isHovered ? 'transform translate-x-1 text-solar-orange' : ''}`} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
```
[coder:end]

### components/Filters.tsx [coder:save]
```tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Sliders, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FiltersProps {
  onFiltersChange?: (filters: FilterState) => void
  categories?: { id: number; name: string }[]
}

interface FilterState {
  search: string
  category: string
  minPrice: string
  maxPrice: string
  rating: string
}

const Filters = ({ onFiltersChange, categories = [] }: FiltersProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    rating: searchParams.get('rating') || '',
  })

  useEffect(() => {
    // Update filters when URL search params change
    setFilters({
      search: searchParams.get('search') || '',
      category: searchParams.get('category') || '',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      rating: searchParams.get('rating') || '',
    })
  }, [searchParams])

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    
    if (onFiltersChange) {
      onFiltersChange(newFilters)
    }
  }

  const applyFilters = () => {
    const params = new URLSearchParams()
    
    if (filters.search) params.set('search', filters.search)
    if (filters.category) params.set('category', filters.category)
    if (filters.minPrice) params.set('minPrice', filters.minPrice)
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice)
    if (filters.rating) params.set('rating', filters.rating)
    
    router.push(`/marketplace?${params.toString()}`)
    setIsOpen(false)
  }

  const resetFilters = () => {
    setFilters({
      search: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      rating: '',
    })
    
    router.push('/marketplace')
    setIsOpen(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden">
          <Sliders className="h-4 w-4 mr-2" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>

      <div className={`space-y-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {/* Search */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categories
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <button
                  className="flex items-center text-sm text-gray-700 hover:text-solar-orange"
                  onClick={() => handleFilterChange('category', category.name)}
                >
                  <div className={`w-4 h-4 border rounded-sm mr-2 flex items-center justify-center ${
                    filters.category === category.name ? 'bg-solar-orange border-solar-orange' : 'border-gray-300'
                  }`}>
                    {filters.category === category.name && (
                      <Check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  {category.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="w-1/2"
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="w-1/2"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Rating
          </label>
          <div className="flex space-x-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  Number(filters.rating) === rating 
                    ? 'bg-solar-orange text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => handleFilterChange('rating', rating.toString())}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Button 
            variant="solar" 
            className="w-full"
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={resetFilters}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Filters
```
[coder:end]

### 6. Let's create the authentication pages

### app/auth/login/page.tsx [coder:save]
```tsx
'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/lib/store/authStore'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/dashboard'
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const { login } = useAuthStore()
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })
  
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)
    setError(null)
    
    try {
      await login(data.email, data.password)
      router.push(redirect)
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to login. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/auth/register" className="font-medium text-solar-orange hover:text-solar-orange/80">
              create a new account
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register('email')}
                className={errors.email ? 'border-red-300' : ''}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register('password')}
                className={errors.password ? 'border-red-300' : ''}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-solar-orange focus:ring-solar-orange border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <Link href="/auth/forgot-password" className="font-medium text-solar-orange hover:text-solar-orange/80">
                Forgot your password?
              </Link>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div>
            <Button
              type="submit"
              variant="solar"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
```
[coder:end]

### app/auth/register/page.tsx [coder:save]
```tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/lib/store/authStore'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: z.string().min(6, 'Password confirmation must be at least 6 characters'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"],
})

type RegisterFormValues = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const { register: registerUser } = useAuthStore()
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })
  
  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true)
    setError(null)
    
    try {
      await registerUser(data.name, data.email, data.password, data.passwordConfirmation)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/auth/login" className="font-medium text-solar-orange hover:text-solar-orange/80">
              sign in to your existing account
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                {...register('name')}
                className={errors.name ? 'border-red-300' : ''}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register('email')}
                className={errors.email ? 'border-red-300' : ''}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register('password')}
                className={errors.password ? 'border-red-300' : ''}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                id="passwordConfirmation"
                type="password"
                autoComplete="new-password"
                {...register('passwordConfirmation')}
                className={errors.passwordConfirmation ? 'border-red-300' : ''}
              />
              {errors.passwordConfirmation && (
                <p className="mt-1 text-sm text-red-600">{errors.passwordConfirmation.message}</p>
              )}
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div>
            <Button
              type="submit"
              variant="solar"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </Button>
          </div>
          
          <p className="text-xs text-center text-gray-500">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="text-solar-orange hover:text-solar-orange/80">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-solar-orange hover:text-solar-orange/80">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
```
[coder:end]

### 7. Let's create the home page and marketplace page

### app/page.tsx [coder:save]
```tsx
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Sun, Battery, Zap, Leaf } from 'lucide-react'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Solar <span className="solar-gradient-text">Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <Link href="/marketplace?category=panels" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-solar-orange/10 rounded-full p-4 inline-flex mb-4">
                  <Sun className="h-8 w-8 text-solar-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Solar Panels</h3>
                <p className="text-gray-600 mb-4">High-efficiency panels for residential and commercial use</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Panels
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            {/* Category 2 */}
            <Link href="/marketplace?category=batteries" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-solar-green/10 rounded-full p-4 inline-flex mb-4">
                  <Battery className="h-8 w-8 text-solar-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Energy Storage</h3>
                <p className="text-gray-600 mb-4">Battery solutions to store and manage your solar energy</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Storage
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            {/* Category 3 */}
            <Link href="/marketplace?category=inverters" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-solar-blue/10 rounded-full p-4 inline-flex mb-4">
                  <Zap className="h-8 w-8 text-solar-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inverters</h3>
                <p className="text-gray-600 mb-4">Convert DC power from solar panels to usable AC electricity</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Inverters
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            
            {/* Category 4 */}
            <Link href="/marketplace?category=accessories" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-purple-100 rounded-full p-4 inline-flex mb-4">
                  <Leaf className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                <p className="text-gray-600 mb-4">Mounting systems, monitoring tools, and other accessories</p>
                <span className="text-solar-orange font-medium inline-flex items-center group-hover:underline">
                  Browse Accessories
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/solar-installation.jpg"
                  alt="Solar Installation"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose <span className="solar-gradient-text">SolarConnect</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We connect you with the best solar solutions tailored to your needs. 
                Our platform makes it easy to compare products, read reviews, and make informed decisions.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Verified Providers</h3>
                    <p className="text-gray-600 text-sm">All companies and products are thoroughly vetted</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Transparent Reviews</h3>
                    <p className="text-gray-600 text-sm">Authentic customer reviews and ratings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p className="text-gray-600 text-sm">Guidance from solar energy specialists</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-solar-orange/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-solar-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Price Comparison</h3>
                    <p className="text-gray-600 text-sm">Find the best deals and save money</p>
                  </div>
                </li>
              </ul>
              
              <Button variant="solar" className="mt-8">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-solar-orange to-solar-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar Energy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners and businesses who have already made the switch to clean, renewable energy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" className="bg-white text-solar-orange hover:bg-gray-100">
              Browse Products
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Find Installers
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
```
[coder:end]

### app/marketplace/page.tsx [coder:save]
```tsx
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import Filters from '@/components/Filters'
import ProductCard from '@/components/ProductCard'
import api from '@/lib/api'

interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviewCount: number
  image: string
  company: {
    id: number
    name: string
    logo: string
  }
  category: string
}

interface Category {
  id: number
  name: string
}

export default function MarketplacePage() {
  const searchParams = useSearchParams()
  
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories')
        setCategories(response.data)
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }
    
    fetchCategories()
  }, [])
  
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        // Build query params from URL search params
        const params = new URLSearchParams()
        
        const search = searchParams.get('search')
        const category = searchParams.get('category')
        const minPrice = searchParams.get('minPrice')
        const maxPrice = searchParams.get('maxPrice')
        const rating = searchParams.get('rating')
        
        if (search) params.append('search', search)
        if (category) params.append('category', category)
        if (minPrice) params.append('min_price', minPrice)
        if (maxPrice) params.append('max_price', maxPrice)
        if (rating) params.append('min_rating', rating)
        
        const response = await api.get(`/products?${params.toString()}`)
        setProducts(response.data)
      } catch (err: any) {
        setError(err.response?.data?.error || 'Failed to fetch products. Please try again.')
        console.error('Error fetching products:', err)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchProducts()
  }, [searchParams])
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Solar Products Marketplace</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <Filters categories={categories} />
          </div>
          
          {/* Products Grid */}
          <div className="w-full md:w-3/4">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 text-solar-orange animate-spin" />
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Image
                    src="/images/no-results.svg"
                    alt="No products found"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    image={product.image}
                    company={product.company}
                    category={product.category}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```
[coder:end]
[coder:end]

### 8. Let's create the company registration page

### app/register/company/page.tsx [coder:save]
```tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/lib/store/authStore'
import api from '@/lib/api'

// Step 1: Basic Information Schema
const basicInfoSchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters'),
  description: z.string().min