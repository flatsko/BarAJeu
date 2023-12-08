import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import BasketCardProduct from "./BasketCardProduct";
import Context from "../../../../../context/Context";

export default function BasketProduct({
  checkIfProductIsClicked,
  onCardClick,
}) {
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

  return (
    <BasketProductStyled>
      <TransitionGroup>
        {basketMenu.map((basketProduct) => {
          return (
            <CSSTransition
              classNames={"cardAnim"}
              key={basketProduct.id}
              timeout={{ enter: 5000, exit: 5000 }}
            >
              <BasketCardProduct
                key={basketProduct.id}
                deleteClick={() => handleDeleteToBasket(basketProduct.id)}
                isClicable={isModeAdmin}
                onClick={(e) => onCardClick(e, basketProduct)}
                isSelected={
                  +checkIfProductIsClicked(basketProduct.id, productToModify.id)
                }
                {...basketProduct}
              ></BasketCardProduct>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductStyled>
  );
}

const BasketProductStyled = styled.div`
  .cardAnim-enter {
    .basketCard {
      background-color: red;
    }
  }

  .cardAnim-enter-active {
    .basketCard {
      background-color: blue;
    }
  }

  .cardAnim-enter-done {
    .basketCard {
      background-color: green;
    }
  }
`;
