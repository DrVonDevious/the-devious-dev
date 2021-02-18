import { useState } from "react"
import getDevice from "../lib/getDevice"
import icon from "../res/angle-down-solid.svg"
import styled from "styled-components"

const ScrollIcon = styled.img`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 42px;
  height: 42px;
  opacity: ${props => `calc(1 - ${props.scroll / 100})`};

  &:hover {
    top: calc(90% - 6px);
  }
`

const ScrollButton = () => {
  const [ hidden, setHidden ] = useState(false)
  const [ scroll, setScroll ] = useState(0)

  window.addEventListener("scroll", () => {
    setScroll(window.pageYOffset)

    // if (window.pageYOffset >= 32) {
    //   setHidden(true)
    // } else {
    //   setHidden(false)
    // }
  })

  return (
    <ScrollIcon
      hidden={hidden}
      scroll={scroll}
      className="scroll-button"
      src={icon}
      alt="Down Arrow"
    />
  )
}

export default ScrollButton
