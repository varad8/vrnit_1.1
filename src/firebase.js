// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCdW7aLJwjorlTLRELdqsOLApJeJQ8mA6A",
  authDomain: "vrnitsolution.firebaseapp.com",
  projectId: "vrnitsolution",
  storageBucket: "vrnitsolution.appspot.com",
  messagingSenderId: "207595635995",
  appId: "1:207595635995:web:0a70ad401a64cd481a7fbe",
  measurementId: "G-EMGM8S9361",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
