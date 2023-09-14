// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARcAfgF29WZ7rZdzPoZMt7TP_goi_Ba4Y",
  authDomain: "ema-john-simple-8de94.firebaseapp.com",
  projectId: "ema-john-simple-8de94",
  storageBucket: "ema-john-simple-8de94.appspot.com",
  messagingSenderId: "251774009696",
  appId: "1:251774009696:web:306b63b0bf1b0ccf589e05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;