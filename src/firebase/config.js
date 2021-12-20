// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdpRAr7T3wMK5iVQd8baXm7I7FOfJUSLk",
  authDomain: "reactjscoderhouse-e071b.firebaseapp.com",
  projectId: "reactjscoderhouse-e071b",
  storageBucket: "reactjscoderhouse-e071b.appspot.com",
  messagingSenderId: "989524329867",
  appId: "1:989524329867:web:b9c8c9fbcb7d79cbda9b8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
