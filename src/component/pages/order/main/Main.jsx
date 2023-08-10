import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import AdminPanel from "../admin/AdminPanel";
import { useState } from "react";

export default function Main() {

  
  return (
    <MainStyled>
{/* <div className="basket">Basket</div>  */}
      <div className="gridCont">
        <Menu />
        <AdminPanel />
      </div>
     
    </MainStyled>
  );
}

const MainStyled = styled.div`

  height: calc(95vh - 10vh);
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background-color: ${theme.colors.greyBlue};
  display: grid;
  grid-template-columns: 1fr;
border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .plot {
    z-index: 50;
    background: none;

    box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.05),
      inset -2px -2px 0 #665235;
  }
.basket{
  
}
  .gridCont {
    position: relative;
    overflow:hidden;
    display:grid;
  }

  .grid {
  }
`;
