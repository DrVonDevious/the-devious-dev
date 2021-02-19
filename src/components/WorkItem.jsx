import styled from "styled-components"
import getDevice from "../lib/getDevice"

const WorkItemContainer = styled.div`
  position: relative;
  width: 100vw;
  margin: 100px 0 100px;
`

const WorkTitle = styled.h1`
  position: ${props => props.isMobileDevice
    ? "relative"
    : "absolute"
  };

  left: ${props => !props.isMobileDevice
    ? "10%"
    : props.isPortrait
      ? "20px"
      : "40px"
  };

  top: 0;
  margin: 60px 0 0 0;
  font-size: 42px;
`

const WorkDescription = styled.p`
  position: ${props => props.isMobileDevice
    ? "relative"
    : "absolute"
  };

  top: ${props => props.isMobileDevice
    ? "0"
    : "140px"
  };

  left: ${props => !props.isMobileDevice
    ? "10%"
    : props.isPortrait
      ? "20px"
      : "40px"
  };

  font-size: ${props => !props.isMobileDevice
    ? "28px"
    : props.isPortrait
      ? "18px"
      : "32px"
  };

  margin: 0;
  max-width: 40ch;
  text-align: left;
  white-space: pre-line;
`

const WorkGIF = styled.img`
  position: relative;
  left: ${props => props.isMobileDevice
    ? "50%"
    : "56%"
  };

  transform: ${props => props.isMobileDevice
    ? "translate(-50%, 0)"
    : "none"
  };

  width: ${props => props.isMobileDevice
    ? "90%"
    : "64%"
  };
`

const WorkItem = (props) => {
  const device = getDevice()

  return (
    <WorkItemContainer>
      <a href={props.href}>
        <WorkGIF
          src={props.image}
          isPortrait={device.isPortrait}
          isMobileDevice={(device.isMobileDevice || device.isMobileSize)}
        />
      </a>
      <WorkTitle
        isMobileDevice={(device.isMobileSize || device.isMobileSize)}
        isPortrait={device.isPortrait}
      >
        {props.title}
      </WorkTitle>
      <WorkDescription
        isMobileDevice={(device.isMobileSize || device.isMobileSize)}
        isPortrait={device.isPortrait}
      >
        {props.content}
      </WorkDescription>
    </WorkItemContainer>
  )
}

export default WorkItem
