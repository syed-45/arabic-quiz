import Navbar from '@/app/Navbar';
import { Form } from './Form';
export interface ISchool {
    name: string
}

export default async function RegisterClassLeaderboard() {

    const res = await fetch(`${process.env.API_URL}/api/get-list-of-schools`, { next: { tags: ['list-of-schools'] }})
    const listOfSchools: ISchool[] = (await res.json()).result
    
    return (
      <>
        <Navbar />
        <div className="flex flex-col pt-20 px-5 max-w-md mx-auto">
            <h1 className='text-left text-xl'>Register a new group / class</h1>
            <Form listOfSchools={listOfSchools}/>
        </div>
      </>
    );
  }
  
  
