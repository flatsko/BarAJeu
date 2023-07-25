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
    const handleClick = (e) =>
    {
        e.preventDefault();
        if(name)
        {
            alert("Bonjour " + name)
            window.location.reload();
        }
        else{
            //alert("pas ok")
            //setName("")
        }
    }

    //Affichage
    return(
        <div>
            <h1>Bienvenue chez nous</h1>
            <br />
            <h2>Connectez Vous</h2>
            <form action="submit" onSubmit={handleClick}>
                <input placeholder="Entrez votre prénom" value={name} onChange={e => setName(e.target.value)}  type="text" required="required" />
                <button>Accéder à votre espace</button>

            </form>
        </div>

    )
    }

export default Login