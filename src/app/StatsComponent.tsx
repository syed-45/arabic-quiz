export const StatsComponent = (): JSX.Element => {
    return (
        <div className="grid grid-cols-2 pt-5 px-5 text-6xl sm:text-9xl sm:py-10 max-w-screen-sm mx-auto">
            <div className="flex items-end justify-center">
                <span className="text-xs sm:text-base font-thin">QUIZZES <br></br> COMPLETED</span>
                <span className="bg-gradient-to-tr from-sky-100 via-sky-500 to-sky-900 bg-clip-text text-transparent"> {16} </span>
                <span className="text-base">/ 16</span>
            </div>
            <div className="flex items-end justify-center">
                <span className="text-xs sm:text-base font-thin mr-2">AVERAGE <br></br> SCORE</span>
                <span className="bg-gradient-to-tr from-green-100 to-green-600 bg-clip-text text-transparent"> {80} </span>
                <span className="text-base">%</span>
            </div>
        </div>
    )
}