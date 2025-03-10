'use client'
import { useState, useEffect } from "react"
import { IVerbsData, INounsData, IQuestion, QuizProps, IUserScore } from "../../utils/types"
import generateRandomOption from "../../utils/generateRandomOption"
import { spareNouns, spareVerbs } from "../../utils/spareVocab"
import shuffleArray from "../../utils/shuffleArray"
import { Finish } from "./Finish"
import axios from "axios"
import { darkGradientColors, gradientColors } from "@/app/utils/chapterGradientColours"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Modal from "@/app/Modal"
const optionButtonStyles = ['border ','border-y border-r ','border-x border-b ','border-r border-b ']
const optionRoundedCornerStyles = ['rounded-tl-md','rounded-tr-md','rounded-bl-md','rounded-br-md']

export default function Quiz(props: QuizProps):JSX.Element {
    const [verbs, setVerbs] = useState<IVerbsData[]>(props.verbs)
    const [nouns, setNouns] = useState<INounsData[]>(props.nouns)
    const [verbOrNoun, setVerbOrNoun] = useState<'verb' | 'noun'>(props.verbs.length === 0 ? 'noun' : props.nouns.length === 0 ? 'verb' : generateRandomOption(['verb', 'noun']))
    const [questionIsEnglish, setQuestionIsEnglish] = useState<boolean>(generateRandomOption([true, true, false]))
    const noOfQuestions = props.verbs.length + props.nouns.length >= 14 ? 12 : props.verbs.length + props.nouns.length - 2
    const [questions, setQuestions] = useState<IQuestion[]>([{question: '', options:[], answer:'', user_answer: 'foo', is_correct: false,}])
    const [questionNum, setQuestionNum] = useState<number>(0)
    const currentQuestion = questions[questionNum]
    
    const [isModalOpen, setModalIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState("")

    useEffect(() => {
        let [questionWord, option1, option2, option3, answer_option4]: string[] = [];

        if (verbOrNoun === 'verb') {
            const questionVerb: IVerbsData = generateRandomOption(verbs);
            // console.log('currrent verbs ',verbs); //TODO: remove console.logs
            let verbProperty: keyof IVerbsData = questionIsEnglish ? 'english' : 'arabicPast';
            questionWord = questionVerb[verbProperty];
            verbProperty = questionIsEnglish ? 'arabicPast' : 'english';
            answer_option4 = questionVerb[verbProperty];
            option1 = generateRandomOption((verbs.length < 4 ? spareVerbs : verbs).filter(verb => verb[verbProperty] !== answer_option4))[verbProperty];
            option2 = generateRandomOption((verbs.length < 4 ? spareVerbs : verbs).filter(verb => ![option1, answer_option4].includes(verb[verbProperty] as string)))[verbProperty];
            option3 = generateRandomOption((verbs.length < 4 ? spareVerbs : verbs).filter(verb => ![option1, option2, answer_option4].includes(verb[verbProperty] as string)))[verbProperty];               
        } else {
            const questionNoun: INounsData = generateRandomOption(nouns);
            let nounProperty: keyof INounsData = questionIsEnglish ? 'english' : 'arabic';
            // console.log('current nouns ', nouns);
            questionWord = questionNoun[nounProperty];
            nounProperty = questionIsEnglish ? 'arabic' : 'english';
            answer_option4 = questionNoun[nounProperty];
            option1 = generateRandomOption((nouns.length < 4 ? spareNouns : nouns).filter(noun => noun[nounProperty] !== answer_option4))[nounProperty];
            option2 = generateRandomOption((nouns.length < 4 ? spareNouns : nouns).filter(noun => ![option1, answer_option4].includes(noun[nounProperty] as string)))[nounProperty];
            option3 = generateRandomOption((nouns.length < 4 ? spareNouns : nouns).filter(noun => ![option1, option2, answer_option4].includes(noun[nounProperty] as string)))[nounProperty];
        }
        // console.log('question generated --- question: ', questionWord, 'options ---', option1, option2, option3, answer_option4)
        setQuestions(prev => [...prev, {
            question: questionWord,
            options: shuffleArray([option1, option2, option3, answer_option4]),
            answer: answer_option4,
            user_answer: '',
            is_correct: false
        }]);
        
    }, [verbs, nouns, verbOrNoun, questionIsEnglish])    
    
    const handleOptionClick = (option: string) => {
        // console.log('current questions',questions)
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
            setModalIsOpen(true);
            setModalTitle("Please select an option")
        } else if (questionNum === noOfQuestions) {
            setQuestionNum((prev) => prev + 1) 
            axios.post(`/api/post-score`, {
                last_score: questions.filter(question => question.is_correct).length,
                chapter_number: props.chapter_number,
                user_id: props.user_id,
                no_of_questions: noOfQuestions,
            } satisfies IUserScore)
            .catch((error) => {
                // console.error(error);
                setModalIsOpen(true);
                setModalTitle("Something went wrong saving your score")
            })      
        } else if (questionNum < questions.length - 2) {
            setQuestionNum(prev => prev + 1);
        } 
        else {
            // update states for new question generation
            setQuestionNum(prev => prev + 1);
            if (verbOrNoun === 'verb') {
                setVerbs(prev => prev.filter(verb => verb[questionIsEnglish ? 'english' : 'arabicPast'] !== questions[questionNum+1].question));
            } else {
                setNouns(prev => prev.filter(noun => noun[questionIsEnglish ? 'english' : 'arabic'] !== questions[questionNum+1].question));
            }
            setQuestionIsEnglish(generateRandomOption([true, false]));
            if (verbs.length <= 1) setVerbOrNoun('noun');  
            else if (nouns.length <= 1) setVerbOrNoun('verb');
            else setVerbOrNoun(generateRandomOption(['verb', 'noun']));
        }
    }

    const handlePreviousClick = () => {
        if (questionNum === 1) {
            setModalIsOpen(true);
            setModalTitle("This is the first question.")
        } else {
            setQuestionNum(prev => prev - 1);
        }
    }

    if (questionNum === noOfQuestions + 1) {
        return (
            <>
                <Finish questions={questions} noOfQuestions={noOfQuestions} />
                <Modal title={modalTitle} isOpen={isModalOpen} setIsOpen={setModalIsOpen} />
            </>
        )
    }
    else if (questionNum === 0) {
        return (
            <main className="text-center mx-auto mt-10 max-w-screen-lg flex flex-col gap-10 items-center">
                <h3 className={"py-2 text-gray-100 px-10 w-max-content rounded-md flex items-center justify-center font-semibold shadow-xl"+gradientColors[props.chapter_number-1]+darkGradientColors[props.chapter_number-1]} >
                    Chapter <span className="backdrop-blur-xl drop-shadow-2xl size-7 rounded-md flex justify-center items-center mr-1">{props.chapter_number}</span>Quiz
                </h3>
                <div className="text-left px-5">
                    <h4 className="font-extrabold mb-3 text-lg">Quiz Information</h4>
                    <div className="mb-3"> This quiz will test you on verbs and nouns which are specific to this chapter. You will be asked to select the correct translation etiher from english to arabic or english to arabic.</div>
                    <div>There are {noOfQuestions} questions in this chapter.</div>
                </div>
                <button onClick={handleNextClick} className="bg-white font-bold text-sky-800 dark:bg-gradient-to-bl dark:from-gray-300 dark:to-white p-2 w-32 rounded-md drop-shadow-xl">
                        Start
                </button>
            </main>
        )
    }
    return ( 
        <main className='text-center mx-5 mt-10 max-w-screen-lg sm:mx-auto sm:px-5 pb-10'>
            <h3 className={"py-2 text-gray-100 px-10 rounded-md flex items-center justify-center font-semibold shadow-xl w-[210px] mx-auto"+gradientColors[props.chapter_number-1]+darkGradientColors[props.chapter_number-1]} >
                    Chapter <span className="backdrop-blur-xl drop-shadow-2xl size-7 rounded-[7px] flex justify-center items-center mr-1">{props.chapter_number}</span>Quiz
            </h3>
            <div className={`h-[116px] content-center ${currentQuestion.question.length > 20 ? "text-2xl" : "text-3xl"}`}>{currentQuestion.question}</div>
            <div className="grid grid-cols-2 gap-0 bg-gradient-to-bl text-white from-sky-950 via-sky-500 via-80% to-sky-200 dark:from-sky-800 dark:to-transparent rounded-md">
                {currentQuestion.options.map((option:string, index:number):JSX.Element => {
                    return (
                        <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            //TODO borders are still overlapping NOT URGENT                           
                            className={`h-36 p-2 shadow-2xl ${option.length > 25 ? "text-lg" : "text-xl"} ${optionRoundedCornerStyles[index]} ${currentQuestion.user_answer === option ?  "border bg-gray-400/40 dark:bg-gray-400/25" : "border-sky-900 " + optionButtonStyles[index]}` }
                        >
                            {option}
                        </button>
                    )
                })}
            </div>
            <div className="flex justify-between items-center mt-10 relative">
                <button className="flex flex-row items-center" onClick={handlePreviousClick}>
                    <ChevronLeftIcon className="size-5"/>
                    Previous
                </button>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="size-10 rounded-[7px] flex justify-center items-center bg-gradient-to-bl text-white from-sky-950 via-sky-500 via-70% to-sky-200 dark:from-sky-800 dark:to-transparent dark:border border-sky-950" style={{boxShadow:"rgba(100, 100, 111, 0.4) 0px 7px 29px 0px"}} >
                        {questionNum}
                    </div>
                </div>
                <button className="flex flex-row items-center" onClick={handleNextClick}>
                    {questionNum < noOfQuestions ? 'Next' : 'Submit'}
                    <ChevronRightIcon className="size-5"/>
                </button>
            </div>
            <Modal title={modalTitle} isOpen={isModalOpen} setIsOpen={setModalIsOpen} />
        </main>
    )
}