import React from "react"
import { Social } from "../"

export const renderSocial: (s: Social) => React.ReactNode = s => {
  switch (s.type) {
    case "instagram":
      return (
        <a href={s.url}>
          <img src="/images/instagram.png" alt="instagram" />
        </a>
      )
    case "linkedin":
      return (
        <a href={s.url}>
          <img src={"/images/linkedin.png"} alt="linkedin" />
        </a>
      )
  }
}
