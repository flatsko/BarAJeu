import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AdminFields({ fields, handleChange }) {
  return (
    <AdminFieldsStyled>
      {fields.map((adminTextData) => {
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
