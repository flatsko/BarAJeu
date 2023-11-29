import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketComingSoon() {
  return (
    <BasketComingSoonStyled>Votre commande est vide</BasketComingSoonStyled>
  );
}

const BasketComingSoonStyled = styled.div`
  font-size: ${theme.fonts.size.P3};
  font-family: "Amatic SC", cursive;
  display: flex;
  flex: 1;
  align-items: center;
`;
