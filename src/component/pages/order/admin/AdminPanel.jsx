import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Context from "../../../../context/Context";
import { adminTabs, getSelectedTab } from "./adminTabsData";
import { EMPTY_PRODUCT } from "../../../../enum/products";
export default function AdminPanel() {
  const { currentTabSelected, isCollapsed, productToModify } =
    useContext(Context);

  const tabs = adminTabs(productToModify !== EMPTY_PRODUCT);
  const tabSelected = getSelectedTab(tabs, currentTabSelected);
  return (
    <AdminPanelStyled className={isCollapsed}>
      {tabSelected && tabSelected.link}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background-color: ${theme.colors.white};
  //color: ${theme.colors.dark};
  // border-bottom-left-radius: ${theme.borderRadius.extraRound};
  //border-bottom-right-radius: ${theme.borderRadius.extraRound};
  height: 250px;
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  text-align: left;
  p {
    padding: 0 20px;
  }
`;
