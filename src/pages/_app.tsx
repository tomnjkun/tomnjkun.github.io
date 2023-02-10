import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme,NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#5C442B',
      primaryBorder: '#5C442B',
      primaryBorderHover: '#5C442B',
      primarySolidHover: '#5C442B',
      primarySolidContrast: '#5C442B',
      primaryShadow: '#5C442B',

    gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    link: '#5E1DAD',
      // you can also create your own color
    myColor: '#ff4ecd'

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
  );
}

/*<NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
></NextThemesProvider>*/
