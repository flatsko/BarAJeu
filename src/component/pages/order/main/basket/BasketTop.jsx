import React from "react";
import styled from "styled-components";
import BasketTopLeft from "./BasketTopLeft";
import BasketTopRight from "./BasketTopRight";
import { theme } from "../../../../../theme";

export default function BasketTop() {
  return (
    <BasketTopStyled className="topBasket">
      <BasketTopLeft></BasketTopLeft>
      <BasketTopRight></BasketTopRight>
    </BasketTopStyled>
  );
}

const BasketTopStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background_dark};
  justify-content: space-between;
  flex: 1;
  color: ${theme.colors.primary};
`;
