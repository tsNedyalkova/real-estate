// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-657eb.firebaseapp.com",
  projectId: "real-estate-657eb",
  storageBucket: "real-estate-657eb.appspot.com",
  messagingSenderId: "1017294591768",
  appId: "1:1017294591768:web:44caa41b54cc2b8bdcf06d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);