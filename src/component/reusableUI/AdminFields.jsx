import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { CiCircleCheck } from "react-icons/ci";
import PrimaryButton from "./PrimaryButton";
import ImagePreviewStyled from "../pages/order/admin/Admin Panel/ImagePreview";
import { theme } from "../../theme";
import AdminPannelButton from "../pages/order/admin/Admin Panel/AdminPannelButton";

const AdminFields = React.forwardRef(
  (
    {
      fields,
      onChange,
      onSubmit,
      onFocus,
      onBlur,
      children,
      SubmitButton,
      product,
      onClick,
    },
    ref
  ) => {
    return (
      <AdminFieldsStyled onSubmit={onSubmit}>
        <ImagePreviewStyled
          className={"imagePrev"}
          imageSource={product.imageSource}
        />
        <div className="inputFields">
          {fields.map((adminTextData) => {
            return adminTextData.type == "text" ? (
              <TextInput
                key={adminTextData.id}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={adminTextData.name}
                ref={adminTextData.name === "title" ? ref : null}
                {...adminTextData}
              ></TextInput>
            ) : (
              <AdminPannelButton
                icon={adminTextData.Icon}
                label={adminTextData.placeholder}
                onClick={onClick}
                {...adminTextData}
              />
            );
          })}
          <div className="endFrame">{children}</div>
        </div>
      </AdminFieldsStyled>
    );
  }
);
export default AdminFields;

const AdminFieldsStyled = styled.form`
  margin: 20px;
  display: flex;
  // max-height: 100px;
  input {
    background-color: ${theme.colors.background_white};
  }
  input::placeholder {
    background-color: ${theme.colors.background_white};
  }
  .imagePrev {
    display: flex;
    min-width: 200px;
    margin-right: 20px;
    min-height: 200px;
    max-height: 200px;
    max-width: 200px;
    align-items: center;
  }

  .inputFields {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "title title title"
      "imageUrl imageUrl imageUrl"
      "price isavailable ispromo"
      "endFrame endFrame endFrame";
    //background-color: ${theme.colors.background_dark};
  }

  .title {
    display: grid;
    grid-area: title;
  }
  .price {
    display: grid;
    grid-area: price;
  }
  .isAvailable {
    display: grid;
    grid-area: isavailable;
  }
  .isPublicised {
    display: grid;
    grid-area: ispromo;
  }
  .imageSource {
    display: grid;
    grid-area: imageUrl;
  }

  .icon {
    font-size: ${theme.fonts.P0};
    padding-left: 5px;
    color: ${theme.colors.greySemiDark};
    position: absolute;
    z-index: 100;
  }
  .endFrame {
    display: grid;
    grid-area: endFrame;
    // align-items: baseline;
  }
`;
