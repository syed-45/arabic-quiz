import Link from "next/link";
import { IChapterData } from "./types"

export const ChapterCard = (chapterData: IChapterData) => {

    const gradients = [
        'bg-gradient-to-bl from-rose-800 to-rose-500',
        'bg-gradient-to-bl from-pink-800 to-pink-500',
        'bg-gradient-to-bl from-fuchsia-800 to-fuchsia-500',
        'bg-gradient-to-bl from-purple-800 to-purple-500',
        'bg-gradient-to-bl from-violet-800 to-violet-500',
        'bg-gradient-to-bl from-indigo-800 to-indigo-500',
        'bg-gradient-to-bl from-blue-800 to-blue-500',
        'bg-gradient-to-bl from-cyan-800 to-cyan-500',
        'bg-gradient-to-bl from-teal-800 to-teal-500',
        'bg-gradient-to-bl from-emerald-800 to-emerald-500',
        'bg-gradient-to-bl from-green-800 to-green-500',
        'bg-gradient-to-bl from-lime-800 to-lime-500',
        'bg-gradient-to-bl from-yellow-800 to-yellow-500',
        'bg-gradient-to-bl from-amber-800 to-amber-500',
        'bg-gradient-to-bl from-orange-800 to-orange-500',
        'bg-gradient-to-bl from-red-800 to-red-500',
    ].reverse();

    return(
        <Link href={`/chapters/${chapterData.chapter_number}`} className={"flex flex-col px-5 py-5 rounded-md " + gradients[chapterData.chapter_number-1]}>
            <div className="text-right mb-5 sm:text-xl">{chapterData.chapter_arabic_name}</div>
            <div className="text-xs sm:text-lg">{chapterData.chapter_number+'. '+chapterData.chapter_name}</div>
        </Link>
    )

}

