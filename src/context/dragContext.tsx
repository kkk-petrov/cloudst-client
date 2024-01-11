"use client"

import { DragContainer } from "@/components/dragContainer/dragContainer";
import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useState } from "react";

interface DragContextProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  handleDragOver: () => void,
  handleDragLeave: () => void
}

interface ProviderProps {
  children: ReactNode
}

export const DragContext = createContext<DragContextProps>({
  isActive: false,
  setIsActive: () => { },
  handleDragOver: () => { },
  handleDragLeave: () => { }
});

export const DragProvider = ({ children }: ProviderProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleDragOver = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <DragContext.Provider value={{ isActive, setIsActive, handleDragOver, handleDragLeave }}>
      <DragContainer>
        {children}
      </DragContainer>
    </DragContext.Provider>
  );
};
