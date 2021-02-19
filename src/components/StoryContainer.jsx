import StoryHeader from "./StoryHeader"
import StoryAbility from "./StoryAbility"
import StoryContent from "./StoryContent"
import getDevice from "../lib/getDevice"
import styled from "styled-components"

const StoryWrapper = styled.div`
  display: flex;

  flex-direction: ${props =>
    (props.isPortrait || props.isMobile) ? "column" : "row"
  };

  position: relative;
  margin: 140px 0 140px 0;
  padding: 32px 0 60px 0;
  background: linear-gradient(145deg, rgb(255 125 245) 0%, rgb(101 96 255) 100%);
`

const StoryHeaderSection = styled.div`
  min-width: 400px;
  text-align: center;
  text-align: -webkit-center;
`

const StoryAbilityWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row"};
  position: relative;
  width: -webkit-fill-available;
`

const StoryAbilityContainer = styled.div`
  width: 100%;
`

const StoryContainer = () => {
  const device = getDevice()

  return (
    <StoryWrapper
      isPortrait={device.isPortrait}
      isMobile={(device.isMobileSize || device.isMobileDevice)}
    >
      <StoryHeaderSection>
        <StoryHeader name="Caleb Rutland" image={null}/>
        <StoryContent/>
      </StoryHeaderSection>
      <StoryAbilityWrapper isMobile={(device.isMobileDevice || device.isMobileSize)}>
        <StoryAbilityContainer>
          <StoryAbility name="Javascript" stars={5}/>
          <StoryAbility name="Python" stars={3}/>
          <StoryAbility name="Databases" stars={4}/>
        </StoryAbilityContainer>
        <StoryAbilityContainer>
          <StoryAbility name="UI/UX" stars={5}/>
          <StoryAbility name="Design" stars={5}/>
          <StoryAbility name="SEO" stars={4}/>
        </StoryAbilityContainer>
      </StoryAbilityWrapper>
    </StoryWrapper>
  )
}

export default StoryContainer
