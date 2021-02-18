import styled from "styled-components"

const StoryHeaderWrapper = styled.div`
  margin: 40px 0 40px 0;
`

const StoryHeader = (props) => {
  return (
    <StoryHeaderWrapper>
      <h2>{props.name}</h2>
    </StoryHeaderWrapper>
  )
}

export default StoryHeader
