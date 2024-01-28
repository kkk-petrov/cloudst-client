import { AuthProvider } from '@/context/AuthContext';
// import { ThemeProvider } from '';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { Container } from '../UI/Container/Container';
import { DragProvider } from '@/context/DragContext';

interface Props {
  children: ReactNode
  // session: Session | null
}

const Providers = ({ children }: Props) => {
  return (
    <AuthProvider>
      {/* <ThemeProvider defaultTheme='dark'> */}
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
        <Container>
          <DragProvider>
            {children}
          </DragProvider>
        </Container>
      </IconContext.Provider>
      {/* </ThemeProvider> */}
    </AuthProvider>
  )
};

export default Providers 
