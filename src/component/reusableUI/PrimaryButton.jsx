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

const styledPrimaryButton = styled.button`
       font-family: inherit;
      cursor: pointer;
      transition: border-color 0.25s;
      background-color: ${theme.colors.primary};
      width: 100%;
      padding: 10px;
      font-weight: ${theme.weights.medium};
       transition: all 0.5s ease;
      border:none;
      

  
   &:hover{
      color:${theme.colors.primary};
      background-color: ${theme.colors.white};
   }
`