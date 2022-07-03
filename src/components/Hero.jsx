import React from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.png';
import dogster from '../assets/dogster.png'

function Hero() {
  return (
    <HeroContainer>
{/* <HeroImg> */}
<img src={hero} height={650} width={950}></img>
{/* </HeroImg> */}
<HeroText>
<img src={dogster} height={100} width={600}></img>
Because our furry friends, need furry friends :-)
<ButtonRow>
<HeroButton>
HOW IT WORKS
</HeroButton>
<HeroButton>
    TESTIMONIALS
</HeroButton>
</ButtonRow>
</HeroText>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
// border: 4px solid hotpink;
height: 700px;
flex-direction: row;
display: flex;
justify-content: flex-end;
align-items: flex-end;
// border-bottom: 3px solid teal;
background-color: #F7EEEC;
background-image: url("https://www.transparenttextures.com/patterns/sprinkles.png");
`

const HeroImg = styled.a`
// width: 50%;
// height: 99%;
// border: 4px solid blue;
`
const HeroText = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 100%;
// border: 4px solid orange;
flex-direction: column;
font-size: 25px;
`
const ButtonRow = styled.div`
height: 70px;
// border: 4px solid blue;
width: 100%
display: flex;
justify-content: center;
margin-top: 3rem;
`

const HeroButton = styled.button`
width: 200px;
height: 50px;
font: 30px;
border: none;
cursor: pointer;
border: 5px solid teal;
border-radius: 10px;
font-family: "Montserrat", sans-serif;
font-weight: 800;
font-size: 18px;
margin-right: 1rem;
color: teal;
background-color: #F7EEEC;
background-image: url("https://www.transparenttextures.com/patterns/sprinkles.png");
`