import Navbar from '@/app/Navbar';
import { auth } from '../../auth';
import { Form } from './Form';

export default async function JoinClassLeaderboard() {
    const session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id || !session.user.email || !session.user.name || session.user.gradientNum===undefined ) throw new Error('Unable to retrieve user data from session');
    
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-20 px-5">
          <Form/>
        </div>
      </>
    );
  }
  
  
