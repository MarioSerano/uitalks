import React from "react"
import Link from "next/link"
import tw, { css } from "twin.macro"

import { LinkItem, ButtonProps } from "."

export const renderDrawerNavItem: (linkItem: LinkItem) => React.ReactNode =
  link => {
    return (
      <Link href={link.href}>
        <a>
          <h1
            css={[
              link.gradient &&
                css`
                  background: linear-gradient(
                    93.18deg,
                    #ec0d7a 44.47%,
                    #263483 97.37%
                  );

                  -webkit-background-clip: text;
                  color: transparent;
                `,
              css`
                width: fit-content;
              `,
            ]}
            tw="text-xs leading-4 font-bold"
          >
            {link.text}
          </h1>
        </a>
      </Link>
    )
  }

export const renderDrawerButton: (buttonItem: ButtonProps) => React.ReactNode =
  button => {
    return (
      <Link href={button.href}>
        <a>
          <button
            css={css`
              background: linear-gradient(
                180deg,
                #ec0d7a 31.25%,
                #110228 159.37%
              );
            `}
            tw="text-xs font-bold py-3 w-full"
          >
            {button.text}
          </button>
        </a>
      </Link>
    )
  }
