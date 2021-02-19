import styled from "styled-components"
import getDevice from "../lib/getDevice"
import profilePhoto from "../res/face-outline.png"

const StoryHeaderWrapper = styled.div`
  position: relative;
  height: fit-content;
  margin: 40px 0 40px 0;
  left: ${props => props.isMobile ? "50%" : "120px"};
  transform: ${props => props.isMobile ? "translate(-50%, 0)" : "none"};
  top: -102px;
`

const StoryAvatar = styled.div`
  position: absolute;
  width: 184px;
  height: 184px;
  border-radius: 100%;
  box-shadow: 0 0 20px -15px rgba(0, 0, 0, 1) inset;
  top: -16px;
  left: ${props => props.isMobile ? "50%" : "0"};
  transform: ${props => props.isMobile ? "translate(-50%, 0)" : "none"};

  background:
    url(${profilePhoto}),
    linear-gradient(180deg, rgba(160,90,210,1) 0%, rgba(255,90,210,1) 100%)
  ;

  background-size: cover;
`

const AvatarBackdrop = styled.div`
  position: absolute;
  width: 148px;
  height: 82px;
  background: #4422DD;
`

const StoryHeader = (props) => {
  const device = getDevice()

  return (
    <StoryHeaderWrapper isMobile={(device.isMobileDevice || device.isMobileSize)}>
      <StoryAvatar isMobile={(device.isMobileDevice || device.isMobileSize)}/>
    </StoryHeaderWrapper>
  )
}

export default StoryHeader
