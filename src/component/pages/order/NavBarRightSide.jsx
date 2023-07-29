import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';

export default function NavBarRightSide({username}) {
  return (
    <NavBarRightSideStyles className='rightBar'>
    Bonjour {username}
    <p />
    <Link to="/">
    <button>Retour à l'accueil</button></Link>
    </NavBarRightSideStyles> 
  )
}


const NavBarRightSideStyles = styled.div`
  background-color:bisque
`;
