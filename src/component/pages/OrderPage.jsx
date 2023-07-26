import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


const OrderPage = () => {
  const nav = useNavigate();

  const location = useLocation();
  console.log(location)

  const handleClick = (e) => {
    console.log(e.preventDefault);
    e.preventDefault();
    console.log(e.preventDefault);
    nav("/");
  }

  return (
    <div>
      Bonjour {location.state.nom}
      <button onClick={handleClick}>Retour à l'accueil</button>
      <Outlet />
    </div>
  
  )
}

export default OrderPage