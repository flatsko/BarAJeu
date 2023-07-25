import { useState } from "react"
import LoginPage from "./component/pages/login/LoginPage.jsx";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
//import mainLayout from "./component/pages/layout/mainLayout.jsx";
import OrderPage from "./component/pages/login/OrderPage.jsx";

function App() {
  //state

  //comportement

  //affichage


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="loginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )


}
export default App