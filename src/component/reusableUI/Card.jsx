import styled, { css } from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
const DEFAULT_IMAGE_SOURCE = "/images/coming-soon.png";
import { TiDelete } from "react-icons/ti";
import Ribbon from "./Ribbon";

export default function Card({
  title,
  imageSource,
  leftDescription,
  showDeleteButton,
  onDelete,
  className,
  ishoverable,
  isselected,
  onClick,
  onClickButton,
  isAvailable,
  isPublicised,
  ...extraProps
}) {
  return (
    <CardStyled
      className={className ? className : "produit"}
      ishoverable={ishoverable}
      isselected={isselected}
      onClick={onClick}
      isAvailable={isAvailable}
      {...extraProps}
    >
      {!isAvailable ? (
        <img className="epuise" src="../images/stock-epuise.png" />
      ) : null}
      {isPublicised ? <Ribbon /> : null}
      <div className={"card"}>
        {showDeleteButton ? (
          <button onClick={onDelete} className="deleteButton">
            <TiDelete className="icon" />
          </button>
        ) : (
          ""
        )}

        <div className="image">
          <img
            src={imageSource ? imageSource : DEFAULT_IMAGE_SOURCE}
            alt={title}
          />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              <PrimaryButton
                onClick={onClickButton}
                className="primary-button"
                label={"Ajouter"}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${(props) => (props.isAvailable ? null : availableStyle)}
  ${(props) => props.ishoverable && hoverableStyle}
  position:relative;
  .epuise {
    position: absolute;
    top: 20%;
    left: 0px;
    width: 100%;
  }
  .card {
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .deleteButton {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      border: none;
      background: none;
      color: ${theme.colors.primary};
      width: 30px;
      height: 30px;
      .icon {
        height: 150%;
        width: 150%;
      }
      :hover {
        color: ${theme.colors.red};
      }
      :active {
        color: ${theme.colors.primary};
      }
    }
    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
          }
        }
      }
    }
    ${({ ishoverable, isselected }) =>
      ishoverable && isselected && selectedStyle}
  }
`;
const availableStyle = css`
  .card {
    opacity: 0.2;
  }
`;
const hoverableStyle = css`
  position: relative;
  .card:hover {
    border: 5px;
    transform: translateY(-5px) scale(1.005) translateZ(0);
    transition-duration: 0.5s;
    background-color: ${theme.colors.primary};
    cursor: pointer;
    .primary-button:hover {
      border-color: ${theme.colors.background_white};
      color: ${theme.colors.background_white};
      background-color: ${theme.colors.primary};
    }
    .text-info .description .left-deClscription {
      color: ${theme.colors.background_white};
    }
    .deleteButton {
      color: ${theme.colors.background_white};
    }
  }
`;

const selectedStyle = css`
  position: relative;
  background-color: ${theme.colors.primary};
  transform: translateY(-5px) scale(1.005) translateZ(0);
  transition-duration: 0.5s;
  background-color: ${theme.colors.primary};
  cursor: pointer;
  .primary-button {
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.primary};
  }
  .primary-button:hover {
    border-color: ${theme.colors.background_white};
    color: ${theme.colors.background_white};
    background-color: ${theme.colors.primary};
  }
  .text-info .description .left-description {
    color: ${theme.colors.background_white};
  }
  .deleteButton {
    color: ${theme.colors.background_white};
  }
`;
