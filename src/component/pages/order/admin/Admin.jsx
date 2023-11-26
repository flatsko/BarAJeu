import React, { useContext } from "react";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import { theme } from "../../../../theme";
import { styled } from "styled-components";
import Context from "../../../../context/Context";

export default function Admin() {
  const { isCollapsed } = useContext(Context);

  return (
    <AdminStyled className={isCollapsed ? "toggle" : "notToggle"}>
      <AdminTabs />
      {isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 19%;
  right: 0;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  //min-width: 90vh;
`;
