import  { useContext } from "react";
import { styled } from "styled-components";
import "./adminTabsData";
import { theme } from "../../../../theme";
import Context from "../../../../context/Context";

export default function AdminPanel() {
  const { currentTabSelected, isCollapsed } = useContext(Context);
  return (
    <AdminPanelStyled>
      {isCollapsed && currentTabSelected && currentTabSelected}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background-color: ${theme.colors.background_white};
  &.toggle {
    left: 0px;
    background-color: ${theme.colors.background_white};
    text-align: left;
    min-width: 100vw;
    min-height: 30vh;
    padding: -50px;
  }

  &.notToggle {
    bottom: 0;
    left: 0px;
    background-color: azure;
    text-align: left;
    min-width: 100vw;
    min-height: 0vh;
    padding: -40px;
  }
`;
