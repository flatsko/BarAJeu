import { useContext, useState } from "react";
import { fakeBasket } from "../data/fakeBasket";
import { deepClone } from "../utils/array";
import Context from "../context/Context";
import { fakeMenu } from "../data/fakeMenu";
export const useBasket = () => {
  // const { menu } = useMenu();

  const [basketMenu, setBasketMenu] = useState(fakeBasket.EMPTY);
  const handleAddToBasket = (basketMenuClone, tempProduct, id) => {
    //Produit à ajouter
    const existant = basketMenuClone.findIndex(
      (el) => el.title === tempProduct.title
    );

    if (existant == -1) {
      createNewProductInBakset(tempProduct, basketMenuClone);
      //Quantité à incrément
    } else {
      incrementProductInBasket(tempProduct, basketMenuClone);
    }
  };

  const handleDeleteToBasket = (basketProductToDelete) => {
    let copyBasket = deepClone(basketMenu);
    //console.log(copyBasket);
    let newBasket = copyBasket.filter((el) => el.id != basketProductToDelete);
    setBasketMenu(newBasket);
    setLocalStorage("product", newBasket);

    console.log(basketMenu);
  };

  const incrementProductInBasket = (indexProductToIncrement, basketCopy) => {
    setBasketMenu(basketCopy);
    setLocalStorage("product", basketCopy);
    console.log(basketCopy);
  };

  const createNewProductInBakset = (productToAdd, basketCopy) => {
    let newProduct = deepClone(productToAdd);
    //newProduct = { ...newProduct, quantity: 1 };
    const basketUpdated = [newProduct, ...basketCopy];
    setBasketMenu(basketUpdated);
    // localStorage.setItem("product", JSON.stringify(basketUpdated));
    setLocalStorage("product", basketUpdated);
  };

  function getBasket() {
    const basketMenuParsed = getLocalStorage("product");
    basketMenuParsed
      ? setBasketMenu(basketMenuParsed)
      : setBasketMenu(fakeMenu.EMPTY);
    return basketMenu;
  }
  const hydrateMenu = (basketMenu, menu, setMenu) => {
    //Clone du menu
    let copyMenu = deepClone(menu);
    const baketMenu = getBasket();
    baketMenu.map((basketElement) => {
      copyMenu.map((menuElement) => {
        if (basketElement.id == menuElement.id) {
          const indexMenu = copyMenu.findIndex(
            (el) => (el.id = menuElement.id)
          );
          copyMenu[indexMenu].quantity = basketElement.quantity;
          setMenu(copyMenu);
          console.log(copyMenu);
        }
      });
    });

    console.log(menu);
  };
  const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  };

  return {
    handleAddToBasket,
    handleDeleteToBasket,
    basketMenu,
    setBasketMenu,
    getBasket,
    hydrateMenu,
  };
};
