import React from "react"
import ReactPlayer from "react-player/youtube"

import tw, { css } from "twin.macro"

interface BaseCompanyProfileProps {
  youtubeUrl?: string
}

export type CompanyProfileProps = BaseCompanyProfileProps

const CompanyProfile: React.FC<CompanyProfileProps> = props => {
  const { youtubeUrl } = props
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
          <div tw="max-w-lg">
            <h1 tw="font-abril-fatface text-4xl text-center">
              Apa itu UITalks?
            </h1>
            <p tw="mt-9 text-center">
              UITalks adalah workshop/webinar yang diadakan mulai dari tahun
              2020 oleh CEDS UI. Dengan suksesnya UITalks di tahun 2020, UITalks
              hadir di tahun ini dengan tema #SurviveAndRise.
            </p>
            <p tw="mt-6 text-center">
              Tonton video di bawah ini untuk melihat keseruan UITalks di tahun
              2020!
            </p>
          </div>
          <div
            tw="relative w-full overflow-hidden mt-9"
            css={css`
              padding-top: 56.25%;
            `}
          >
            <ReactPlayer
              url={youtubeUrl}
              width="100%"
              height="100%"
              tw="absolute top-0 left-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfile
