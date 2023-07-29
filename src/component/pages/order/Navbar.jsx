import React from 'react'
import { styled } from 'styled-components'
import NavBarRightSide from './NavBarRightSide';

export default function Navbar({username}) {
  return (
    
    <NavbarStyled>

      <div className='leftBar'>
        left
      </div>
      <NavBarRightSide username={username} />
    </NavbarStyled>


  )
}

const NavbarStyled = styled.div`

display:flex;
justify-content:space-between;
background-color:blue;
width: 100%;
height:10vh;

.leftBar
{
background-color:aquamarine
}


`;