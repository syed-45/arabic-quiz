import { useState } from "react"
import { FinishProps, IQuestion } from "../../utils/types"
import { ChevronDownIcon, CheckIcon, XMarkIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
const optionButtonStyles = ['border ','border-y border-r ','border-x border-b ','border-r border-b ']
const optionRoundedCornerStyles = ['','','rounded-bl-md','rounded-br-md']

export const Finish = ({questions,noOfQuestions}: FinishProps):JSX.Element => {
    const [openedQuestionNum, setOpenedQuestionNum] = useState<number | undefined>()
    const noOfCorrectAnswers = questions.filter(question => question.is_correct).length

    const handleQuestionClick = (questionNum: number):void => {
       if (questionNum === openedQuestionNum) {
           setOpenedQuestionNum(-1)
       } else {
           setOpenedQuestionNum(questionNum)
       }
    }

    return (
        <>
            <h3 className="text-center mt-10">Quiz complete</h3>
            <p className="text-center">You scored {noOfCorrectAnswers} out of {noOfQuestions}</p>
            <main className="mx-auto px-5 mt-7 max-w-screen-lg flex flex-col items-center gap-5 w-full pb-10">
                {questions.slice(1,noOfQuestions+1).map((question: IQuestion, index: number):JSX.Element => {
                    const questionNo = index + 1
                    const chevronClass = openedQuestionNum !== undefined ? "animate-fade-out" : ""
                    return (
                        <div key={questionNo} className="w-full">
                            <button onClick={() => handleQuestionClick(questionNo)} key={questionNo} className={`py-4 px-6 flex justify-between items-center w-full rounded-lg shadow-lg bg-gradient-to-tr from-white border-2 dark:bg-gradient-to-t dark:from-sky-950 dark:to-transparent dark:border-2 ${question.is_correct ? " border-green-500 dark:border-green-800" : " border-red-500 dark:border-red-800"}`}>
                                {question.is_correct ? <CheckIcon className="size-4 text-green-400"/> : <XMarkIcon className="size-4 text-red-400"/>}
                                <h3 className="text-center flex-grow"> {questionNo}  </h3>
                                <div className={`ml-auto mr-1 size-4`}>
                                    {questionNo === openedQuestionNum ? <ChevronUpIcon className={chevronClass} key={question.question}/> : <ChevronDownIcon className={chevronClass} key={question.user_answer}/>}
                                </div>
                            </button>
                            {questionNo === openedQuestionNum && 
                            <div className="text-center" >
                                <div className={`h-[116px] content-center animate-slide-down ${question.question.length > 20 ? "text-xl" : "text-2xl"}`}>{question.question}</div>
                                <div className="grid grid-cols-2 gap-0 bg-gradient-to-bl text-white from-sky-950 via-sky-500 via-70% to-sky-200 dark:from-sky-800 dark:to-transparent w-full text-lg sm:text-xl animate-slide-down rounded-b-[0.4rem] leading-none">
                                    {question.options.map((option,index):JSX.Element => {
                                        const { bgColour, optionHighlight } = determineOptionType(question.user_answer,question.answer,option)                             
                                        return (
                                            <div
                                                key={option}
                                                autoFocus={index===3}
                                                className={`h-32 px-3 content-center relative shadow-xl ${bgColour} ${optionRoundedCornerStyles[index]} ${(optionHighlight !== "highlightNone") ?  "border" : "border-sky-900 " + optionButtonStyles[index]} `}
                                            >
                                                {(optionHighlight === "highlightCorrectAnswer" || optionHighlight === "highlightUserIsCorrect") && <CheckIcon className="text-[#ffffff8f] size-7 sm:size-9 absolute top-3 left-3 sm:left-5 stroke-2"/> /*Heroicons issue: path not inheriting stroke-line-cap*/} 
                                                {optionHighlight === "highlightWrongAnswer" && <XMarkIcon className="text-[#ffffff8f] size-7 sm:size-9 absolute top-3 left-3 sm:left-5 stroke-2" /> }
                                                {option}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            }
                        </div>
                    )
                })}
                <Link href={'/dashboard'} className="bg-gradient-to-bl from-white font-bold text-sky-800 dark:text-white dark:from-sky-800 p-2 w-32 rounded-md drop-shadow-xl text-center mt-5">
                    Dashboard 
                </Link>
            </main>
        </>
    )
}

function determineOptionType(user_answer: string, answer: string, option: string,): { optionHighlight: keyof IBgColours, bgColour: string} {

    const bgColours: IBgColours = {
        highlightUserIsCorrect : " bg-green-700/65 dark:bg-green-500/40",
        highlightWrongAnswer : "bg-red-600/60 dark:bg-red-500/40",
        highlightCorrectAnswer : "bg-orange-600/60 dark:bg-orange-500/40",
        highlightNone :  "",
    }

    let optionHighlight: keyof IBgColours

    if (option === answer && answer === user_answer) {
        optionHighlight = "highlightUserIsCorrect"
    } else if (option === answer) {
        optionHighlight = "highlightCorrectAnswer"
    } else if (option === user_answer)  {
       optionHighlight = "highlightWrongAnswer" 
    } else {
        optionHighlight ="highlightNone"
    }

    return {
        optionHighlight : optionHighlight,
        bgColour: bgColours[optionHighlight]
    }
}

interface IBgColours {
    highlightWrongAnswer : string,
    highlightUserIsCorrect : string,
    highlightCorrectAnswer : string,
    highlightNone : string
}