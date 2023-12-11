import React, { useState } from "react";
import { useContext } from "react";
import Context from "../../../../../context/Context";
import { adminAddData } from "./adminAddFormData";
import { EMPTY_PRODUCT } from "../../../../../enum/products";
import AdminFields from "../../../../reusableUI/AdminFields";
import SubmitButton from "./SubmitButton";
import { useSucesMessage } from "../../../../../hooks/useDisplaySucessMessage";
import { deepClone } from "../../../../../utils/array";

export default function AdminPageAdd() {
  const { menu, setMenu, handleAdd, username } = useContext(Context);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [adminAdd, setAdminAdd] = useState(adminAddData(newProduct));
  // const adminAddDat = adminAddData(newProduct);
  // const [isAdded, setIsAdded] = useState(false);
  const { isAdded, displaySucessMessage } = useSucesMessage();
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newProductCopy = deepClone(newProduct);
    newProductCopy = { ...newProductCopy, [name]: value };
    setNewProduct(newProductCopy);
    setAdminAdd(adminAddData(newProductCopy));
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(newProduct, username);
    setNewProduct(EMPTY_PRODUCT);
    adminAddData(EMPTY_PRODUCT);
    displaySucessMessage();
  };
  const handleClickAdminButton = (e, name, value) => {
    let newProductCopy = deepClone(newProduct);
    newProductCopy = { ...newProductCopy, [name]: !newProduct[name] };
    setNewProduct(newProductCopy);
    setAdminAdd(adminAddData(newProductCopy));
    //console.log(newProduct[name]); //setAdminAdd(adminAddData(copyProduct));
  };
  // console.log(adminAddDat);
  return (
    <AdminFields
      product={newProduct}
      onSubmit={handleClick}
      onChange={handleChange}
      fields={adminAdd}
      onClick={handleClickAdminButton}
    >
      <SubmitButton isAdded={isAdded} />
    </AdminFields>
  );
}
