"use client"
import { createContext, useContext, useState, useEffect, SetStateAction, FC, PropsWithChildren, Dispatch } from 'react';

interface SidebarContextProps {
  isSidebarHidden: boolean;
  setIsSidebarHidden: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarHidden: false,
  setIsSidebarHidden: () => { },
});

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem('isSidebarHidden');
      return storedValue ? JSON.parse(storedValue) : false;
    }
  });

  useEffect(() => {
    window.localStorage.setItem('isSidebarHidden', JSON.stringify(isSidebarHidden));
  }, [isSidebarHidden]);

  return (
    <SidebarContext.Provider value={{ isSidebarHidden, setIsSidebarHidden }}>
      {children}
    </SidebarContext.Provider>
  );
};
