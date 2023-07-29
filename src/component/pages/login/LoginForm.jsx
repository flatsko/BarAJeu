import { useState } from "react";
import { Navigate, useNavigate, redirect } from "react-router-dom";
//import {BsArrowRightShort as Arrow} from" react-icons/bs"
import { BsChevronRight as Arrow } from "react-icons/bs";
import { styled } from "styled-components";
import PrimaryButton from "../../reusableUI/PrimaryButton";
import { theme } from "../../../theme/index";
import styles from "@openfonts/amatic-sc_all/index.css"
import TextInput from "../../reusableUI/TextInput";
import { BsPersonCircle as Log } from "react-icons/bs";

function Login() {
  //States
  const [name, setName] = useState("");
  const [isconnected, setIsConnected] = useState("false");
  const navigate = useNavigate();

  const InputNameBox = styled.input``;
  //const [first, setfirst] = useState(second)
  //Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(`Bonjour ${name}`)
    setName("");
    navigate(`orderPage/${name}`);
    //redirect("/orderPage");
  };

  const handleChange = (e) => {

  setName(e.target.value)

  };
  //Affichage
  return (
    <LoginStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue !</h1>

        <hr />
        <h2>Connectez Vous</h2>
        <div className="inputForm">
            <TextInput 
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            required
            value={name}
            icon={<Log className="icon" />} />
          <div className="inputName">
    
    
          </div>


          <PrimaryButton 
          label={"Acceder à mon espace"} 
          icon={<Arrow />} />

        </div>
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.form`
font-family: "Amatic SC", cursive;

  background-color: ${theme.colors.background_dark};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${theme.colors.white};
  padding: 0.6em 1.2em 1em;
  border-radius: 5px;
  max-width: 500px;
  min-width: 400px;
  margin-top: 5em;

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
    min-width: 80%;
    font-size: ${theme.fonts.P0};
    font-family: 'Open Sans', sans-serif;
  }
`;

export default Login;
