'use client'
import { useEffect, useState } from "react"
import { StatsComponentProps } from "./utils/types"

export const StatsComponent = ({quizzesCompleted, percentageScore}: StatsComponentProps): JSX.Element => {
    const [quizzesCompletedDisplay, setQuizzesCompletedDisplay] = useState(0)
    const [percentageScoreDisplay, setPercentageScoreDisplay] = useState(0)

    useEffect(()=>{
        const lowerStat = quizzesCompleted > percentageScore ? percentageScore : quizzesCompleted

        const firstInterval = setInterval(incrementStatDisplay, 100)

        function incrementStatDisplay() {
            setPercentageScoreDisplay(prev => {
                    if (prev === percentageScore) return prev
                    return prev + 1
                })
            setQuizzesCompletedDisplay(prev => {
                if (prev === quizzesCompleted) return prev
                    return prev + 1
            })
        }

        if (lowerStat === quizzesCompleted && percentageScoreDisplay === percentageScore) clearInterval(firstInterval)
        else if (lowerStat === percentageScore && quizzesCompletedDisplay === quizzesCompleted) clearInterval(firstInterval)


    },[])

    return (
        <div className="grid grid-cols-2 pt-5 px-5 text-5xl sm:text-9xl sm:py-10 max-w-screen-sm mx-auto gap-5">
            <div className="flex items-end justify-center">
                <span className="text-xs sm:text-base font-thin mr-2">QUIZZES <br></br> COMPLETED</span>
                <span className="bg-gradient-to-tr from-sky-100 via-sky-500 to-sky-900 bg-clip-text text-transparent"> {quizzesCompletedDisplay} </span>
                <span className="text-xs">/ 16</span>
            </div>
            <div className="flex items-end justify-center">
                <span className="text-xs sm:text-base font-thin mr-2">AVERAGE <br></br> SCORE</span>
                <span className="bg-gradient-to-tr from-green-100 to-green-600 bg-clip-text text-transparent"> {percentageScoreDisplay} </span>
                <span className="text-xs">%</span>
            </div>
        </div>
    )
}