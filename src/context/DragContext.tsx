import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface IDragContext {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  handleDragOver: () => void;
  handleDragLeave: () => void;
}

interface Props {
  children: ReactNode;
}

const DragContext = createContext<IDragContext>({
  isActive: false,
  setIsActive: () => { },
  handleDragOver: () => { },
  handleDragLeave: () => { },
});

export const DragProvider = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleDragOver = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <DragContext.Provider
      value={{ isActive, setIsActive, handleDragOver, handleDragLeave }}
    >
      {children}
    </DragContext.Provider>
  );
};

export const useDrag = () => {
  return useContext(DragContext);
};
