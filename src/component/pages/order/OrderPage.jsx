import React from 'react'
import { Outlet, useLocation, useNavigate, Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import { theme } from "../../../theme/index";
import Logo from '../../reusableUI/logo';
import Navbar from './navBar/Navbar';
import Main from './main/Main';
import { toast } from "react-toastify";

const OrderPage = () => {
  const {username} = useParams();
  const nav = useNavigate();
  toast.success(`🎲 Bienvenue ${username}` , {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    toastId:"1",
    });

  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar username={username} >
          <div className='leftBar' />
          <div className='rightBAr' />

          </Navbar>
          <Main />
          
          </div>
   
      
    </OrderPageStyled>
  
  )
}

export default OrderPage

const OrderPageStyled = styled.div`

background-color: ${theme.colors.primary};
min-height: 100vh;

align-items: center;
display: flex;
justify-content:center;


.container{

    height: 95vh;
    
    width: 90vw;
    max-width:1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};

}


`;