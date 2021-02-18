import styled from "styled-components"

const ContactCard = styled.a`
  margin: 20px;
`

const ContactIcon = styled.img`
  width: 32px;
  height: 32px;
`

const Contact = (props) => {
  return (
    <ContactCard href={props.link}>
      <ContactIcon src={props.icon}/>
    </ContactCard>
  )
}

export default Contact
