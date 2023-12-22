// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQCOGR04XYqYjHSv_XmpYQTCyV7AIIhKg",
  authDomain: "task-management-ce9d5.firebaseapp.com",
  projectId: "task-management-ce9d5",
  storageBucket: "task-management-ce9d5.appspot.com",
  messagingSenderId: "744866936919",
  appId: "1:744866936919:web:1d1e51769b6c0cd131cb12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;