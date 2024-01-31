// import { ThemeProvider } from '';
import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { Container } from '../UI/Container/Container';
import { DragContainer } from '../DragContainer/DragContainer';

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
      <Container>
        <DragContainer>
          {children}
        </DragContainer>
      </Container>
    </IconContext.Provider>
  )
};

export default Providers 
