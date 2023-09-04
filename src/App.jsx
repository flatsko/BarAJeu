import { useState } from "react"
import LoginPage from "./component/pages/login/LoginPage.jsx";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
//import mainLayout from "./component/pages/layout/mainLayout.jsx";
import OrderPage from "./component/pages/order/OrderPage.jsx";
import NoAccessPage from "./component/pages/404/NoAccesPage.jsx";
import { styled } from 'styled-components/'
import ToastAdmin from "./component/ToastContainer.jsx";
import { theme } from "./theme/index.js";

function App() {
  //state

  //comportement

  //affichage
 // <Route path="*" element={<OrderPage />} />

  return (
    <StyledApp>
      
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/orderPage/:username" element={<OrderPage />} >
            <Route index element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NoAccessPage />} />
         </Routes>
        <ToastAdmin />
    </StyledApp>
  )


}
export default App

const StyledApp = styled.div`


  margin: 0 auto;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  background-color: ${theme.colors.primary}; 
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;



@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}


`