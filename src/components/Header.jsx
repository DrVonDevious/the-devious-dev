import react from "react"
import styled from "styled-components"
import Particles from "react-particles-js"
import particleSettings from "../config/particlesjs-config.json"
import getDevice from "../lib/getDevice"

const Header = () => {
  const device = getDevice()

  console.log(device)

  const HeaderContainer = styled.div`
    width: 100%;
    height: 600px;
  `

  const HeaderTitle = (device.isMobileSize || device.isMobileDivice)
  ? styled.h1`
    margin: 0;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 52px;
  `
  : styled.h1`
    margin: 0;
    position: absolute;
    top: 12%;
    left: 8%;
    font-size: 52px;
  `

  const StyledParticles = styled(Particles)`
    position: absolute;
  `

  return (
    <HeaderContainer>
      <Particles
        width="100vw"
        height="100vh"
        params={particleSettings}
      />
      <HeaderTitle>The<br/>Devious<br/>Dev.</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
