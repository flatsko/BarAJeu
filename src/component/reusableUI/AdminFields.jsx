import React from "react";
import styled from "styled-components";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AdminFields() {
  return (
    <AdminFieldsStyled>
    <ImagePreviewStyled imageSource={newProduct.imageSource} />
    <AddFormStyled onSubmit={handleAdd}>
      {adminAddDat.map((adminTextData) => {
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
      })}
      </AdminFieldsStyled>
  );
}
const AddFormStyled = styled.form``;
const AdminFieldsStyled = styled.div``;
