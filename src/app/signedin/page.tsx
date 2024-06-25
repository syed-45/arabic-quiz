import { ChapterCard } from './ChapterCard'
import { IChapterData, IUserScores } from '../utils/types'
import { auth } from '../auth';
import Link from 'next/link';

export default async function SignedIn() {
    let session = await auth();

    const res = await fetch(`${process.env.API_URL}/api/get-chapter-names`)
    const data = await res.json()
    const allChapters: IChapterData[] = data.result.rows
    
    const res2 = await fetch(`${process.env.API_URL}/api/get-quiz-results?user-email=${session?.user?.email}`)
    const quizResults: IUserScores[] = await res2.json()
    const quizzesCompleted: number = quizResults.length
    const averageScore = quizzesCompleted ? quizResults.reduce((acc, curr) => acc + curr.last_score, 0) / quizResults.length : 0
    const percentageScore = quizzesCompleted && (100 * averageScore / 12).toFixed(2)
    
    return (
        <>
            <Link href="/signedin/profile" className='flex justify-end'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="65px"
                    viewBox="0 -960 960 960"
                    width="65px"
                    fill="#e8eaed"
                    className='mr-7 mt-7'
                >
                    <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                </svg>
            </Link>
            <h1 className="text-center mt-2 text-2xl">Arabic Quiz</h1>
            <h4 className="text-center">Based on Al Arabiyyah Bayna Yadayk Series</h4>
            <h3 className="text-center mt-8">Welcome back, {session?.user?.name}</h3>
            <div className="text-center h-16 mx-5 border-2 border-green-800 rounded-md mt-2 max-w-3xl sm:mx-auto relative flex justify-center items-center">
                <div className={`h-full bg-gradient-to-r from-green-400 to-green-800 rounded z-[-1] absolute left-0`} style={{width: (100*quizzesCompleted/16)+'%'}}></div>
                <span className=''>Quizzes completed: {quizzesCompleted+' / 16'}</span>
            </div>
            <div className="text-center mx-5 border-2 border-blue-400 rounded-md mt-5 h-16 content-center max-w-3xl sm:mx-auto">
                Average score: {percentageScore+'%'}
            </div>
            <main className='grid grid-cols-2 sm:grid-cols-2 gap-4 mt-10 px-5'>
                {allChapters.map((chapter,index) => (
                    <ChapterCard 
                        chapterData={chapter}
                        last_score={quizResults[index] ? quizResults[index].last_score : undefined}
                        key={chapter.chapter_number} 
                    />
                ))}
            </main>
        </>
    )
}