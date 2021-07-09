import React, { useState } from "react"
import tw, { css } from "twin.macro"

import Card from "./Card"
import { Pembicara } from "./types"

interface BaseListPembicaraProps {
  listPembicara: Pembicara[]
}

export type ListPembicaraProps = BaseListPembicaraProps

const ListPembicara: React.FC<ListPembicaraProps> = props => {
  const [showMore, setShowMore] = useState<boolean>(false)
  const { listPembicara } = props
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
          <div>
            <div tw="-mt-16" id="list-pembicara" />
            <h1 tw="mt-16 font-abril-fatface text-4xl text-center">
              List Pembicara
            </h1>
            <p tw="mt-9 text-center">
              Pembicara kami yang akan memeriahkan UITalks
            </p>
          </div>
          <div
            css={[
              tw`grid mt-8 w-auto md:(w-full grid-cols-2 grid-rows-6) lg:(grid-cols-3 grid-rows-4)`,
              css`
                grid-row-gap: 2.5rem;
                grid-column-gap: 6rem;
              `,
            ]}
          >
            {listPembicara.map((props, key) => (
              <div
                key={key}
                css={[
                  showMore ? tw`block` : tw`hidden`,
                  key <= 2 && tw`block`,
                  tw`w-full h-full md:(block)`,
                ]}
              >
                <Card {...props} />
              </div>
            ))}
          </div>
          <div css={[tw`block md:hidden`, showMore ? tw`hidden` : tw`block`]}>
            <button
              tw="flex flex-col items-center text-2xl mt-4"
              onClick={() => setShowMore(true)}
            >
              <span tw="mb-1">Show More</span>
              <span>
                <img src="/images/chevron-down.png" alt="down chevron" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListPembicara
