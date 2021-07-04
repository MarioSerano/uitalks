import React from "react"
import tw, { css } from "twin.macro"

import Navbar, { NavItem, Navigation } from "@components/Navbar"
import {
  BaseMobileDrawerProps,
  ButtonProps,
  LinkItem,
} from "@components/Navbar/MobileDrawer"
import { SEO } from "@components/seo"

const DesktopLeftNavItems = [
  {
    href: "/#list-pembicara",
    text: "Lihat List Pembicara",
    isButton: true,
  },
  {
    href: "/#jadwal",
    text: "Jadwal",
  },
  {
    href: "/#tentang-uitalks",
    text: "Tentang UITalks",
  },
] as NavItem[]

const DesktopRightNavItems = [
  {
    href: "http://bit.ly/TicketUITalks",
    text: "Beli Tiket",
  },
  // {
  //   href: "/merch/",
  //   text: "Beli Merch"
  // }
] as NavItem[]

const DesktopNavigationContent = {
  left: DesktopLeftNavItems,
  right: DesktopRightNavItems,
} as Navigation

const MobileNavigationLinks = [
  {
    text: "Lihat List Pembicara",
    href: "/#list-pembicara",
    gradient: true,
  },
  {
    text: "Jadwal",
    href: "/#jadwal",
  },
  {
    text: "Tentang UITalks",
    href: "/#tentang-uitalks",
  },
] as LinkItem[]

const MobileNavigationButtons = [
  {
    href: "http://bit.ly/TicketUITalks",
    text: "Beli Tiket",
  },
  // {
  //   href: "/merch/",
  //   text: "Beli Merch"
  // }
] as ButtonProps[]

const MobileNavigationContent = {
  links: MobileNavigationLinks,
  buttons: MobileNavigationButtons,
} as BaseMobileDrawerProps

interface BaseLayoutProps {
  title?: string
  children?: React.ReactNode
}

type LayoutProps = BaseLayoutProps

const Layout: React.FC<LayoutProps> = props => {
  const { title, children } = props
  return (
    <div
      css={css`
        background: #110228;
      `}
    >
      {title && <SEO title={title} />}
      <Navbar
        mobileNavigation={MobileNavigationContent}
        desktopNavigation={DesktopNavigationContent}
      />
      <main
        css={[
          css`
            margin-top: 64px;
            min-height: calc(100vh - 64px);
          `,
        ]}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
