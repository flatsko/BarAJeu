import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import CasinoEffect from "../../../../reusableUI/CasinoEffect";
import { theme } from "../../../../../theme";

export default function BasketTopRight({ priceToPay }) {
  return (
    <BasketTopRightStyled className="rightSide">
      <CasinoEffect
        className={"casino"}
        count={formatPrice(priceToPay)}
      ></CasinoEffect>
    </BasketTopRightStyled>
  );
}

const BasketTopRightStyled = styled.div`
  margin-right: 10px;

  .casino {
    font-size: ${theme.fonts.size.P4};
    font-family: "Amatic SC", cursive;
  }
`;
