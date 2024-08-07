export interface IChapterData {
    chapterNumber: number;
    chapterName: string;
    chapterArabicName: string;
}

export interface IVerbsData {
    chapterNumber: number; 
    english: string;
    arabicVerbalNouns: string;
    arabicCommand: string;
    arabicPresent: string;
    arabicPast: string;
}

export interface INounsData {
    chapterNumber: number;
    english: string;
    arabic: string;
    arabicPlural: string;
    englishPlural: string;
}

export interface IQuestion {
    question: string; //TODO: change casing to camelCase, kp consistent
    options: string[];
    answer: string;
    user_answer: string;
    is_correct: boolean;
}

export interface QuizProps {
    verbs: IVerbsData[];
    nouns: INounsData[];
    chapter_number: number;
    user_id: string;
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

export interface IChapterCardProps {
    chapterData: IChapterData;
    last_score? : number;
}

export interface StatsComponentProps {
    percentageScore: number;
    quizzesCompleted: number;
}