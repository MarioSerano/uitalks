import React from "react"
import tw from "twin.macro"

import LandingPage from "@components/LandingPage"
import Layout from "@components/layout"

const Home: React.FC = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  )
}

export default Home
