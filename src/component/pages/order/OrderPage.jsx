import { useRef, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../theme/index";
import Navbar from "./navBar/Navbar";
import Main from "./main/Main";
import Context from "../../../context/Context";
import { fakeMenu } from "../../../data/fakeMenu";
import { toast } from "react-toastify";
import { EMPTY_PRODUCT } from "../../../enum/products";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState();
  const [isCollapsed, setIsCollapsed] = useState();
  const [currentTabSelected, setCurrentTabSelected] = useState("");
  const [productToModify, setProductToModify] = useState(EMPTY_PRODUCT);
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const titleEditRef = useRef();

  const handleDelete = (idTodelete) => {
    const copyMenu = [...menu];
    const produitASupprimer = copyMenu.filter((el) => el.id == idTodelete);
    const cCopyMenu = copyMenu.filter((el) => el.id != idTodelete);

    toast.dark(produitASupprimer[0].title + " supprimé(e)(s)", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setMenu(cCopyMenu);
  };

  const handleEdit = (idToEdit) => {
    const copyMenu = JSON.parse(JSON.stringify(menu));

    copyMenu[idToEdit] = setMenu(CopyMenu);
  };
  // toast.success(`🎲 Bienvenue ${username}`, {
  //   position: "top-center",
  //   autoClose: 3000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   toastId: "1",
  // });

  const contextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    setMenu,
    handleDelete,
    productToModify,
    setProductToModify,
    titleEditRef,
  };

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
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
