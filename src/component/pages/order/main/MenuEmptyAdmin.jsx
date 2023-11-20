import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusableUI/PrimaryButton";

export default function MenuEmptyAdmin({ resetMenu }) {
  return (
    <MenuEmptyAdminStyled>
      <div className="title">Le Menu est vide ?</div>{" "}
      <div className="h2">Cliquez ci-dessous pour le réinitialiser</div>
      <PrimaryButton
        className="generate-Button"
        label="Générer de nouveaux produits"
        icon=""
        onClick={resetMenu}
      />
    </MenuEmptyAdminStyled>
  );
}

const MenuEmptyAdminStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  //  align-items: center; // permet de diminuer la largeur du bouton resetMenu
  color: ${theme.colors.greyDark};
  height: 80vh;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};

  .title {
    font-weight: ${theme.fonts.weights.heavy};
  }
  .generate-Button {
    display: flex;
    align-self: center;
    width: 320px;
    height: 50px;
    cursor: pointer;
    margin-top: 15px;
  }
`;
