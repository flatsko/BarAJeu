import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import { listeJeux } from "../../../data/listeJeux";
import PrimaryButton from "../../reusableUI/PrimaryButton";
import Card from "../../reusableUI/card";

export default function Main() {
  const [lJeux, setlJeux] = useState(listeJeux);

  return (
    <MainStyled>
      <div className="gridCont">
        GridCont
        <div className="grid">
          {listeJeux.map(({ id, title, imageSource, isAvailable }) => {
            return (
              <Card
                key={id}
                imageSource={imageSource}
                title={title}
                isAvailable={isAvailable}
              />
            );
          })}
        </div>{" "}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background-color: lightcoral;
  flex: 1;
  display: flex;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  background-color: ${theme.colors.background_white};
  padding: 40px;
  /* display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%; */
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  overflow-y: scroll;
  .plot {
    z-index: 50;
    background: none;
    background-color: purple;
    box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.05),
      inset -2px -2px 0 #665235;
  }

  .gridCont {
    flex: 1;
    background-color: red;
  }

  .grid {
    display: grid;
    height: 330px;
    grid-template-columns: repeat(3, auto);
    background-color: green;
    grid-auto-flow: row;
    justify-items: center;
  }


`;
