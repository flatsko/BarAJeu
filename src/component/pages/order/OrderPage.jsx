import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import Navbar from "./navBar/Navbar";
import Main from "./main/Main";
import Context from "../../../context/Context";
import { EMPTY_PRODUCT } from "../../../enum/products";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { getUser } from "../../../api/user";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { fakeMenu } from "../../../data/fakeMenu";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState();
  const [isCollapsed, setIsCollapsed] = useState();
  const [currentTabSelected, setCurrentTabSelected] = useState("");
  const [productToModify, setProductToModify] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { username } = useParams();
  const { menu, setMenu, handleDelete, resetMenu, handleAdd } = useMenu();
  const [isLoading, setIsLoading] = useState(true);
  const { basketMenu, setBasketMenu, handleAddToBasket, handleDeleteToBasket } =
    useBasket();
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  const contextValue = {
    username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleDelete,
    resetMenu,
    handleAdd,
    productToModify,
    setProductToModify,
    titleEditRef,
    basketMenu,
    setBasketMenu,
    handleAddToBasket,
    handleDeleteToBasket,
    isLoading,
    setIsLoading,
    getLocalStorage,
    setLocalStorage,
  };

  useEffect(() => {
    setMainMenuByUser(username);
    //localStorage.clear();
    getBasket();
  }, []);

  // console.log(temp);
  async function getUserByID(userId) {
    const tempMenu = await getUser(userId);
    setIsLoading(false);
    return tempMenu;
  }

  function getBasket() {
    const basketMenuParsed = getLocalStorage("product");
    basketMenuParsed
      ? setBasketMenu(basketMenuParsed)
      : setBasketMenu(fakeMenu.EMPTY);

    console.log(basketMenuParsed);
  }
  async function setMainMenuByUser(username) {
    const menuUser = await getUserByID(username);
    setMenu(menuUser.menu);
  }
  return (
    <Context.Provider value={contextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar>
            <div className="leftBar" />
            <div className="rightBAr" />
          </Navbar>
          <Main />
        </div>
      </OrderPageStyled>
    </Context.Provider>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  min-height: 100vh;

  align-items: center;
  display: flex;
  justify-content: center;

  .container {
    height: 95vh;

    width: 90vw;
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
