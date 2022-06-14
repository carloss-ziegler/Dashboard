import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "dashboard-marmoreli.firebaseapp.com",
  projectId: "dashboard-marmoreli",
  storageBucket: "dashboard-marmoreli.appspot.com",
  messagingSenderId: "317041427097",
  appId: "1:317041427097:web:42c3c4358ec6747de42e08",
  measurementId: "G-QL49XEHF2J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
