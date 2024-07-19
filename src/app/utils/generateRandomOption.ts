function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function generateRandomOption<T>(options: T[]): T {
    return options[generateRandomNumber(0, options.length - 1)];
}