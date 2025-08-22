"use server"

import { updateUser } from "@/app/db"
import { auth, unstable_update } from "@/app/auth";
import { revalidatePath } from "next/cache";
import { IUpdateProfileRes } from "@/app/utils/types";

export const updateUserAction = async (prevState: IUpdateProfileRes, formData: FormData) => {
    const session = await auth();
    if (!session) throw new Error('Unaouthorised');
    if (!session.user) throw new Error('Unable to fetch user data from session');
    if (!session.user.id) throw new Error('Unable to fetch user data from session');

    const userId = session.user.id;
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const gradientNum = parseInt(formData.get('gradientNum') as string);
    //TODO: learn ZOD to validate form inpts..
    

    try {
        await updateUser(email, name, gradientNum, userId)
        const newSession = await unstable_update({user: {
            name:name,
            email:email,
            gradientNum:gradientNum,
            class: session.user.class,
            school: session.user.school
        }});
        return {
            msg: "success",
            data: {
                name: name,
                email: email
            }
        } as IUpdateProfileRes
    } catch (error) {
        throw error        
    }
  }