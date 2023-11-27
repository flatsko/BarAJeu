import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBottom() {
  return (
    <BasketBottomStyled className="bottomBasket">
      Codé avec ❤️ et React.JS
    </BasketBottomStyled>
  );
}

const BasketBottomStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background_dark};
  height: 100px;
  font-family: "Amatic SC", cursive;
`;
