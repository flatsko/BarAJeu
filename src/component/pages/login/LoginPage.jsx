import { useState } from "react"
import Login from "./LoginForm";
import { styled } from "styled-components";
import Logo from "../../reusableUI/logo"

function LoginPage () {
    //States
   
    //Comportement


    //Affichage
    return ( 
        <div>
        <LoginPageStyled >
      
       <Logo className="logo-login-page" />
       </LoginPageStyled> 
       <LoginFormStyled>
        <Login />
        </LoginFormStyled>
        </div>
    )

    
    }


const LoginPageStyled = styled.div`

.logo-login-page
{
    transform: scale(1.2)
}
`
const LoginFormStyled = styled.div`
    display:flex;
    justify-content:center;



`

export default LoginPage