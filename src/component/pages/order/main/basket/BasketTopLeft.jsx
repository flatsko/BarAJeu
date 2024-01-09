import React from "react";
import styled from "styled-components";

export default function BasketTopLeft() {
  return <BasketTopLeftStyled className="leftSide">Total</BasketTopLeftStyled>;
}

const BasketTopLeftStyled = styled.div`
  margin-left: 10px;
`;
