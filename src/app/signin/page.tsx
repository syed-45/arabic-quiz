'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Implement your sign-in logic here
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="max-w-md w-full px-10 py-12 border-2 border-gray-200 bg-gradient-to-tr from-black to-gray-700 shadow-md rounded-md puff-in-center">
                <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="text-black w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 text-white rounded-md transition-colors"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 text-white rounded-md transition-colors flex items-center justify-center gap-3"
                        onClick={() => ''}
                    >
                        <Image src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" width={20} height={20} />
                        Sign In with Google
                        <div></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

// onClick={() => {
    //   const provider = new GoogleAuthProvider();
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const credential = GoogleAuthProvider.credentialFromResult(result);
    //       // what can i do with the token

    //       const token = credential?.accessToken;
    //       // The signed-in user info.
    //       const user = result.user;
    //       console.log(user);
    //       // redirect to signedin page
    //       // window.location.href = "/signedin";

    //       //how to access user data
    //       // const {displayName, email, photoURL} = user;
    //       // how can i get the user data to the signedin page

    //     })
    //     .catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //       const email = error.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       console.log(error);
    //     });
    //   }} 