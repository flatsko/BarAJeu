import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},

  menu: [],
  setMenu: () => {},

  resetMenu: () => {},
  handleAdd: () => {},
  handleDelete: () => {},

  productToModify: "",
  setProductToModify: () => {},

  titleEditRef: {},

  basketMenu: [],
  setBasketMenu: () => {},

  handleAddToBasket: () => {},
  handleDeleteToBasket: () => {},

  isLoading: true,
  setIsLoading: () => {},

  getLocalStorage: () => {},
  setLocalStorage: () => {},
});
