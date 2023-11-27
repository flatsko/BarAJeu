import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Context from "../../../../../context/Context";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketCardProduct({
  id,
  title,
  imageSource,
  price,
  quantity,
}) {
  return (
    <BasketCardProductStyled>
      <div className="image">
        <img src={imageSource} />
      </div>
      <div className="name">
        <span>{title}</span>
      </div>
      <div className="price">{formatPrice(price)}</div>
      <div className="quantity">
        <span>x {quantity}</span>
      </div>

      {/* {console.log(basketMenu)}{" "}
      {Object.keys(basketMenu).length != 0
        ? basketMenu.map((el) => {
            return el.title;
          })
        : null}{" "}
      ; */}
    </BasketCardProductStyled>
  );
}

const BasketCardProductStyled = styled.div`
  width: 90%;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1.7fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "image name quantity"
    "image price quantity";
  font-size: ${theme.fonts.size.P1};
  align-items: center;
  justify-items: start;
  background-color: ${theme.colors.white};
  height: 86px;
  border-radius: ${theme.borderRadius.round};

  .quantity {
    grid-area: quantity;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P0};
  }
  .name {
    font-size: ${theme.fonts.size.P3};
    font-weight: ${theme.fonts.weights.heavy};
    grid-area: name;
    font-family: "Amatic SC", cursive;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    display: grid;
    grid-column-end: 3;
    span {
      overflow: hidden;
      /* width: 100%; */
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .price {
    grid-area: price;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P0};
  }
  .image {
    display: flex;
    box-sizing: border-box;
    height: 70px;
    grid-area: image;
    /* border: 1px solid red; */
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;
