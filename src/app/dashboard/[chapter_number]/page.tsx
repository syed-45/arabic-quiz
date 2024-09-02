import Quiz from "./Quiz"
import { INounsData, IVerbsData } from "../../utils/types"
import { auth } from "../../auth"
import LogoHeader from "@/app/LogoHeader";
import Navbar from "@/app/Navbar";
export const dynamicParams = false // true | false,

interface IStaticParams {
    chapter_number: string
}

export async function generateStaticParams() {
    const staticParams: IStaticParams[] = []
    for (let index = 0; index < 16; index++) {
        staticParams.push({
            chapter_number: [index + 1].toString()
        })
    }
    return staticParams
}

export default async function ChapterQuiz({ params }: { params: { chapter_number: string } }) {
    const chapter_number = parseInt(params.chapter_number)
    let session = await auth();
    if (!session) throw new Error('Unable to retrieve session')
    if (!session.user) throw new Error('Unable to retrieve user data from session')
    const user_id = session.user.id

    const res = await fetch(`${process.env.API_URL}/api/get-vocab?chapter_number=${chapter_number}`)
    const data = await res.json()
    const verbs : IVerbsData[] = data.verbsData
    const nouns : INounsData[] = data.nounsData
    
    return (
        <>
            <Navbar/>
            <LogoHeader/>
            <Quiz verbs={verbs} nouns={nouns} chapter_number={chapter_number} user_id={user_id}/>
        </>
    )

}