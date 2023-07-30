import React from 'react'
import Logo from '../../reusableUI/logo';
import { styled } from 'styled-components';

export default function NabBarLeftSide() {
  return (
    <NabBarLeftSideStyled><Logo/></NabBarLeftSideStyled>
  )
}

const NabBarLeftSideStyled = styled.div`

display:flex;

`;
