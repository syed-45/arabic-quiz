import { JSX } from "react";
import { gradientColors } from "./utils/chapterGradientColours";
import { IProfileIconProps } from "./utils/types";

export default function ProfileIcon({gradientNum, name, route, loading=false}: IProfileIconProps):JSX.Element {
    type RoutesToDisplayIcon = typeof route
    const classNames: Record<RoutesToDisplayIcon,string> = {
        '/dashboard' : 'text-lg size-12 rounded-full',
        '/dashboard/profile' : 'text-4xl size-[125px] rounded-full',
        '/dashboard/leaderboard' : 'text-sm size-[28px] rounded-md mx-auto'
    }
    if (!name || gradientNum===undefined) return <></>

    const initials = name.split(' ').map((name) => name.slice(0,1).toUpperCase()) //todo: move into utils, make better
    return(
        <div 
            className={`${classNames[route as RoutesToDisplayIcon]} flex justify-center items-center ${loading ? ' text-transparent animate-pulse bg-gradient-to-bl from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-400 ' : 'text-white ' + gradientColors[gradientNum]}`} 
            style={loading ? {} : {textShadow:"rgba(0, 0, 0, 0.5) 2px 2px 4px"}}
        >
            {`${initials[0]}${initials[1]!==undefined ? initials[1] : ''}`}
        </div>
    )
}
        
