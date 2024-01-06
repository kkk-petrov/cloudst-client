"use client"

import { useEffect, useContext, createContext, useState, ReactNode } from 'react';
import { getSession } from 'next-auth/react';
import { Loader } from '@/components/loader/loader';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  isAuthenticated: boolean | null;
  isSessionChecked: boolean
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: null,
  isSessionChecked: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSessionChecked, setIsSessionChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        setIsAuthenticated(!!session);
      } catch (err) {
        console.error(err);
      } finally {
        setIsSessionChecked(true);
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isSessionChecked }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
}
