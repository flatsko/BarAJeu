import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Profile from "./Profile";

export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyles>
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
