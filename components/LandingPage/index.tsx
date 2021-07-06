import React from "react"
import tw, { css } from "twin.macro"

import Hero from "./Hero"
import CompanyProfile from "./CompanyProfile"

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CompanyProfile youtubeUrl="https://www.youtube.com/watch?v=gFYgD6mXAbw" />
    </div>
  )
}

export default LandingPage
