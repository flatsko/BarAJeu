import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export default function PrimaryButton({
  label,
  icon,
  className,
  onClick,
  ...extraProps
}) {
  return (
    <StyledPrimaryButton
      className={className}
      onClick={onClick}
      {...extraProps}
    >
      <span>{label}</span>
      {icon && icon}
    </StyledPrimaryButton>
  );
}

const StyledPrimaryButton = styled.button`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;&&
  font-family: inherit;
  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
