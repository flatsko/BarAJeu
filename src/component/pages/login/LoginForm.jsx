import { useState } from "react"
import { Navigate, useNavigate, redirect } from "react-router-dom";
import {BsPersonCircle as Log} from "react-icons/bs"
import {BsArrowRightShort as Arrow} from "react-icons/bs"

import { styled } from "styled-components";
import {theme} from "../../../theme/index";
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
    return (
        <LoginStyled action="submit" onSubmit={handleSubmit}>
          <h1>Bienvenue !</h1>
          
          <hr />
          <h2>Connectez Vous</h2>
          <div className="inputForm">
            <div className="inputName">
              <i className="icon">
                <Log />
              </i>
              <input
                placeholder="Entrez votre prénom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required="required"
              />
            </div>
    
            <button>Accéder à votre espace<Arrow /></button>
          </div>
        </LoginStyled>
      );
    }

    const LoginStyled = styled.form`
    background-color: ${theme.colors.background_dark};
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: white;
    padding: 0.6em 1.2em 1em;
    border-radius: 5px;
    min-width: 60vw;
   
    hr{
        height:1px;
        background-color:#F88920;
        width:80%;
        border:none;
    }
   .logo
   {
       padding: 2px;
       min-width: 40px;
       position: absolute;
       left:0;
       right:0;
   }
   .icon {
       position:absolute;
       padding: 13px;
   
       color:black;
       
     }
   input{
    
     
     font-size: 1em;
     font-weight: 500;
     text-align: center;
     font-family: inherit;
     background-color: #1a1a1a;
     cursor: pointer;
     transition: border-color 0.25s;
     background-color:white;
     padding: 10px;
     text-align: center;
     display:flex;
     width: 100%;
     color:black;
       
   }
   
    button{
       padding: 10px;
       font-size: 1em;
       font-weight: 500;
       font-family: inherit;
       background-color: #1a1a1a;
       cursor: pointer;
       transition: border-color 0.25s;
       background-color: ${theme.colors.primary};
       width: 100%;
       padding: 10px;
       text-align: center;
       
       border:none;
    }
   
    button:hover{
       color:#F88920;
       background-color: white;
    }
       
    .inputName{
       display: flex;
      
       background-color: #1a1a1a
       background-color: white;
       margin-bottom: 10px;
       min-width:100%
   }
   
   h1{
       text-align:center;
   }
   
   h2{
       text-align:center;
   
   }
   
   .inputForm{
       
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       min-width: 80%
   
       
   }
    `

export default Login