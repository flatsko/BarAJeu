import { useState } from "react"
import LoginPage from "./component/pages/login/LoginPage.jsx";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
//import mainLayout from "./component/pages/layout/mainLayout.jsx";
import OrderPage from "./component/pages/OrderPage.jsx";
import NoAccessPage from "./component/pages/NoAccesPage.jsx";
import { styled } from 'styled-components/'

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
    
    </StyledApp>
  )


}
export default App

const StyledApp = styled.div`

  min-width: 100vw;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;




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