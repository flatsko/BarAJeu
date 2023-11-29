import { useState } from "react";
import { fakeBasket } from "../data/fakeBasket";
import { deepClone } from "../utils/array";
import { useContext } from "react";
import Context from "../context/Context";
import { useMenu } from "./useMenu";

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
    console.log(copyBasket);
    let newBasket = copyBasket.filter((el) => el.id != basketProductToDelete);
    setBasketMenu(newBasket);
    console.log(basketMenu);
  };

  const findProductById = () => {};
  const incrementProductInBasket = (indexProductToIncrement, basketCopy) => {
    basketCopy[indexProductToIncrement].quantity += 1;
    setBasketMenu(basketCopy);
  };

  const createNewProductInBakset = (productToAdd, basketCopy) => {
    let newProduct = deepClone(productToAdd);
    newProduct = { ...newProduct, quantity: 1 };
    const basketUpdated = [newProduct, ...basketCopy];
    setBasketMenu(basketUpdated);
    console.log("newproduct", newProduct);
    console.log(basketMenu);
  };

  return { handleAddToBasket, handleDeleteToBasket, basketMenu, setBasketMenu };
};
