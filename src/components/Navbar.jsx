import { useState, useEffect } from "react"
import styled from "styled-components"
import getDevice from "../lib/getDevice"

const NavbarContainer = styled.div`
  position: ${props => props.fixed ? "fixed" : "fixed"};
  transform: ${props => props.fixed ? "translate(0, 0)"
                      : props.isMobileDevice ? "translate(0, 74px)"
                      : "translate(0, -74px)"
  };
  top: ${props => props.isMobileDevice ? "auto" : "0"};
  width: 100%;
  background: #1E1C2B;
  border-top: ${props => props.isMobileDevice ? "1px solid #343146" : "none"};
  height: 74px;
  bottom: ${props => props.isMobileDevice ? "0" : "auto"};
  transition: transform 0.4s ease;
`

const Navbar = () => {
  const device = getDevice()
  console.log(device)

  const [ fixed, setFixed ] = useState(false)

  let navbarElement = null
  let checkpoint = (device.isMobileSize || device.isMobileDevice) ? 32 : 1001

  window.onscroll = () => {
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
      fixed={fixed}
      className="navbar"
    >
      This is a navbar!
    </NavbarContainer>
  )
}

export default Navbar
