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
    <TransitionGroup component={BasketProductStyled}>
      {basketMenu.map((basketProduct) => {
        return (
          <CSSTransition
            appear={true}
            classNames={"cardAnim"}
            key={basketProduct.id}
            timeout={2000}
          >
            <BasketCardProduct
              key={basketProduct.id}
              deleteClick={() => handleDeleteToBasket(basketProduct.id)}
              isClicable={isModeAdmin}
              onClick={(e) => onCardClick(e, basketProduct)}
              isSelected={
                +checkIfProductIsClicked(basketProduct.id, productToModify.id)
              }
              isPublicised={basketProduct.isPublicised}
              {...basketProduct}
            ></BasketCardProduct>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;

  .cardAnim-enter {
    .basketCard {
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .cardAnim-enter-active {
    .basketCard {
      transition: 2s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .cardAnim-enter-done {
    .basketCard {
    }
  }

  .cardAnim-exit {
    .basketCard {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .cardAnim-exit-active {
    .basketCard {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 2s;
    }
  }
  .cardAnim-exit-done {
    .basketCard {
      background-color: red;
    }
  }
`;
