// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzQ3Szbq3_BnWjEIwVkx4kgOnSkF7kJw0",
  authDomain: "job-track-b9468.firebaseapp.com",
  projectId: "job-track-b9468",
  storageBucket: "job-track-b9468.firebasestorage.app",
  messagingSenderId: "965970838185",
  appId: "1:965970838185:web:20217e6d5fed3e28459fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export  const auth = getAuth(app);