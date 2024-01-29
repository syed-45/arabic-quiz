export interface IChapterData {
    chapter_number: number;
    chapter_name: string;
    chapter_arabic_name: string;
}

export interface IVerbsData {
    id: number;
    arabic: string;
    english: string;
    arabic_plural: string;
}

export interface INounsData {
    english : string
    arabic_verbal_nouns : string
    arabic_command : string
    arabic_present : string
    arabic_past : string
}
