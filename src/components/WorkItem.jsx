import styled from "styled-components"
import getDevice from "../lib/getDevice"

const WorkItemContainer = styled.div`
  position: relative;
  width: 100vw;
  margin: 100px 0 100px;
`

const WorkTitle = styled.h1`
  position: ${props => props.isMobileDevice ? "relative" : "absolute"};
  top: 0;
  left: ${props => props.isMobileDevice ? "20px" : "10%"};
  margin: 80px 0 20px 0;
  font-size: 42px;
`

const WorkDescription = styled.p`
  position: ${props => props.isMobileDevice ? "relative" : "absolute"};
  top: ${props => props.isMobileDevice ? "0" : "140px"};
  left: ${props => props.isMobileDevice ? "20px" : "10%"};
  font-size: ${props => props.isMobileDevice ? "18px" : "28px"};
  max-width: 40ch;
  text-align: left;
  white-space: pre-line;
`

const WorkGIF = styled.img`
  position: relative;
  left: ${props => props.isMobileDevice ? "50%" : "56%"};
  transform: ${props => props.isMobileDevice ? "translate(-50%, 0)" : "none"};
  width: ${props => props.isMobileDevice ? "90%" : "64%"};
`

const WorkItem = (props) => {
  const device = getDevice()

  return (
    <WorkItemContainer>
      <WorkGIF
        src={props.image}
        isPortrait={device.isPortrait}
        isMobileDevice={(device.isMobileDevice || device.isMobileSize)}
      />
      <WorkTitle isMobileDevice={(device.isMobileSize || device.isMobileSize)}>
        {props.title}
      </WorkTitle>
      <WorkDescription isMobileDevice={(device.isMobileSize || device.isMobileSize)}>
        {props.content}
      </WorkDescription>
    </WorkItemContainer>
  )
}

export default WorkItem
