import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBviDkayHqZtTwxOqQ5CRXM7tjy1gjOhzk",
    authDomain: "arabic-quiz-login.firebaseapp.com",
    projectId: "arabic-quiz-login",
    storageBucket: "arabic-quiz-login.appspot.com",
    messagingSenderId: "610613501506",
    appId: "1:610613501506:web:43fcb9471912fd6c6b17db",
    measurementId: "G-Q2W20C9EG2"
  };
  
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

  const auth = getAuth(app)
  
  export {app, auth}