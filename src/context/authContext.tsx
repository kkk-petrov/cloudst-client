"use client"

import { useEffect, useContext, createContext, useState, ReactNode } from 'react';
import { getSession } from 'next-auth/react';

interface AuthContextProps {
  isAuthenticated: boolean | null;
  isSessionChecked: boolean
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: null,
  isSessionChecked: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSessionChecked, setIsSessionChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const storedSession = localStorage.getItem('session');
        const storedTimestamp = localStorage.getItem('sessionTimestamp');

        if (storedSession && storedTimestamp) {
          const expirationTime = 60 * 1 * 1000;
          const currentTime = new Date().getTime();

          if (currentTime - parseInt(storedTimestamp) < expirationTime) {
            setIsAuthenticated(true);
            return;
          } 
        }

        const session = await getSession();
        setIsAuthenticated(!!session);

        localStorage.setItem('session', JSON.stringify(session));
        localStorage.setItem('sessionTimestamp', new Date().getTime().toString());
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

