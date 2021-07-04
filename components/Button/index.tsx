import React from "react"
import Link from "next/link"

import tw, { css } from "twin.macro"

export type ButtonSize = "full" | "half" | "default"

interface BaseButtonProps {
  children?: React.ReactNode
  href?: string | Location
  size?: ButtonSize
}

export type ButtonProps = BaseButtonProps

const ButtonSizeMap = {
  full: "100%",
  half: "50%",
}

const Button: React.FC<ButtonProps> = props => {
  const { children, href, size = "default" } = props

  if (href) {
    return (
      <Link href={href}>
        <a>
          <button
            css={[
              size === "default"
                ? tw`px-6`
                : css`
                    width: ${ButtonSizeMap[size]};
                  `,
              css`
                background: linear-gradient(
                  180deg,
                  #ec0d7a 31.25%,
                  #110228 159.37%
                );
              `,
              tw`py-3 rounded-lg`,
            ]}
          >
            {children}
          </button>
        </a>
      </Link>
    )
  }

  return (
    <button
      css={[
        size === "default"
          ? tw`px-6`
          : css`
              width: ${ButtonSizeMap[size]};
            `,
        css`
          background: linear-gradient(180deg, #ec0d7a 31.25%, #110228 159.37%);
        `,
        tw`py-3 rounded-lg`,
      ]}
    >
      {children}
    </button>
  )
}

export default Button
