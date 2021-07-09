import React, { useState } from "react"
import tw, { css } from "twin.macro"

import Card from "./Card"
import SmallNav from "./SmallNav"

type SocialType = "instagram" | "linkedin"

export type Social = {
  type: SocialType
  url: string
}

export type Jadwal = {
  waktu: string
  title: string
  name: string
  image: string
  location: string
  description: string
  social: Social[]
}

export interface RundownContent {
  header: string
  jadwal: Jadwal[]
}

interface BaseRundownProps {
  rundownContents: RundownContent[]
}

type RundownProps = BaseRundownProps

const Rundown: React.FC<RundownProps> = props => {
  const { rundownContents } = props
  const [activeTitle, setActiveTitle] = useState<string>(
    rundownContents[0].header
  )

  const smallNavNavigation = rundownContents.map(rundown => ({
    index: rundown.header,
    title: rundown.header,
  }))

  const activeContent = rundownContents.filter(
    rundown => rundown.header === activeTitle
  )[0]
  return (
    <section>
      <div
        css={[
          css`
            margin-top: 10.25rem;
          `,
          tw`mb-9`,
        ]}
      >
        <div tw="flex flex-col items-center mx-6 md:(mx-16) lg:(mx-30)">
          <div tw="mb-6">
            <div id="jadwal" tw="-mt-16" />
            <h1 tw="mt-16 font-abril-fatface text-4xl text-center">Rundown</h1>
          </div>
          <div tw="mb-12">
            <SmallNav
              navigations={smallNavNavigation}
              activeTitle={activeTitle}
              setActiveTitle={setActiveTitle}
            />
          </div>
          <div tw="space-y-4">
            {activeContent.jadwal.map(jadwal => (
              <Card key={jadwal.title} {...jadwal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rundown
