function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateRandomOption(options: any[]): any {
    return options[generateRandomNumber(0, options.length - 1)];
}