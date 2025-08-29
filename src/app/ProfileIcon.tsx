"use client"
import { JSX } from "react";
import { gradientColors } from "./utils/chapterGradientColours";
import { IProfileIconProps } from "./utils/types";
import { usePathname } from "next/navigation";

export default function ProfileIcon({gradientNum, name}: IProfileIconProps):JSX.Element {
    const pathname = usePathname()
    type PathNamesToDisplayIcon = '/dashboard' | '/dashboard/profile' | '/dashboard/leaderboard'
    const classNames: Record<PathNamesToDisplayIcon,string> = {
        '/dashboard' : 'text-lg size-12 rounded-full',
        '/dashboard/profile' : 'text-4xl size-[125px] rounded-full',
        '/dashboard/leaderboard' : 'text-sm size-[28px] rounded-md mx-auto'
    }
    if (!Object.keys(classNames).includes(pathname)) return <></>
    if (!name || gradientNum===undefined) return <></>

    const initials = name.split(' ').map((name) => name.slice(0,1).toUpperCase()) //todo: move into utils, make better
    return(
        <div className={`${classNames[pathname as PathNamesToDisplayIcon]} text-white flex justify-center items-center ${gradientColors[gradientNum]}`} style={{textShadow:"rgba(0, 0, 0, 0.5) 2px 2px 4px"}}>
            {`${initials[0]}${initials[1]!==undefined ? initials[1] : ''}`}
        </div>
    )
}