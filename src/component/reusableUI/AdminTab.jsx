import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function AdminTab({handleClickButton,isLabelShow, show, showLabel, Icon, title, className}) {

  return (
 
      <AdminTabStyled
      
        value={showLabel}
        onClick={handleClickButton}
        className={className}
      >                  
        {Icon && Icon}
        {title && title}
      </AdminTabStyled>

  );
}

const AdminTabStyled = styled.button`
    padding: 15px 30px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border: 2px;
    border-color: blueviolet;
    color: ${theme.colors.dark};

    &.affiche {
      background-color: ${theme.colors.background_dark};
      color: ${theme.colors.white};
    }

`;
