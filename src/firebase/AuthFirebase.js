import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { App, Auth } from "./ConfigFirebase";

//sign up user
function signUpUser(email, password) {
  return createUserWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

//sign in user

const signInUser = (email, password) => {
  return signInWithEmailAndPassword(Auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      onAuthStateChanged(Auth, (user) => {
        localStorage.setItem("user", JSON.stringify(user));
      });
    }
  );
};

export { signUpUser, signInUser };
