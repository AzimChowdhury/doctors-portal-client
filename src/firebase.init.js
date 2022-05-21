// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF-30WuiVosmbSLmvnDEoSLjSoc5InSn4",
  authDomain: "doctors-portal-e4398.firebaseapp.com",
  projectId: "doctors-portal-e4398",
  storageBucket: "doctors-portal-e4398.appspot.com",
  messagingSenderId: "288255696278",
  appId: "1:288255696278:web:6fbff1e9ec6e465e4f91b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;