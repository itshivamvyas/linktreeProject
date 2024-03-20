import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./index";
import toast from "react-hot-toast";
import { addOrUpdateUserDetail } from "./firestore";

export const loginWithGoogle = async (usernameInput) => {
  try {
    const u = await signInWithPopup(auth, provider);
    await addOrUpdateUserDetail(u.user.uid, {
      name: u.user.displayName,
      email: u.user.email,
      photo: u.user.photoURL,
      username: usernameInput,
    });
    toast.success("Login Successful");
  } catch (error) {
    console.log(error);
  }
};

export async function logout() {
  await auth.signOut();
}

export async function logInWithEmailPassword(email, password) {
  try {
    const u = await signInWithEmailAndPassword(auth, email, password);
    await addOrUpdateUserDetail(u.user.uid, {
      email: u.user.email,
    });
    toast.success("Login Successful");
  } catch (error) {
    console.log(error.code);
    toast.error("Invalid Email And Password");
  }
}
