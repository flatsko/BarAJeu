import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiCheck } from "react-icons/fi";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheck className="icon" />
      <span className="message">Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
  flex-direction: row;
  flex-wrap: nowrap;

  .icon {
    font-size: ${theme.fonts.P0};
    padding-left: 5px;
    color: ${theme.colors.greySemiDark};
    position: absolute;
    z-index: 100;
  }
  .message {
    margin-left: 25px;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.success};
  }
`;
