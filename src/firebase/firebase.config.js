// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL3qhsNOVl9hNL-egjH6M7ASkwrl675Vc",
  authDomain: "assignment-9-sunflower.firebaseapp.com",
  projectId: "assignment-9-sunflower",
  storageBucket: "assignment-9-sunflower.firebasestorage.app",
  messagingSenderId: "368508161929",
  appId: "1:368508161929:web:f6a1af84ae03b201ce1b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;