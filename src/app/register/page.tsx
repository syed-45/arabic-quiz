import { redirect } from "next/navigation";
import { getUser, createUser } from "../db";
import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "./RegisterForm";
import { SubmitButton } from "../submit-button";
import { signIn } from "../auth";


const Register = (): JSX.Element => {
    async function register(formData: FormData) {
        'use server'
            let email = formData.get('email') as string;
            let password = formData.get('password') as string;
            let name = formData.get('name') as string;
            try {
                let user = await getUser(email);
                if (user.length > 0) {      
                    redirect('/register/error_409')
                } else {
                    await createUser(email, password, name);
                    redirect('/register/successful');
                }
            } catch (error) {
                console.error(error)
                throw error
            }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-min-content sm:w-[500px] px-10 py-12 border-2 border-gray-700 dark:border-gray-200 dark:bg-gradient-to-tr dark:from-black dark:to-gray-700 bg-gradient-to-t from-gray-200 via-gray-100 to-gray-200 shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-6">Register a new account</h1>
                <h2 className="text-2xl font-semibold mb-6"></h2>     
                    <RegisterForm action={register} >
                        <SubmitButton>Sign Up</SubmitButton>
                    </RegisterForm>
                <form 
                    className='mt-4 mb-4'
                    action={async () => { 
                        'use server';
                        await signIn('google')
                    }}
                >
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 via-gray-700 to bg-gray-800 text-white rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                        <Image src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google logo" width={20} height={20} />
                        Sign Up with Google
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    {'Already have an account? '}
                    <Link href="/login" className="font-semibold dark:text-gray-200">
                    Sign in
                    </Link>
                    {' instead.'}
                </p>                        
            </div>
        </div>
    );
};

export default Register;