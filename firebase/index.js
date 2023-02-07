import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMxM4Rt45KGeb121rUOENBu3Jsqdu0L_I",
  authDomain: "next-a500b.firebaseapp.com",
  projectId: "next-a500b",
  storageBucket: "next-a500b.appspot.com",
  messagingSenderId: "168712146976",
  appId: "1:168712146976:web:3190dee060b8836166ec45",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
