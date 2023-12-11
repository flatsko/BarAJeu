import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTop from "./BasketTop";
import BasketBottom from "./BasketBottom";
import BasketCardProduct from "./BasketCardProduct";
import BasketComingSoon from "./BasketComingSoon";
import { useContext } from "react";
import Context from "../../../../../context/Context";
import LoadingSpinner from "../../../../reusableUI/Loading";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BasketProduct from "./BasketProduct";

export default function Basket() {
  let {
    basketMenu,
    handleDeleteToBasket,
    isModeAdmin,
    setProductToModify,
    productToModify,
    titleEditRef,
    setIsCollapsed,
    setCurrentTabSelected,
    isLoading,
  } = useContext(Context);
  async function onCardClick(event, id) {
    if (!isModeAdmin) return;
    event.stopPropagation(id);
    await setCurrentTabSelected("Modifier les produits");
    await setIsCollapsed(true); //Ouvre le pannel admin

    setProductToModify(id);
    titleEditRef.current.focus();
    setIsCollapsed(true);
    console.log(productToModify.id, basketMenu.id);
  }

  const checkIfProductIsClicked = (idProductMenu, idProductClickedOn) => {
    return idProductMenu === idProductClickedOn;
  };

  const sumToPay = basketMenu.reduce((total, basketProduct) => {
    basketProduct.isAvailable
      ? (total += basketProduct.price * basketProduct.quantity)
      : null;
    return total;
  }, 0);
  return (
    <BasketStyled>
      <BasketTop priceToPay={sumToPay} />
      <div className="contentBasket">
        <div className="box">
          {!isLoading ? (
            <BasketProduct
              basketMenu={basketMenu}
              checkIfProductIsClicked={checkIfProductIsClicked}
              onCardClick={onCardClick}
              handleDeleteToBasket={handleDeleteToBasket}
              isModeAdmin={isModeAdmin}
              productToModify={productToModify}
            ></BasketProduct>
          ) : (
            <LoadingSpinner />
          )}

          {basketMenu.length == 0 ? (
            <BasketComingSoon></BasketComingSoon>
          ) : null}
        </div>
      </div>
      <BasketBottom></BasketBottom>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  font-size: ${theme.fonts.size.P0};
  grid-area: baket;
  display: flex;
  flex-direction: column;
  //flex: 1 1 1;
  flex-grow: 1;
  flex: 1;
  justify-content: space-between;
  align-content: space-between;

  //overflow: auto;
  //box-shadow: ${theme.shadows.strong}; //flex-wrap: wrap;
  .contentBasket {
    font-size: ${theme.fonts.size.P4};
    display: flex;
    //overflow: hidden;
    overflow-y: auto;
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.greyDark};

    height: 50px;
    flex-grow: 1;
  }
  .transition {
    font-size: ${theme.fonts.size.P0};
    grid-area: baket;
    display: flex;
    flex-direction: column;
    //flex: 1 1 1;
    flex-grow: 1;
    flex: 1;
    justify-content: space-between;
    align-content: space-between;
  }
  .box {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 90%;
    display: flex;
    min-height: min-content; /* needs vendor prefixes */
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    //overflow-y: scroll;
  }
`;
