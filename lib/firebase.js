// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDprHagthw6pYhDhrhhjqfeqMQhke5JE4o",
  authDomain: "nextjs-app-572a3.firebaseapp.com",
  projectId: "nextjs-app-572a3",
  storageBucket: "nextjs-app-572a3.appspot.com",
  messagingSenderId: "205014283789",
  appId: "1:205014283789:web:77692063ddc4e2b9440744",
  measurementId: "G-5CNPX5ZE45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };