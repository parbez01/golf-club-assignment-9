// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaOSBG9V8HQWcsEq8YEO8ufnTzpAb4wE",
  authDomain: "react-setup-projects.firebaseapp.com",
  projectId: "react-setup-projects",
  storageBucket: "react-setup-projects.appspot.com",
  messagingSenderId: "167685968364",
  appId: "1:167685968364:web:858a76de15f0fb212e70c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;