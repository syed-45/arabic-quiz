import { IChapterData, IUserScores } from '../utils/types'
import { auth } from '../auth';
import { TitleCase } from '../utils/TitleCaseKata'
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar'
import Link from "next/link";
import { IChapterCard } from "../utils/types"
import { darkGradientColors, gradientColors } from "../utils/chapterGradientColours";

export default async function Dashboard() {
    let session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user data from session');

    const res = await fetch(`${process.env.API_URL}/api/get-chapter-names`, { next: { revalidate: false } })
    if (res.status === 500) throw new Error('Error fetching chapter data on the server')
    const data = await res.json()
    const allChapters: IChapterData[] = data.result.rows
    
    const res2 = await fetch(`${process.env.API_URL}/api/get-quiz-results?user-id=${session.user.id}`, { next: { tags: ['quiz-results'] } })
    if (res2.status === 500) throw new Error('Error fetching quiz data on the server')
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

const ChapterCard = ({chapterData, last_score}: IChapterCard) => {

    return(
        <Link href={`/dashboard/${chapterData.chapter_number}`} className={"flex flex-col px-3 pt-2 sm:px-5 sm:pt-5 h-32 sm:h-40 rounded-md relative text-white shadow-md" + gradientColors[chapterData.chapter_number-1] + darkGradientColors[chapterData.chapter_number-1] }>
            <div className="text-xs sm:text-lg font-semibold flex items-center gap-2">
                <div className="text-gray-200 backdrop-blur-xl shadow-xl size-8 rounded-md flex justify-center items-center">{chapterData.chapter_number}</div>
                {chapterData.chapter_name}
            </div>
            <div className="text-right mt-4 sm:text-2xl " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{chapterData.chapter_arabic_name}</div>
            <div className="bg-gradient-to-t from-white to-gray-200 dark:from-gray-200 dark:to-gray-300 text-gray-800 font-mono w-full h-7 sm:h-10 absolute bottom-0 left-0 z-10 content-center pl-3 text-xs sm:text-lg rounded-b-md">SCORE {ScoreText(last_score)}</div>
        </Link>
    )
}

function ScoreText(score: number | undefined): JSX.Element {
    if (score === undefined) return <span className="text-red-500 font-thin">n/a</span>
    const percentage = (100*score/12)
    const fontColour = percentage > 75 ? 'text-green-600' : percentage > 50 ? 'text-yellow-600' : 'text-red-600'
    return <span className={fontColour+' font-extrabold'}> {(100*score/12).toFixed(2)}% </span>
}

