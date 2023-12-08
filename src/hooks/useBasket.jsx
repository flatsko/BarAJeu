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
      incrementProductInBasket(existant, basketMenuClone);
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

  const findProductById = () => {};
  const incrementProductInBasket = (indexProductToIncrement, basketCopy) => {
    basketCopy[indexProductToIncrement].quantity += 1;
    setBasketMenu(basketCopy);
    setLocalStorage("product", basketCopy);
  };

  const createNewProductInBakset = (productToAdd, basketCopy) => {
    let newProduct = deepClone(productToAdd);
    newProduct = { ...newProduct, quantity: 1 };
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
  }

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
  };
};
