// import { ThemeProvider } from '';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { Container } from '../UI/Container/Container';
import { DragProvider } from '@/context/DragContext';
import { DragContainer } from '../DragContainer/DragContainer';

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
      <DragProvider>
        <Container>
          <DragContainer>
            {children}
          </DragContainer>
        </Container>
      </DragProvider>
    </IconContext.Provider>
  )
};

export default Providers 
