import { styled } from "styled-components";
import { listeJeux } from "../../../../data/listeJeux";
import { fakeMenu } from "../../../../data/fakeMenu";
import React, { useState } from "react";
import Card from "../../../reusableUI/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import { useContext } from "react";
import Context from "../../../../context/Context";
import MenuEmptyAdmin from "./MenuEmptyAdmin";
import MenuEmptyClient from "./MenuEmptyClient";
import { deepClone } from "../../../../utils/array";
export default function Menu() {
  // const menu1 = useContext(Context);

  // const [menu, setMenu] = useState(fakeMenu.LARGE);
  let { menu, setMenu, isModeAdmin, handleDelete, titleEditRef } =
    useContext(Context);
  let {
    productToModify,
    setProductToModify,
    setIsCollapsed,
    setCurrentTabSelected,
  } = useContext(Context);

  const handleCardClick = async (event, id) => {
    if (!isModeAdmin) return;
    event.stopPropagation(id);
    await setCurrentTabSelected("Modifier les produits");
    await setIsCollapsed(true); //Ouvre le pannel admin

    await setProductToModify(menu[getProductIndexById(id)]);

    titleEditRef.current.focus();
  };
  const checkIfProductIsClicked = (idProductMenu, idProductClickedOn) => {
    return idProductMenu === idProductClickedOn;
  };
  const getProductIndexById = (id) => {
    return menu.map((el) => el.id).indexOf(id);
  };
  const resetMenu = () => {
    setMenu(fakeMenu.LARGE);
  };

  const handleCardDelete = (event, id) => {
    event.stopPropagation(id);
    handleDelete(id);
  };
  if (menu.length === 0) {
    return isModeAdmin ? (
      <MenuEmptyAdmin resetMenu={() => resetMenu()} />
    ) : (
      <MenuEmptyClient />
    );
  }

  return (
    <MenuStyles>
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isSelected }) => {
          return (
            <Card
              key={id}
              imageSource={imageSource}
              title={title}
              leftDescription={formatPrice(price)}
              isAvailable={isAvailable}
              showDeleteButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={(event) => handleCardClick(event, id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsClicked(id, productToModify.id)}

              // className={
              //   !isModeAdmin
              //     ? "produit"
              //     : !isSelected
              //     ? "produit-admin"
              //     : "produit-admin-selected"
              // }
            />
          );
        }
      )}
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

  /* .produit-admin:hover {
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
  } */
  /* .produit-admin:target {
    cursor: pointer-events;
  }

  .produit-admin-selected {
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
    } */
`;
