import React, { useState } from "react";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { useContext } from "react";
import Context from "../../../../../context/Context";
import { adminAddData } from "./adminAddFormData";
import TextInput from "../../../../reusableUI/TextInput";
export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};
export default function AdminPageEdit() {
  let { menu, productIdToModify } = useContext(Context);
  const [adminAddDat, setAdminAddDat] = useState(
    adminAddData(
      productIdToModify || productIdToModify === 0
        ? menu[productIdToModify]
        : EMPTY_PRODUCT
    )
  );
  const [newProduct, setNewProduct] = useState(
    productIdToModify || productIdToModify === 0
      ? menu[productIdToModify]
      : EMPTY_PRODUCT
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setAdminAddDat({ ...newProduct, [name]: value });
  };
  return (
    <AdminPageEditStyled>
      {productIdToModify || productIdToModify === 0
        ? adminAddDat.map((adminTextData) => {
            // console.log("AdminText DATA" + adminTextData);
            // console.log(menu[Number(productIdToModify)]);
            //  console.log(productIdToModify);
            // console.log(adminTextData.name);
            //console.log(menu[productIdToModify]);
            return (
              <div className="input">
                <TextInput
                  key={adminTextData.id}
                  onChange={handleChange}
                  className="inputText"
                  {...adminTextData}
                ></TextInput>
              </div>
            );
          })
        : "Selectionne quelque chose" + productIdToModify}

      <HiCursorClick></HiCursorClick>
    </AdminPageEditStyled>
  );
}

const AdminPageEditStyled = styled.div``;
