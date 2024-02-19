'use client'
import { getAuth, signInWithPopup, GoogleAuthProvider,
        createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase/config"
import { useState } from "react";
import Link from "next/link";

// createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//               // Signed up 
//               const user = userCredential.user;
//               // ...
//             })
//             .catch((error) => {
//               const errorCode = error.code;
//               const errorMessage = error.message;
//               // ..
//             });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     window.location.href = "/signedin";
//   } else {
//     // User is signed out
//     // ...
//   }
// });

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div> 
          <main className="mb-10"> 
            <h1 className="text-5xl font-bold text-center">Arabic Quiz App</h1>
            <p className="text-center mt-5">Based on The Arabiyyah Bayna Yadayk Series</p>
          </main>
          <div className="flex flex-row gap-5 mt-10 mx-10 justify-center w-80">
            <Link href="/signin"
              className="text-center border-2 border-gray-200 bg-gradient-to-tr from-black to-gray-700  text-white font-bold py-4 px-6 rounded-lg w-1/2"
              >
              Sign In
            </Link>
            <Link href="/signup"
            className="text-center bg-white text-black font-bold py-4 px-6 rounded-lg w-1/2">
              Register
            </Link>
          </div> 
        </div>
    </div>
  )
}
