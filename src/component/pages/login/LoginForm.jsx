import { useState } from "react"

function Login(){
    //States
    const [name, setName] = useState()
    //const [first, setfirst] = useState(second)
    //Comportement
    const handleSubmit = (e) => { 
        e.preventDefault();
        alert(`Bonjour ${name}`)
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