import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Navbar({username}) {
  return (
    
    <NavbarStyled>

      <div className='leftBar'>
        left
      </div>
    <div className='rightBar'>
    Bonjour {username}
    <p />
    <Link to="/">
    <button>Retour à l'accueil</button></Link>
    </div> 
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

.rightBar
{
  background-color:bisque

}
`;