import { ChapterCard } from './ChapterCard'
import { IChapterData, IUserScores } from '../utils/types'
import { auth } from '../auth';
import { TitleCase } from '../utils/TitleCaseKata'
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar'

export default async function Dashboard() {
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
            <Navbar/>
            <LogoHeader/>
            <h3 className="text-center mt-8">Welcome back <span className='font-bold'>{TitleCase(session?.user?.name!, true)}</span></h3>
            {/*TODO: change stats to HUGE numbers that count up on LOAD */}
            <div className="text-center h-12 mx-5 border-2 dark:border-green-800 border-green-600 rounded-md mt-3 max-w-md min-[448px]:mx-auto relative flex justify-center items-center">
                <div className={`h-full bg-gradient-to-r from-green-300 to-green-500 dark:from-green-500 dark:to-green-800  rounded z-[-1] absolute left-0`} style={{width: (100*quizzesCompleted/16)+'%'}}></div>
                <span className=''>🎯 Quizzes Completed {quizzesCompleted+' / 16'}</span>
            </div>
            <div className="text-center mx-5 border-2 border-blue-400 dark:border-blue-800 rounded-md mt-3 h-12 content-center max-w-md min-[448px]:mx-auto">
                Average score {percentageScore+'%'}
            </div>
            <main className='grid grid-cols-2 max-w-screen-lg mx-auto gap-4 mt-5 mb-12 px-5 pb-10'>
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