import { ChapterCard } from './ChapterCard'
import { IChapterData, IUserScores } from '../utils/types'
import { auth } from '../auth';
import Link from 'next/link';
import { TitleCase } from '../utils/TitleCaseKata'
import LogoHeader from '../LogoHeader';


//TODO: add nav menu 
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16 mt-7 mr-7 text-black dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </Link>
            <LogoHeader/>
            <h3 className="text-center mt-8">Welcome back {TitleCase(session?.user?.name!)}</h3>
            <div className="text-center h-12 mx-5 border-2 dark:border-green-800 border-green-600 rounded-md mt-3 max-w-md min-[448px]:mx-auto relative flex justify-center items-center">
                <div className={`h-full bg-gradient-to-r from-green-300 to-green-500 dark:from-green-500 dark:to-green-800  rounded z-[-1] absolute left-0`} style={{width: (100*quizzesCompleted/16)+'%'}}></div>
                <span className=''>Quizzes completed: {quizzesCompleted+' / 16'}</span>
            </div>
            <div className="text-center mx-5 border-2 border-blue-400 dark:border-blue-800 rounded-md mt-3 h-12 content-center max-w-md min-[448px]:mx-auto">
                Average score: {percentageScore+'%'}
            </div>
            <main className='grid grid-cols-2 max-w-screen-lg mx-auto gap-4 mt-5 mb-12 px-5'>
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