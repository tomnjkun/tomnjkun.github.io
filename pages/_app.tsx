import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme,NextUIProvider } from '@nextui-org/react'
import { SSRProvider } from '@react-aria/ssr'

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  /*theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }*/
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  )
}
