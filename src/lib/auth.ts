import { getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";

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

export const useHandleRedirectResult = () => {
  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log("スマホログイン成功:", result.user);
        }
      } catch (error) {
        console.error("リダイレクトログイン失敗:", error);
      }
    };

    fetchRedirectResult();
  }, []);
};


export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("ログアウト失敗：", error);
  }
};