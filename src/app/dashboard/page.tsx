import { IChapterData, IScoreTextProps, ITransformedQuizResultsData, IUserScore } from '../utils/types'
import { auth } from '../auth';
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar'
import Link from "next/link";
import { IChapterCardProps } from "../utils/types"
import { darkGradientColors, gradientColors } from "../utils/chapterGradientColours";
import { StatsComponent } from '../StatsComponent';

export default async function Dashboard() {
    // let timeBefore = Date.now()
    const session = await auth();
    // let timeElapsed = Date.now() - timeBefore
    //console.log(timeEnd('fetch session'))
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user from session');
    if (!session.user.id) throw new Error('Unable to retrieve user data from session');
    const gradientNum = session.user.gradientNum

    const res = await fetch(`${process.env.API_URL}/api/get-chapter-names`, { next: { revalidate: false } })
    //todo: promise.all the two fetches...
    if (res.status === 500) throw new Error('Error fetching chapter data on the server')
    const allChapters: IChapterData[] = (await res.json()).result
    
    const res2 = await fetch(`${process.env.API_URL}/api/get-quiz-results?user-id=${session.user.id}`, { next: { tags: ['quiz-results'] } })
    if (res2.status === 500) throw new Error('Error fetching quiz data on the server')
    const quizResults: IUserScore[] = (await res2.json()).result
    const quizzesCompleted: number = quizResults.length
    const transformedQuizResultsData = quizResults.reduce((acc: ITransformedQuizResultsData, curr) => {
         acc[curr.chapter_number] = { 
           last_score: curr.last_score, 
           no_of_questions: curr.no_of_questions 
         };
         return acc;
     }, {});

    const averageScore = quizzesCompleted ? quizResults.reduce((acc, curr) => acc + curr.last_score / curr.no_of_questions, 0) / quizResults.length : 0
    const percentageScore = parseInt((100 * averageScore).toFixed(0))
    
    return (
        <>
            <Navbar onDashboard={true} name={session.user.name || 'Z'} gradientNum={gradientNum}/>
            <LogoHeader/>
            <StatsComponent quizzesCompleted={quizzesCompleted} percentageScore={percentageScore}/>
            <main className='grid grid-cols-2 max-w-screen-lg mx-auto gap-4 mt-5 mb-12 px-5 pb-10'>
                {allChapters.map((chapter) => {
                    const chapterIsAttempted = transformedQuizResultsData[chapter.chapterNumber] !== undefined
                    return (<ChapterCard 
                        chapterData={chapter}
                        last_score={chapterIsAttempted ? transformedQuizResultsData[chapter.chapterNumber].last_score : undefined}
                        no_of_questions={chapterIsAttempted ? transformedQuizResultsData[chapter.chapterNumber].no_of_questions : undefined}
                        key={chapter.chapterNumber} 
                    />)
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
            <div className="text-right mt-4 sm:text-2xl drop-shadow-[2px_1px_8px_black]">{chapterData.chapterArabicName}</div>
            <div className="bg-gradient-to-t from-white to-gray-200 dark:from-gray-200 dark:to-gray-300 text-gray-800 font-mono w-full h-7 sm:h-10 absolute bottom-0 left-0 z-10 content-center pl-3 text-xs sm:text-lg rounded-b-md">SCORE {<ScoreText last_score={last_score} no_of_questions={no_of_questions}/>}</div>
        </Link>
    )
}

function ScoreText({last_score, no_of_questions}: IScoreTextProps): JSX.Element {
    if (last_score === undefined || no_of_questions === undefined) {
        return <span className="text-red-500 font-thin">n/a</span>
    }
    const percentage = (100*last_score/no_of_questions)
    const fontColour = percentage > 75 ? 'text-green-600' : percentage > 50 ? 'text-yellow-600' : 'text-red-600'
    return <span className={fontColour+' font-extrabold'}> {percentage.toFixed(2)}% </span>
}

