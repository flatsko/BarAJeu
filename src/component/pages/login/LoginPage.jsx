import { useState } from "react";
import Login from "./LoginForm";
import { styled } from "styled-components";
import Logo from "../../reusableUI/Logo";
import React from "react";

function LoginPage() {
  //States

  //Comportement

  //Affichage
  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" />
      <Login />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/burger-and-fries-background.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  .logo-login-page {
    margin-top: -150px;
    margin-bottom: 50px;
    transform: scale(1.5);
  }
`;

export default LoginPage;
