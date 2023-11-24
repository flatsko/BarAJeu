import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../reusableUI/TextInput";
import { CiCircleCheck } from "react-icons/ci";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import Context from "../../../../../context/Context";
import { adminAddData } from "./adminAddFormData";
import ImagePreviewStyled from "./ImagePreview";
import { EMPTY_PRODUCT } from "../../../../../enum/products";
import AdminFields from "../../../../reusableUI/AdminFields";
import SubmitMessage from "./SubmitMessage";
import SubmitButton from "./SubmitButton";

export default function AdminPageAdd() {
  const { menu, setMenu } = useContext(Context);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const adminAddDat = adminAddData(newProduct);
  const [isAdded, setIsAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    //console.log("Good");

    //newProduct.id = crypto.randomUUID();
    const newProductAdded = { ...newProduct, id: crypto.randomUUID() };
    const newMenu = [newProductAdded, ...menu];
    setMenu(newMenu);
    setNewProduct(EMPTY_PRODUCT);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 200000);
  };

  console.log(adminAddDat);
  return (
    <AdminFields
      product={newProduct}
      onSubmit={handleAdd}
      onChange={handleChange}
      fields={adminAddDat}
    >
      <>
        <SubmitButton isAdded={isAdded} />
      </>
    </AdminFields>
  );
}

const AddFormStyled = styled.form``;

const AdminPageAddStyled = styled.div`
  .addEvent {
    display: flex;
    color: #60bd4f;
    margin-left: 10px;
  }

  input {
    grid-area: 1 / 2 / -2 / 3;
    position: relative;
    display: grid;
    grid-row-gap: 8px;
    width: 50vw;
    margin: 0px;
    padding: 0px 0px 0px 0px;
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
