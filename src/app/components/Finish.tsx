import { useState } from "react"
import { FinishProps, IQuestion } from "../utils/types"

export const Finish = ({questions,noOfQuestions}: FinishProps):JSX.Element => {
    const [openedQuestionNum, setOpenedQuestionNum] = useState<number | undefined>()

    const handleQuestionClick = (questionNum: number):void => {
       if (questionNum === openedQuestionNum) {
           setOpenedQuestionNum(undefined)
       } else {
           setOpenedQuestionNum(questionNum)
       }
    }

    return (
        <main className="text-center mx-5 mt-6 p-5 max-w-3xl sm:mx-auto">
                <h1>Quiz complete</h1>
                <h2>You scored {questions.filter(question => question.is_correct).length} out of {noOfQuestions}</h2>
                {questions.slice(1,noOfQuestions+1).map((question: IQuestion, index: number):JSX.Element => {
                    const questionNo = index + 1
                    return (
                        <>
                            <div className="mt-12 py-3 bg-slate-600 flex justify-between items-center">
                                <h3 className="text-center flex-grow">Question: {questionNo} {question.question}</h3>
                                <button className="ml-auto" onClick={() => handleQuestionClick(questionNo)}>View</button>
                            </div>
                            <div className={questionNo === openedQuestionNum ?  "grid grid-cols-2 gap-0" : "hidden" }>
                                {question.options.map((option:string):JSX.Element => {
                                    return (
                                        <div key={option} >
                                            <div
                                                className={"h-32" + (option === question.answer ? " bg-green-400" : option === question.user_answer ? " bg-slate-300" : " bg-blue-500")}
                                            >
                                                {option}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}
        </main>
    )
}
