import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme/index";

export default function TextInput({ name, Icon, onChange, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={name} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 15px 24px;
  margin: 18px 0; // could be handle in Parent too
  /* white-space: nowrap; */

  input {
    font-family: inherit;

    cursor: pointer;
    background-color: ${theme.colors.white};
    border: none;
    text-align: center;
    display: flex;
    color: ${theme.colors.incognito};
    text-align: left;
    font-size: ${theme.fonts.P2};

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
