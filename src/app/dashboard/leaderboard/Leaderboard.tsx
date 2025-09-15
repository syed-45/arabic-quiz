'use client'

import { ILeaderboardData } from "@/app/utils/types";
import ProfileIcon from "@/app/ProfileIcon";
import { JSX, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ILeaderboardProps {
    leaderboardData: ILeaderboardData[]
}

interface IRowPositions {
    rowStartPosition: number;
    rowEndPosition: number;
}

export function Leaderboard({leaderboardData}: ILeaderboardProps):JSX.Element {
    const noOfStudents = leaderboardData.length
    const isMoreThanTenStudents = noOfStudents > 10
    const [rowPositions, setRowPositions] = useState<IRowPositions>({
        rowStartPosition: 0,
        rowEndPosition: isMoreThanTenStudents ? 10 : noOfStudents
    })

    const showMore = ():void => setRowPositions((prev) => ({
        rowStartPosition: prev.rowStartPosition + 10,
        rowEndPosition: prev.rowEndPosition + 10 > noOfStudents ? noOfStudents : prev.rowEndPosition + 10
    }))

    const showPrev = ():void => setRowPositions((prev) => {
        const newRowEndPosition = prev.rowStartPosition - 10 < 0 ? 0 : prev.rowStartPosition - 10
        return {
            rowStartPosition: newRowEndPosition,
            rowEndPosition: newRowEndPosition + 10
        }
    })
    

    return(
        <>
            <div className="grid place-items-start w-full">
                <div className="row-span-full col-span-full w-full rounded-t-[2.5rem] z-0 bg-gradient-to-b from-sky-400/20  dark:from-sky-950/80 border-t border-x border-sky-600 dark:border-sky-900 h-[640px] "></div>
                <table className="row-span-full col-span-full w-full rounded-t-[2.5rem] z-10 bg-transparent text-gray-950 dark:text-white text-center text-sm sm:text-base table-fixed">
                    <thead className="border-b border-sky-600 dark:border-sky-900 font-bold mb-14">
                        <tr className="h-[60px]">
                            <th className="w-1/6">No.</th>
                            <th className="w-3/6" colSpan={5}>Name</th>
                            <th className="w-2/6">Overall Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData[0] === undefined ? 
                            <tr className="h-16">
                                <td colSpan={7}>No scores recorded yet for this class...</td>
                            </tr> //todo show users with 0 score instead
                            :
                        leaderboardData.slice(rowPositions.rowStartPosition,rowPositions.rowEndPosition).map((student, idx) => {
                            if (!student.name || !student.overallScore) return <></>
                            const animationStyle = {
                                animation: 'puff-in-center 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both',
                                animationDelay: `${rowPositions.rowStartPosition < 10 ? idx * 300 : idx * 125}ms`,
                            };
                            return (
                                <tr key={idx + 1 + rowPositions.rowStartPosition} className={`${idx!==9 && 'border-b'} border-sky-600 dark:border-sky-900 h-[58px]`} style={animationStyle}>
                                    <td className="font-bold">
                                        {idx + 1 + rowPositions.rowStartPosition}
                                    </td>
                                    <td className="">
                                        <ProfileIcon 
                                            gradientNum={student.gradientNum} 
                                            name={student.name}
                                            route='/dashboard/leaderboard'
                                        />
                                    </td> 
                                    <td className={``} colSpan={4}>
                                        {student.name.length > 25 ? student.name.slice(0,25) + '...' : student.name }
                                    </td>
                                    <td className="">
                                        {parseInt(student.overallScore)*150}
                                    </td>
                                </tr>
                            )})                                
                        }
                    </tbody>
                </table>    
            </div>
            {isMoreThanTenStudents && 
            <div className="flex justify-center items-center py-7 gap-6">
                {rowPositions.rowStartPosition > 0 && <button onClick={showPrev}> <ChevronLeftIcon className="size-5 inline-block"/> Show previous </button> }
                {rowPositions.rowStartPosition % 10 === 0 && noOfStudents > rowPositions.rowEndPosition && <button onClick={showMore}>Show more <ChevronRightIcon className="size-5 inline-block"/></button> }
            </div>}
        </>
    )
}