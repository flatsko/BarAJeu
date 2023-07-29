import React from 'react'
import {styled} from "styled-components"
import styles from "@openfonts/amatic-sc_all/index.css"
import { theme } from '../../theme'

export default function Logo () {
  return (
    <StyledLogo>
        <div className='logo'>
        <h1>Meeple</h1> 
    <img src="\public\images\117185_65269_eca92380-f8a7-433b-9fae-08a8e2b07e2b.png" />
    <h1>Adventure</h1></div> </StyledLogo>
  )
}

const StyledLogo = styled.div`
align-items: center;
display:flex;
justify-content:center;
transform: scale(1.5);
img{
    height:100px;
}

h1{
    font-family: "Amatic SC", cursive;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  display:flex
}
.logo:hover {
  filter: drop-shadow(0 0 2em ${theme.colors.primary_burger});
}

`

