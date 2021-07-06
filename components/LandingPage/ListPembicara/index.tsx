import React from "react"
import tw, { css } from "twin.macro"

import Card from "./Card"
import { Pembicara } from "./types"

interface BaseListPembicaraProps {
  listPembicara: Pembicara[]
}

export type ListPembicaraProps = BaseListPembicaraProps

const ListPembicara: React.FC<ListPembicaraProps> = props => {
  const { listPembicara } = props
  return (
    <section>
      <div
        css={[
          css`
            margin-top: 10.25rem;
          `,
        ]}
      >
        <div tw="flex flex-col items-center mx-6 md:(mx-16) lg:(mx-30)">
          <div>
            <h1 tw="font-abril-fatface text-4xl text-center">List Pembicara</h1>
            <p tw="mt-9 text-center">
              Pembicara kami yang akan memeriahkan UITalks
            </p>
          </div>
          <div tw="grid md:(grid-cols-3 grid-rows-4)">
            {listPembicara.map(({ name, title }, key) => (
              <Card key={key} name={name} title={title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListPembicara
