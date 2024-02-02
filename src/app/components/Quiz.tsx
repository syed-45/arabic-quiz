'use client'
import { useState, useEffect } from "react"
import { IVerbsData, INounsData, IQuestion, QuizProps } from "../utils/types"
import generateRandomOption from "../utils/generateRandomOption"
import { spareNouns, spareVerbs } from "../utils/spareVocab"
import shuffleArray from "../utils/shuffleArray"

export default function Quiz(props: QuizProps):JSX.Element {
    const [verbs, setVerbs] = useState<IVerbsData[]>(props.verbs)
    const [nouns, setNouns] = useState<INounsData[]>(props.nouns)
    const [verbOrNoun, setVerbOrNoun] = useState<'verb' | 'noun'>(generateRandomOption(['verb', 'noun']))
    const [questionIsEnglish, setQuestionIsEnglish] = useState<boolean>(generateRandomOption([true, false]))
    const noOfQuestions = verbs.length + nouns.length > 12 ? 12 : verbs.length + nouns.length
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [question, setQuestion] = useState<IQuestion>({question: '', option1: '', option2: '', option3: '', answer_option4: '', user_answer: '', is_correct: false,})
    const shuffledOptions = shuffleArray(Object.entries(question).slice(1,5))

    useEffect(() => {
        let [questionWord, option1, option2, option3, answer_option4]: string[] = []

        if (verbOrNoun === 'verb' && verbs.length > 0) {
            if (questionIsEnglish) {
                const questionVerb: IVerbsData = generateRandomOption(verbs);
                questionWord = questionVerb.english
                answer_option4 = questionVerb.arabic_past
                if (verbs.length < 3) {
                   option1 = generateRandomOption(spareVerbs).arabic_past
                   option2 = generateRandomOption(spareVerbs.filter((verb) => verb.arabic_past !== option1)).arabic_past
                   option3 = generateRandomOption(spareVerbs.filter((verb) => verb.arabic_past !== option1 && verb.arabic_past !== option2)).arabic_past
                } else {
                    option1 = generateRandomOption(verbs.filter((verb) => verb.arabic_past !== answer_option4)).arabic_past
                    option2 = generateRandomOption(verbs.filter((verb) => verb.arabic_past !== answer_option4 && verb.arabic_past !== option1)).arabic_past
                    option3 = generateRandomOption(verbs.filter((verb) => verb.arabic_past !== answer_option4 && verb.arabic_past !== option1 && verb.arabic_past !== option2)).arabic_past
                }
                
            } else {
                const questionVerb: IVerbsData = generateRandomOption(verbs);
                questionWord = questionVerb.arabic_past
                answer_option4 = questionVerb.english
                if (verbs.length < 3) {
                    option1 = generateRandomOption(spareVerbs).english
                    option2 = generateRandomOption(spareVerbs.filter((verb) => verb.english !== option1)).english
                    option3 = generateRandomOption(spareVerbs.filter((verb) => verb.english !== option1 && verb.english !== option2)).english
                } else {
                    option1 = generateRandomOption(verbs.filter((verb) => verb.english !== answer_option4)).english
                    option2 = generateRandomOption(verbs.filter((verb) => verb.english !== answer_option4 && verb.english !== option1)).english
                    option3 = generateRandomOption(verbs.filter((verb) => verb.english !== answer_option4 && verb.english !== option1 && verb.english !== option2)).english
                }
            }
        } else if (verbOrNoun === 'noun' && nouns.length > 0) {
            if (questionIsEnglish) {
                const questionNoun: INounsData = generateRandomOption(nouns);
                questionWord = questionNoun.english
                answer_option4 = questionNoun.arabic
                if (nouns.length < 3) {
                    option1 = generateRandomOption(spareNouns).arabic
                    option2 = generateRandomOption(spareNouns.filter((noun) => noun.arabic !== option1)).arabic
                    option3 = generateRandomOption(spareNouns.filter((noun) => noun.arabic !== option1 && noun.arabic !== option2)).arabic
                } else {
                    option1 = generateRandomOption(nouns.filter((noun) => noun.arabic !== answer_option4)).arabic
                    option2 = generateRandomOption(nouns.filter((noun) => noun.arabic !== answer_option4 && noun.arabic !== option1)).arabic
                    option3 = generateRandomOption(nouns.filter((noun) => noun.arabic !== answer_option4 && noun.arabic !== option1 && noun.arabic !== option2)).arabic
                }
            } else {
                const questionNoun: INounsData = generateRandomOption(nouns);
                questionWord = questionNoun.arabic
                answer_option4 = questionNoun.english
                if (nouns.length < 3) {
                    option1 = generateRandomOption(spareNouns).english
                    option2 = generateRandomOption(spareNouns.filter((noun) => noun.english !== option1)).english
                    option3 = generateRandomOption(spareNouns.filter((noun) => noun.english !== option1 && noun.english !== option2)).english
                } else {
                    option1 = generateRandomOption(nouns.filter((noun) => noun.english !== answer_option4)).english
                    option2 = generateRandomOption(nouns.filter((noun) => noun.english !== answer_option4 && noun.english !== option1)).english
                    option3 = generateRandomOption(nouns.filter((noun) => noun.english !== answer_option4 && noun.english !== option1 && noun.english !== option2)).english
                }
            }
        }
        console.log(verbOrNoun)
        setQuestion({
            question: questionWord,
            option1: option1,
            option2: option2,
            option3: option3,
            answer_option4: answer_option4,
            user_answer: '',
            is_correct: false
        })

    }, [verbs, nouns, verbOrNoun, questionIsEnglish])    
    // e.g 2 verbs, 8 nouns or 10 verbs, 10 nouns
    // set verb or noun Rnadomly => verb
    // set question to random {verb}, then options to random verbs, if no more verbs then random nouns
    // setVerbs(verbs.filter(verb => verb !== question))
    // render question and options
    // user selects option
    // record user answer => question.user_answer
    // setQuestions(prevQuestions => [...prevQuestions, question])
    // repeat until 10 questions 

    const handleOptionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const user_answer = e.currentTarget.value
    }

    return (
        <main className='text-center mx-5 border-2 border-green-700 rounded-md mt-10 p-5 max-w-3xl sm:mx-auto'>
            <div className="mt-7 text-5xl">{question.question}</div>
            <div className="grid grid-cols-2 gap-0 mt-5">
                {shuffledOptions.map(([optionNum, option]) => {
                    return (
                        <button key={optionNum} onClick={handleOptionClick} value={option} className="bg-blue-500 h-32">{option}</button>
                    )
                })}

                {/* need a way to randomise which order the options appear */}
                
            </div>
                   
        </main>
    )
}