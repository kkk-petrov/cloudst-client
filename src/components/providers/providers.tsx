"use client";

import { SidebarProvider } from '@/context/sidebarContext';
import { Session } from 'next-auth';
import { SessionProvider, getSession } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { IconContext } from 'react-icons';

interface Props {
  children: ReactNode
  session: Session | null
  props: ThemeProviderProps
}

const Providers: FC<Props> = ({ children, session, ...props }) => {
  return (
    <SessionProvider>
      <NextThemesProvider {...props}>
        <SidebarProvider>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
            {children}
          </IconContext.Provider>
        </SidebarProvider>
      </NextThemesProvider>
    </SessionProvider>
  )
};

export default Providers 
