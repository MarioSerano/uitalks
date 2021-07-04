import type { AppProps } from "next/app"
import { GlobalStyles } from "twin.macro"
import { ChakraProvider } from "@chakra-ui/react"

import { DefaultSEO } from "@components/seo"
import theme from "@lib/theme"

import "../global.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <GlobalStyles />
      <DefaultSEO />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}

export default App
