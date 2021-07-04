import React from "react"
import tw, { css } from "twin.macro"

import Link from "next/link"
import { useDisclosure } from "@chakra-ui/react"

import { renderNavbarNavItem } from "./utils"
import MobileDrawer, { BaseMobileDrawerProps } from "./MobileDrawer"

export type NavItem = {
  href: string | Location
  text: string
  isButton?: boolean
}

export type Navigation = {
  left: NavItem[]
  right: NavItem[]
}

interface BaseNavbarProps {
  desktopNavigation: Navigation
  mobileNavigation: BaseMobileDrawerProps
}

type NavbarProps = BaseNavbarProps

const Navbar: React.FC<NavbarProps> = props => {
  const {
    desktopNavigation: { left, right },
    mobileNavigation,
  } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div
      css={css`
        z-index: 1406;
      `}
      tw="fixed top-0 left-0 h-16 w-screen flex items-center bg-uitalks-primary px-6 md:(px-16) lg:(py-3 px-30)"
    >
      <div tw="block md:hidden">
        <MobileDrawer {...mobileNavigation} isOpen={isOpen} onClose={onClose} />
      </div>

      <div tw="flex justify-between w-full my-auto xl:(max-w-5xl)">
        <div>
          <Link href="/">
            <a>
              <img src="/images/logo-pc.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div tw="flex items-center md:hidden">
          {!isOpen ? (
            <button onClick={onOpen}>
              <img src="/images/burger-icon.png" alt="burger" />
            </button>
          ) : (
            <button tw="mr-2" onClick={onClose}>
              <img src="/images/close-icon.png" alt="close" />
            </button>
          )}
        </div>
        <div
          css={css`
            nav {
              * {
                font-size: 0.875rem;
                line-height: 16px;
                font-weight: bold;
                color: #ffffff;
              }
            }
          `}
          tw="hidden md:flex items-center space-x-5 py-1"
        >
          <nav tw="flex space-x-5 items-center">
            {left.map((navItem, key) => (
              <div key={key}>{renderNavbarNavItem(navItem)}</div>
            ))}
          </nav>
          <div
            css={css`
              height: 24px;
              width: 1px;
              background: #ffffff;
            `}
          />
          <nav tw="flex space-x-5 items-center">
            {right.map((navItem, key) => (
              <div key={key}>{renderNavbarNavItem(navItem)}</div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
