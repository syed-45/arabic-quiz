export interface IChapterData {
    chapter_number: number;
    chapter_name: string;
    chapter_arabic_name: string;
}

export interface IVerbsData {
    english : string
    arabic_verbal_nouns : string
    arabic_command : string
    arabic_present : string
    arabic_past : string
}

export interface INounsData {
    arabic: string;
    english: string;
    arabic_plural: string;
}

export interface IQuestion {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    answer_option4: string;
    user_answer: string;
    is_correct: boolean;
}

export interface QuizProps {
    verbs: IVerbsData[];
    nouns: INounsData[];
}
