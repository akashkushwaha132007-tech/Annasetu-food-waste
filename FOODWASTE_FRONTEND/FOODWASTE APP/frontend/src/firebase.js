import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGUjC0j8XaNfRlymLCr9Yrkjp8ksNkH70",
  authDomain: "annasetu-b7364.firebaseapp.com",
  projectId: "annasetu-b7364",
  storageBucket: "annasetu-b7364.firebasestorage.app",
  messagingSenderId: "124125267019",
  appId: "1:124125267019:web:ea0369ed399792ae1679ce",
  measurementId: "G-0W9BKTDY2X",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

