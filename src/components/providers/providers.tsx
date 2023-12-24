"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { FC, PropsWithChildren } from 'react';
import { IconContext } from 'react-icons';

const Providers: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "30px" }}>
        {children}
      </IconContext.Provider>
    </NextThemesProvider>
  )
};

export default Providers 
