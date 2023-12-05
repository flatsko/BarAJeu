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
import { useSucesMessage } from "../../../../../hooks/useDisplaySucessMessage";

export default function AdminPageAdd() {
  const { menu, setMenu, handleAdd, username } = useContext(Context);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const adminAddDat = adminAddData(newProduct);
  // const [isAdded, setIsAdded] = useState(false);
  const { isAdded, displaySucessMessage } = useSucesMessage();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(newProduct, username);
    setNewProduct(EMPTY_PRODUCT);
    displaySucessMessage();
  };

  console.log(adminAddDat);
  return (
    <AdminFields
      product={newProduct}
      onSubmit={handleClick}
      onChange={handleChange}
      fields={adminAddDat}
    >
      <SubmitButton isAdded={isAdded} />
    </AdminFields>
  );
}
