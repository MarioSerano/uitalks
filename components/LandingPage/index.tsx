import React from "react"
import tw, { css } from "twin.macro"

import Hero, { PembicaraHero } from "./Hero"

import CompanyProfile from "./CompanyProfile"
import ListPembicara from "./ListPembicara"

const baseSpeakersUrl = "/images/speakers"

const Speakers = [
  {
    name: "Fellexandro Ruby",
    title: "Cofounder MentorGue",
    src: `${baseSpeakersUrl}/fellexandro-ruby.png`,
  },
  {
    name: "Gufron Syarif",
    title: "CEO of Haus!",
    src: `${baseSpeakersUrl}/gufron-syarif.png`,
  },
  {
    name: "Keke Genio",
    title: "CMO of LokaPoin",
    src: `${baseSpeakersUrl}/keke-genio.png`,
  },
  {
    name: "Natali Ardianto",
    title: "CEO of Lifepack.id and Jovee.id",
    src: `${baseSpeakersUrl}/natali-ardianto.png`,
  },
  {
    name: "Klemens Rahardja",
    title: "Founder of Entrepreneurs Society",
    src: `${baseSpeakersUrl}/klemens-rahardja.png`,
  },
  {
    name: "Michael Gunawan",
    title: "Investment Associate at Altus",
    src: `${baseSpeakersUrl}/michael-gunawan.png`,
  },
  {
    name: "Rayhan Gautama",
    title: "CEO of Pajak.io",
    src: `${baseSpeakersUrl}/rayhan-gautama.png`,
  },
  {
    name: "Tommy Teja",
    title: "Founder of PT Zalmon Lestari Maha Megeri",
    src: `${baseSpeakersUrl}/tommy-teja.png`,
  },
  {
    name: "Arief Munandar",
    title: "Founder of Peopleshift",
    src: `${baseSpeakersUrl}/arief-munandar.png`,
  },
  {
    name: "Dimas Nugroho",
    title: "Digital Strategist Lead at FemaleDaily.com",
    src: `${baseSpeakersUrl}/dimas-nugroho.png`,
  },
  {
    name: "Rifqi Edrus",
    title: "CMO of Goorita.com",
    src: `${baseSpeakersUrl}/rifqi-edrus.png`,
  },
  {
    name: "Tom MC Ifle",
    title: "CEO of Top Coach Indonesia",
    src: `${baseSpeakersUrl}/tom-mcifle.png`,
  },
]

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero
        speakersMid={Speakers.slice(0, 4)}
        speakersLeft={Speakers.slice(4, 8)}
        speakersRight={Speakers.slice(8, 12)}
      />
      <CompanyProfile youtubeUrl="https://www.youtube.com/watch?v=gFYgD6mXAbw" />
      <ListPembicara listPembicara={Speakers} />
    </div>
  )
}

export default LandingPage
