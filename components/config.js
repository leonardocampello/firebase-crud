// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUvLAfbdYebbJzT552lVVQPRrLed26YLQ",
  authDomain: "fir-crud-teste.firebaseapp.com",
  // databaseURL: 'https://fir-crud-teste.firebaseio.com',
  projectId: "fir-crud-teste",
  storageBucket: "fir-crud-teste.appspot.com",
  messagingSenderId: "526297922974",
  appId: "1:526297922974:web:1ae91105cdce45b5fc2a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);