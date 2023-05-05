// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyArFDHCLPg6aPO38uwX1qKxTDKbUZKugZA",
  authDomain: "bananaproject-b3f17.firebaseapp.com",
  projectId: "bananaproject-b3f17",
  storageBucket: "bananaproject-b3f17.appspot.com",
  messagingSenderId: "380095982641",
  appId: "1:380095982641:web:c889bd0add9090a8f2b910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

var database = getDatabase(app);

export {auth, db, database};