import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import { CiCircleCheck } from "react-icons/ci";
import PrimaryButton from "./PrimaryButton";

const AdminFields = React.forwardRef(
  ({ fields, onChange, onSubmit, children, isAdded }, ref) => {
    return (
      <AdminFieldsStyled onChange={onChange} onSubmit={onSubmit}>
        {fields.map((adminTextData) => {
          return (
            <div className="input">
              <TextInput
                key={adminTextData.id}
                onChange={onChange}
                className="inputText"
                ref={adminTextData.name === "title" ? ref : null}
                {...adminTextData}
              ></TextInput>
            </div>
          );
        })}
        {onSubmit && (
          <div className="endFrame">
            <PrimaryButton
              className={"submitButton"}
              //icon={MdOutlineEuro}
              label={"Ajouter un nouveau produit au menu"}
            />
            <div className="addEvent">
              {isAdded ? (
                <div className="Icon">
                  {" "}
                  {<CiCircleCheck />} Ajouté avec succes{" "}
                </div>
              ) : null}
            </div>
          </div>
        )}
        <div>{children}</div>
      </AdminFieldsStyled>
    );
  }
);
export default AdminFields;

const AdminFieldsStyled = styled.div``;
