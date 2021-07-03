import React from "react"

import { DefaultSeo } from "next-seo"
import NEXT_SEO_CONFIG from "./next-seo.config"

const DefaultSEO: React.FC = () => {
  return <DefaultSeo {...NEXT_SEO_CONFIG} />
}

export default DefaultSEO
