import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import AdminPanel from "../admin/AdminPanel";
import { useContext, useState } from "react";
import Context from "../../../../context/Context";
import Admin from "../admin/Admin";
import Basket from "./basket/basket";

export default function Main() {
  // const {} = useContext(Context);

  const { isCollapsed, isModeAdmin, setIsModeAdmin } = useContext(Context);
  return (
    <MainStyled>
      <Basket></Basket>
      <Menu className="menu"></Menu>

      {/* {console.log(isCollapsed)} */}
      {/* </div> */}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  position: relative;
  overflow-y: hidden;
  display: grid;
  grid-template-columns: 0.35fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "baket menu";
  height: 100vh;

  .menu {
    grid-area: menu;
  }
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .basket {
  }
`;
