import React from "react"
import tw, { css } from "twin.macro"

import { Pembicara } from "../types"

export type CardProps = Pembicara

const Card: React.FC<Pembicara> = props => {
  const { name, title } = props
  return <div></div>
}

export default Card
