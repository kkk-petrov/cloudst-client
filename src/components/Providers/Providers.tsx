// import { ThemeProvider } from '';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { Container } from '../UI/Container/Container';
import { DragProvider } from '@/context/DragContext';
import { SidebarProvider } from '@/context/SidebarContext';

interface Props {
  children: ReactNode
  // session: Session | null
}

const Providers = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
        <Container>
          <DragProvider>
            {children}
          </DragProvider>
        </Container>
      </IconContext.Provider>
    </SidebarProvider>
  )
};

export default Providers 
