import React from 'react'
import { Outlet, useLocation, useNavigate, Link, useParams } from 'react-router-dom'


const OrderPage = () => {
  const {username} = useParams();
  const nav = useNavigate();


  return (
    <div>
      Bonjour {username}
      <p />
      <Link to="/">
      <button>Retour à l'accueil</button></Link>
      
      {/* <Outlet /> */}
    </div>
  
  )
}

export default OrderPage