import type { AppProps } from "next/app"
import { GlobalStyles } from "twin.macro"

import { DefaultSEO } from "@components/seo"

import "../global.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <GlobalStyles />
      <DefaultSEO />
      <Component {...pageProps} />
    </div>
  )
}

export default App
