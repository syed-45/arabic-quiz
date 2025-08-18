'use server';

import { checkIfClassExists, checkIfSchoolExists, createNewGroupClass, createNewSchool } from '@/app/db';
import { revalidateTag } from 'next/cache';
    
export async function registerClassLeaderboardAction(prevState:string | null,formData: FormData) {
    const schoolSelect = formData.get('schoolSelect') as string;
    const isNewSchool = schoolSelect === "Register a new school"
    const schoolName = isNewSchool ? formData.get('newSchoolName') as string : schoolSelect
    const groupClassName = formData.get('groupClassName') as string;

    
    try {
        if (isNewSchool) {
            const doesSchoolExist = await checkIfSchoolExists(schoolName)
            if (doesSchoolExist) return 'This school is already present on the list'
            await createNewSchool(schoolName)
        };
        const doesClassExist = await checkIfClassExists(schoolName, groupClassName)
        if (doesClassExist) return 'This class has already been created'
        const code = (await createNewGroupClass(groupClassName, schoolName))[0].code;
        revalidateTag('list-of-schools')
        return code
    } catch (error) {
        throw error
    }
}


//TODO: too many try catches in actions/db functions, get rid