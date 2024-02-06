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
    const [questions, setQuestions] = useState<IQuestion[]>([{question: '', options:[], answer:'', user_answer: 'foo', is_correct: false,}])
    const [questionNum, setQuestionNum] = useState<number>(0)
    const currentQuestion = questions[questionNum]

    useEffect(() => {
        let [questionWord, option1, option2, option3, answer_option4]: string[] = []

        if (verbOrNoun === 'verb' && verbs.length > 0) {
                const questionVerb: IVerbsData = generateRandomOption(verbs);
                questionWord = questionVerb[questionIsEnglish ? 'english' : 'arabic_past']
                answer_option4 = questionVerb[questionIsEnglish ? 'arabic_past' : 'english']
                   option1 = generateRandomOption((verbs.length < 3 ? spareVerbs : verbs))[questionIsEnglish ? 'arabic_past' : 'english']
                   option2 = generateRandomOption((verbs.length < 3 ? spareVerbs : verbs).filter((verb) => verb[questionIsEnglish ? 'arabic_past' : 'english'] !== option1))[questionIsEnglish ? 'arabic_past' : 'english']
                   option3 = generateRandomOption((verbs.length < 3 ? spareVerbs : verbs).filter((verb) => verb[questionIsEnglish ? 'arabic_past' : 'english'] !== option1 && verb[questionIsEnglish ? 'arabic_past' : 'english'] !== option2))[questionIsEnglish ? 'arabic_past' : 'english']                
        } else if (verbOrNoun === 'noun' && nouns.length > 0) {
                const questionNoun: INounsData = generateRandomOption(nouns);
                questionWord = questionNoun[questionIsEnglish ? 'english' : 'arabic']
                answer_option4 = questionNoun[questionIsEnglish ? 'arabic' : 'english']
                    option1 = generateRandomOption(nouns.length < 3 ? spareNouns : nouns)[questionIsEnglish ? 'arabic' : 'english']
                    option2 = generateRandomOption((nouns.length < 3 ? spareNouns : nouns).filter((noun) => noun[questionIsEnglish ? 'arabic' : 'english'] !== option1))[questionIsEnglish ? 'arabic' : 'english']
                    option3 = generateRandomOption((nouns.length < 3 ? spareNouns : nouns).filter((noun) => noun[questionIsEnglish ? 'arabic' : 'english'] !== option1 && noun[questionIsEnglish ? 'arabic' : 'english'] !== option2))[questionIsEnglish ? 'arabic' : 'english']
        }

        setQuestions(prev => [...prev, {
            question: questionWord,
            options: shuffleArray([option1, option2, option3, answer_option4]),
            answer: answer_option4,
            user_answer: '',
            is_correct: false
        }])

    }, [verbs, nouns])    
    // e.g 2 verbs, 8 nouns or 10 verbs, 10 nouns
    // set verb or noun Rnadomly => verb
    // set question to random {verb}, then options to random verbs, if no more verbs then random nouns
    // setVerbs(verbs.filter(verb => verb !== question))
    // render question and options
    // user selects option
    // record user answer => question.user_answer
    // setQuestions(prevQuestions => [...prevQuestions, question])
    // repeat until 10 questions 

    const handleOptionClick = (option: string) => {
        console.log(questions)
        if (currentQuestion.user_answer === option) {
            setQuestions((prev: IQuestion[]):IQuestion[] => {
                const newQuestions = [...prev];
                newQuestions[questionNum].user_answer = '';
                newQuestions[questionNum].is_correct = false;
                return newQuestions;
            });
        }
        else {
            setQuestions((prev: IQuestion[]):IQuestion[] => {
            const newQuestions = [...prev];
            newQuestions[questionNum].user_answer = option;
            newQuestions[questionNum].is_correct = option === newQuestions[questionNum].answer
            return newQuestions;
            });
        }
    }

    const handleNextClick = () => {
        if (currentQuestion.user_answer === '') {
            alert('Please select an option')
        } else if (questionNum === noOfQuestions) {
            alert('Quiz complete')
            // send questions to server and get results
        }
        else {
            if (verbOrNoun === 'verb') {
                setVerbs(prev => prev.filter(verb => verb[questionIsEnglish ? 'english' : 'arabic_past'] !== currentQuestion.question));
            } else {
                setNouns(prev => prev.filter(noun => noun[questionIsEnglish ? 'english' : 'arabic'] !== currentQuestion.question));
            }
               setQuestionNum(prev => prev + 1)
            setVerbOrNoun(generateRandomOption(['verb', 'noun']))
            setQuestionIsEnglish(generateRandomOption([true, false]))
            
        }
    }

    return (
            (questionNum === 0) ?
            <main className="text-center mx-5 mt-10 p-5 max-w-3xl sm:mx-auto">
                <button className="border-2 p-5 rounded-md border-yellow-500" onClick={handleNextClick} >START CHAPTER 1 QUIZ</button>
            </main>
            : <main className='text-center mx-5 border-2 border-green-700 rounded-md mt-10 p-5 max-w-3xl sm:mx-auto'>
                <div className="my-7 text-5xl">{currentQuestion.question}</div>
                <div className="grid grid-cols-2 gap-0 mt-5">
                    {currentQuestion.options.map((option:string):JSX.Element => {
                        return (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className={"h-32" + (currentQuestion.user_answer === option ? " bg-blue-300" : " bg-blue-500")}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>
                <button className="bg-blue-900 h-12 mt-10" onClick={handleNextClick}>Next</button>
            </main>
    )
}