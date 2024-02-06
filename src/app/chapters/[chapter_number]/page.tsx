import Quiz from "@/app/components/Quiz"
import { INounsData, IQuestion, IVerbsData } from "@/app/utils/types"

export default async function ChapterQuiz({ params }: { params: { chapter_number: number } }) {
    if (params.chapter_number < 0 || params.chapter_number > 17) {
        // TODO: change above to && statment and swap if and else blocks
        return (
            <div className="text-center mx-5 border-2 border-green-700 rounded-md mt-10 py-5 max-w-3xl sm:mx-auto">
                <h1 className="text-2xl">Error 404</h1>
                <h3>Chapter not found</h3>
                <p>Chapter number must be between 1 and 16</p>
            </div>
        )
    }
    else {
        const res = await fetch(`${process.env.API_URL}/api/get-vocab?chapter_number=${params.chapter_number}`, {
            cache: "no-cache",
        })
        const data = await res.json()
        const verbs : IVerbsData[] = data.verbs.rows
        const nouns : INounsData[] = data.nouns.rows
        
        return (
            <>
                <h1 className="text-center mt-14 text-2xl">Arabic Quiz</h1>
                <h4 className="text-center">Based on Al Arabiyyah Bayna Yadayk Series</h4>
                <div className="text-center mx-5 border-2 border-green-700 rounded-md mt-10 py-5 max-w-3xl sm:mx-auto">
                    Need to generate quiz for chapter {params.chapter_number}
                </div>
                <Quiz verbs={verbs} nouns={nouns} />
            </>
        )
    }
}