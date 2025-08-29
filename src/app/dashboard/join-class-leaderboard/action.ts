"use server"

import { auth, unstable_update } from "@/app/auth";
import { IJoinClassRes, joinClassLeaderboard } from "@/app/db";
import { revalidatePath } from "next/cache";

export async function joinClassLeaderboardAction(prevState:IJoinClassRes,formData: FormData) {
    const session = await auth();
    if (!session) throw new Error('Unaouthorised');
    if (!session.user) throw new Error('Unable to fetch user data from session');
    if (!session.user.id) throw new Error('Unable to fetch user data from session');
    const code = formData.get('classCode') as string;

    try {
        const res = await joinClassLeaderboard(code, session.user.id)
        if (res.msg==='Success') {            
            const newSession = await unstable_update({user: {
                name: session.user.name,
                email: session.user.email,
                gradientNum: session.user.gradientNum,
                class: res.data!.class,
                school: res.data!.school,
                isRegistrant: res.data!.isRegistrant
            }});            
        }
        revalidatePath("/dashboard/page")
        return res
    } catch (error) {
        throw error
    }
  }