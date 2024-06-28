import Quiz from "./Quiz"
import { INounsData, IQuestion, IVerbsData } from "../../utils/types"
import { auth } from "../../auth"

export default async function ChapterQuiz({ params }: { params: { chapter_number: string } }) {
    const chapter_number = parseInt(params.chapter_number)
    let session = await auth();
    let user_email = session!.user!.email as string 


    if (chapter_number > 2 && chapter_number < 17) {
        return (
            <>
                <h1 className="text-center mt-14 text-2xl">Arabic Quiz</h1>
                <h4 className="text-center">Based on Al Arabiyyah Bayna Yadayk Series</h4>
                <div className="text-center pt-10 text-yellow-300">This chapter is being worked on and not ready yet. <br></br> Available chapters are 1-2</div>
            </>
                   
        )
    }

    if (chapter_number > 0 && chapter_number < 17) {
        const res = await fetch(`${process.env.API_URL}/api/get-vocab?chapter_number=${chapter_number}`)
        const data = await res.json()
        const verbs : IVerbsData[] = data.verbs.rows
        const nouns : INounsData[] = data.nouns.rows
        
        return (
            <>
                <h1 className="text-center mt-14 text-2xl">Arabic Quiz</h1>
                <h4 className="text-center">Based on Al Arabiyyah Bayna Yadayk Series</h4>
                <Quiz verbs={verbs} nouns={nouns} chapter_number={chapter_number} user_email={user_email}/>
            </>
        )
    }
    else {
        return (
            <div className="text-center mx-5 border-2 border-green-700 rounded-md mt-10 py-5 max-w-3xl sm:mx-auto">
                <h1 className="text-2xl">Error 404</h1>
                <h3>Chapter not found</h3>
                <p>Chapter number must be between 1 and 16</p>
            </div>
        )
    }
}