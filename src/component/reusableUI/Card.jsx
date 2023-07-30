import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';
import PrimaryButton from './PrimaryButton';

export default function Card({key, imageSource, title, isAvailable}) {
  return (
    <CardStyled>
    <div className='image'><img src={imageSource} /></div>
    <div className='titre'>{title}</div>
    {isAvailable ? <div className='playButton'><PrimaryButton label={"Jouer"} /></div> : "Bientôt disponible"}
    </CardStyled>
  )
}

const CardStyled = styled.div`

font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight:  ${theme.fonts.weights.heavy};
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.dark};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 300px;
  align-content: center;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  padding: 50px 20px 10px 20px;
  margin-bottom: 2em;
  gap: 15px;


  .image {
    img {
      max-height: 140px;
      object-fit: contain;
    }
  }
`;