import React from "react";
import styled from "styled-components";
import BasketTopLeft from "./BasketTopLeft";
import BasketTopRight from "./BasketTopRight";
import { theme } from "../../../../../theme";

export default function BasketTop({ priceToPay }) {
  return (
    <BasketTopStyled className="topBasket">
      <BasketTopLeft></BasketTopLeft>
      <BasketTopRight priceToPay={priceToPay}></BasketTopRight>
    </BasketTopStyled>
  );
}

const BasketTopStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background_dark};
  justify-content: space-between;
  height: 100px;
  font-size: ${theme.fonts.size.P3};
  font-family: "Amatic SC", cursive;

  color: ${theme.colors.primary};
`;
