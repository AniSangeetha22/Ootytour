// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPt0IIzl4TsrJgwXZFzFyqkUQC_c-c-Rg",
  authDomain: "ootytour-react.firebaseapp.com",
  projectId: "ootytour-react",
  storageBucket: "ootytour-react.appspot.com",
  messagingSenderId: "614447709140",
  appId: "1:614447709140:web:935d82e34d30777aea3441"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db =getFirestore()