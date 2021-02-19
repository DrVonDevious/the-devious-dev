import { useState, useEffect } from "react"
import styled from "styled-components"
import getDevice from "../lib/getDevice"

const NavbarContainer = styled.div`
  display: ${props => (props.isPortrait || props.isDesktop) ? "flex" : "none"};
  justify-content: center;
  position: ${props => props.fixed ? "fixed" : "fixed"};
  transform: ${props => props.fixed ? "translate(0, 0)"
                      : props.isMobileDevice ? "translate(0, 74px)"
                      : "translate(0, -74px)"
  };
  top: ${props => props.isMobileDevice ? "auto" : "0"};
  width: 100%;
  background: #1E1C2B;
  border-top: ${props => props.isMobileDevice ? "1px solid #343146" : "none"};
  height: ${props => props.isMobileDevice ? "74px" : "42px"};
  bottom: ${props => props.isMobileDevice ? "0" : "auto"};
  transition: transform 0.4s ease;
`

const NavbarItem = styled.span`
  color: #FFF;
  margin: 16px 40px 0 40px;
`

const ProgressBar = styled.progress`
  position: absolute;
  top: ${props => props.isMobileDevice ? "0" : "100%"};
  width: 100vw;
  height: 2px;
  appearance: none;

  ::-webkit-progress-bar {
    background: #343146;
  }

  ::-webkit-progress-value {
    background: #B9B0F5;
  }
`

const Navbar = () => {
  const device = getDevice()

  const [ fixed, setFixed ] = useState(false)
  const [ scrollPercent, setScrollPercent ] = useState(false)

  let navbarElement = null
  let checkpoint = (device.isMobileSize || device.isMobileDevice) ? 32 : 1001

  window.onscroll = () => {
    setScrollPercent(
      Math.round(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
      )
    )

    if (window.pageYOffset >= checkpoint) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  useEffect(() => {
    navbarElement = document.querySelector(".navbar")
  }, [])

  return (
    <NavbarContainer
      isMobileDevice={device.isMobileSize}
      isPortrait={device.isPortrait}
      isDesktop={device.isDesktop}
      fixed={fixed}
      className="navbar"
    >
      <ProgressBar
        isMobileDevice={(device.isMobileSize || device.isMobileDevice)}
        max={100}
        value={scrollPercent}
      />
    </NavbarContainer>
  )
}

export default Navbar
