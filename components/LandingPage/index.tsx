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
        title: "How to Rise and Survive During and After pandemic",
        name: "Natali Ardianto",
        image: `${baseSpeakersUrl}/natali-ardianto.png`,
        location: "Zoom, YouTube",
        description:
          "Sesi pertama adalah Tycoon Mindset. Pak Natali Ardianto selaku pembicara akan memaparkan materi tentang mindset as entrepreneur. Selain itu, peserta juga akan mendapatkan tips dan strategi untuk bertahan dan bangkit kembali selama dan setelah pandemi.",
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
        title: "How to Implement the Ideas",
        name: "Gufron Syarif",
        image: `${baseSpeakersUrl}/gufron-syarif.png`,
        location: "Zoom, YouTube",
        description:
          "Sesi kedua adalah Execute Like a Pros. Pada sesi kedua, webinar akan dibawakan oleh Gufron Syarif selaku CEO Haus, dengan materi bagaimana mengimplementasikan sebuah ide. Selain pemaparan materi oleh pembicara, akan dilaksanakan juga workshop berupa Business Model Canvas.",
        social: [
          {
            type: "instagram",
            url: "https://www.instagram.com/gufronsyarif/?hl=en",
          },
        ],
      },
      {
        waktu: "15:00 - 16:00",
        title: "The Journey of Keke Genio in Building Lokapoin",
        name: "Keke Genio",
        image: `${baseSpeakersUrl}/keke-genio.png`,
        location: "Zoom, YouTube",
        description:
          "Sesi ketiga adalah Learn from the Experienced. Pada sesi ketiga, materi akan dibawakan oleh Keke Genio selaku Co-Founder at Lokapoin. Kak Keke Genio akan membagikan cerita dan pengalamannya dalam membangun bisnisnya.",
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
          "Empowering leadership : The Role of Management Empowerment in Facing Pandemic",
        name: "Arief Munandar",
        image: `${baseSpeakersUrl}/arief-munandar.png`,
        location: "Zoom, YouTube",
        description:
          "Sesi pertama adalah Tycoon Mindset. Pak Arief Munandar selaku pembicara akan memaparkan materi tentang Leadership dalam sebuah bisnis. Selain itu, peserta juga akan mendapatkan insight mengenai bagaimana memberdayakan sumber daya yang dimiliki selama masa pandemi.",
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
        title: "Collaboration is Key To Transform Business in Digital Era",
        name: "Tom MC Ifle",
        image: `${baseSpeakersUrl}/tom-mcifle.png`,
        location: "Zoom, YouTube",
        description:
          "Sesi kedua adalah Execute Like a Pros. Pada sesi kedua, webinar akan dibawakan oleh Coach Tom Mc Ifle selaku CEO Top Coach Indonesia, dengan materi bagaimana pentingnya berkolaborasi dalam membangun bisnis di era digital. Selain pemaparan materi oleh pembicara, akan dilaksanakan juga workshop agar peserta dapat mempraktekkannya dalam bisnisnya.",
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
          "Great Mindset: Adopting An Agile Mindset and Organize Your Team In Business",
        name: "Fellexandro Ruby",
        image: `${baseSpeakersUrl}/fellexandro-ruby.png`,

        location: "Zoom, YouTube",
        description:
          "Sesi ketiga adalah Learn from the Experienced. Pada sesi ketiga, materi akan dibawakan oleh Fellexandro Ruby selaku Co-Founder MentorGue dan Content Creator. Kak Fellexandro Ruby akan membagikan cerita dan pengalamannya dalam membangun karir, berkolaborasi dengan banyak orang, dan pentingnya mengelola sebuah tim selama ia berkarir.",
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
          "Sesi pertama adalah Tycoon Mindset. Kak Michael Gunawan selaku pembicara akan memaparkan materi tentang pentingnya memisahkan keuangan pribadi dengan keuangan bisnis. Selain itu, peserta juga akan mendapatkan insight mengenai mindset yang harus dimiliki seorang pebisnis dalam mengelola keuangan.",
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
          "Sesi kedua adalah Execute Like a Pros. Pada sesi kedua, webinar akan dibawakan oleh Klemens Rahardja selaku Founder The Entrepreneurs Society, dengan materi bagaimana melakukan perencanaan dan ekspetasi keuangan dalam bisnis. Selain pemaparan materi oleh pembicara, akan dilaksanakan juga workshop agar peserta dapat mempraktekkannya dalam bisnisnya.",
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
        title: "Financial Models and Taxes : Why They Are Important",
        name: "Rayhan Gautama",
        image: `${baseSpeakersUrl}/rayhan-gautama.png`,
        location: "Zoom, YouTube",
        description:
          "Sesi ketiga adalah Learn from the Experienced. Pada sesi ketiga, materi akan dibawakan oleh Rayhan Gautama selaku CEO Pajak.io. Kak Rayhan Gautama akan membagikan cerita dan pengalamannya dalam pengelolaan keuangan dalam bisnisnya dan juga memberikan insight mengenai perpajakan bagi UMKM.",
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
          "Sesi pertama adalah Tycoon Mindset. Kak Rifqi Edrus selaku pembicara akan memaparkan materi tentang bedanya marketing dan branding, dan bagaimana cara melakukan keduanya. Selain itu, pembicara juga akan memberikan insight mengenai mindset yang harus dimiliki seorang pebisnis dalam melakukan marketing dan juga branding.",
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
          "Sesi kedua adalah Execute Like a Pros. Pada sesi kedua, webinar akan dibawakan oleh Dimas Nugroho Putro selaku Digital Strategyst Lead Female Daily, dengan materi bagaimana melakukan digital marketing dan branding yang efektif. Selain pemaparan materi oleh pembicara, akan dilaksanakan juga workshop agar peserta mengenai digital marketing.",
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
          "Sesi ketiga adalah Learn from the Experienced. Pada sesi ketiga, materi akan dibawakan oleh Tommy Surya Teja selaku Founder Zalmon Fabric. Kak Tommy Surya Teja akan membagikan cerita dan pengalamannya dalam membangun bisnisnya terutama perjalanannya untuk menjadi beda dari yang lain.",
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
