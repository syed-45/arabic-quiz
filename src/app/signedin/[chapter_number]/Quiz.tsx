'use client'
import { useState, useEffect } from "react"
import { IVerbsData, INounsData, IQuestion, QuizProps } from "../../utils/types"
import generateRandomOption from "../../utils/generateRandomOption"
import { spareNouns, spareVerbs } from "../../utils/spareVocab"
import shuffleArray from "../../utils/shuffleArray"
import { Finish } from "./Finish"
import axios from "axios"

export default function Quiz(props: QuizProps):JSX.Element {
    const [verbs, setVerbs] = useState<IVerbsData[]>(props.verbs)
    const [nouns, setNouns] = useState<INounsData[]>(props.nouns)
    const [verbOrNoun, setVerbOrNoun] = useState<'verb' | 'noun'>(generateRandomOption(['verb', 'noun']))
    const [questionIsEnglish, setQuestionIsEnglish] = useState<boolean>(generateRandomOption([true, false]))
    const noOfQuestions = props.verbs.length + props.nouns.length > 12 ? 12 : props.verbs.length + props.nouns.length
    const [questions, setQuestions] = useState<IQuestion[]>([{question: '', options:[], answer:'', user_answer: 'foo', is_correct: false,}])
    const [questionNum, setQuestionNum] = useState<number>(0)
    const currentQuestion = questions[questionNum]

    useEffect(() => {
        let [questionWord, option1, option2, option3, answer_option4]: string[] = []

        if (verbOrNoun === 'verb') {
            const questionVerb: IVerbsData = generateRandomOption(verbs);
            console.log('currrent verbs ',verbs)
            let verbProperty: keyof IVerbsData = questionIsEnglish ? 'english' : 'arabic_past'
            questionWord = questionVerb[verbProperty]
            verbProperty = questionIsEnglish ? 'arabic_past' : 'english'
            answer_option4 = questionVerb[verbProperty]
            option1 = generateRandomOption((verbs.length < 4 ? spareVerbs : verbs).filter(verb => verb[verbProperty] !== answer_option4))[verbProperty]
            option2 = generateRandomOption((verbs.length < 4 ? spareVerbs : verbs).filter(verb => ![option1, answer_option4].includes(verb[verbProperty])))[verbProperty]
            option3 = generateRandomOption((verbs.length < 4 ? spareVerbs : verbs).filter(verb => ![option1, option2, answer_option4].includes(verb[verbProperty])))[verbProperty]                
        } else {
            const questionNoun: INounsData = generateRandomOption(nouns);
            let nounProperty: keyof INounsData = questionIsEnglish ? 'english' : 'arabic'
            console.log('current nouns ', nouns)
            questionWord = questionNoun[nounProperty]
            nounProperty = questionIsEnglish ? 'arabic' : 'english'
            answer_option4 = questionNoun[nounProperty]
            option1 = generateRandomOption((nouns.length < 4 ? spareNouns : nouns).filter(noun => noun[nounProperty] !== answer_option4))[nounProperty]
            option2 = generateRandomOption((nouns.length < 4 ? spareNouns : nouns).filter(noun => ![option1, answer_option4].includes(noun[nounProperty])))[nounProperty]
            option3 = generateRandomOption((nouns.length < 4 ? spareNouns : nouns).filter(noun => ![option1, option2, answer_option4].includes(noun[nounProperty])))[nounProperty]
        }

        setQuestions(prev => [...prev, {
            question: questionWord,
            options: shuffleArray([option1, option2, option3, answer_option4]),
            answer: answer_option4,
            user_answer: '',
            is_correct: false
        }])

        if (questionNum === noOfQuestions + 1) {
            axios.post(`/api/post-score`, {
                    score: questions.filter(question => question.is_correct).length,
                    chapter_number: props.chapter_number,
                    user_email: props.user_email
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })        
        };

    }, [verbs, nouns, verbOrNoun, questionIsEnglish, questionNum, noOfQuestions, props.chapter_number, props.user_email, questions])    

    const handleOptionClick = (option: string) => {
        console.log('current questions',questions)
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
            setQuestionNum(prev => prev + 1);
        } 
        else {
            if (verbOrNoun === 'verb') {
                setVerbs(prev => prev.filter(verb => verb[questionIsEnglish ? 'english' : 'arabic_past'] !== questions[questionNum+1]?.question));
            } else {
                setNouns(prev => prev.filter(noun => noun[questionIsEnglish ? 'english' : 'arabic'] !== questions[questionNum+1]?.question));
            }
            setQuestionNum(prev => prev + 1);
            setQuestionIsEnglish(generateRandomOption([true, false]));
            if (verbs.length <= 1) setVerbOrNoun('noun');  
            else if (nouns.length <= 1) setVerbOrNoun('verb');
            else setVerbOrNoun(generateRandomOption(['verb', 'noun']));
        }
    }

    const handlePreviousClick = () => {
        if (questionNum === 1) {
            alert('This is the first question')
        } else {
            setQuestionNum(prev => prev - 1);
        }
    }

    if (questionNum === noOfQuestions + 1) {
        return (
            <Finish questions={questions} noOfQuestions={noOfQuestions} />
        )
    }
    else if (questionNum === 0) {
        return (
            <main className="text-center mx-5 mt-6 p-5 max-w-3xl sm:mx-auto">
                <button className="border-2 p-5 rounded-md border-yellow-500" onClick={handleNextClick} >START CHAPTER {props.chapter_number} QUIZ</button>
            </main>
        )
    }
    return ( 
        <main className='text-center mx-5 mt-6 p-5 max-w-3xl sm:mx-auto'>
            <div className="text-lg bg-orange-700 rounded-md py-3">Question {questionNum} of {noOfQuestions}</div>
            <div className="mb-7 mt-7 text-5xl">{currentQuestion.question}</div>
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
            <div className="flex justify-between">
                <button className="bg-red-700 h-12 w-16 mt-10 p-2 rounded-md text-xs" onClick={handlePreviousClick}>Previous</button>
                <button className="bg-purple-700 h-12 w-16 mt-10 p-2 rounded-md text-xs" onClick={handleNextClick}>{questionNum < noOfQuestions ? 'Next' : 'Finish'}</button>
            </div>
        </main>
    )
}