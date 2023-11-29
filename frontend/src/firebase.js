// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "citynext.firebaseapp.com",
  projectId: "citynext",
  storageBucket: "citynext.appspot.com",
  messagingSenderId: "997621173299",
  appId: "1:997621173299:web:ac7cdbe58adaa4df86e746"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);