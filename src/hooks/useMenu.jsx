import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { fakeMenu } from "../data/fakeMenu";
import { deepClone } from "../utils/array";
import { useBasket } from "./useBasket";
import Context from "../context/Context";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleDelete = (idTodelete) => {
    const copyMenu = deepClone(menu);
    const produitASupprimer = copyMenu.filter((el) => el.id == idTodelete);
    const cCopyMenu = copyMenu.filter((el) => el.id != idTodelete);

    toast.dark(produitASupprimer[0].title + " supprimé(e)(s)", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setMenu(cCopyMenu);
  };

  const handleEdit = (idToEdit) => {
    const copyMenu = deepClone(menu);

    copyMenu[idToEdit] = setMenu(CopyMenu);
  };

  return { menu, setMenu, handleEdit, handleDelete };
};
