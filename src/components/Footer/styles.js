import styled from 'styled-components'

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50px;
margin-top: auto;
background-color: #303030`

const FooterText = styled.p`
font-size: 1.4rem;
color: #fff;

a {
  font-weight: 700;
  transition-property: color;
  transition-duration: .3s;
  transition-timing-function: linear;
  
  &:hover {
    color: royalblue;
  }
}
`

export {StyledFooter, FooterText}