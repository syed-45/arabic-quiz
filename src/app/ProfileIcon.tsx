import { gradientColors } from "./utils/chapterGradientColours";
import { IProfileIconProps } from "./utils/types";

export default function ProfileIcon({gradientNum, onDashboard, name}: IProfileIconProps):JSX.Element {
    if (!name || gradientNum===undefined) return <></>
    const initials = name.split(' ').map((name) => name.slice(0,1).toUpperCase())
    return(
        <div className={`${onDashboard ? ' text-lg size-12' : ' text-4xl size-[135px]'} text-white flex justify-center items-center rounded-full ${gradientColors[gradientNum]}`} style={{textShadow:"rgba(0, 0, 0, 0.5) 2px 2px 4px"}}>
            {`${initials[0]}${initials[1]!==undefined ? initials[1] : ''}`}
        </div>
    )
}