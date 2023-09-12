import React from 'react'
import Logo from '../../../reusableUI/logo';
import { styled } from 'styled-components';
import { refreshPage } from '../../../../utils/window';

export default function NabBarLeftSide() {
  return (
    <NabBarLeftSideStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage}/>
    </NabBarLeftSideStyled>
  )
}

const NabBarLeftSideStyled = styled.div`

display:flex;
justify-content: flex-start;
.logo-order-page{
  cursor:pointer;
  transform: scale(0.7);
}
`;
