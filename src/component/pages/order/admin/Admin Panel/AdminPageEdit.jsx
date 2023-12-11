import styled from "styled-components";
import { useContext, useState } from "react";
import Context from "../../../../../context/Context";
import { adminAddData } from "./adminAddFormData";
import { EMPTY_PRODUCT } from "../../../../../enum/products";
import { theme } from "../../../../../theme/index.js";
import AdminFields from "../../../../reusableUI/AdminFields.jsx";
import { deepClone } from "../../../../../utils/array.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx";
import { syncBothMenus } from "../../../../../api/menu.js";
import { useSucesMessage } from "../../../../../hooks/useDisplaySucessMessage.jsx";
import SaveMessage from "./SaveMessage.jsx";
export default function AdminPageEdit() {
  const [valueOnFocus, setValueOnFocus] = useState();
  const { isAdded: isSaved, displaySucessMessage } = useSucesMessage();

  let {
    username,
    menu,
    setMenu,
    productToModify,
    setProductToModify,
    titleEditRef,
    setBasketMenu,
    basketMenu,
  } = useContext(Context);
  const inputText = adminAddData(
    productToModify ? productToModify : EMPTY_PRODUCT
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingEdited = { ...productToModify, [name]: value }; //lié au menu
    setProductToModify({ ...productToModify, [name]: value }); //Lié au formulaire

    //Copy du menu
    let copyMenu = deepClone(menu);
    //Copy du basket
    let copyBasket = deepClone(basketMenu);

    copyMenu[copyMenu.findIndex((el) => el.id === productBeingEdited.id)] =
      productBeingEdited;
    copyBasket[copyBasket.findIndex((el) => el.id === productBeingEdited.id)] =
      productBeingEdited;
    //Mise à jour des setters
    setBasketMenu(copyBasket);
    setMenu(copyMenu);
    syncBothMenus(copyMenu, username);
  };

  const handleOnBlur = (e) => {
    let valueOnBlur = e.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySucessMessage("Ca a changé");
    }
  };
  const handleOnFocus = (e) => {
    setValueOnFocus(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const productCopy = productToModify;
    productCopy.isAvailable = !productCopy.isAvailable;
    setProductToModify(productCopy);

    //Cloner le Menu
    const copyMenu = deepClone(menu);
    //Trouver l'index à remplacer
    const index = copyMenu.findIndex((el) => el.id == productCopy.id);
    //Remplacer
    copyMenu[index] = productCopy;
    setMenu(copyMenu);
  };
  return (
    <AdminPageEditStyled>
      <AdminFields
        product={productToModify}
        fields={inputText}
        onChange={handleChange}
        ref={titleEditRef}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onClick={handleClick}
      >
        {isSaved ? <SaveMessage /> : <EditInfoMessage />}
      </AdminFields>
    </AdminPageEditStyled>
  );
}

const AdminPageEditStyled = styled.div``;
