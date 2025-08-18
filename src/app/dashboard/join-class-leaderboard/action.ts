"use server"

import { auth } from "@/app/auth";
import { IJoinClassRes, joinClassLeaderboard } from "@/app/db";

export async function joinClassLeaderboardAction(prevState:IJoinClassRes,formData: FormData) {
    const session = await auth();
    if (!session) throw new Error('Unaouthorised');
    if (!session.user) throw new Error('Unable to fetch user data from session');
    const code = formData.get('classCode') as string;

    try {
        const res = await joinClassLeaderboard(code, session.user.id)
        return res
    } catch (error) {
        throw error
    }
  }