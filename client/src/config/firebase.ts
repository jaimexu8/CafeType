import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArCfK67FaVnVb-iyxK2wqocqvsh3tpceo",
  authDomain: "cafetype-8ddd9.firebaseapp.com",
  projectId: "cafetype-8ddd9",
  storageBucket: "cafetype-8ddd9.appspot.com",
  messagingSenderId: "488904011316",
  appId: "1:488904011316:web:98048d97099b35179d2461",
  measurementId: "G-V7GR1MMG1B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
