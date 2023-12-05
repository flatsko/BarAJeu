import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTop from "./BasketTop";
import BasketBottom from "./BasketBottom";
import BasketCardProduct from "./BasketCardProduct";
import BasketComingSoon from "./BasketComingSoon";
import { useBasket } from "../../../../../hooks/useBasket";
import { useContext } from "react";
import Context from "../../../../../context/Context";
import LoadingSpinner from "../../../../reusableUI/Loading";

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
    total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);
  return (
    <BasketStyled>
      <BasketTop priceToPay={sumToPay} />
      <div className="contentBasket">
        <div className="box">
          {!isLoading ? (
            basketMenu.length > 0 ? (
              basketMenu.map((basketProduct) => {
                return (
                  <BasketCardProduct
                    key={basketProduct.id}
                    deleteClick={() => handleDeleteToBasket(basketProduct.id)}
                    isClicable={isModeAdmin}
                    onClick={(e) => onCardClick(e, basketProduct)}
                    isSelected={
                      +checkIfProductIsClicked(
                        basketProduct.id,
                        productToModify.id
                      )
                    }
                    {...basketProduct}
                  ></BasketCardProduct>
                );
              })
            ) : (
              <BasketComingSoon></BasketComingSoon>
            )
          ) : (
            <LoadingSpinner />
          )}
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
