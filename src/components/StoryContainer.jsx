import StoryHeader from "./StoryHeader"
import StoryAbility from "./StoryAbility"
import styled from "styled-components"

const StoryWrapper = styled.div`
  margin: 140px 0 140px 0;
`

const StoryAbilityContainer = styled.div`
  margin: 20px 0 20px 0;
`

const StoryContainer = () => {
  return (
    <StoryWrapper>
      <StoryHeader name="Caleb Rutland" image={null}/>
      <StoryAbilityContainer>
        <StoryAbility name="Coding" stars={5}/>
        <StoryAbility name="UI/UX" stars={4}/>
        <StoryAbility name="SEO" stars={3}/>
        <StoryAbility name="IT Consulting" stars={4}/>
      </StoryAbilityContainer>
    </StoryWrapper>
  )
}

export default StoryContainer
