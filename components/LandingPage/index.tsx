import React from "react"
import tw, { css } from "twin.macro"

import Hero, { PembicaraHero } from "./Hero"

import CompanyProfile from "./CompanyProfile"
import ListPembicara from "./ListPembicara"
import Rundown, { RundownContent } from "./Rundown"
import Tagar from "./Tagar"
import Kontak from "./Kontak"

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

const RundownContents: RundownContent[] = [
  {
    header: "10 Juli",
    jadwal: [
      {
        waktu: "13:00 - 14:00",
        title: "How to Rise and Survive During and After Pandemic",
        name: "Natali Ardianto",
        image: `${baseSpeakersUrl}/natali-ardianto.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/nataliardianto/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/nataliardianto",
          },
        ],
      },
      {
        waktu: "14:00 - 15:00",
        title: "Execute Like Props: How to Implement the Ideas",
        name: "Gufron Syarif",
        image: `${baseSpeakersUrl}/gufron-syarif.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/gufronsyarif/?hl=en",
          },
        ],
      },
      {
        waktu: "15:00 - 16:00",
        title: "The Journey of Keke Genio in Building LokaPoin",
        name: "Keke Genio",
        image: `${baseSpeakersUrl}/keke-genio.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/kekegeniouz/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/keke-genio-1505",
          },
        ],
      },
    ],
  },
  {
    header: "11 Juli",
    jadwal: [
      {
        waktu: "13:00 - 14:00",
        title:
          "Empowering Leadership: The Role of Management in Facing Pandemic",
        name: "Arief Munandar",
        image: `${baseSpeakersUrl}/arief-munandar.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/bangariefm/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://www.linkedin.com/in/ariefmunandar/?originalSubdomain=id",
          },
        ],
      },
      {
        waktu: "14:00 - 15:00",
        title:
          "Collaboration is the Key to Transform Business in the Digital Era",
        name: "Tom MC Ifle",
        image: `${baseSpeakersUrl}/tom-mcifle.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/tommcifle/",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/tommcifle",
          },
        ],
      },
      {
        waktu: "15:00 - 16:00",
        title:
          "Great Mindset: Adopting an Agile Mindset and Organize Your Team in Business",
        name: "Fellexandro Ruby",
        image: `${baseSpeakersUrl}/fellexandro-ruby.png`,

        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/fellexandro/",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/fellexandroruby",
          },
        ],
      },
    ],
  },
  {
    header: "17 Juli",
    jadwal: [
      {
        waktu: "13:00 - 14:00",
        title:
          "Personal Finance vs Business Finance: The Important Differences",
        name: "Michael Gunawan",
        image: `${baseSpeakersUrl}/michael-gunawan.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/mmigun/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/michael-gunawan-cfa-365557a5",
          },
        ],
      },
      {
        waktu: "14:00 - 15:00",
        title: "Forecasting: Setting Expectations and Achieving Results",
        name: "Klemens Rahardja",
        image: `${baseSpeakersUrl}/klemens-rahardja.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/klemensrahardja/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/klemensrahardja",
          },
        ],
      },
      {
        waktu: "15:00 - 16:00",
        title: "Financial Models and Plans: Why Are They Important",
        name: "Rayhan Gautama",
        image: `${baseSpeakersUrl}/rayhan-gautama.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/rayhangautama",
          },
        ],
      },
    ],
  },
  {
    header: "18 Juli",
    jadwal: [
      {
        waktu: "13:00 - 14:00",
        title: "Marketing vs Branding - What is Brand Marketing?",
        name: "Rifqi Edrus",
        image: `${baseSpeakersUrl}/rifqi-edrus.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/rifqi.edrus/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/rifqiedrus",
          },
        ],
      },
      {
        waktu: "14:00 - 15:00",
        title:
          "How to Create an Effective Branding and Digital Marketing Strategy",
        name: "Dimas Nugroho Putro",
        image: `${baseSpeakersUrl}/dimas-nugroho.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/danbatoz/?hl=en",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/dimas-nugroho-putro",
          },
        ],
      },
      {
        waktu: "15:00 - 16:00",
        title: "Dare to Be Different: Differentiate Yourself",
        name: "Tommy Surya Teja",
        image: `${baseSpeakersUrl}/tommy-teja.png`,
        location: "Zoom, YouTube",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec urna iaculis, semper massa ac, hendrerit enim. Vivamus lacus sapien, sollicitudin sit amet felis eu, placerat placerat neque. Nulla ultrices sed nisi non molestie. Sed mattis vel lectus vitae interdum. Aliquam condimentum congue elit in tempor. Duis faucibus, mi et tristique rhoncus, metus augue porttitor mi, eu venenatis sem leo non mauris. Aliquam eget dictum sem. Phasellus in tempus mauris.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/tommyteja/",
          },
          {
            type: "linkedin",
            url: "https://id.linkedin.com/in/tommyteja",
          },
        ],
      },
    ],
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
      <Rundown rundownContents={RundownContents} />
      <Tagar />
      <Kontak />
    </div>
  )
}

export default LandingPage
