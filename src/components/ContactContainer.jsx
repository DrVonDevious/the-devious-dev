import styled from "styled-components"
import Contact from "./Contact"
import emailIcon from "../res/envelope-square-solid.svg"
import linkedInIcon from "../res/linkedin-brands.svg"
import githubIcon from "../res/github-square-brands.svg"
import twitterIcon from "../res/twitter-square-brands.svg"

const ContactWrapper = styled.div`
  margin: 140px 0 140px 0;
`

const ContactHeader = styled.h1``

const ContactContainer = () => {
  return (
    <ContactWrapper>
      <ContactHeader>Where To Find Me</ContactHeader>
      <Contact icon={emailIcon} type="Email" link="william.prometheus@gmail.com"/>
      <Contact icon={linkedInIcon} type="LinkedIn" link="https://www.linkedin.com/in/william-rutland/"/>
      <Contact icon={githubIcon} type="GitHub" link="https://github.com/DrVonDevious"/>
      <Contact icon={twitterIcon} type="Twitter" link="https://twitter.com/DeviousDevelopr"/>
    </ContactWrapper>
  )
}

export default ContactContainer
