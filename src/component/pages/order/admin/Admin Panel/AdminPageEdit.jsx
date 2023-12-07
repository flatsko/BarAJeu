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

  return (
    <AdminPageEditStyled>
      <AdminFields
        product={productToModify}
        fields={inputText}
        onChange={handleChange}
        ref={titleEditRef}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      >
        {isSaved ? <SaveMessage /> : <EditInfoMessage />}
      </AdminFields>
    </AdminPageEditStyled>
  );
}

const AdminPageEditStyled = styled.div`
  .gridDiv {
    display: grid;
    grid-template-columns: 1fr 0.3fr 1.7fr;
    grid-template-rows: 0.4fr 0.4fr 0.4fr 1.9fr;
    gap: 0px 0px;
    grid-template-areas:
      "imagePrev imagePrev input1"
      "imagePrev imagePrev input2"
      "imagePrev imagePrev input3"
      ". . .";
  }
  .imagePrev {
    grid-area: imagePrev;
  }
  .input1 {
    grid-area: input1;
  }
  .input2 {
    grid-area: input2;
  }
  .input3 {
    grid-area: input3;
  }

  input {
    //grid-area: 2 / 2 / -2 / 3;
    width: 50vw;
  }
  .inputFo {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 20px;
    // grid-row-gap: 8px;
    position: relative;
  }
  .icon {
    font-size: ${theme.fonts.P0};
    padding-left: 5px;
    color: ${theme.colors.greySemiDark};
    position: absolute;
    z-index: 100;
  }
  .inputText {
    padding-left: 30px;
  }
`;
