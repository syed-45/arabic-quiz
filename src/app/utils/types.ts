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
    // english_plural: string; 
    // above exists just for chapter 2 atm
}

export interface IQuestion {
    question: string;
    options: string[];
    answer: string;
    user_answer: string;
    is_correct: boolean;
}

export interface QuizProps {
    verbs: IVerbsData[];
    nouns: INounsData[];
    chapter_number: number;
    user_email: string;
}

export interface FinishProps {
    questions: IQuestion[];
    noOfQuestions: number;
}

export interface IUserScores {
    user_email: string;
    last_score: number;
    chapter_number: number;
}

export interface IChapterCard {
    chapterData: IChapterData;
    last_score? : number;
}