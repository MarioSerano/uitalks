import React from "react"
import tw, { css } from "twin.macro"

import { Jadwal } from "../"

export type CardProps = Jadwal

const Card: React.FC<CardProps> = props => {
  const { title, description, location, name, social, waktu, image } = props
  return (
    <div tw="flex flex-col md:(flex-row)">
      <div tw="flex flex-col mb-4 mr-6">
        <div
          css={css`
            width: 144px;
            height: 144px;

            min-width: 144px;
            min-height: 144px;
          `}
          tw="rounded-lg"
        >
          <img tw="w-full h-full" src={image} alt={name} />
        </div>
        <div tw="flex bg-uitalks-pink justify-center items-center w-full py-3 rounded-lg">
          <img tw="mr-2" src="/images/clock.png" alt="clock" />
          <p tw="font-bold text-xs">{waktu}</p>
        </div>
      </div>
      <div tw="flex flex-col">
        <div tw="flex flex-col justify-between">
          <div>
            <h1 tw="text-base font-bold mb-2">{title}</h1>
            <p tw="text-sm mb-1">{name}</p>
            <div
              tw="flex items-center"
              css={css`
                margin-bottom: 10px;
              `}
            >
              <img tw="mr-1" src="/images/pin.png" alt="pin" />
              <p
                css={css`
                  font-size: 10px;
                `}
              >
                {location}
              </p>
            </div>
          </div>
          <p
            css={css`
              font-size: 10px;
            `}
          >
            {description}
          </p>
        </div>
        <div tw="flex flex-col">
          <h1 tw="font-bold text-sm">Socials</h1>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Card
