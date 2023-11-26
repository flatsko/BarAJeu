import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTop from "./BasketTop";
import BasketBottom from "./BasketBottom";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketTop></BasketTop>
      <div className="contentBasket">VOTRE COMMANDE EST VIDE</div>
      <BasketBottom></BasketBottom>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  grid-area: baket;
  display: flex;
  flex-direction: column;
  flex: 1 5 1;
  flex-grow: 1;
  justify-content: space-between;
  align-content: space-between;

  //flex-wrap: wrap;

  .contentBasket {
    display: flex;
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.greyDark};
    justify-content: center;
    align-items: center;
    flex: 15;
  }
`;
