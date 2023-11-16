import { styled } from "styled-components";
import { listeJeux } from "../../../../data/listeJeux";
import { fakeMenu } from "../../../../data/fakeMenu";
import React, { useState } from "react";
import Card from "../../../reusableUI/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import { useContext } from "react";
export default function Menu() {
  //const menu = useContext(menu);
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  return (
    <MenuStyles>
      {menu.map(({ id, title, imageSource, price, isAvailable }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource}
            title={title}
            leftDescription={formatPrice(price)}
            isAvailable={isAvailable}
          />
        );
      })}
    </MenuStyles>
  );
}

const MenuStyles = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
