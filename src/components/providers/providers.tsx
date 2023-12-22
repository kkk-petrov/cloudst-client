"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { IconContext } from 'react-icons';

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>

    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "25px" }}>
      {children}</IconContext.Provider></NextThemesProvider>;
};

export default Providers 
