import React, { useContext, useState } from "react";
import { adminTabs, getSelectedTab } from "./adminTabsData";
import AdminTab from "../../../reusableUI/AdminTab";
import { FiChevronDown, FiChevronUp, FiChevronsUp } from "react-icons/fi";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Context from "../../../../context/Context";

export default function AdminTabs() {
  const [isLabelShow, seIsLabelShow] = useState("");
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(Context);

  const selectTab = (tabSelected) => {
    setIsCollapsed(true);
    setCurrentTabSelected(tabSelected);
  };

  const handleClickIcon = (e) => {
    setIsCollapsed(!isCollapsed);
    //console.log(isCollapsed);
  };

  return (
    <AdminTabsStyled>
      <div className="buttonPanel">
        {isCollapsed ? (
          <AdminTab
            Icon={<FiChevronDown />}
            handleClickButton={() => handleClickIcon()}
          />
        ) : (
          <AdminTab
            Icon={<FiChevronsUp />}
            size={35}
            handleClickButton={() => handleClickIcon()}
          />
        )}
        {adminTabs.map(({ index, title, showLabel, Icon }) => {
          return (
            <AdminTab
              key={index}
              handleClickButton={() => selectTab(title)}
              Icon={Icon}
              showLabel={showLabel}
              title={title}
              isLabelShow={isLabelShow}
              className={currentTabSelected === title ? "affiche" : "ko"}
            />
          );
        })}
      </div>
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  left: 5%;

  .buttonPanel {
    // display: flex;
    // flex-direction: row;
    //padding-left: 10px;
    //align-items: center;
    // border-radius: ${theme.borderRadius.extraRound};
    // border: 2px;
    // box-shadow: ${theme.shadows.subtle};

    & :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }

  .affiche {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.background_white};
    border-color: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
  }
  .icon {
    position: relative;
    display: contents;
  }
  button {
    margin-left: 1px;
  }
`;
