import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketTop from "./BasketTop";
import BasketBottom from "./BasketBottom";
import BasketCardProduct from "./BasketCardProduct";
import Context from "../../../../../context/Context";

export default function Basket() {
  const { basketMenu } = useContext(Context);

  const sumToPay = basketMenu.reduce((total, basketProduct) => {
    total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);
  return (
    <BasketStyled>
      <BasketTop priceToPay={sumToPay} />
      <div className="contentBasket">
        <div className="box">
          {basketMenu
            ? basketMenu.map((basketProduct) => {
                return (
                  <BasketCardProduct
                    key={basketProduct.id}
                    {...basketProduct}
                  ></BasketCardProduct>
                );
              })
            : null}
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
