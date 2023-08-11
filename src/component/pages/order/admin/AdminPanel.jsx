import React, { useState } from "react";
import { styled } from "styled-components";
import "./adminTabs";
import { adminTabs } from "./adminTabs";
import { FiChevronDown } from "react-icons/fi";
import { theme } from "../../../../theme";
import AdminTab from "../../../reusableUI/AdminTab";

export default function AdminPanel() {
  const [toggle, setToggle] = useState(true);
  const showPannel = false;
  const [isLabelShow, seIsLabelShow] = useState("");

  const handleClickButton = (e) => {
    seIsLabelShow(e.target.value);
    console.log(`Handle ${isLabelShow}`);
  };
  const handleClickIcon = () => {
    setToggle(!toggle);
  };

  return (
    <AdminPanelStyled className={toggle ? "toggle" : "notToggle"}>
      <div className="buttonPanel">
        <FiChevronDown size={42} className="icon" onClick={handleClickIcon} />
        {adminTabs.map(({ title, showLabel, Icon }) => {
          return (
            <div>
              <AdminTab
                handleClickButton={handleClickButton}
                Icon={Icon}
                showLabel={showLabel}
                title={title}
                isLabelShow={isLabelShow}
              />
            </div>
          );
        })}
      </div>
      ICI SE TROUVE LE TEXTE
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  display: grid;
  bottom: 0;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

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
  .buttonPanel {
    display: flex;
    margin-top: -50px;
    padding-left: 40px;
    align-items: center;
    border-radius: ${theme.borderRadius.extraRound};
    border: 2px;
    border-color: blueviolet;
    color: ${theme.colors.greyDark};
    & :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }

  .icon {
    size: 32px;
    color: ${theme.colors.greyMedium};
  }
`;
