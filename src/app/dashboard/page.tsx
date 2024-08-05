import { IChapterData, IUserScores } from '../utils/types'
import { auth } from '../auth';
import LogoHeader from '../LogoHeader';
import Navbar from '../Navbar'
import Link from "next/link";
import { IChapterCardProps } from "../utils/types"
import { darkGradientColors, gradientColors } from "../utils/chapterGradientColours";
import { StatsComponent } from '../StatsComponent';

export default async function Dashboard() {
    let session = await auth();
    if (!session) throw new Error('Unable to retrieve session');
    if (!session.user) throw new Error('Unable to retrieve user data from session');

    const res = await fetch(`${process.env.API_URL}/api/get-chapter-names`, { next: { revalidate: false } })
    if (res.status === 500) throw new Error('Error fetching chapter data on the server')
    const allChapters: IChapterData[] = (await res.json()).result
    
    const res2 = await fetch(`${process.env.API_URL}/api/get-quiz-results?user-id=${session.user.id}`, { next: { tags: ['quiz-results'] } })
    if (res2.status === 500) throw new Error('Error fetching quiz data on the server')
    const quizResults: IUserScores[] = (await res2.json()).result
    const quizzesCompleted: number = quizResults.length
    const averageScore = quizzesCompleted ? quizResults.reduce((acc, curr) => acc + curr.last_score, 0) / quizResults.length : 0
    const percentageScore = parseInt((100 * averageScore / 12).toFixed(0))
    
    return (
        <>
            <Navbar/>
            <LogoHeader/>
            <StatsComponent quizzesCompleted={quizzesCompleted} percentageScore={percentageScore}/>
            <main className='grid grid-cols-2 max-w-screen-lg mx-auto gap-4 mt-5 mb-12 px-5 pb-10'>
                {allChapters.map((chapter,index) => (
                    <ChapterCard 
                        chapterData={chapter}
                        last_score={quizResults[index] ? quizResults[index].last_score : undefined}
                        key={chapter.chapterNumber} 
                    />
                ))}
            </main>
        </>
    )
}

const ChapterCard = ({chapterData, last_score}: IChapterCardProps) => {

    return(
        <Link href={`/dashboard/${chapterData.chapterNumber}`} className={"flex flex-col px-3 pt-2 sm:px-5 sm:pt-5 h-32 sm:h-40 rounded-md relative text-white shadow-md" + gradientColors[chapterData.chapterNumber-1] + darkGradientColors[chapterData.chapterNumber-1] }>
            <div className="text-xs sm:text-lg font-semibold flex items-center gap-2">
                <div className="text-gray-200 backdrop-blur-xl shadow-xl size-8 rounded-md flex justify-center items-center">{chapterData.chapterNumber}</div>
                {chapterData.chapterName}
            </div>
            <div className="text-right mt-4 sm:text-2xl " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{chapterData.chapterArabicName}</div>
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

