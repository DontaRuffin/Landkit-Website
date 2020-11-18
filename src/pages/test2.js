import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
  color: blue;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const Kit = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default function UsersList() {
  return (
    <Container>
      <h1>About Land Kit </h1>
      <p>
Background

Land Kit is created by LANDAU Design+Technology founder, Chris Landau and his team. With 11 years of experience with 3D and computational modeling and visualization at OLIN, Chris has a strong sense of what can help Landscape Designers to flourish in a digital environment.

We have had a great development partner with the folks at Mithun in Seattle who have been brave first-adopters/testers of plant kit. Their insights have been really amazing and they are continuing to ask challenging questions.

</p>
      <Kit
        username="Paving Kit"
        avatar="/Users/dontaruffin/gatsby-site/src/images/plantkit_img.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <Kit
        username="Plant kit"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    
    <Kit
        username="Topo Kit "
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    
    
    
    
    
    </Container>
  )
}