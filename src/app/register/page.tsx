import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "./RegisterForm";
import { SubmitButton } from "./submit-button";
import { signIn } from "../auth";
import { JSX } from "react";


const Register = (): JSX.Element => {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-5/6 sm:w-[500px] px-7 sm:px-10 py-12 border-2 border-gray-700 dark:border-gray-300 dark:bg-gradient-to-tr dark:from-black dark:to-gray-700 bg-gradient-to-t from-gray-200 via-gray-100 to-gray-200 shadow-md rounded-md">
                <h1 className="text-xl sm:text-2xl font-semibold mb-6">Register a new account</h1>
                <RegisterForm>
                    <SubmitButton>Sign up</SubmitButton>
                </RegisterForm>
                <form
                    action={async () => { 
                        'use server';
                        await signIn('google')
                    }}
                >
                    <button
                        type="submit"
                        className="mb-4 w-4/5 sm:w-3/5 mx-auto py-2 px-4 text-sm bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 text-white rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                        <Image src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" width={20} height={20} />
                        Sign up with Google
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">Already have an account?<Link href="/login" className="font-semibold dark:text-gray-200"> Sign in </Link>instead.</p>                        
            </div>
        </div>
    );
};

export default Register;