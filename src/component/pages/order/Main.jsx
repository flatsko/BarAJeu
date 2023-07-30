import React from 'react'
import { styled } from 'styled-components';
import { theme } from "../../../theme/index";

export default function Main() {
  return (
    <MainStyled>Main</MainStyled>
  )
}


const MainStyled = styled.div`
  background-color:lightcoral;
  flex:1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  border-radius: 0px 0px 15px 15px;
  background-color: ${theme.colors.background_white}
`;