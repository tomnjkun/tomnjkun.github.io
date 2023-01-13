import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from "@nextui-org/react";
import Nav from '../components/nav'

export default function Document() {
  return (
    <Html lang="en">
      {CssBaseline.flush()}
      <Head />
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
