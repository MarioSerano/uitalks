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
        url: "/images/android-chrome-256x256.png",
        width: 256,
        height: 256,
        alt: "uitalks-logo",
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
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },

    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: "#da532c",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
} as DefaultSeoProps

export default NEXT_SEO_CONFIG
