import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function ImagePreview({ imageSource, className }) {
  return (
    <ImagePrevienwStyled>
      <div className={className}>
        {imageSource ? (
          <img src={imageSource} className={className}></img>
        ) : (
          <div className="emptyImage">Aucune Image</div>
        )}
      </div>
    </ImagePrevienwStyled>
  );
}

const ImagePrevienwStyled = styled.div`
  //grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    object-position: center;
  }

  .emptyImage {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
