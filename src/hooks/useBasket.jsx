import { useState } from "react";
import { fakeBasket } from "../data/fakeBasket";
import { deepClone } from "../utils/array";

export const useBasket = () => {
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

  const handleDeleteToBasket = () => {};

  const incrementProductInBasket = (indexProductToIncrement, basketCopy) => {
    basketCopy[indexProductToIncrement].quantity += 1;
    setBasketMenu(basketCopy);
  };

  const createNewProductInBakset = (productToAdd, basketCopy) => {
    let newProduct = { ...productToAdd, quantity: 1 };
    const basketUpdated = [newProduct, ...basketCopy];
    setBasketMenu(basketUpdated);
    console.log("newproduct", newProduct);
  };

  return { handleAddToBasket, handleDeleteToBasket, basketMenu };
};
