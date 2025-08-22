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
}

export interface FinishProps {
    questions: IQuestion[];
    noOfQuestions: number;
}

export interface IUserScore {
    last_score: number;
    chapter_number: number;
    no_of_questions: number;
}

export interface ITransformedQuizResultsData {
    [chapter_number: number]: { last_score: number; no_of_questions: number }; 
}

export interface IChapterCardProps {
    chapterData: IChapterData;
    last_score?: number;
    no_of_questions?: number;
}

export interface IScoreTextProps {
    last_score?: number;
    no_of_questions?: number;
}

export interface StatsComponentProps {
    percentageScore: number;
    quizzesCompleted: number;
}

export interface INavbarProps extends IProfileIconProps {}

export interface IProfileIconProps {
    gradientNum?: number,
    name?: string,
    onDashboard?: boolean,
}

export interface IProfileFormProps {
    name: string;
    email: string;
    gradientNum: number;
    userId : string;
    classGroup? : string;
    school? : string;
}
