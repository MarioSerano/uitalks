import { DefaultSeoProps } from "next-seo"

const NEXT_SEO_CONFIG = {
  titleTemplate: "%s | UITalks",
  defaultTitle: "UITalks | Workshop Bisnis Terbesar di Indonesia",
  description:
    "UITalks adalah workshop bisnis terbesar yang diadakan oleh mahasiswa. Kami menghadirkan 12++ pembicara yang terampil di bidangnya",
  canonical: "https://www.uitalks.herokuapp.com",
  openGraph: {
    type: "website",
    title: "UITalks | Workshop Bisnis Terbesar di Indonesia",
    images: [
      {
        url: "/images/seo/og-image.jpg",
        width: 640,
        height: 640,
        alt: "compfest-logo",
      },
    ],
    url: "https://www.uitalks.herokuapp.com",
    locale: "en_US",
    site_name: "UITalks",
  },
  twitter: {
    cardType: "summary",
    site: "@ui.talks",
    handle: "@ui.talks",
  },
} as DefaultSeoProps

export default NEXT_SEO_CONFIG
