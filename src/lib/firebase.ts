import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz0PuYNEBtYwGYAuEJrvEZHcgwe8USdWc",
  authDomain: "neko-app-f24eb.firebaseapp.com",
  projectId: "neko-app-f24eb",
  storageBucket: "neko-app-f24eb.firebasestorage.app",
  messagingSenderId: "1043281499227",
  appId: "1:1043281499227:web:7f35403be27c8f19cb9b7e",
  measurementId: "G-NV9YJL0VKG",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); //「!」もしデータが(length)存在していたらfirebasの情報を初期化　getAppは既に存在するデータを返す→初期化されていない場合に呼ぶとエラーになる。

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
//初期化したデータを取得する