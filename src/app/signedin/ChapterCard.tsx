import Link from "next/link";
import { IChapterCard } from "../utils/types"
import { darkGradientColors, gradientColors } from "../utils/chapterGradientColours";

export const ChapterCard = ({chapterData, last_score}: IChapterCard) => {
    

    return(
        <Link href={`/signedin/${chapterData.chapter_number}`} className={"flex flex-col px-3 pt-2 sm:px-5 sm:pt-5 h-32 sm:h-40 rounded-md relative text-white shadow-md" + gradientColors[chapterData.chapter_number-1] + darkGradientColors[chapterData.chapter_number-1] }>
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

