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
    console.log(tabSelected);
    setIsCollapsed(true);
    setCurrentTabSelected(tabSelected);
    
  };


  const handleClickIcon = (e) => {
    setIsCollapsed(!isCollapsed);
    console.log(isCollapsed);
    
  };


  return (
    <AdminTabsStyled>
      <div className="buttonPanel">
        {isCollapsed ? (
          <FiChevronDown size={35} className="icon" onClick={handleClickIcon} />
        ) : (
          <FiChevronUp size={35} className="icon" onClick={handleClickIcon} />
        )}
        {adminTabs.map(({ index, title, showLabel, Icon }) => {
          return (
            <div>
              <AdminTab
                key={index}
                handleClickButton={() => selectTab(index)}
                Icon={Icon}
                showLabel={showLabel}
                title={title}
                isLabelShow={isLabelShow}
                className={currentTabSelected === index ? "affiche" : "ko"}
              />{" "}
              {console.log(`AdminTabs ${title}`)}
            </div>
          );
        })}
      </div>
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 71px;

  .buttonPanel {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: ${theme.borderRadius.extraRound};
    border: 2px;
    box-shadow: ${theme.shadows.subtle};

    & :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }

  .icon {
    align-items: flex-end;
    display: flex;
    flex: 1;
    color: ${theme.colors.greyMedium};
    background-color: ${theme.colors.background_white};
  }
`;
