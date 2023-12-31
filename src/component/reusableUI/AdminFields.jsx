import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { CiCircleCheck } from "react-icons/ci";
import PrimaryButton from "./PrimaryButton";
import ImagePreviewStyled from "../pages/order/admin/Admin Panel/ImagePreview";
import { theme } from "../../theme";

const AdminFields = React.forwardRef(
  ({ fields, onChange, onSubmit, children, SubmitButton, product }, ref) => {
    return (
      <AdminFieldsStyled onSubmit={onSubmit}>
        {console.log(SubmitButton)}
        <div className="gridDiv">
          <ImagePreviewStyled imageSource={product.imageSource} />
          <div className="input">
            {fields.map((adminTextData) => {
              return (
                <TextInput
                  key={adminTextData.id}
                  onChange={onChange}
                  className="inputText"
                  ref={adminTextData.name === "title" ? ref : null}
                  {...adminTextData}
                ></TextInput>
              );
            })}

            <div className="endFrame">{children}</div>
          </div>
        </div>
      </AdminFieldsStyled>
    );
  }
);
export default AdminFields;

const AdminFieldsStyled = styled.form` 
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
  .endFrame {
    display:flex;
    align-items:baseline;
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
  }`;
