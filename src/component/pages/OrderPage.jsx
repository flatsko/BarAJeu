import React from 'react'
import { useLocation } from 'react-router-dom'


const OrderPage = () => {
  const location = useLocation();

  return (
    <div>Bonjour {location.state.nom}</div>
  )
}

export default OrderPage