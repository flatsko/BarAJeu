
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import Menu from "./Menu";


export default function Main() {


  return (
    <MainStyled className="gridCont">
      <div className="gridCont">
       
       
      <Menu />
    
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  flex: 1;
  display: flex;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background-color: ${theme.colors.background_white};
  padding: 40px;
  /* display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%; */
  overflow-y: scroll;
  .plot {
    z-index: 50;
    background: none;
    
    box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.05),
      inset -2px -2px 0 #665235;
  }

  .gridCont {
    flex: 1;

  }

  .grid {

  }


`;
