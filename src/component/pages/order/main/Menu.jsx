import { styled } from "styled-components";
import Card from "../../../reusableUI/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import { useContext } from "react";
import Context from "../../../../context/Context";
import MenuEmptyAdmin from "./MenuEmptyAdmin";
import MenuEmptyClient from "./MenuEmptyClient";
import { deepClone } from "../../../../utils/array";
import Admin from "../admin/Admin";
import LoadingSpinner from "../../../reusableUI/Loading";
export default function Menu() {
  // const menu1 = useContext(Context);
  let {
    menu,
    username,
    isModeAdmin,
    handleDelete,
    titleEditRef,
    isCollapsed,
    handleDeleteToBasket,
    isLoading,
    resetMenu,
    basketMenu,
    handleAddToBasket,
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

  const handleCardDelete = (event, id) => {
    event.stopPropagation(id);
    handleDelete(id, username);
    handleDeleteToBasket(id);
  };
  if (menu.length === 0) {
    return isModeAdmin ? (
      <MenuEmptyAdmin resetMenu={() => resetMenu(username)} />
    ) : (
      <MenuEmptyClient />
    );
  }
  const handleButtonClick = (event, id) => {
    event.stopPropagation(id);
    let basketMenuClone = basketMenu ? deepClone(basketMenu) : null;
    let tempProduct = menu[getProductIndexById(id)];
    handleAddToBasket(basketMenuClone, tempProduct, id);
    //console.log(basketMenu);
  };

  return (
    <MenuStyles>
      {!isLoading ? (
        menu.map(
          ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
            return (
              <Card
                key={id}
                imageSource={imageSource}
                title={title}
                leftDescription={formatPrice(price)}
                isAvailable={isAvailable}
                isPublicised={isPublicised}
                showDeleteButton={isModeAdmin}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={(event) => handleCardClick(event, id)}
                ishoverable={isModeAdmin}
                isselected={+checkIfProductIsClicked(id, productToModify.id)}
                onClickButton={(event) => handleButtonClick(event, id)}

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
        )
      ) : (
        <LoadingSpinner />
      )}
      {isModeAdmin && (
        <Admin className={isCollapsed ? "toggle" : "notToggle"} />
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
  // height: 100vh;

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
