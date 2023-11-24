import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { CiCircleCheck } from "react-icons/ci";

export default function SubmitButton({ isAdded }) {
  return (
    <SubmitButtonStyled>
      <PrimaryButton
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.button`
  height: 100%;
`;
