import { useState } from "react"
import { Navigate, useNavigate, redirect } from "react-router-dom";
import {BsPersonCircle as Log} from "react-icons/bs"
import { styled } from "styled-components";
import "../../../theme/index";
 import "./LoginForm.css";
function Login(){
    //States
    const [name, setName] = useState("");
    const [isconnected, setIsConnected] = useState("false");
    const navigate = useNavigate()


    const InputNameBox = styled.input``;
    //const [first, setfirst] = useState(second)
    //Comportement
    const handleSubmit = (e) => { 
        e.preventDefault();
        //alert(`Bonjour ${name}`)
        navigate(`orderPage/${name}`);
        //redirect("/orderPage");
        setName("")

     }

    //Affichage
    return(
        
        
            <LoginStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez moi !</h1>
            <br />
            <h2>Connectez Vous</h2>
            <div>
                <input placeholder="Entrez votre prénom" value={name} onChange={e => setName(e.target.value)}  type="text" required="required" />
                <button><Log /> Accéder à votre espace</button>
            </div>               
            </LoginStyled>
        
           
    )
    }

 const LoginStyled = styled.form`
 background-color: #00000088;
 display: flex;
 flex-direction: column;
 align-content: center;
 justify-content: space-between;
 flex-wrap: wrap;
 
input{
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em 1em;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
    
}

 button{
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  border-color: aqua;
  border-width: thick;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
 }
    
div{

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 20vh;
    background-color: #1a1a1a
}

 `


export default Login