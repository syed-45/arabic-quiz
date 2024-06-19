import { redirect } from "next/navigation";
import { getUser, createUser } from "../db";
import Link from "next/link";
import { Form } from "../form";
import { SubmitButton } from "../submit-button";

const Register = () => {
    async function register(formData: FormData) {
        'use server'
            let email = formData.get('email') as string;
            let password = formData.get('password') as string;
            let user = await getUser(email);
        
            if (user.length > 0) {      
            redirect('/error_401')
            } else {
            await createUser(email, password);
            redirect('/login');
            }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-min-content sm:w-[500px] px-10 py-12 border-2 border-gray-200 bg-gradient-to-tr from-black to-gray-700 shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6"></h2>     
                    <Form action={register} >
                        <SubmitButton>Sign Up</SubmitButton>
                        <p className="text-center text-sm text-gray-400">
                            {'Already have an account? '}
                            <Link href="/login" className="font-semibold text-gray-200">
                            Sign in
                            </Link>
                            {' instead.'}
                        </p>
                    </Form>
            </div>
        </div>
    );
};

export default Register;