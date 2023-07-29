import React from 'react'
import styled from "styled-components"
import { theme } from "../../theme/index";

export default function PrimaryButton({label, icon}) {
  return (
    <styledPrimaryButton>
        <span>{label}</span>
        {icon && icon}
    </styledPrimaryButton>
  )
}

const styledPrimaryButton = styled.address`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;&&
      

  
   &:hover{
      color:${theme.colors.primary};
      background-color: ${theme.colors.white};
   }
`