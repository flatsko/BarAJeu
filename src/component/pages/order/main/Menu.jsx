import { styled } from 'styled-components';
import { listeJeux } from "../../../../data/listeJeux";
import { fakeMenu2 } from '../../../../data/fakeMenu';
import React, { useState } from "react";
import Card from '../../../reusableUI/Card';
import { formatPrice } from '../../../../utils/maths';
import { theme } from '../../../../theme';
export default function Menu() {

const [menu, setMenu] = useState(fakeMenu2)
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
          })}</MenuStyles>
  )
}

const MenuStyles = styled.div`
position: relative;
display: grid;
background: ${theme.colors.background_white};
grid-template-columns: repeat(3, 1fr);
grid-row-gap: 60px;
padding: 50px 50px 150px;
justify-items: center;
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};

  
`;