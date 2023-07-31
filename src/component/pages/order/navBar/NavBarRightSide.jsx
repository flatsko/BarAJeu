import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Profile from "./Profile";
import ToggleButton from "../../../reusableUI/ToggleButton";

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyles>
      <ToggleButton />
      {/* <div className="adminButton">Admin Button</div> */}
      <Profile username={username} />
    </NavBarRightSideStyles>
  );
}

const NavBarRightSideStyles = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
