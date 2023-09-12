import React, { useState } from 'react'
import styled from "styled-components"
import TextInput from '../../../../reusableUI/TextInput';
import {FaHamburger} from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import PrimaryButton from '../../../../reusableUI/PrimaryButton';
import { theme } from '../../../../../theme';

export default function AdminPageAdd() {
    const [nom, setNom] = useState("Nom");
    const [image, setImage] = useState("Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)");
    const [prix, setPrix] = useState("Prix");
    const [urlImage, setUrlImage] = useState();

    const handleChange = (e) => {
        setNom(e.target.value);
        console.log(e);

    }

  return (
    <AdminPageAddStyled> 
        <img className='a' src='https://www.laboutiqueharibo.fr/dw/image/v2/BFFT_PRD/on/demandware.static/-/Sites-haribo-master-catalog/default/dwadacee4e/food/summer%20pinata%20party/106109_HD.png?sw=460&sh=460'></img>
     
        <TextInput className={"b"} Icon={<FaHamburger />} name={nom} onChange={handleChange}></TextInput>
        <TextInput className={"c"} Icon={<BsFillCameraFill />} name={image} onChange={handleChange}></TextInput>
        <TextInput className={"d"} Icon={<MdOutlineEuro />} name={prix} onChange={handleChange}></TextInput>
        <PrimaryButton className={"e"} icon={MdOutlineEuro} label={"Ajouter un nouveau produit au menu"} />
        
    </AdminPageAddStyled>

  )
}

const AdminPageAddStyled = styled.div`
  display:grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: repeat(5, 20%);
  .a{
    grid-column-start: 1;
    grid-row: 1/5;
    max-width: 70%;
  }
  .b{
    grid-column-start: 2;
    grid-row-start: 1;
  }
  .c{
    grid-column-start: 2;
    grid-row-start: 2;
  }
  .d{
    grid-column-start: 2;
    grid-row-start: 3;
  }
  .e{
    grid-column-start: 2;
    grid-row-start: 4;
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
    
    &:hover
    {

    }
  }

  .test{

  }

  input{
    width: 50vw;
    display: grid;
  }
`;
