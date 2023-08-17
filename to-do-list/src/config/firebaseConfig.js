// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQTXkkFLSP2iJ5aQm9QUFy4Ud6b52od0Y",
  authDomain: "to-do-list-1a8d9.firebaseapp.com",
  projectId: "to-do-list-1a8d9",
  storageBucket: "to-do-list-1a8d9.appspot.com",
  messagingSenderId: "656302752558",
  appId: "1:656302752558:web:48b9a82dfdd10a9d3070bf",
  measurementId: "G-N3L7X5B2F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);