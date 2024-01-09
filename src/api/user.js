import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../data/fakeMenu";

export async function getUser(idUser) {
  const docRef = doc(db, "users", idUser);
  const snapShot = await getDoc(docRef);
  if (snapShot.exists()) {
    const userRecived = snapShot.data();
    //console.log(userRecived);
    return userRecived;
  }
}

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  };
  await setDoc(docRef, newDoc);

  return userId;
};

export const autenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return await createUser(userId);
  }
  return existingUser;
};
