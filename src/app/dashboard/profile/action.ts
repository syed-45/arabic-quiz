"use server"

import { updateUser } from "@/app/db"
import { auth, unstable_update } from "@/app/auth";
import { revalidatePath } from "next/cache";

export const updateUserAction = async (gradientNumState: string, formData: FormData) => {
    const session = await auth();
    if (!session) throw new Error('Unaouthorised');
    if (!session.user) throw new Error('Unable to fetch user data from session');
    if (!session.user.id) throw new Error('Unable to fetch user data from session');

    const userId = session.user.id;
    let email = formData.get('email') as string;
    let name = formData.get('name') as string;
    let gradientNum = parseInt(gradientNumState);
    //TODO: learn ZOD to validate form inpts..
    
    revalidatePath('/dashboard/profile')

    try {
        await updateUser(email, name, gradientNum, userId)
        const newSession = await unstable_update({user: {
            name:name,
            email:email,
            gradientNum:gradientNum,
        }});
        // Will not update session across other devices which are signed in, possible fix if switch to DB strategy in auth
        return
    } catch (error) {
        throw error
    }
  }