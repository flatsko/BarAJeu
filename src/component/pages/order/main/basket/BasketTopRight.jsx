import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketTopRight({ priceToPay }) {
  return (
    <BasketTopRightStyled className="rightSide">
      {formatPrice(priceToPay)}
    </BasketTopRightStyled>
  );
}

const BasketTopRightStyled = styled.div`
  margin-right: 10px;
`;
