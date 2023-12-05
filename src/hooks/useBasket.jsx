import { useContext, useState } from "react";
import { fakeBasket } from "../data/fakeBasket";
import { deepClone } from "../utils/array";
import Context from "../context/Context";
export const useBasket = () => {
  // const { menu } = useMenu();

  const [basketMenu, setBasketMenu] = useState(fakeBasket.EMPTY);
  let { setLocalStorage } = useContext(Context);
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
    console.log(basketMenu);
  };

  const findProductById = () => {};
  const incrementProductInBasket = (indexProductToIncrement, basketCopy) => {
    basketCopy[indexProductToIncrement].quantity += 1;
    setBasketMenu(basketCopy);
    //setLocalStorage("product", basketCopy);
    localStorage.setItem("product", JSON.stringify(basketCopy));
  };

  const createNewProductInBakset = (productToAdd, basketCopy) => {
    let newProduct = deepClone(productToAdd);
    newProduct = { ...newProduct, quantity: 1 };
    const basketUpdated = [newProduct, ...basketCopy];
    setBasketMenu(basketUpdated);
    localStorage.setItem("product", JSON.stringify(basketUpdated));
    // setLocalStorage("product", basketUpdated);
    //console.log(JSON.parse(localStorage.getItem("product")));
  };

  return { handleAddToBasket, handleDeleteToBasket, basketMenu, setBasketMenu };
};
