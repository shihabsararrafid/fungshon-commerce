import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Xu1YUn7GzNr8kMY1zn0Qi9t8xp2GWIU",
  authDomain: "fungshon-ecommerce.firebaseapp.com",
  projectId: "fungshon-ecommerce",
  storageBucket: "fungshon-ecommerce.appspot.com",
  messagingSenderId: "418954988055",
  appId: "1:418954988055:web:8d89eb9c122e095524aa52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
