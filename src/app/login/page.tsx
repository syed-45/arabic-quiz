import { Form } from '../form';
import { SubmitButton } from '../submit-button';
import Image from 'next/image';
import { signIn } from '../auth';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-min-content sm:w-[500px] px-10 py-12 border-2 border-gray-700 dark:border-gray-200 dark:bg-gradient-to-tr dark:from-black dark:to-gray-700 bg-gradient-to-t from-gray-200 via-gray-100 to-gray-200 shadow-md rounded-md">
                <h1 className="text-2xl font-semibold mb-6">Sign In</h1>                
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
                </Form>               
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
                        Sign In with Google
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                    {"Don't have an account? "}
                    <Link href="/register" className="font-semibold dark:text-gray-200">
                    Sign up
                    </Link>
                    {' for free.'}
                </p>
            </div>
        </div>
    );
};