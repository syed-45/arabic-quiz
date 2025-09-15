'use server';
import { AuthError } from 'next-auth';
import { signIn } from '../auth';
import z from 'zod';

const userSchema = z.object({ 
    email: z.email(),
    password: z.string().min(6)
            .regex(/[A-Za-z]/)
            .regex(/[0-9]/),
});

interface IFormResponse {
    invalidCredentials: boolean,
}

export const signInAction = async(prevState: IFormResponse | null, formData: FormData): Promise<IFormResponse> => {
    try {
        const rawFormData = Object.fromEntries(formData) as {
            email: string,
            password: string
        }
        const parsedUser = userSchema.safeParse(rawFormData)
        if (parsedUser.success) {
            const {email, password} = parsedUser.data
            await signIn('credentials', {
                redirect: true,
                email: email,
                password: password
            });
        }
        return {
            invalidCredentials: true
        }
    } catch (error) {
        if (error instanceof AuthError && error.type === 'CredentialsSignin') {
            return {
                invalidCredentials: true
            }                                
        }
        throw error;                            
    }
}