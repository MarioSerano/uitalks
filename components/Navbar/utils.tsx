import React from "react"
import Link from "next/link"
import tw, { css } from "twin.macro"

import { NavItem } from "."

const NavbarButton: React.FC<Omit<NavItem, "isButton">> = props => {
  const { href, text } = props
  return (
    <Link href={href}>
      <a>
        <button
          css={css`
            background: linear-gradient(
              180deg,
              #ec0d7a 31.25%,
              #110228 159.37%
            );
          `}
          tw="rounded px-3 py-2"
        >
          {text}
        </button>
      </a>
    </Link>
  )
}

const NavLink: React.FC<Omit<NavItem, "isButton">> = props => {
  const { href, text } = props
  return (
    <Link href={href}>
      <a>
        <div>{text}</div>
      </a>
    </Link>
  )
}

export const renderNavbarNavItem: (NavItem: NavItem) => React.ReactNode =
  navItem => {
    switch (navItem.isButton) {
      case true:
        return <NavbarButton {...navItem} />
      case false:
      case undefined:
        return <NavLink {...navItem} />
    }
  }
