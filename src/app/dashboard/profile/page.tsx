import Navbar from '@/app/Navbar';
import { auth, signOut } from '../../auth';
import { ProfileForm } from './ProfileForm';
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline"


export default async function Profile() {
    const session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id || !session.user.email || !session.user.name || session.user.gradientNum===undefined ) throw new Error('Unable to retrieve user data from session');
    
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center pt-2 px-5">
          <ProfileForm name={session.user.name} email={session.user.email} userId={session.user.id} gradientNum={session.user.gradientNum} />
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
