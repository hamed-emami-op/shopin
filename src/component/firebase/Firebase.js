// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUtQQgnbzlEnqoLJUH9KjnzZ7JJbsVfZg",
  authDomain: "foodpood-452d4.firebaseapp.com",
  projectId: "foodpood-452d4",
  storageBucket: "foodpood-452d4.firebasestorage.app",
  messagingSenderId: "466425268831",
  appId: "1:466425268831:web:1de6fc417636d731d4a9ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
