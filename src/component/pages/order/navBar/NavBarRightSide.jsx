import React, { useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../theme/index";
import Profile from "./Profile";
import ToggleButton from "../../../reusableUI/ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import {FaUserSecret}from "react-icons/fa";
import ToastAdmin from "../../../ToastContainer";


export default function NavBarRightSide({ username }) {
  const [isChecked, setIsChecked] = useState("false");
  const displayToastNotification = () => {
    if (isChecked) {
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setIsChecked(!isChecked);
  };

  return (
    <NavBarRightSideStyles>
     
        <ToggleButton
          onToggle={displayToastNotification}
          labelIfChecked="ACTIVER LE MODE ADMIN"
          labelIfUnchecked="DÉSACTIVER LE MODE ADMIN"
          isChecked={isChecked}
          policeColor=""
        />
      {/* <div className="adminButton">Admin Button</div> */}
      <Profile username={username} />
      <ToastAdmin />
    </NavBarRightSideStyles>
  );
}

const NavBarRightSideStyles = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;


    div {
      line-height: 1.3em;
    }
`;
