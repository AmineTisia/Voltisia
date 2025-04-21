// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByelykqw5NIOXFZK_CHed0i28FQD8UYHw",
  authDomain: "voltisia.firebaseapp.com",
  projectId: "voltisia",
  storageBucket: "voltisia.firebasestorage.app",
  messagingSenderId: "145971877559",
  appId: "1:145971877559:web:3e431531d9218b24f91f32",
  measurementId: "G-7JR8XTER78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
