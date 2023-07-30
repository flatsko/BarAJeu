import React from 'react'
import { Outlet, useLocation, useNavigate, Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import { theme } from "../../theme/index";
import Logo from '../reusableUI/logo';
import Navbar from './order/Navbar';
import Main from './order/Main';


const OrderPage = () => {
  const {username} = useParams();
  const nav = useNavigate();


  return (
    <OrderPageStyled>
      <div className='container'>Contain
        <Navbar username={username} >
          <div className='leftBar'>leftbar</div>
          <div className='rightBAr'>Right NavBar</div>

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
background-color:red;

.container{

    height: 95vh;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};

}


`;