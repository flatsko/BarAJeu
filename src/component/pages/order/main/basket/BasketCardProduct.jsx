import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import Context from "../../../../../context/Context";
import { formatPrice } from "../../../../../utils/maths";
import { MdDeleteForever } from "react-icons/md";
import Sticker from "../../../../reusableUI/Sticker";
import BasketProductNonAvailable from "./BasketProductNonAvailable";

export default function BasketCardProduct({
  id,
  title,
  imageSource,
  price,
  quantity,
  className,
  deleteClick,
  isClicable,
  onClick,
  isSelected,
  isAvailable,
  isPublicised,
}) {
  return (
    <BasketCardProductStyled isselected={isSelected}>
      <div className="basketCard">
        {isPublicised ? <Sticker className={"sticker"}></Sticker> : null}
        <div className="deleteButton" onClick={deleteClick}>
          <MdDeleteForever className="icon" />
        </div>

        <div className="image">
          <img src={imageSource ? imageSource : "/images/coming-soon.png"} />
        </div>
        <div className="name" onClick={isClicable ? onClick : null}>
          <span>{title}</span>
        </div>
        <div className="price">
          {isAvailable ? formatPrice(price) : <BasketProductNonAvailable />}
        </div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
      </div>
    </BasketCardProductStyled>
  );
}

const BasketCardProductStyled = styled.div`
  ${(props) => props.isselected && selectedStyle}
  position: relative;
  height: 86px;
  width: 90%;
  margin-bottom: 10px;
  display: flex;
  .sticker {
    position: absolute;
    display: grid;
    grid-area: image;
    bottom: 10px;
    right: 0;
    z-index: 2;
  }
  .test {
    color: red;
  }
  .basketCard {
    position: relative;

    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1.7fr 0.7fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "image name quantity"
      "image price quantity";
    font-size: ${theme.fonts.size.P1};
    align-items: center;
    justify-items: center;
    background-color: ${theme.colors.white};
    height: 100%;
    width: 100%;
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
      display: grid;
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
      margin-left: 15px;
      span {
        overflow: hidden;
        /* width: 100%; */
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .price {
      margin-left: 15px;

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
    position: relative;
    .deleteButton {
      border: none;
      box-sizing: border-box;
      grid-area: quantity;
      display: grid;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;
      z-index: 2;
      :hover {
        color: black;
      }
      .icon {
        height: 100%;
        display: flex;
        align-items: center;
      }
      .quantity {
        display: none;
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
