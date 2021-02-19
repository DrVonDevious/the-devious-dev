import styled from "styled-components"
import profilePhoto from "../res/profile-photo.jpg"

const StoryHeaderWrapper = styled.div`
  margin: 40px 0 40px 0;
`

const StoryAvatar = styled.div`
  margin: 10px 0 10px 0;
  width: 128px;
  height: 128px;
  border-radius: 100%;
  background-image: url(${profilePhoto});
  background-size: cover;
`

const StoryHeader = (props) => {
  return (
    <StoryHeaderWrapper>
      <StoryAvatar/>
      <h2>{props.name}</h2>
    </StoryHeaderWrapper>
  )
}

export default StoryHeader
