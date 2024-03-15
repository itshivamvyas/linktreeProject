// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe8MYHA3_FlOs_AF7XkXVidu4mwIrcSoY",
  authDomain: "mylinkset-5120e.firebaseapp.com",
  projectId: "mylinkset-5120e",
  storageBucket: "mylinkset-5120e.appspot.com",
  messagingSenderId: "468512994249",
  appId: "1:468512994249:web:d5271f6fb373e1bb452e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();