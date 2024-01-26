
import { ChapterCard } from '../ChapterCard'
import { IChapterData } from '../types'

export default async function SignedIn() {
    
    const quizzesCompleted = 0
    const averageScore = 0
    // const res = await fetch(`${process.env.API_URL}/api/get-chapter-names`)
    // const data = await res.json()
    // const allChapters: IChapterData[] = data.result.rows

    return (
        <>
            <h1 className="text-center mt-14 text-2xl">Arabic Quiz</h1>
            <h4 className="text-center">Based on Al Arabiyyah Bayna Yadayk Series</h4>
            <div className="text-center mx-5 border-2 border-green-700 rounded-md mt-10 py-5 max-w-3xl sm:mx-auto">
                Quizzes completed: {quizzesCompleted+' / 16'}
            </div>
            <div className="text-center mx-5 border-2 border-green-700 rounded-md mt-5 py-5 max-w-3xl sm:mx-auto">
                Average score: {averageScore+'%'}
            </div>
            <main className='grid grid-cols-2 gap-4 mt-10 px-5'>
                {/* {allChapters.map((chapter) => (
                    <ChapterCard {...chapter} key={chapter.chapter_number} />
                ))} */}
            </main>
        </>
    )
}