import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { App, Auth } from "./ConfigFirebase";

//sign up user
async function signUpUser(email, password) {
  try {
    return await createUserWithEmailAndPassword(Auth, email, password).then(
      (res) => {
        return {
          message: res.user,
          error: "no-error",
        };
      }
    );
  } catch (error) {
    return {
      message: "failed to signup.",
      error: error.code,
    };
  }
}

//sign in user

const signInUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(Auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(Auth, (user) => {
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        });
      }
    );
  } catch (error) {
    return {
      message: "failed to loging.",
      error: error.code,
    };
  }
};

// const getSignInUser =  () => {
//    onAuthStateChanged(Auth, (user) => {
//     return user.displayName;
//   })
// }

export { signUpUser, signInUser };
