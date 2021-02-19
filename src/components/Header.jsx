import react from "react"
import styled from "styled-components"
import ScrollButton from "./ScrollButton"
import Particles from "react-particles-js"
import particleSettings from "../config/particlesjs-config.json"
import getDevice from "../lib/getDevice"
import splashImage from "../res/color-splash.jpg"
import icon from "../res/angle-down-solid.svg"

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
`

const HeaderIntro = styled.p`
  margin: 0;
  position: absolute;
  top: ${props => (props.isPortrait || props.isDesktop) ? "48%" : "20%"};
  left: ${props => (props.isPortrait || props.isDesktop) ? "8%" : "54%"};
  font-size: 42px;
`

const HeaderTitle = styled.h1`
  margin: 0;
  position: absolute;
  top: ${props => props.isPortrait ? "12%" : "20%"};
  left: 8%;
  font-size: 52px;
`

const StyledParticles = styled(Particles)`
  position: absolute;
`

const DesignerText = styled.div`
  & span {
    color: transparent;
    margin: 0;
    background: url(${splashImage}) 0 0 no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
  }
`

const DevArrowLeft = styled.img`
  position: absolute;
  top: 111px;
  left: -30px;
  width: 32px;
  height: 32px;
  transform: rotate(90deg);
`

const DevArrowRight = styled.img`
  position: absolute;
  top: 111px;
  width: 32px;
  height: 32px;
  transform: rotate(-90deg);
`

const Header = () => {
  const device = getDevice()
  console.log(device)

  return (
    <HeaderContainer>
      <Particles
        width="100vw"
        height="100vh"
        params={particleSettings}
      />
      <HeaderTitle isPortrait={device.isPortrait}>The<br/>Devious<br/>Dev.</HeaderTitle>
      <HeaderIntro isPortrait={device.isPortrait} isDesktop={device.isDesktop}>
        Hi<br/>
        I'm Caleb Rutland<br/>
        <DevArrowLeft src={icon}/>Web Developer<DevArrowRight src={icon}/><br/>
        <DesignerText><span>Designer</span>.</DesignerText>
      </HeaderIntro>
      <ScrollButton/>
    </HeaderContainer>
  )
}

export default Header
