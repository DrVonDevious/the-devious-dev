import styled from "styled-components"

const AbilityWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 32px 20px 0 20px;
  height: 80px;
`

const AbilityName = styled.h1`
  font-size: 24px;
  margin: 0 32px;
  color: #ffffffcc;
`

const AbilityStars = styled.div``

const StoryAbility = (props) => {
  return (
    <AbilityWrapper>
      <AbilityName>{props.name}</AbilityName>
    </AbilityWrapper>
  )
}

export default StoryAbility
