import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import { useContext } from "react";
import Context from "../../../../context/Context";
import Basket from "./basket/Basket";
export default function Main() {
  // const {} = useContext(Context);

  return (
    <MainStyled>
      <Basket />
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
