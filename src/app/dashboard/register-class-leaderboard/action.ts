'use server';

import { auth, unstable_update } from '@/app/auth';
import { checkIfClassExists, checkIfSchoolExists, createNewGroupClass, createNewSchool } from '@/app/db';
import { revalidateTag } from 'next/cache';
    
export async function registerClassLeaderboardAction(prevState:string | null,formData: FormData) {
    const session = await auth();
    if (!session) throw new Error('Unaouthorised');
    if (!session.user) throw new Error('Unable to fetch user data from session');
    if (!session.user.id) throw new Error('Unable to fetch user data from session');

    const schoolSelect = formData.get('schoolSelect') as string;
    const isNewSchool = schoolSelect === "Register a new school"
    const schoolName = isNewSchool ? formData.get('newSchoolName') as string : schoolSelect
    const groupClassName = formData.get('groupClassName') as string;

    
    try {
        if (isNewSchool) {
            const doesSchoolExist = await checkIfSchoolExists(schoolName)
            if (doesSchoolExist) return 'This school is already present on the list'
            await createNewSchool(schoolName)
            revalidateTag('list-of-schools')
        };
        const doesClassExist = await checkIfClassExists(schoolName, groupClassName)
        if (doesClassExist) return 'This class has already been created'
        const code = (await createNewGroupClass(groupClassName, schoolName, session.user.id))[0].code; 
        await unstable_update({user: {
                    name:session.user.name,
                    email:session.user.email,
                    gradientNum:session.user.gradientNum,
                    class: groupClassName,
                    school: schoolName,
                    isRegistrant: true
                }});
        return code
    } catch (error) {
        throw error
    }
}


//TODO: too many try catches in actions/db functions, get rid