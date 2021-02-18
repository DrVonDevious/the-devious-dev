import styled from "styled-components"

const WorkItemContainer = styled.div`
  position: relative;
  width: 100vw;
  margin: 140px 0 140px;
`

const WorkDescription = styled.div``

const WorkGIF = styled.iframe`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: 94%;
  height: 400px;
`

const WorkItem = (props) => {
  return (
    <WorkItemContainer>
      <WorkGIF src={"https://giphy.com/embed/tZyxxR4lUIRnTgIzl9"} frameBorder="0"/>
      <WorkDescription>{props.content}</WorkDescription>
    </WorkItemContainer>
  )
}

export default WorkItem
