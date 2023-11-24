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
    // console.log("Good");

    const newProductToAdd = { ...newProduct, id: crypto.randomUUID() };
    const newMenu = [newProductToAdd, ...menu];
    setMenu(newMenu);
    setNewProduct(EMPTY_PRODUCT);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <AdminPageAddStyled>
      {/* <img className="a" src={image}></img> */}
      <ImagePreviewStyled imageSource={newProduct.imageSource} />
      <AddFormStyled onSubmit={handleAdd}>
        <AdminFields
          fields={adminAddDat}
          onChange={handleChange}
          onSubmit={handleAdd}
          isAdded={isAdded}
        />
      </AddFormStyled>
    </AdminPageAddStyled>
  );
}

const AddFormStyled = styled.form``;

const AdminPageAddStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: repeat(4, 1fr);
  height: 90%;
  width: 70%;
  max-height: 10px;
  // justify-items: center;
  align-items: center;
  //align-content: center;
  .endFrame {
    display: flex;
    align-items: baseline;
  }
  .submitButton {
    display: flex;
    grid-area: 4 / 2 / -2 / -1;
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    width: 50%;
    height: 20px;
    margin-left: 15px;
    background-color: #60bd4f;
    //margin-left : 0px;
    border-color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
    align-items: center;

    &:hover {
      color: #60bd4f;
      border-color: ${theme.colors.green};
      cursor: pointer;
    }
  }

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
