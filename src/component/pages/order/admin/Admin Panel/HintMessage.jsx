import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      Cliquer sur un produit pour le modifier <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyMedium};
  display: flex;
  flex-direction: row;
  align-content: left;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  height: 70%;
  margin-left: 40px;
`;
