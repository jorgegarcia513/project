// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxiq-OKZkWP8s0Nb26jHDLJsfwhTts1HE",
  authDomain: "project-5855f.firebaseapp.com",
  projectId: "project-5855f",
  storageBucket: "project-5855f.appspot.com",
  messagingSenderId: "191673880742",
  appId: "1:191673880742:web:5354049431bd463c0d2467",
  measurementId: "G-G1V6QSP2XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);