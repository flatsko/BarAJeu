import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPannelButton({
  label,
  onClick,
  className,
  icon,
  ...extraprops
}) {
  return (
    <AdminPannelButtonStyled onClick={onClick} {...extraprops}>
      {icon}
      <span className="label">{label}</span>
    </AdminPannelButtonStyled>
  );
}

const AdminPannelButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  border-color: transparent;
  margin: 5px;
  color: ${theme.colors.greyDark};
  position: relative;

  cursor: pointer;
  .label {
    padding-left: 30px;
  }
  .icon {
    position: absolute;
    //color: red;
    //padding-left: 100px;
  }
`;
