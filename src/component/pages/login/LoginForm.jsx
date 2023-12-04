import { useState } from "react";
import { Navigate, useNavigate, redirect } from "react-router-dom";
//import {BsArrowRightShort as Arrow} from" react-icons/bs"
import { BsChevronRight as Arrow } from "react-icons/bs";
import { styled } from "styled-components";
import PrimaryButton from "../../reusableUI/PrimaryButton";
import { theme } from "../../../theme/index";
import styles from "@openfonts/amatic-sc_all/index.css";
import TextInput from "../../reusableUI/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import React from "react";
import { autenticateUser, createUser, getUser } from "../../../api/user";
import Welcome from "./Welcome";

function Login() {
  //States
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //Comportement
  async function handleSubmit(e) {
    e.preventDefault();
    autenticateUser(name);
    navigate(`orderPage/${name}`);
  }

  const handleChange = (e) => {
    setName(e.target.value);
  };
  //Affichage
  return (
    <LoginStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <Welcome />
        <div className="inputForm">
          <TextInput
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            value={name}
            Icon={<BsPersonCircle className="icon" />}
            className="textInput"
          />
          <PrimaryButton label={"Acceder à mon espace"} icon={<Arrow />} />
        </div>
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.form`
  font-family: "Amatic SC", cursive;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${theme.colors.white};
  padding: 0.6em 1.2em 1em;
  border-radius: ${theme.borderRadius.round};
  max-width: 500px;
  min-width: 400px;

  hr {
    height: 1px;
    background-color: ${theme.colors.primary};
    width: 80%;
    border: none;
  }
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  .inputForm {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    font-size: ${theme.fonts.P0};
    font-family: "Open Sans", sans-serif;
  }
  .textInput {
    width: 200px;
  }
  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};

    /* min-width: 1em; // that way, the icon size is NOT affected by width of the entire component. */
  }
`;

export default Login;
