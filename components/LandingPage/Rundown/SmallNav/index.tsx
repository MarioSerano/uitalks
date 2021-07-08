import React from "react"
import tw, { css } from "twin.macro"

export type SmallNavNavigation = {
  title: string
}

interface BaseSmallNavProps {
  navigations: SmallNavNavigation[]
  activeTitle: string
  setActiveTitle: React.Dispatch<React.SetStateAction<string>>
}

export type SmallNavProps = BaseSmallNavProps

const SmallNav: React.FC<SmallNavProps> = props => {
  const { navigations, activeTitle, setActiveTitle } = props
  return (
    <div tw="space-x-10">
      {navigations.map(({ title }) => (
        <button
          css={[
            title === activeTitle
              ? tw`border-b-2 border-white font-bold opacity-100`
              : tw`font-normal opacity-30`,
            tw`text-white text-sm`,
          ]}
          key={title}
          onClick={() => setActiveTitle(title)}
        >
          {title}
        </button>
      ))}
    </div>
  )
}

export default SmallNav
