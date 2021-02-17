import react from "react"
import styled from "styled-components"
import Particles from "react-particles-js"
import particleSettings from "../config/particlesjs-config.json";

const HeaderContainer = styled.div`
  width: 100%;
  height: 600px;
`

const HeaderTitle = styled.h1`
  margin: 0;
  position: absolute;
  top: 12%;
  left: 8%;
  font-size: 52px;
`

const StyledParticles = styled(Particles)`
  position: absolute;
`

const Header = () => {
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
