import { createContext, useState, useEffect, SetStateAction, Dispatch, ReactNode } from 'react';

interface SidebarContextProps {
  isSidebarHidden: boolean;
  setIsSidebarHidden: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarHidden: window.innerWidth <= 1000 ? true : false,
  setIsSidebarHidden: () => { },
});

interface SidebarProviderProps {
  children: ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(() => {
    const storedValue = localStorage.getItem('isSidebarHidden');
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem('isSidebarHidden', JSON.stringify(isSidebarHidden));
  }, [isSidebarHidden]);

  return (
    <SidebarContext.Provider value={{ isSidebarHidden, setIsSidebarHidden }}>
      {children}
    </SidebarContext.Provider>
  );
};
