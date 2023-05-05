// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZI6nJFXH_IRUjm6VI1maVaEEEqsEIXs",
  authDomain: "realtor-clone-react-d8bc4.firebaseapp.com",
  projectId: "realtor-clone-react-d8bc4",
  storageBucket: "realtor-clone-react-d8bc4.appspot.com",
  messagingSenderId: "66207743850",
  appId: "1:66207743850:web:8734dfa20d8fdebe276f13"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();