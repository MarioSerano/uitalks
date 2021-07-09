import React from "react"
import tw, { css } from "twin.macro"

import { renderSocial } from "./utils"
import { Jadwal } from "../"

export type CardProps = Jadwal

const Card: React.FC<CardProps> = props => {
  const { title, description, location, name, social, waktu, image } = props
  return (
    <div
      css={[
        tw`grid gap-x-6 gap-y-4 p-6 rounded-2xl`,
        css`
          background: #1c073d;
          grid-template-columns: minmax(auto, 320px);
          grid-template-rows: 2fr;
          @media (min-width: 768px) {
            grid-template-columns: minmax(auto, 144px) 1fr;
            grid-template-rows: repeat(2, auto);
          }
        `,
      ]}
    >
      <div
        css={[
          css`
            width: 100%;
            height: auto;
            @media (min-width: 768px) {
              grid-column: 1/2;
              grid-row: 1/2;
            }
          `,
          tw`rounded-lg flex items-center`,
        ]}
      >
        <img tw="w-full h-auto" src={image} alt={name} />
      </div>
      <div
        css={[
          css`
            @media (min-width: 768px) {
              grid-column: 2/3;
              grid-row: 1/2;
            }
          `,
        ]}
        tw="flex flex-col"
      >
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
      <div
        css={[
          css`
            @media (min-width: 768px) {
              grid-row: 2/3;
              grid-column: 1/2;
            }
          `,
          tw`flex bg-uitalks-pink justify-center items-center w-full py-3 rounded-lg`,
        ]}
      >
        <img tw="mr-2" src="/images/clock.png" alt="clock" />
        <p tw="font-bold text-xs">{waktu}</p>
      </div>

      <div
        css={[
          css`
            @media (min-width: 768px) {
              grid-row: 2/3;
              grid-column: 2/3;
            }
          `,
          tw`flex flex-col items-center justify-center`,
        ]}
      >
        <h1 tw="font-bold text-sm mb-1">Socials</h1>
        <div tw="flex space-x-3">
          {social.map((s, key) => (
            <div key={key}>{renderSocial(s)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
