// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD58FQtEi1Y1_CNFUIY8Xa1uQFPuqt69uk",
  authDomain: "docapp-227d6.firebaseapp.com",
  projectId: "docapp-227d6",
  storageBucket: "docapp-227d6.appspot.com",
  messagingSenderId: "126927486984",
  appId: "1:126927486984:web:80f3b3ecc7149f0a69d1bd",
  measurementId: "G-KSBSBMWYLQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app)