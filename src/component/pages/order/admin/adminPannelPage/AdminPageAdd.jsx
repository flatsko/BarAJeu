import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../reusableUI/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../reusableUI/PrimaryButton";
import { theme } from "../../../../../theme";

export default function AdminPageAdd() {
  const [nom, setNom] = useState("Nom");
  const [image, setImage] = useState(
    "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
  );
  const [prix, setPrix] = useState("Prix");
  const [urlImage, setUrlImage] = useState(
    "https://www.laboutiqueharibo.fr/dw/image/v2/BFFT_PRD/on/demandware.static/-/Sites-haribo-master-catalog/default/dw809ff44e/food/AP/102896-Dentier-210-bonbons.png?sw=460&sh=460"
  );

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
      id: "",
      imageSource: "",
      title: "",
      price: "",
      quantity: "",
      isAvailable: true,
      isAdvertised: false,
    };
  };
  return (
    <AdminPageAddStyled>
      <img className="a" src={urlImage}></img>
      <AddFormStyled onSubmit={handleAdd}>
        <TextInput
          className={"b"}
          Icon={<FaHamburger />}
          name={nom}
          onChange={handleChangeNom}
        ></TextInput>
        <TextInput
          className={"c"}
          Icon={<BsFillCameraFill />}
          name={image}
          onChange={handleChangeImage}
        ></TextInput>
        <TextInput
          className={"d"}
          Icon={<MdOutlineEuro />}
          name={prix}
          onChange={handleChangePrix}
          onClick={(e) => {
            e.target.value = "";
          }}
        ></TextInput>

        <PrimaryButton
          className={"e"}
          icon={MdOutlineEuro}
          label={"Ajouter un nouveau produit au menu"}
        />
      </AddFormStyled>
    </AdminPageAddStyled>
  );
}

const AddFormStyled = styled.form``;

const AdminPageAddStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 20%);
  height: 100%;
  width: 70%;
  .a {
    grid-area: 1 / 1 / 4 / 2;
    max-width: 100%;
  }
  .b {
    grid-column-start: 2;
    grid-row-start: 1;
  }
  .c {
    grid-column-start: 2;
    grid-row-start: 2;
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

    &:hover {
    }
  }

  .test {
  }

  input {
    width: 50vw;
    display: grid;
  }
`;
