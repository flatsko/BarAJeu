import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

function Login(){
    //States
    const [name, setName] = useState("")
    const navigate = useNavigate()
    //const [first, setfirst] = useState(second)
    //Comportement
    const handleSubmit = (e) => { 
        e.preventDefault();
        //alert(`Bonjour ${name}`)
        navigate("/orderPage");
        setName("")

     }

    //Affichage
    return(
        
            <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez Vous</h2>
                <input placeholder="Entrez votre prénom" value={name} onChange={e => setName(e.target.value)}  type="text" required="required" />
                <button>Accéder à votre espace</button>

            </form>
        

    )
    }

export default Login