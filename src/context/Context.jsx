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

  //handleAdd: () => {},
  handleDelete: () => {},

  productToModify: "",
  setProductToModify: () => {},

  titleEditRef: {},
});
