import Link from "next/link";
import { IChapterCard } from "../utils/types"
import { gradientColors } from "../utils/gradients";

export const ChapterCard = ({chapterData, last_score}: IChapterCard) => {

    return(
        <Link href={`/signedin/${chapterData.chapter_number}`} className={"flex flex-col px-5 pt-5 h-32 sm:h-40 rounded-md relative " + gradientColors[chapterData.chapter_number-1]}>
            <div className="text-right mb-5 sm:text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{chapterData.chapter_arabic_name}</div>
            <div className="text-xs sm:text-lg">{chapterData.chapter_number+'. '+chapterData.chapter_name}</div>
            <div className="bg-gradient-to-t from-gray-200 to-gray-400 text-gray-800 font-mono w-full h-7 sm:h-10 absolute bottom-0 left-0 z-10 content-center pl-5 text-xs sm:text-lg rounded-b-md">SCORE {ScoreText(last_score)}</div>
        </Link>
    )
}

function ScoreText(score: number | undefined): JSX.Element {
    if (!score) return <span className="text-red-500 font-thin">n/a</span>
    const percentage = (100*score/12)
    const fontColour = percentage > 75 ? 'text-green-600' : percentage > 50 ? 'text-yellow-600' : 'text-red-600'
    return <span className={fontColour+' font-extrabold'}> {(100*score/12).toFixed(2)}% </span>
}

