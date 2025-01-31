// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtSlgYR82CkVwJD5bNcaO7S8PaoEnFoBQ",
  authDomain: "netflix-gpt-react-f3990.firebaseapp.com",
  projectId: "netflix-gpt-react-f3990",
  storageBucket: "netflix-gpt-react-f3990.firebasestorage.app",
  messagingSenderId: "602453784545",
  appId: "1:602453784545:web:88df1dc8445606d12204a0",
  measurementId: "G-91VDVJYW47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();