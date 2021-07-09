import React from "react"

import tw, { css } from "twin.macro"

const Tagar: React.FC = () => {
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
          <div tw="mb-16">
            <h1 tw="font-abril-fatface text-4xl text-center">
              Tagar #SurviveAndRise
            </h1>
          </div>
          <div css={[tw`w-full max-w-lg`]}>
            <p tw="mb-6 text-center">
              Di masa pandemi yang semakin parah. UITalks menghadirkan praktisi
              di bidangnya dalam upaya untuk bertahan hidup, dan membawakan
              UMKM-UMKM yang ada di Indonesia untuk kembali bangkit.
            </p>
            <p tw="text-center">
              Harapan kami, dengan tagar #SurviveAndRise ini, kami dapat
              membawakan workshop yang berguna bagi seluruh UMKM di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tagar
