import { useState } from "react"
import LoginPage from "./component/pages/login/LoginPage.jsx";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
//import mainLayout from "./component/pages/layout/mainLayout.jsx";
import OrderPage from "./component/pages/OrderPage.jsx";
import NoAccessPage from "./component/pages/NoAccesPage.jsx";

function App() {
  //state

  //comportement

  //affichage
 // <Route path="*" element={<OrderPage />} />

  return (
    <div>
      
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/orderPage" element={<OrderPage />} />
          <Route path="*" element={<NoAccessPage />} />
        </Routes>
    
    </div>
  )


}
export default App