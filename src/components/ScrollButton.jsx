import getDevice from "../lib/getDevice"
import icon from "../res/angle-down-solid.svg"
import styled from "styled-components"

const ScrollButton = () => {
  const ScrollIcon = styled.img`
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 64px;
    height: 64px;
  `

  return (
    <ScrollIcon src={icon} alt="Down Arrow"/>
  )
}

export default ScrollButton
