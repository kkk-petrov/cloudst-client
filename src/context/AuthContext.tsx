import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean | null,
  isSessionChecked: boolean | null,
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: null,
  isSessionChecked: false,
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
        // const session = await getSession();
        // FIXME: session
        const session = true
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
    </AuthContext.Provider >
  );
};
