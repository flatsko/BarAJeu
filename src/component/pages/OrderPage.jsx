import React from 'react'
import { Outlet, useLocation, useNavigate, Link, useParams } from 'react-router-dom'


const OrderPage = () => {
  const {name} = useParams();
  const nav = useNavigate();
  //console.log(useP.name);
  const location = useLocation();
 // console.log(location)

  const handleClick = (e) => {
  //  console.log(e.preventDefault);
    e.preventDefault();
    console.log(e.preventDefault);
    nav("/");
  }

  return (
    <div>
      Bonjour {name}
      <Link to="/">
      <button>Retour à l'accueil</button></Link>
      <Outlet />
    </div>
  
  )
}

export default OrderPage