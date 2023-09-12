import React from 'react'
import { redirect, useNavigate, Link } from 'react-router-dom'

export default function NoAccessPage() {
  //  const nav = useNavigate();

   // const handleClick = (e) => {
   //    console.log(e.preventDefault);
   //     e.preventDefault();
   //     console.log(e.preventDefault);
  //      nav("/");
  //  }
  return (
    <div>Rien à voir ici
<Link to="/">
    <button>Retour à l'accueil</button>
    </Link>
    </div>
  )
}
