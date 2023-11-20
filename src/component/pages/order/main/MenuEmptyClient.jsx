import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function MenuEmptyClient() {
  return (
    <MenuEmptyClientStyles>
      <div className="title">Victime de notre succès ! :D</div>{" "}
      <div className="h2">
        De nouvelles recettes sont en cours de préparation.
      </div>
      <div className="h2">À très vite ! </div>
    </MenuEmptyClientStyles>
  );
}

const MenuEmptyClientStyles = styled.div`
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
    padding-bottom: 15px;
  }

  .h2 {
    padding-bottom: 10px;
  }
`;
