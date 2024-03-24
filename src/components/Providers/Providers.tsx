// import { ThemeProvider } from '';
import { ReactNode } from "react";
import { IconContext } from "react-icons";
import { Container } from "../UI/Container/Container";
import { DragProvider } from "@/context/DragContext";
import { DragContainer } from "../DragContainer/DragContainer";
import { ThemeProvider } from "@/context/ThemeContext";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <IconContext.Provider
        value={{ style: { verticalAlign: "middle" }, size: "30px" }}
      >
        <DragProvider>
          <Container>
            <DragContainer>{children}</DragContainer>
          </Container>
        </DragProvider>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
