import React from "react"
import tw, { css } from "twin.macro"

import {
  Drawer,
  DrawerOverlay,
  DrawerProps,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react"

import { renderDrawerNavItem, renderDrawerButton } from "./utils"

export type ButtonProps = {
  text: string
  href: string | Location
}

export type LinkItem = {
  text: string
  href: string | Location
  gradient?: boolean
}

export interface BaseMobileDrawerProps {
  links: LinkItem[]
  buttons: ButtonProps[]
}

type MobileDrawerProps = BaseMobileDrawerProps &
  Omit<DrawerProps, "placement" | "children">

const MobileDrawer: React.FC<MobileDrawerProps> = props => {
  const { links, buttons, ...other } = props
  return (
    <Drawer placement="top" {...other}>
      <DrawerOverlay />
      <DrawerContent
        background="uitalks-primary"
        paddingX="6"
        paddingBottom="8"
      >
        <div tw="mt-16">
          <DrawerHeader paddingX="0" paddingTop="3" paddingBottom="0">
            <div tw="space-y-5">
              {links.map((linkItem, key) => (
                <div key={key}>{renderDrawerNavItem(linkItem)}</div>
              ))}
            </div>
          </DrawerHeader>
          <DrawerBody paddingX="0" paddingTop="24" paddingBottom="0">
            <div tw="space-y-2">
              {buttons.map((buttonItem, key) => (
                <div key={key}>{renderDrawerButton(buttonItem)}</div>
              ))}
            </div>
          </DrawerBody>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileDrawer
