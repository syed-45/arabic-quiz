import Navbar from '@/app/Navbar';
import { Form } from './Form';

export default async function JoinClassLeaderboard() {    
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-20 px-5">
          <Form/>
        </div>
      </>
    );
  }
  
  
