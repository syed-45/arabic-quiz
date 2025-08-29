import { auth } from "@/app/auth";
import { db } from "@/app/db";
import { users, userScores } from "@/app/db/schema";
import Navbar from "@/app/Navbar";
import ProfileIcon from "@/app/ProfileIcon";
import { and, desc, eq, sum } from "drizzle-orm";
import Link from "next/link";
const mockData = [
    { name: "Ian Thompson", gradientNum: 9, overallScore: '98' },
    { name: "Charlie Kim", gradientNum: 3, overallScore: '96' },
    { name: "George Clark", gradientNum: 7, overallScore: '93' },
    { name: "Jasmine Rivera", gradientNum: 10, overallScore: '92' },
    { name: "Alice Johnson", gradientNum: 1, overallScore: '89' },
    { name: "Fiona Lewis", gradientNum: 6, overallScore: '87' },
    { name: "Ethan Walker", gradientNum: 5, overallScore: '85' },
    { name: "Bob Martinez", gradientNum: 2, overallScore: '81' },
    { name: "Hannah Patel", gradientNum: 8, overallScore: '79' },
    { name: "Diana Roberts", gradientNum: 4, overallScore: '76' },
]

export default async function Leaderboard() {
    const session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id || !session.user.name) throw new Error('Unable to retrieve user data from session');

    if (!session.user.class || !session.user.school) {
        return (
         <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mx-auto pt-10 px-5 min-w-[360px] w-full max-w-2xl">            
                <h1>You have not joined a class yet. <Link href='/dashboard/join-class-leaderboard' className="font-bold">Join</Link> a class to view the leaderboard.</h1>
            </div>

        </>)
    }

    const getLeaderboardData = async (groupClass: string, school: string) => {
        "use server"

        try {
            const res = await db.select({name: users.name, gradientNum: users.gradientNum, overallScore: sum(userScores.last_score)})
            .from(users).where(
                and(
                    eq(users.class,groupClass),
                    eq(users.school,school)
                )).innerJoin(userScores,eq(users.id,userScores.user_id))
                .groupBy(users.name, users.gradientNum)
                .orderBy(desc(sum(userScores.last_score)))
                return res
        } catch (err) {
            console.error(err)
            return 'Error'
        }        
    }

    const testing = false
    const leaderboardData = testing ? mockData : await getLeaderboardData(session.user.class,session.user.school)
    if (leaderboardData==='Error') throw new Error('Error fetching leaderboard data')
    testing && console.log(leaderboardData)

    //todo mv leaderboard into client component, add functionality to show more btn
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center mx-auto pt-10 px-5 min-w-[360px] w-full max-w-2xl">
            <div className="text-left w-full">
                <h1 className="text-xl font-bold">Leaderboard Table</h1>
                <h2 className="mb-8 text-md">{session.user.class}, {session.user.school}</h2>
            </div>
            <div className="grid place-items-start w-full">
                <div className="row-span-full col-span-full w-full z-0 rounded-t-3xl bg-gradient-to-b from-sky-700/80 dark:from-sky-950/80 border-t border-x border-sky-600 dark:border-sky-900 h-[640px] text-sm"></div>
                <table className="row-span-full col-span-full w-full z-10 rounded-t-3xl bg-transparent text-gray-100 text-center">
                    <thead className="border-b border-sky-600 dark:border-sky-900 font-bold ">
                        <tr className="h-[60px]">
                            <th className="w-1/6">No.</th>
                            <th className="w-3/6" colSpan={2}>Name</th>
                            <th className="w-2/6">Overall Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData[0] === undefined ? <tr className="h-16"><td colSpan={4}>No scores recorded yet for this class...</td></tr> //todo show users with 0 score instead
                            :
                        leaderboardData.slice(0,).map((data, idx) => {
                            if (data.gradientNum===null || !data.name || !data.overallScore) return <></>
                            return (
                                <tr key={idx} className={` ${idx!==9 && 'border-b'} ${idx===0 && 'mt-14'} border-sky-600 dark:border-sky-900 h-[58px]`}>
                                    <td className="font-bold">
                                        {idx + 1}
                                    </td>
                                    <td className="">
                                        {<ProfileIcon 
                                            gradientNum={data.gradientNum} 
                                            name={data.name}
                                        />}  
                                    </td> 
                                    <td className="text-center">                                                                                                        
                                        {data.name}
                                    </td>
                                    <td className="">
                                        {parseInt(data.overallScore)*150}
                                    </td>
                                </tr>
                            )})                                
                        }
                    </tbody>
                </table>    
            </div>
            <div className="flex justify-center items-center py-7">
                <button>Show more</button>
            </div>            
        </div>
      </>
    );
  }