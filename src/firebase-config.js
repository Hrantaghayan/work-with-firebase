import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBeylWKr5dflZ8lDjmX0TyxNd5P5OuBMoY",
    authDomain: "countrys-bb380.firebaseapp.com",
    projectId: "countrys-bb380",
    storageBucket: "countrys-bb380.appspot.com",
    messagingSenderId: "305082551163",
    appId: "1:305082551163:web:94554b2491a644b12e8bde",
    measurementId: "G-55GB7P1NBL"
  };
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);