import { styled } from 'styled-components';
import { listeJeux } from "../../../data/listeJeux";
import React, { useState } from "react";

export default function Menu() {

    const [lJeux, setlJeux] = useState(listeJeux);

  return (
    <MenuStyles>         
         {listeJeux.map(({ id, title, imageSource, isAvailable }) => {
            return (
              <Card
                key={id}
                imageSource={imageSource}
                title={title}
                isAvailable={isAvailable}
              />
            );
          })}</MenuStyles>
  )
}

const MenuStyles = styled.div`

display: grid;
    height: 330px;
    grid-template-columns: repeat(3, auto);

    grid-auto-flow: row;
    justify-items: center;
  
`;