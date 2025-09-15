'use server';
import * as z from "zod"; 
import { createUser, getUser } from "../db";
import { redirect } from "next/navigation";

const userSchema = z.object({ 
    name: z.string().max(64,"Please shorten the name"),
    email: z.email("Enter a valid email address"),
    password: z.string().min(6,"Your password should be at least 6 characters long")
            .regex(/[A-Za-z]/,'Include at least one letter in your password')
            .regex(/[0-9]/,'Include at least one number in your password'),
});

interface IErrors {
    errors: string[]
}

interface IFormResponse {
    userEmailAlreadyExists?: boolean,    
    passwordError?: IErrors,
    emailError?: IErrors,
    formData: {
        name: string,
        email: string,
        password: string
    }
}
    
export async function registerAction(prevState: IFormResponse | null, formData: FormData): Promise<IFormResponse> {
    'use server'
        
    const rawFormData = Object.fromEntries(formData) as {
        name: string,
        email: string,
        password: string
    }
    const parsedUser = userSchema.safeParse(rawFormData)
    if (parsedUser.success) {
        const {name, email, password} = parsedUser.data
        const user = (await getUser(email))[0];
        if (user!==undefined && user.password!==undefined) {
            return {                 
                userEmailAlreadyExists: true, 
                formData: rawFormData
            }
        }         
        await createUser(email, password, name);
        redirect('/register/successful');          
    }
    const tree = z.treeifyError(parsedUser.error)
    return {        
        passwordError: tree.properties?.password,
        emailError: tree.properties?.email,
        formData: rawFormData
    }
        
}