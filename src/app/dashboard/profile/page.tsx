import Navbar from '@/app/Navbar';
import { auth, signOut } from '../../auth';
import { ProfileForm } from './ProfileForm';

export default async function Profile() {
    const session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id || !session.user.email || !session.user.name || session.user.gradientNum===undefined ) throw new Error('Unable to retrieve user data from session');
    
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center pt-10 px-5">
          <ProfileForm name={session.user.name} email={session.user.email} userId={session.user.id} gradientNum={session.user.gradientNum} />
          <SignOut />
        </div>
      </>
    );
  }
  
  function SignOut() {
    return (
      <form
        className='mt-5'
        action={async () => {
          'use server';
          await signOut({
            redirectTo: '/'
          });
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    );
  }
