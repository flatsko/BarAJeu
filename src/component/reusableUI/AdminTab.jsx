import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function AdminTab({handleClickButton,isLabelShow, show, showLabel, Icon, title}) {

  const defineClasseName = (toggleName) => {
   
    if (toggleName == isLabelShow) {
        
      return "affiche";
    }
    {
      return "koAffiche";
    }
  };
  return (
 
      <AdminTabStyled
      
        value={showLabel}
        onClick={handleClickButton}
        className={defineClasseName(showLabel)}
      >
             
              {console.log(`Camel ${isLabelShow}`)}
              
        {Icon}
        {title}
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
