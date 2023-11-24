import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { CiCircleCheck } from "react-icons/ci";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({ isAdded }) {
  return (
    <SubmitButtonStyled>
      <PrimaryButton
        className="submitbutton"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
      {isAdded && <SubmitMessage />}
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.button`
  height: 100%;
`;
