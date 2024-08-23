'use client'
import { useEffect, useState } from "react"
import { StatsComponentProps } from "./utils/types"

export const StatsComponent = ({quizzesCompleted, percentageScore}: StatsComponentProps): JSX.Element => {
    const [quizzesCompletedDisplay, setQuizzesCompletedDisplay] = useState(0)
    const [percentageScoreDisplay, setPercentageScoreDisplay] = useState(0)

    useEffect(() => {

        const incrementPercentageScoreDisplay = percentageScore && setInterval(() => {
            setPercentageScoreDisplay(prev => {
                if (prev === percentageScore - 1) {
                    clearInterval(incrementPercentageScoreDisplay)
                }
                return prev + 1
            })
        }, percentageScore < 20 ? 100 : 50)

        const incrementQuizzesCompletedDisplay = quizzesCompleted && setInterval(() => {
            setQuizzesCompletedDisplay(prev => {
                if (prev === quizzesCompleted - 1) {
                    clearInterval(incrementQuizzesCompletedDisplay)
                }
                return prev + 1
            })
        }, quizzesCompleted < 10 ? 150 : 100)

    }, [percentageScore, quizzesCompleted])

    return (
        <div className="grid grid-cols-2 pt-5 px-5 text-7xl sm:text-9xl sm:py-7 max-w-screen-sm mx-auto gap-x-5 gap-y-2">
            <div className="flex items-end justify-center">
                <span className={`bg-gradient-to-r ${quizzesCompletedDisplay===quizzesCompleted ? "animate-moving-gradient-bg bg-[length:400%_400%] from-sky-400  via-sky-700 dark:via-sky-200 dark:to-sky-400 to-sky-400" : "from-sky-200 to-sky-500"} bg-clip-text drop-shadow-md text-transparent leading-[0.83] sm:leading-[0.79]`}>
                     {quizzesCompletedDisplay} 
                </span>
                {quizzesCompletedDisplay===quizzesCompleted && <span className="text-xs animate-fade-out">/ 16</span>}
            </div>
            <div className="flex items-end justify-center">
                <span className={`bg-gradient-to-r ${percentageScoreDisplay===percentageScore ? "animate-moving-gradient-bg bg-[length:400%_400%] from-green-400 via-green-600 dark:via-green-200 dark:to-green-400 to-green-400" : "from-green-200 to-green-600"} bg-clip-text drop-shadow-md text-transparent leading-[0.83] sm:leading-[0.79]`}>
                    {percentageScoreDisplay} 
                </span>
                {percentageScoreDisplay===percentageScore && <span className="text-xs animate-fade-out">%</span>}
            </div>
            <div className="text-xs sm:text-base text-center font-light">QUIZZES COMPLETED</div>
            <div className="text-xs sm:text-base text-center font-light">AVERAGE SCORE</div>
        </div>
    )
}