"use client";

import { AuthProvider } from '@/context/authContext';
import { SidebarProvider } from '@/context/sidebarContext';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { Container } from '../UI/container/container';
import { DragProvider } from '@/context/dragContext';

interface Props {
  children: ReactNode
  session: Session | null
}

const Providers: FC<Props> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <NextThemesProvider defaultTheme='dark'>
          <SidebarProvider>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
              <Container>
                <DragProvider>
                  {children}
                </DragProvider>
              </Container>
            </IconContext.Provider>
          </SidebarProvider>
        </NextThemesProvider>
      </AuthProvider>
    </SessionProvider>
  )
};

export default Providers 
