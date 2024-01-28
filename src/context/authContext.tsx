"use client"

import { useEffect, useContext, createContext, useState, ReactNode, useMemo } from 'react';
import { getSession } from 'next-auth/react';

interface AuthContextProps {
  authContextValue: {
    isAuthenticated: boolean | null,
    isSessionChecked: boolean | null,
  }
}

export const AuthContext = createContext<AuthContextProps>({
  authContextValue: {
    isAuthenticated: null,
    isSessionChecked: false,
  }
});

interface ProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSessionChecked, setIsSessionChecked] = useState<boolean | null>(false);

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

  const authContextValue = useMemo(() => ({ isAuthenticated, isSessionChecked }), [isAuthenticated, isSessionChecked]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
