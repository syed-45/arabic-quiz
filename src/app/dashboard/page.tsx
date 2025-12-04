import { IChapterData, IScoreTextProps, ITransformedQuizResultsData, IUserScore } from '../utils/types'
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar'
import Link from "next/link";
import { IChapterCardProps } from "../utils/types"
import { darkGradientColors, gradientColors } from "../utils/chapterGradientColours";
import { StatsComponent } from '../StatsComponent';
import { JSX, Suspense } from 'react';
import { cookies } from 'next/headers';
import { SessionProvider } from 'next-auth/react';
export const experimental_ppr = true

export default async function Dashboard() {

    const res = await fetch(`${process.env.API_URL}/api/get-chapter-names`, {
         next: { revalidate: false },
    })
    if (res.status === 500) throw new Error('Error fetching chapter data on the server')
    const allChapters: IChapterData[] = (await res.json()).result

    return (
        <>
            <SessionProvider>
                <Navbar/>
            </SessionProvider>
            <LogoHeader/>
            <Suspense fallback={<StatsFetchToComponentsFallback allChapters={allChapters}/>}>
                <StatsFetchToComponents allChapters={allChapters}/>           
            </Suspense>
        </>
    )
}

const StatsFetchToComponents = async ({allChapters}: {allChapters: IChapterData[]}) => {
    const res = await fetch(`${process.env.API_URL}/api/get-quiz-results`, { 
        next: { tags: ['quiz-results'] },
        headers: {
            Cookie: (await cookies()).toString()
        }
    })
    if (res.status === 500 || res.status === 401) throw new Error('Error fetching quiz data on the server')
    const quizResults: IUserScore[] = (await res.json()).result
    const quizzesCompleted: number = quizResults.length
    const averageScore = quizzesCompleted ? quizResults.reduce((acc, curr) => acc + curr.last_score / curr.no_of_questions, 0) / quizResults.length : 0
    const percentageScore = parseInt((100 * averageScore).toFixed(0))

    const transformedQuizResultsData = quizResults.reduce((acc: ITransformedQuizResultsData, curr) => {
        acc[curr.chapter_number] = { 
            last_score: curr.last_score, 
            no_of_questions: curr.no_of_questions 
        };
        return acc;
     }, {});

    return (
        <>
            <StatsComponent quizzesCompleted={quizzesCompleted} percentageScore={percentageScore}/>
            <main className='grid grid-cols-2 max-w-screen-lg mx-auto gap-4 mt-5 mb-12 px-5 pb-10'>                
                {allChapters.map((chapter) => {
                    const chapterIsAttempted = transformedQuizResultsData[chapter.chapterNumber] !== undefined
                    return (
                        <ChapterCard 
                            chapterData={chapter}
                            last_score={chapterIsAttempted ? transformedQuizResultsData[chapter.chapterNumber].last_score : undefined}
                            no_of_questions={chapterIsAttempted ? transformedQuizResultsData[chapter.chapterNumber].no_of_questions : undefined}
                            key={chapter.chapterName}
                        />
                    )
                })}
            </main>
        </>
    )
}

const StatsFetchToComponentsFallback = ({allChapters}: {allChapters: IChapterData[]}) => {
    return (
        <>
            <div className='grid grid-cols-2 pt-5 px-5 text-7xl sm:text-9xl sm:py-7 max-w-screen-sm mx-auto gap-x-5 gap-y-2'>
                <div className="text-transparent bg-gradient-to-bl from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-400 animate-pulse leading-[0.83] sm:leading-[0.79] w-[60px] sm:w-[130px] mx-auto rounded-md">16</div>
                <div className="text-transparent bg-gradient-to-bl from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-400 animate-pulse leading-[0.83] sm:leading-[0.79] w-[60px] sm:w-[130px] mx-auto rounded-md">16</div>
                <div className="text-xs sm:text-base text-center font-light">QUIZZES COMPLETED</div>
                <div className="text-xs sm:text-base text-center font-light">AVERAGE SCORE</div>
            </div>
            <main className='grid grid-cols-2 max-w-screen-lg mx-auto gap-4 mt-5 mb-12 px-5 pb-10'>                
                {allChapters.map((chapter) => {
                    return (
                        <div 
                            key={chapter.chapterName}
                            className={`h-32 sm:h-40 rounded-md shadow-md animate-pulse ${gradientColors[chapter.chapterNumber-1]} ${darkGradientColors[chapter.chapterNumber-1]}`}
                        >                        
                        </div>
                    )
                })}
            </main>
        </>
    )
}

const ChapterCard = ({chapterData, last_score, no_of_questions}: IChapterCardProps) => {
    return(
        <Link href={`/dashboard/${chapterData.chapterNumber}`} className={"flex flex-col px-3 pt-2 sm:px-5 sm:pt-5 h-32 sm:h-40 rounded-md relative text-white shadow-md" + gradientColors[chapterData.chapterNumber-1] + darkGradientColors[chapterData.chapterNumber-1] }>
            <div className="text-xs sm:text-lg font-semibold flex items-center gap-2">
                <div className="text-gray-200 backdrop-blur-xl shadow-xl size-8 rounded-md flex justify-center items-center">{chapterData.chapterNumber}</div>
                {chapterData.chapterName}
            </div>
            <div className="text-right mt-4 sm:text-2xl drop-shadow-[2px_1px_8px_black]">
                {chapterData.chapterArabicName}
            </div>
            <div className="bg-gradient-to-t from-white to-gray-200 dark:from-gray-200 dark:to-gray-300 text-gray-800 font-mono w-full h-7 sm:h-10 absolute bottom-0 left-0 z-10 content-center pl-3 text-xs sm:text-lg rounded-b-md">
                SCORE {<ScoreText last_score={last_score} no_of_questions={no_of_questions}/>}
            </div>
        </Link>
    )
}

function ScoreText({last_score, no_of_questions}: IScoreTextProps): JSX.Element {
    if (last_score === undefined || no_of_questions === undefined) {
        return <span className="text-red-500 font-thin">n/a</span>
    }
    const percentage = (100*last_score/no_of_questions)
    const fontColour = percentage > 75 ? 'text-green-600' : percentage > 50 ? 'text-yellow-600' : 'text-red-600'
    return <span className={fontColour+' font-extrabold'}> {percentage.toFixed(1)}% </span>
}

