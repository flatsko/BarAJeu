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

export default function AdminPageAdd() {
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [prix, setPrix] = useState("");

  const { menu, setMenu } = useContext(Context);

  const handleChangeNom = (e) => {
    setNom(e.target.value);
    console.log(e);
  };
  const handleChangeImage = (e) => {
    setImage(e.target.value);
    console.log(e);
  };
  const handleChangePrix = (e) => {
    setPrix(e.target.value);
    console.log(e);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("Good");

    const newProduct = {
      id: crypto.randomUUID(),
      imageSource: urlImage,
      title: nom,
      price: prix,
      quantity: "",
      isAvailable: true,
      isAdvertised: false,
    };

    const newMenu = [...menu];

    newMenu.push(newProduct);
    setMenu(newMenu);
  };
  return (
    <AdminPageAddStyled>
      {/* <img className="a" src={image}></img> */}
      <div className="a">
        {image ? (
          <img className="a" src={image}></img>
        ) : (
          <div className="emptyImage">Aucune Image</div>
        )}
      </div>
      <AddFormStyled onSubmit={handleAdd}>
        <TextInput
          className={"b"}
          Icon={<FaHamburger />}
          name={nom}
          onChange={handleChangeNom}
          placeHolder="Nom :"
        ></TextInput>
        <TextInput
          className={"c"}
          Icon={<BsFillCameraFill />}
          name={image}
          placeHolder="Url de l'image :"
          onChange={handleChangeImage}
        ></TextInput>
        <TextInput
          className={"d"}
          Icon={<MdOutlineEuro />}
          name={prix}
          onChange={handleChangePrix}
          placeHolder="Prix : "
          onClick={(e) => {
            e.target.value = "";
          }}
        ></TextInput>

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

  .emptyImage {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
  .test {
  }

  input {
    width: 50vw;
    display: grid;
    align-items: center;

`;
