import { useState } from "react"
import getDevice from "../lib/getDevice"
import icon from "../res/angle-down-solid.svg"
import styled from "styled-components"

const ScrollIcon = styled.img`
  position: absolute;
  top: ${props => props.isPortrait ? "90%" : "86%"};
  left: 50%;
  transform: translate(-50%, 0);
  width: 42px;
  height: 42px;
  opacity: ${props => `calc(1 - ${props.scroll / 100})`};
  transition: top 0.3s ease-in-out;

  &:hover {
    top: calc(90% - 6px);
  }
`

const ScrollButton = () => {
  const device = getDevice()

  const [ hidden, setHidden ] = useState(false)
  const [ scroll, setScroll ] = useState(0)

  window.addEventListener("scroll", () => {
    setScroll(window.pageYOffset)
  })

  const handleClick = () => {
    if (device.isMobileDevice) {
      window.scrollTo({ top: window.outerHeight, behavior: "smooth" })
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
    }
  }

  return (
    <ScrollIcon
      onClick={handleClick}
      hidden={hidden}
      scroll={scroll}
      isPortrait={device.isPortrait}
      className="scroll-button"
      src={icon}
      alt="Down Arrow"
    />
  )
}

export default ScrollButton
