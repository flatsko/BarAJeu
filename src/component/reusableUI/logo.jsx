import React from 'react'
import {styled} from "styled-components"
import styles from "@openfonts/amatic-sc_all/index.css"
import { theme } from '../../theme'

export default function Logo () {
  return (
    <StyledLogo><h1>Meeple</h1> 
    <img src="src\assets\117185_65269_eca92380-f8a7-433b-9fae-08a8e2b07e2b.png" />
    <h1>Adventure</h1> </StyledLogo>
  )
}

const StyledLogo = styled.div`
align-items: center;
display:flex;

;
justify-content: space-evenly;
img{
    height:100px;
}

h1{
    font-family: "Amatic SC", cursive;
}
`

