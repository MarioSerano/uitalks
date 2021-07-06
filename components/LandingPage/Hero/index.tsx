import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import tw, { css } from "twin.macro"

import Button from "@components/Button"

const variants = {
  initial: { opacity: 0, transition: { duration: 1 } },
  show: { opacity: [0, 1] },
  exit: {
    opacity: 0,
  },
}

export type PembicaraHero = {
  name: string
  title: string
  src: string
}

interface BaseHeroProps {
  speakersLeft: PembicaraHero[]
  speakersMid: PembicaraHero[]
  speakersRight: PembicaraHero[]
}

export type HeroProps = BaseHeroProps

const Hero: React.FC<HeroProps> = props => {
  const { speakersLeft, speakersMid, speakersRight } = props

  const [slide, setSlide] = useState<number>(0)
  const maxSlide =
    Math.min(speakersLeft.length, speakersMid.length, speakersRight.length) - 1

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prevPage => (prevPage + 1 > maxSlide ? 0 : prevPage + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const leftSpeaker = speakersLeft[slide]
  const midSpeaker = speakersMid[slide]
  const rightSpeaker = speakersRight[slide]

  return (
    <section>
      <div
        css={[
          css`
            margin-top: 6.75rem;
          `,
          tw`relative w-full h-full flex flex-col items-center justify-center mb-9`,
        ]}
      >
        <div
          css={[
            tw`absolute`,
            css`
              top: 120px;
              left: calc(50% - 248px - 400px);
            `,
          ]}
        >
          <img
            src="/images/landing/jellybean-small.png"
            alt="small jellybean"
          />
        </div>
        <div
          css={[
            tw`absolute`,
            css`
              top: -30px;
              right: calc(50% - 378px - 300px);
            `,
          ]}
        >
          <img src="/images/landing/jellybean-big.png" alt="big jellybean" />
        </div>
        <div>
          <h1
            css={css`
              background: linear-gradient(
                91.12deg,
                #ec0d7a 36.14%,
                #263483 106.63%
              );
              -webkit-background-clip: text;
              color: transparent;
            `}
            tw="font-abril-fatface text-5xl md:text-6xl leading-none text-center"
          >
            UITalks 2.0
          </h1>
          <p tw="mt-3 font-semibold text-center text-base md:text-2xl">
            Ikuti Workshop Bisnis Kami dan Bangkitlah Dari Pandemi.
          </p>
          <p tw="mt-3 font-semibold text-center text-base md:text-2xl">
            #SurviveAndRise
          </p>
        </div>
        <div tw="mt-6">
          <Button href="https://www.bit.ly/TicketUITalks">
            Daftar UITalks
          </Button>
        </div>
        <div
          tw="hidden md:flex mt-12"
          css={css`
            min-height: 330px;
          `}
        >
          <div
            css={[
              tw`relative flex flex-col items-center justify-center`,
              css`
                min-width: 260px;
              `,
            ]}
          >
            <div tw="absolute w-full h-full top-0 z-0 left-0">
              <img
                tw="h-full w-full"
                src="/images/right-parallelogram.png"
                alt="right paralellogram"
              />
            </div>
            <AnimatePresence>
              <motion.div
                key={slide}
                variants={{
                  initial: {
                    position: "absolute",
                  },
                  show: { position: "relative" },
                  exit: { position: "absolute" },
                }}
                tw="w-full flex items-center justify-center px-16 py-6"
                initial="initial"
                animate="show"
                exit="exit"
              >
                <motion.div variants={variants} key={slide} tw="relative z-10">
                  <div tw="pb-4">
                    <img
                      css={css`
                        width: 150px;
                        height: 150px;
                      `}
                      src={leftSpeaker.src}
                      alt={leftSpeaker.name}
                    />
                  </div>
                  <div
                    tw="pt-4"
                    css={css`
                      max-width: 165px;
                    `}
                  >
                    <h2 tw="text-base font-bold pb-1 text-right mr-4">
                      {leftSpeaker.name}
                    </h2>
                    <p tw="text-right mr-8 text-sm mt-1">{leftSpeaker.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            css={[
              tw`relative flex flex-col items-center justify-center`,
              css`
                min-width: 300px;
              `,
            ]}
          >
            <div tw="absolute w-full h-full top-0 z-0 left-0">
              <img
                tw="h-full w-full"
                src="/images/trapezoid.png"
                alt="Trapezoid"
              />
            </div>
            <AnimatePresence>
              <motion.div
                key={slide}
                variants={{
                  initial: {
                    position: "absolute",
                  },
                  show: { position: "relative" },
                  exit: { position: "absolute" },
                }}
                tw="w-full flex items-center justify-center px-16 py-6"
                initial="initial"
                animate="show"
                exit="exit"
              >
                <motion.div variants={variants} key={slide} tw="relative z-10">
                  <div tw="pb-4">
                    <img
                      css={css`
                        width: 200px;
                        height: 200px;
                      `}
                      src={midSpeaker.src}
                      alt={midSpeaker.name}
                    />
                  </div>
                  <div tw="pt-4">
                    <h2 tw="text-base font-bold pb-1 text-center">
                      {midSpeaker.name}
                    </h2>
                    <p tw="text-center text-sm">{midSpeaker.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            css={[
              tw`relative flex flex-col items-center justify-center`,
              css`
                min-width: 260px;
              `,
            ]}
          >
            <div tw="absolute w-full h-full top-0 z-0 left-0">
              <img
                tw="h-full w-full"
                src="/images/left-parallelogram.png"
                alt="left parallelogram"
              />
            </div>
            <AnimatePresence>
              <motion.div
                key={slide}
                variants={{
                  initial: {
                    position: "absolute",
                  },
                  show: { position: "relative" },
                  exit: { position: "absolute" },
                }}
                tw="w-full flex items-center justify-center px-16 py-6"
                initial="initial"
                animate="show"
                exit="exit"
              >
                <motion.div variants={variants} key={slide} tw="relative z-10">
                  <div tw="pb-4">
                    <img
                      css={css`
                        width: 150px;
                        height: 150px;
                      `}
                      src={rightSpeaker.src}
                      alt={rightSpeaker.name}
                    />
                  </div>
                  <div
                    tw="pt-4"
                    css={css`
                      max-width: 165px;
                    `}
                  >
                    <h2 tw="text-base font-bold text-left pb-1 ml-6">
                      {rightSpeaker.name}
                    </h2>
                    <p tw="text-left text-sm mt-1 ml-10">
                      {rightSpeaker.title}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
