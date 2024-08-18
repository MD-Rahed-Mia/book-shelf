import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { App } from "./ConfigFirebase";

const db = getFirestore(App);

//store user basic data
const setUpUser = async (name, email, phone, address) => {
  const userRef = {
    name,
    email,
    phone,
    address,
  };

  const ref = doc(collection(db, "user"));

  return await setDoc(ref, userRef);
};

//update user data

const updateUser = async (id, data) => {
  try {
    const ref = doc(db, "user", id);
    await updateDoc(ref, data);
  } catch (error) {
    throw new Error("no user found.");
  }
};

export { setUpUser, updateUser };
