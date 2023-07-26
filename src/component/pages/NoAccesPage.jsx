import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

export default function NoAccessPage() {
    const nav = useNavigate();

    const handleClick = (e) => {
        console.log(e.preventDefault);
        e.preventDefault();
        console.log(e.preventDefault);
        nav("/");
    }
  return (
    <div>Rien à voir ici

    <button onClick={handleClick}>Retour à l'accueil</button>
    
    </div>
  )
}
