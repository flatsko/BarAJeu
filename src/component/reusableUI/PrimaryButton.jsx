import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/index";

export default function PrimaryButton({
  label,
  icon,
  className,
  onClick,
  version = "normal",
  ...extraProps
}) {
  return (
    <StyledPrimaryButton
      className={className}
      onClick={onClick}
      version={version}
      {...extraProps}
    >
      <span>{label}</span>
      {icon && icon}
    </StyledPrimaryButton>
  );
}

const StyledPrimaryButton = styled.button`
  ${({ version }) => extraStyle[version]};
  //width: 100%;
  height: 50px;
  outline: none;
  cursor: pointer;
`;

const extraStylePrimary = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;
  outline: none;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #ff9f1b;
  border: 1px solid #ff9f1b;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
    cursor: pointer;
    outline: none;
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    outline: none;
  }
  :focus {
    outline: none;
  }
  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      //border: 1px solid ${theme.colors.white};
      outline: none;
    }
    :active {
      background-color: ${theme.colors.red};
      color: ${theme.colors.primary};
      outline: none;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  width: 60%;
  //padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    outline: none;
  }
  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    outline: none;
  }
`;
const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
};
