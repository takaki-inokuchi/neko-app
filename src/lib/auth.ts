import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    if (typeof window === "undefined") return;

    const isMobileDevice = window.innerWidth <= 768;

    if (isMobileDevice) {
      await signInWithRedirect(auth, provider);
    } else {
      const result = await signInWithPopup(auth, provider);
    }
  } catch (error) {
    console.error("Googleログイン失敗：", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("ログアウト失敗：", error);
  }
};