import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../reusableUI/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import Context from "../../../../../context/Context";
import { adminAddData } from "./adminAddFormData";
import ImagePreviewStyled from "./ImagePreview";
export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AdminPageAdd() {
  const { menu, setMenu } = useContext(Context);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const adminAddDat = adminAddData(newProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
    console.log(newProduct);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // console.log("Good");
    newProduct.id = crypto.randomUUID();
    const newMenu = [newProduct, ...menu];
    setMenu(newMenu);
    setNewProduct(EMPTY_PRODUCT);
  };
  console.log(adminAddDat);
  return (
    <AdminPageAddStyled>
      {/* <img className="a" src={image}></img> */}
      <ImagePreviewStyled imageSource={newProduct.imageSource} />
      <AddFormStyled onSubmit={handleAdd}>
        {adminAddDat.map((adminTextData) => {
          return (
            <TextInput
              key={adminTextData.id}
              onChange={handleChange}
              {...adminTextData}
            ></TextInput>
          );
        })}

        <PrimaryButton
          className={"e"}
          //icon={MdOutlineEuro}
          label={"Ajouter un nouveau produit au menu"}
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

  .a {
    grid-area: 1 / 1 / 4 / 2;
    max-width: 100%;
    //margin: 5px;
    // align-content: center;
  }
  .b {
    grid-column-start: 2;
    grid-row-start: 1;
    margin: 0px;
  }
  .c {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0px;
  }
  .d {
    grid-column-start: 2;
    grid-row-start: 3;
  }
  .e {
    grid-area: 4 / 2 / -2 / -1;
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    width: 50%;
    background-color: #60bd4f;
    //margin-left : 0px;
    border-color: ${theme.colors.white};

    align-items: center;

    &:hover {
      color: #60bd4f;
      border-color: ${theme.colors.green};
    }
  }

  .test {
  }

  input {
    width: 50vw;
    display: grid;
    align-items: center;
  }
`;
