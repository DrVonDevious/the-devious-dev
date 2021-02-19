import styled from "styled-components"
import getDevice from "../lib/getDevice"

const StoryContent = () => {
  const device = getDevice();

  const content = `
    Hi 👋 I'm Caleb Rutland,
    A web-developer and designer.\n
    I started making games with Java when I was 12,
    and my love for code has only continued to grow.
  `

  const StoryContentWrapper = styled.div`
    width: 240px;
    bottom: 6%;
    left: ${props => props.isMobile ? "0" : "92px"};
    height: fit-content;
    position: ${props => props.isMobile ? "relative" : "absolute"};
    margin: ${props => props.isMobile ? "120px 0 0 0" : "none"};

    & p {
      white-space: pre-line;
      font-size: 22px;
      font-weight: bold;
    }
  `

  return (
    <StoryContentWrapper
      isMobile={(device.isMobileSize || device.isMobileDevice)}
    >
      <p>{content}</p>
    </StoryContentWrapper>
  )
}

export default StoryContent
