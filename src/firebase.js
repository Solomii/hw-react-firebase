import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtXGWq6nP3Eq8f1Q8Ui7SRA9k40FJffek",
  authDomain: "todo-fb-aeb9c.firebaseapp.com",
  projectId: "todo-fb-aeb9c",
  storageBucket: "todo-fb-aeb9c.appspot.com",
  messagingSenderId: "609569699805",
  appId: "1:609569699805:web:846a862b546895b0422834",
  measurementId: "G-658ECNDLYS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };