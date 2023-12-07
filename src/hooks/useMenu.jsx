import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { fakeMenu } from "../data/fakeMenu";
import { deepClone } from "../utils/array";
import { getMenu, syncBothMenus } from "../api/menu";
import Context from "../context/Context";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  let { setIsLoading } = useContext(Context);
  const handleDelete = (idTodelete, username) => {
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
    syncBothMenus(cCopyMenu, username);
  };

  const handleEdit = (idToEdit, username) => {
    const copyMenu = deepClone(menu);

    copyMenu[idToEdit] = setMenu(copyMenu);
    syncBothMenus(menu, username);
  };
  const resetMenu = (username) => {
    setMenu(fakeMenu.SMALL);
    syncBothMenus(fakeMenu.SMALL, username);
  };
  const handleAdd = (newProduct, username) => {
    const newProductAdded = { ...newProduct, id: crypto.randomUUID() };
    const newMenu = [newProductAdded, ...menu];
    setMenu(newMenu);
    syncBothMenus(newMenu, username);
    // displaySucessMessage();
  };

  async function setMainMenuByUser(username, setIsLoading) {
    const menuProv = await getMenu(username);
    menuProv ? setMenu(menuProv) : setMenu(fakeMenu.MEDIUM);
    setIsLoading(false);
  }
  return {
    menu,
    setMenu,
    handleEdit,
    handleDelete,
    resetMenu,
    handleAdd,
    setMainMenuByUser,
  };
};
