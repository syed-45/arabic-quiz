import Quiz from "./Quiz"
import { INounsData, IVerbsData } from "../../utils/types"
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

export default async function ChapterQuiz(props: { params: Promise<IStaticParams> }) {
    const params = await props.params;
    const chapter_number = parseInt(params.chapter_number)

    const res = await fetch(`${process.env.API_URL}/api/get-vocab?chapter_number=${chapter_number}`)
    const data = await res.json()
    const verbs : IVerbsData[] = data.verbsData
    const nouns : INounsData[] = data.nounsData

    return (
        <>
            <Navbar/>
            <LogoHeader/>
            <Quiz verbs={verbs} nouns={nouns} chapter_number={chapter_number} />
        </>
    )
}