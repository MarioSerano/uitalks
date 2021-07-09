import React from "react"
import tw, { css } from "twin.macro"

const Kontak: React.FC = () => {
  return (
    <div
      css={[
        css`
          margin-top: 10.25rem;
          margin-bottom: 12.5rem;
        `,
      ]}
    >
      <div tw="flex flex-col items-center mx-6 md:(mx-16) lg:(mx-30)">
        <div tw="mb-16">
          <h1 tw="font-abril-fatface text-4xl text-center">Kontak Kami</h1>
        </div>
        <div>
          <div tw="flex">
            <img tw="mr-2" src="/images/gmail.png" alt="gmail" />
            <p>uitalks.event@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kontak
