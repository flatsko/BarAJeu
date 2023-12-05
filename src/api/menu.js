import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (menu, userId) => {
  //Syncroniser le menu local et le menu distant
  const cachette = doc(db, "users", userId);
  const nourriture = {
    usename: userId,
    menu: menu,
  };
  setDoc(cachette, nourriture);
};
