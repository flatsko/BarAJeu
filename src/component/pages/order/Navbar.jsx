import React from 'react'
import { styled } from 'styled-components'
import NavBarRightSide from './NavBarRightSide';
import NabBarLeftSide from './NabBarLeftSide';
import { theme } from '../../../theme';

export default function Navbar({username}) {
  return (
    
    <NavbarStyled>

      <NabBarLeftSide />
      

      <NavBarRightSide username={username} />
    </NavbarStyled>


  )
}

const NavbarStyled = styled.div`

background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;