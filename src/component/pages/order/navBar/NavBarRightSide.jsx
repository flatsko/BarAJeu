import { styled } from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusableUI/ToggleButton";
import { toast } from "react-toastify";
import {FaUserSecret}from "react-icons/fa";
import ToastAdmin from "../../../ToastContainer";
import { useContext } from "react";
import Context from "../../../../context/Context"

export default function NavBarRightSide() {
  //const [isChecked, setIsChecked] = useState("false");
  const {isModeAdmin, setIsModeAdmin} = useContext(Context);
  console.log(`Nav ${isModeAdmin}`)
  const displayToastNotification = () => {
    if (!isModeAdmin) {
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

    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavBarRightSideStyles>
     
        <ToggleButton
          onToggle={displayToastNotification}
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          isChecked={isModeAdmin}
          policeColor=""
        />
      {/* <div className="adminButton">Admin Button</div> */}
      <Profile />
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
