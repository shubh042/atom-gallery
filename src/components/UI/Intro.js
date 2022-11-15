import React, { useContext, useState, useEffect, useRef, useCallback } from "react"
import "./Intro.scss"
import { Context } from "../../Context"
import gsap from "gsap"

const introTexts = [
  {
    body: "The world is full of atoms and molecules that come together to create the matter around us."
  },
  {
    title: "What is a molecule?",
    body: "A molecule is a microscopic particle that arises from a group of atoms."
  },
  {
    title: "What about an atom?",
    body:
      "An atom contains a nucleus around which electrons gravitate. It has 3 types of particles: neutrons, protons and electrons. These atoms make up molecules."
  },
  {
    body:
      "You will therefore discover through this virtual museum the main atoms that make up our world as well as the most widespread molecules."
  }
]

const Intro = () => {
  const { toggleCube, introSpawnTl, goToSecondTl } = useContext(Context)
  const [textIndex, setTextIndex] = useState(0)
  const $introContainer = useRef(null)
  const $textContainer = useRef(null)
  const [timeSinceLastChange, setTimeSinceLastChange] = useState(Date.now())

  const wheelHandler = ({ deltaY }) => {
    setTextIndex(textIndex => {
      let scrollValue = Math.floor(deltaY) >= 1 ? 1 : Math.floor(deltaY / 50) < 0 ? -1 : 0
      let newValue = gsap.utils.clamp(0, introTexts.length - 1, textIndex + scrollValue)
      let actualTime = Date.now()
      if (actualTime - timeSinceLastChange > 1000 && scrollValue !== 0) {
        setTimeSinceLastChange(Date.now())
        textIndex !== newValue &&
          gsap.timeline().fromTo($textContainer.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
        return newValue
      } else return textIndex
    })
  }

  const goToNext = () => {
    gsap
      .timeline({
        defaults: {
          ease: "Power3.easeInOut",
          duration: 1
        },
        onStart: () => goToSecondTl()
      })
      .addLabel("sync")
      .to($introContainer.current, { opacity: 0, duration: 1, ease: "Power3.easeInOut" })
  }

  // playing the atom spawns timeline on mount
  useEffect(() => {
    if (introSpawnTl && toggleCube) {
      setTimeout(() => {
        gsap.to($introContainer.current, 1, { ease: "Power3.easeInOut", opacity: 1 })
      }, 3500)
      toggleCube(false)
      introSpawnTl.play()
    }
  }, [introSpawnTl, toggleCube])

  const getMappedTexts = useCallback(
    () =>
      introTexts.map((text, index) => (
        <div key={index} style={{ display: index === textIndex ? "block" : "none" }} className="text-item">
          {text.title && <div className="title">{text.title}</div>}
          <div className="body">{text.body}</div>
        </div>
      )),
    [textIndex]
  )

  return (
    <div onWheel={wheelHandler} ref={$introContainer} style={{ opacity: 0 }} className="intro-container">
      <div className="number">01</div>
      <div ref={$textContainer} className="text-container">
        {getMappedTexts()}
      </div>
      <div onClick={goToNext} className="mf-active skip-button button">
        SKIP INTRO
      </div>
    </div>
  )
}

export default Intro
