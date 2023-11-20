import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function AdminTab({
  handleClickButton,
  showLabel,
  Icon,
  title,
  className,
}) {
  return (
    <AdminTabStyled
      value={showLabel}
      onClick={handleClickButton}
      className={className}
    >
      <div className="icon">{Icon && Icon}</div>
      {title && title}
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.button`
  padding: 15px 30px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border: 2px;
  margin-right: 2px;
  color: ${theme.colors.background_dark};
  background-color: ${theme.colors.background_white};

  &.affiche {
    // background-color: ${theme.colors.background_white};
    //  color: ${theme.colors.white};
  }
`;
