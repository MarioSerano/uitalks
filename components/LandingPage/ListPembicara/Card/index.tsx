import React from "react"
import tw, { css } from "twin.macro"

import { Pembicara } from "../types"

export type CardProps = Pembicara

// this is not reusable unless used the same
const Card: React.FC<Pembicara> = props => {
  const { name, title, src } = props
  return (
    <div
      css={css`
        background: linear-gradient(180deg, #263483 50%, #ec0d7a 100%);
      `}
      tw="flex flex-col items-center justify-start rounded-xl p-6 w-full h-full"
    >
      <div tw="w-full h-auto">
        <img
          css={css`
            width: 100%;
            height: 100%;
          `}
          src={src}
          alt={name}
        />
      </div>
      <div
        css={[
          css`
            max-width: 250px;
          `,
        ]}
        tw="mt-4"
      >
        <h1 tw="text-center text-2xl text-white font-bold">{name}</h1>
        <p tw="text-center mt-2 text-white">{title}</p>
      </div>
    </div>
  )
}

export default Card
