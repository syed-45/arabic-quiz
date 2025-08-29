import Navbar from '@/app/Navbar';
import { auth, signOut } from '../../auth';
import { ProfileForm } from './ProfileForm';
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline"
import { db } from '@/app/db';
import { classes } from '@/app/db/schema';
import { and, eq } from 'drizzle-orm';


export default async function Profile() {
    const session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id || !session.user.email || !session.user.name || session.user.gradientNum===undefined ) throw new Error('Unable to retrieve user data from session');

    const classCode = getClassCode(session.user.class, session.user.school)
    
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center px-5">
          <ProfileForm 
            name={session.user.name}
            email={session.user.email}
            userId={session.user.id}
            school={session.user.school}
            classGroup={session.user.class}
            gradientNum={session.user.gradientNum}
            isRegistrant={session.user.isRegistrant}
            classCode={classCode}
          />
          <SignOut />
        </div>
      </>
    );
  }
  
  function SignOut() {
    return (
      <form
        className='my-5'
        action={async () => {
          'use server';
          await signOut({
            redirectTo: '/'
          });
        }}
      >
        <button className="flex items-center gap-1" type="submit">
          Sign out
          <ArrowLeftEndOnRectangleIcon className="size-6"/>
        </button>
      </form>
    );
  }


  const getClassCode = async (groupClass:string | undefined,school:string | undefined): Promise<string> => {
    'use server'
    if (!groupClass || !school) return ''
    const res = await db.select({code: classes.code}).from(classes)
      .where(
        and(
          eq(classes.name,groupClass),
          eq(classes.schoolName,school)
        )
      )
      const code = res[0].code
    return code
  }