import { useState } from "react"

function Login(){
    //States
    const [name, setName] = useState()
    //Comportement
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
            <h2>Connectez Vous</h2>
            <form>
                <input placeholder="Entrez votre prénom" onChange={e => setName(e.target.value)}  type="text" required="required" />
                <button type="submit" onClick={handleClick}>Accéder à votre espace</button>

            </form>
        </div>

    )
    }

export default Login