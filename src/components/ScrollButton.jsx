import { useState } from "react"
import getDevice from "../lib/getDevice"
import icon from "../res/angle-down-solid.svg"
import styled from "styled-components"

const ScrollButton = () => {
  const [ scrollPos, setScrollPos ] = useState(0)

  window.onscroll = () => {
    setScrollPos(window.scrollY)
    console.log(window.scrollY)
  }

  const ScrollIcon = styled.img`
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 64px;
    height: 64px;
    transition: top 0.3s ease;

    &:hover {
      top: calc(90% - 6px);
    }
  `

  return (
    <ScrollIcon className="scroll-button" src={icon} alt="Down Arrow"/>
  )
}

export default ScrollButton
