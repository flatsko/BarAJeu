import React from "react";
import styled from "styled-components";

export default function BasketTopRight() {
  return (
    <BasketTopRightStyled className="rightSide">0.00 €</BasketTopRightStyled>
  );
}

const BasketTopRightStyled = styled.div`
  margin-right: 10px;
`;
