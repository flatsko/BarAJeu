import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import Context from "../../../../../context/Context";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCardProduct({
  id,
  title,
  imageSource,
  price,
  quantity,
  className = "test",
  deleteClick,
  isClicable,
  onClick,
  isSelected,
}) {
  return (
    <BasketCardProductStyled className={className} isSelected={isSelected}>
      <div className="basketCard">
        <div className="deleteButton" onClick={deleteClick}>
          <MdDeleteForever className="icon" />
        </div>
        {console.log(isSelected)}
        <div className="image">
          <img src={imageSource ? imageSource : "/images/coming-soon.png"} />
        </div>
        <div className="name" onClick={isClicable ? onClick : null}>
          <span>{title}</span>
        </div>
        <div className="price">{formatPrice(price)}</div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
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
  ${(props) => props.isSelected && selectedStyle}
  position: relative;
  height: 86px;
  width: 100%;
  margin-bottom: 10px;

  .basketCard {
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
    height: 100%;
    border-radius: ${theme.borderRadius.round};
    // background-color: ${theme.colors.primary};

    /* .container {
    display: grid;
    grid-template-columns: 1fr 1.7fr 0.5fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "image name quantity"
      "image price quantity";
    height: 86px;
    width: 90%; */

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

    .deleteButton {
      display: none;
    }
  }
  .basketCard:hover {
    .deleteButton {
      position: absolute;
      border: none;
      box-sizing: border-box;
      grid-area: quantity;
      width: 76px;
      height: 100%;
      display: flex;
      right: 0;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const selectedStyle = css`
  .basketCard {
    position: relative;
    height: 86px;
    width: 100%;
    background-color: ${theme.colors.primary};
    transform: translateY(-5px) scale(1.005) translateZ(0);
    transition-duration: 0.5s;
    background-color: ${theme.colors.primary};
    cursor: pointer;
  }
`;
