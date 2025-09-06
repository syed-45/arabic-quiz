import { auth } from "@/app/auth";
import { db } from "@/app/db";
import { users, userScores } from "@/app/db/schema";
import Navbar from "@/app/Navbar";
import { ILeaderboardData } from "@/app/utils/types";
import { and, desc, eq, sum } from "drizzle-orm";
import Link from "next/link";
import { Leaderboard } from "./Leaderboard";

export default async function LeaderboardPage() {
    const session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id || !session.user.name) throw new Error('Unable to retrieve user data from session');

    if (!session.user.class || !session.user.school) {
        return (
         <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mx-auto pt-10 px-5 min-w-[360px] w-full max-w-2xl text-center">            
                <h1>You have not joined a class yet. <Link href='/dashboard/join-class-leaderboard' className="font-bold">Join</Link> a class to view the leaderboard.</h1>
            </div>

        </>)
    }

    const getLeaderboardData = async (groupClass: string, school: string):Promise<ILeaderboardData[]> => {
        "use server"

        const res = await db.select({name: users.name, gradientNum: users.gradientNum, overallScore: sum(userScores.last_score)})
        .from(users).where(
            and(
                eq(users.class,groupClass),
                eq(users.school,school)
            )).innerJoin(userScores,eq(users.id,userScores.user_id))
            .groupBy(users.name, users.gradientNum)
            .orderBy(desc(sum(userScores.last_score)))
            return res

    }

    const testing = false
    const leaderboardData = testing ? mockData : await getLeaderboardData(session.user.class,session.user.school)
    testing && console.log(leaderboardData)

    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center mx-auto pt-10 px-5 min-w-min w-full max-w-2xl">
            <div className="text-center w-full">
                <h1 className="text-3xl font-bold">Leaderboard Table</h1>
                <h2 className="mb-8 text-md">{session.user.class}, {session.user.school}</h2>
            </div>
            <Leaderboard leaderboardData={leaderboardData}/>                        
        </div>
      </>
    );
  }

const mockData: ILeaderboardData[] = [
  { name: "Sophia Bennett VERYVERYVERYVERYVERYVERYVERYVERYVERY LONGAME", gradientNum: 1, overallScore: '99' },
  { name: "Liam Harris ALSO VERYYYYYYYYYYYYYYYY LOOOOOOOOOOOOOOOOOOONG", gradientNum: 2, overallScore: '98' },
  { name: "Olivia Morgan", gradientNum: 3, overallScore: '97' },
  { name: "Noah Carter", gradientNum: 4, overallScore: '96' },
  { name: "Emma Foster", gradientNum: 5, overallScore: '95' },
  { name: "Mason Cooper", gradientNum: 6, overallScore: '94' },
  { name: "Ava Reed", gradientNum: 7, overallScore: '93' },
  { name: "Ethan Brooks", gradientNum: 8, overallScore: '92' },
  { name: "Isabella Gray", gradientNum: 9, overallScore: '91' },
  { name: "James Hughes", gradientNum: 0, overallScore: '89' },
  { name: "Mia Powell", gradientNum: 1, overallScore: '88' },
  { name: "Alexander Ward", gradientNum: 2, overallScore: '87' },
  { name: "Charlotte Ross", gradientNum: 3, overallScore: '86' },
  { name: "Benjamin Diaz", gradientNum: 4, overallScore: '85' },
  { name: "Amelia Hayes", gradientNum: 5, overallScore: '84' },
  { name: "Henry Long", gradientNum: 6, overallScore: '83' },
  { name: "Harper Simmons", gradientNum: 7, overallScore: '82' },
  { name: "Lucas Perry", gradientNum: 1, overallScore: '81' },
  { name: "Evelyn Butler", gradientNum: 1, overallScore: '79' },
  { name: "Michael Jenkins", gradientNum: 0, overallScore: '78' },
  { name: "Abigail Price", gradientNum: 1, overallScore: '77' },
  { name: "Daniel Barnes", gradientNum: 2, overallScore: '76' },
  { name: "Emily Rivera", gradientNum: 3, overallScore: '75' },
  { name: "Matthew Coleman", gradientNum: 4, overallScore: '74' },
  { name: "Elizabeth Ward", gradientNum: 5, overallScore: '73' }
];