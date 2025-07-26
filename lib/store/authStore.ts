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