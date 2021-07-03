import React from "react"
import tw from "twin.macro"

import Navbar from "@components/Navbar"
import { SEO } from "@components/seo"

interface BaseLayoutProps {
  title?: string
  children?: React.ReactNode
}

type LayoutProps = BaseLayoutProps

const Layout: React.FC<LayoutProps> = props => {
  const { title, children } = props
  return (
    <div>
      {title && <SEO title={title} />}
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
