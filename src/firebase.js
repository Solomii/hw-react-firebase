// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR_TjlTnNMD17yhZc9ytnDbm94jCvXack",
  authDomain: "todo-rfb.firebaseapp.com",
  projectId: "todo-rfb",
  storageBucket: "todo-rfb.appspot.com",
  messagingSenderId: "225541180573",
  appId: "1:225541180573:web:95141432c555ae4830d874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
