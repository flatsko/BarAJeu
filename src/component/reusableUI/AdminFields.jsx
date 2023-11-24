import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

const AdminFields = React.forwardRef(({ fields, handleChange }, ref) => {
  return (
    <AdminFieldsStyled>
      {fields.map((adminTextData) => {
        return (
          <div className="input">
            <TextInput
              key={adminTextData.id}
              onChange={handleChange}
              className="inputText"
              ref={adminTextData.name === "title" ? ref : null}
              {...adminTextData}
            ></TextInput>
          </div>
        );
      })}
    </AdminFieldsStyled>
  );
});

export default AdminFields;
const AddFormStyled = styled.form``;
const AdminFieldsStyled = styled.div``;
