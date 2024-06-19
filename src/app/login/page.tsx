import { Form } from '../form';
import { SubmitButton } from '../submit-button';
import Image from 'next/image';
import { signIn } from '../auth';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="max-w-md w-full px-10 py-12 border-2 border-gray-200 bg-gradient-to-tr from-black to-gray-700 shadow-md rounded-md puff-in-center">
                <h2 className="text-2xl font-semibold mb-6">Sign In</h2>                
                <Form 
                    action={async (formData: FormData) => {
                        'use server';
                        await signIn('credentials', {
                        redirectTo: '/protected',
                        email: formData.get('email') as string,
                        password: formData.get('password') as string,
                        });
                    }} >
                    <SubmitButton>Sign In</SubmitButton>
                    <button
                        type="button"
                        className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 text-white rounded-md transition-colors flex items-center justify-center gap-3"
                    >
                        <Image src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" width={20} height={20} />
                        Sign In with Google
                        <div></div>
                    </button>
                    <p className="text-center text-sm text-gray-400">
                        {"Don't have an account? "}
                        <Link href="/register" className="font-semibold text-gray-200">
                        Sign up
                        </Link>
                        {' for free.'}
                    </p>
                </Form>
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