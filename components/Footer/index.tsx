import React from "react"
import Link from "next/link"
import tw, { css } from "twin.macro"

const Footer: React.FC = () => {
  return (
    <footer tw="bg-white flex flex-col justify-between pt-9 pb-14 px-6 md:(px-16) lg:(px-30)">
      <div tw="flex flex-col space-y-6 md:(space-y-0 flex-row) justify-between mb-16">
        <div tw="flex flex-col">
          <h1 tw="font-bold text-base text-black mb-2">Acara Kami</h1>
          <div tw="flex flex-col space-y-1">
            <Link href="/#list-pembicara">
              <a>
                <p tw="text-black">List Pembicara</p>
              </a>
            </Link>

            <Link href="/#jadwal">
              <a>
                <p tw="text-black">Jadwal</p>
              </a>
            </Link>
          </div>
        </div>
        <div tw="flex flex-col">
          <h1 tw="font-bold mb-2 text-black">Kunjungi media sosial kami!</h1>
          <div tw="flex space-x-4">
            <Link href="https://www.instagram.com/ui.talks/">
              <a>
                <img tw="w-full h-full" src="/images/instagram.png" />
              </a>
            </Link>
            <Link href="https://id.linkedin.com/company/uitalks">
              <a>
                <img tw="w-full h-full" src="/images/linkedin.png" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div tw="flex justify-between">
        <div tw="flex flex-col">
          <img tw="mb-1" src="/images/logo-alternative.png" alt="logo" />
          <p tw="text-black text-center">#SurviveAndRise</p>
        </div>
        <div tw="flex justify-center md:justify-end items-center">
          <img tw="mr-1 w-4 h-4" src="/images/copyright.png" alt="copyright" />
          <span tw="text-black">2021 UITalks</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
