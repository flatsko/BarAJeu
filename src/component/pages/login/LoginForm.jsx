import { useState } from "react";
import { Navigate, useNavigate, redirect } from "react-router-dom";
import { BsPersonCircle as Log } from "react-icons/bs";
//import {BsArrowRightShort as Arrow} from" react-icons/bs"
import { BsChevronRight as Arrow } from "react-icons/bs";
import { styled } from "styled-components";
import PrimaryButton from "../../reusableUI/PrimaryButton";
import { theme } from "../../../theme/index";

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

  //Affichage
  return (
    <LoginStyled action="submit" onSubmit={handleSubmit}>
      <div>
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

          <button>
            Accéder à votre espace <Arrow />
          </button>
          <PrimaryButton label={"Acceder à mon espace"} Icon={<Arrow />} />

        </div>
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.form`
  background-color: ${theme.colors.background_dark};
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${theme.colors.white};
  padding: 0.6em 1.2em 1em;
  border-radius: 5px;
  max-width: 7cap;
  font-family: 'Open Sans', sans-serif;

  hr {
    height: 1px;
    background-color: ${theme.colors.primary};
    width: 80%;
    border: none;
  }
  .logo {
    padding: 2px;
    min-width: 40px;
    position: absolute;
    left: 0;
    right: 0;
  }
  .icon {
    position: absolute;
    padding: 13px;

    color: black;
  }
  input {
    font-family: inherit;

    cursor: pointer;
    transition: border-color 0.25s;
    background-color: white;
    padding: 10px;
    padding-left: 40px;
    text-align: center;
    display: flex;
    width: 100%;
    color: ${theme.colors.incognito};
    text-align: left;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    background-color: ${theme.colors.primary};
    width: 100%;
    padding: 10px;
    font-weight: ${theme.weights.medium};
    transition: all 0.5s ease;
    border: none;
  }

  button:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }

  .inputName {
    display: flex;
    background-color: ${theme.colors.white};
    margin-bottom: 10px;
    min-width: 100%;
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
  }
`;

export default Login;
