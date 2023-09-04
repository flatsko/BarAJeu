import React, { useContext } from "react";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./adminTabs";
import { theme } from "../../../../theme";
import { styled } from "styled-components";
import Context from "../../../../context/Context";

export default function Admin() {
    const {isCollapsed} = useContext(Context);
    
  return (

    <AdminStyled className={isCollapsed ? "toggle" : "notToggle"} >
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  display: grid;
  bottom: 0;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background-color: transparent;
  &.toggle {
    left: 0px;
    /* background-color: ${theme.colors.background_white}; */
    text-align: left;
    min-width: 100vw;
    min-height: 35vh;
    padding: -50px;
  }

  &.notToggle {
    bottom: 0;
    left: 0px;
    text-align: left;
    min-width: 100vw;
    min-height: 0vh;
    padding: -40px;
  }

`;
