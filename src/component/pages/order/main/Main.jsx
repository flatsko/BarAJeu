import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import AdminPanel from "../admin/AdminPanel";
import { useContext, useState } from "react";
import Context from "../../../../context/Context";
import Admin from "../admin/Admin";

export default function Main() {
  // const {} = useContext(Context);

  const { isCollapsed, isModeAdmin, setIsModeAdmin } = useContext(Context);
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div>  */}
      {/* <div className="gridCont"> */}
      <Menu />
      {isModeAdmin && (
        <Admin className={isCollapsed ? "toggle" : "notToggle"} />
      )}
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
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .basket {
  }
`;
