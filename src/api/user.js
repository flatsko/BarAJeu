import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../data/fakeMenu";

export async function getUser(idUser) {
  const docRef = doc(db, "users", idUser);
  const snapShot = await getDoc(docRef);
  if (snapShot.exists()) {
    const userRecived = snapShot.data();
    console.log(userRecived);
  }
}

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.SMALL,
  };
  setDoc(docRef, newDoc);
};
