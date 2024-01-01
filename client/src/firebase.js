// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-840bc.firebaseapp.com",
  projectId: "mern-realestate-840bc",
  storageBucket: "mern-realestate-840bc.appspot.com",
  messagingSenderId: "986100096423",
  appId: "1:986100096423:web:e1e3e61fc1b48d39b02a82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
