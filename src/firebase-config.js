// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4hOx1_4Wb6YCAp2cr7VXx1Lc6nEIkIMM",
  authDomain: "chat-app-7e6fe.firebaseapp.com",
  projectId: "chat-app-7e6fe",
  storageBucket: "chat-app-7e6fe.appspot.com",
  messagingSenderId: "494851632914",
  appId: "1:494851632914:web:28bde30510afc7229e8dcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();