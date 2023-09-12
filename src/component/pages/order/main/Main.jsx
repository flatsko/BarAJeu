import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import AdminPanel from "../admin/AdminPanel";
import { useContext, useState } from "react";
import Context from "../../../../context/Context";
import Admin from "../admin/Admin";

export default function Main() {
  const {isCollapsed} = useContext(Context);

  const {isModeAdmin, setIsModeAdmin} = useContext(Context);
  return (
    <MainStyled>
{/* <div className="basket">Basket</div>  */}
      <div className="gridCont">
        <Menu />
        {isModeAdmin && <Admin className={isCollapsed ? "toggle" : "notToggle"} />}
        {console.log(isCollapsed)}
      </div>
     
    </MainStyled>
  );
}

const MainStyled = styled.div`

background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  .plot {
    z-index: 50;
    background: none;

    box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.05),
      inset -2px -2px 0 #665235;
  }
.basket{
  
}
  .gridCont {
display:grid;
  }

  .grid {
  }
`;
